import { f as fromWebHandler } from '../nitro/nitro.mjs';
import * as Solid from 'solid-js/web';
import { ssr, createComponent, NoHydration, escape, HydrationScript, Hydration, mergeProps, isServer, useAssets, spread, ssrElement, Dynamic, ssrHydrationKey, ssrStyleProperty, ssrAttribute } from 'solid-js/web';
import { createSerializationAdapter, trimPathRight, getLocationChangeInfo, handleHashScroll, isNotFound, rootRouteId, createControlledPromise, isRedirect, defaultGetScrollRestorationKey, restoreScroll, storageKey, isResolvedRedirect, executeRewriteInput, defaultSerovalPlugins, makeSerovalPlugin } from '@tanstack/router-core';
import { createMemoryHistory } from '@tanstack/history';
import * as Solid$1 from 'solid-js';
import { createContext, sharedConfig, onMount, onCleanup, createUniqueId, useContext, createRenderEffect } from 'solid-js';
import process from 'vite-plugin-node-polyfills/shims/process';
import warning from 'tiny-warning';
import { createStore, reconcile } from 'solid-js/store';
import invariant from 'tiny-invariant';
import { json, mergeHeaders } from '@tanstack/router-core/ssr/client';
import { AsyncLocalStorage } from 'node:async_hooks';
import { defineHandlerCallback, transformReadableStreamWithRouter, getOrigin, attachRouterServerSsrUtils } from '@tanstack/router-core/ssr/server';
import { NullProtoObj } from 'rou3';
import { FastURL, FastResponse } from 'srvx';
import { toCrossJSONStream, toCrossJSONAsync, fromJSON } from 'seroval';
import { isbot } from 'isbot';

//#endregion
//#region src/event.ts
var H3Event = class {
	/**
	* Access to the H3 application instance.
	*/
	app;
	/**
	* Incoming HTTP request info.
	*
	* [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Request)
	*/
	req;
	/**
	* Access to the parsed request URL.
	*
	* [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/URL)
	*/
	url;
	/**
	* Event context.
	*/
	context;
	/**
	* @internal
	*/
	static __is_event__ = true;
	/**
	* @internal
	*/
	_res;
	constructor(req, context, app) {
		this.context = context || req.context || new NullProtoObj();
		this.req = req;
		this.app = app;
		const _url = req._url;
		this.url = _url && _url instanceof URL ? _url : new FastURL(req.url);
	}
	/**
	* Prepared HTTP response.
	*/
	get res() {
		if (!this._res) this._res = new H3EventResponse();
		return this._res;
	}
	/**
	* Access to runtime specific additional context.
	*
	*/
	get runtime() {
		return this.req.runtime;
	}
	/**
	* Tell the runtime about an ongoing operation that shouldn't close until the promise resolves.
	*/
	waitUntil(promise) {
		this.req.waitUntil?.(promise);
	}
	toString() {
		return `[${this.req.method}] ${this.req.url}`;
	}
	toJSON() {
		return this.toString();
	}
	/**
	* Access to the raw Node.js req/res objects.
	*
	* @deprecated Use `event.runtime.{node|deno|bun|...}.` instead.
	*/
	get node() {
		return this.req.runtime?.node;
	}
	/**
	* Access to the incoming request headers.
	*
	* @deprecated Use `event.req.headers` instead.
	*
	*/
	get headers() {
		return this.req.headers;
	}
	/**
	* Access to the incoming request url (pathname+search).
	*
	* @deprecated Use `event.url.pathname + event.url.search` instead.
	*
	* Example: `/api/hello?name=world`
	* */
	get path() {
		return this.url.pathname + this.url.search;
	}
	/**
	* Access to the incoming request method.
	*
	* @deprecated Use `event.req.method` instead.
	*/
	get method() {
		return this.req.method;
	}
};
var H3EventResponse = class {
	status;
	statusText;
	_headers;
	get headers() {
		if (!this._headers) this._headers = new Headers();
		return this._headers;
	}
};

//#endregion
//#region src/utils/sanitize.ts
const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
/**
* Make sure the status message is safe to use in a response.
*
* Allowed characters: horizontal tabs, spaces or visible ascii characters: https://www.rfc-editor.org/rfc/rfc7230#section-3.1.2
*/
function sanitizeStatusMessage(statusMessage = "") {
	return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
/**
* Make sure the status code is a valid HTTP status code.
*/
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
	if (!statusCode) return defaultStatusCode;
	if (typeof statusCode === "string") statusCode = +statusCode;
	if (statusCode < 100 || statusCode > 599) return defaultStatusCode;
	return statusCode;
}

//#endregion
//#region src/error.ts
/**
* HTTPError
*/
var HTTPError = class HTTPError extends Error {
	get name() {
		return "HTTPError";
	}
	/**
	* HTTP status code in range [200...599]
	*/
	status;
	/**
	* HTTP status text
	*
	* **NOTE:** This should be short (max 512 to 1024 characters).
	* Allowed characters are tabs, spaces, visible ASCII characters, and extended characters (byte value 128–255).
	*
	* **TIP:** Use `message` for longer error descriptions in JSON body.
	*/
	statusText;
	/**
	* Additional HTTP headers to be sent in error response.
	*/
	headers;
	/**
	* Original error object that caused this error.
	*/
	cause;
	/**
	* Additional data attached in the error JSON body under `data` key.
	*/
	data;
	/**
	* Additional top level JSON body properties to attach in the error JSON body.
	*/
	body;
	/**
	* Flag to indicate that the error was not handled by the application.
	*
	* Unhandled error stack trace, data and message are hidden in non debug mode for security reasons.
	*/
	unhandled;
	/**
	* Check if the input is an instance of HTTPError using its constructor name.
	*
	* It is safer than using `instanceof` because it works across different contexts (e.g., if the error was thrown in a different module).
	*/
	static isError(input) {
		return input instanceof Error && input?.name === "HTTPError";
	}
	/**
	* Create a new HTTPError with the given status code and optional status text and details.
	*
	* @example
	*
	* HTTPError.status(404)
	* HTTPError.status(418, "I'm a teapot")
	* HTTPError.status(403, "Forbidden", { message: "Not authenticated" })
	*/
	static status(status, statusText, details) {
		return new HTTPError({
			...details,
			statusText,
			status
		});
	}
	constructor(arg1, arg2) {
		let messageInput;
		let details;
		if (typeof arg1 === "string") {
			messageInput = arg1;
			details = arg2;
		} else details = arg1;
		const status = sanitizeStatusCode(details?.status || (details?.cause)?.status || details?.status || details?.statusCode, 500);
		const statusText = sanitizeStatusMessage(details?.statusText || (details?.cause)?.statusText || details?.statusText || details?.statusMessage);
		const message = messageInput || details?.message || (details?.cause)?.message || details?.statusText || details?.statusMessage || [
			"HTTPError",
			status,
			statusText
		].filter(Boolean).join(" ");
		super(message, { cause: details });
		this.cause = details;
		Error.captureStackTrace?.(this, this.constructor);
		this.status = status;
		this.statusText = statusText || void 0;
		const rawHeaders = details?.headers || (details?.cause)?.headers;
		this.headers = rawHeaders ? new Headers(rawHeaders) : void 0;
		this.unhandled = details?.unhandled ?? (details?.cause)?.unhandled ?? void 0;
		this.data = details?.data;
		this.body = details?.body;
	}
	/**
	* @deprecated Use `status`
	*/
	get statusCode() {
		return this.status;
	}
	/**
	* @deprecated Use `statusText`
	*/
	get statusMessage() {
		return this.statusText;
	}
	toJSON() {
		const unhandled = this.unhandled;
		return {
			status: this.status,
			statusText: this.statusText,
			unhandled,
			message: unhandled ? "HTTPError" : this.message,
			data: unhandled ? void 0 : this.data,
			...unhandled ? void 0 : this.body
		};
	}
};
function isJSONSerializable(value, _type) {
	if (value === null || value === void 0) return true;
	if (_type !== "object") return _type === "boolean" || _type === "number" || _type === "string";
	if (typeof value.toJSON === "function") return true;
	if (Array.isArray(value)) return true;
	if (typeof value.pipe === "function" || typeof value.pipeTo === "function") return false;
	if (value instanceof NullProtoObj) return true;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null;
}

//#endregion
//#region src/response.ts
const kNotFound = /* @__PURE__ */ Symbol.for("h3.notFound");
const kHandled = /* @__PURE__ */ Symbol.for("h3.handled");
function toResponse(val, event, config = {}) {
	if (typeof val?.then === "function") return (val.catch?.((error) => error) || Promise.resolve(val)).then((resolvedVal) => toResponse(resolvedVal, event, config));
	const response = prepareResponse(val, event, config);
	if (typeof response?.then === "function") return toResponse(response, event, config);
	const { onResponse: onResponse$1 } = config;
	return onResponse$1 ? Promise.resolve(onResponse$1(response, event)).then(() => response) : response;
}
function prepareResponse(val, event, config, nested) {
	if (val === kHandled) return new FastResponse(null);
	if (val === kNotFound) val = new HTTPError({
		status: 404,
		message: `Cannot find any route matching [${event.req.method}] ${event.url}`
	});
	if (val && val instanceof Error) {
		const isHTTPError = HTTPError.isError(val);
		const error = isHTTPError ? val : new HTTPError(val);
		if (!isHTTPError) {
			error.unhandled = true;
			if (val?.stack) error.stack = val.stack;
		}
		if (error.unhandled && !config.silent) console.error(error);
		const { onError: onError$1 } = config;
		return onError$1 && !nested ? Promise.resolve(onError$1(error, event)).catch((error$1) => error$1).then((newVal) => prepareResponse(newVal ?? val, event, config, true)) : errorResponse(error, config.debug);
	}
	const eventHeaders = event.res._headers;
	if (!(val instanceof Response)) {
		const res = prepareResponseBody(val, event, config);
		const status = event.res.status;
		return new FastResponse(nullBody(event.req.method, status) ? null : res.body, {
			status,
			statusText: event.res.statusText,
			headers: res.headers && eventHeaders ? mergeHeaders$1(res.headers, eventHeaders) : res.headers || eventHeaders
		});
	}
	if (!eventHeaders) return val;
	return new FastResponse(nullBody(event.req.method, val.status) ? null : val.body, {
		status: val.status,
		statusText: val.statusText,
		headers: mergeHeaders$1(eventHeaders, val.headers)
	});
}
function mergeHeaders$1(base, merge) {
	const mergedHeaders = new Headers(base);
	for (const [name, value] of merge) if (name === "set-cookie") mergedHeaders.append(name, value);
	else mergedHeaders.set(name, value);
	return mergedHeaders;
}
const emptyHeaders = /* @__PURE__ */ new Headers({ "content-length": "0" });
const jsonHeaders = /* @__PURE__ */ new Headers({ "content-type": "application/json;charset=UTF-8" });
function prepareResponseBody(val, event, config) {
	if (val === null || val === void 0) return {
		body: "",
		headers: emptyHeaders
	};
	const valType = typeof val;
	if (valType === "string") return { body: val };
	if (val instanceof Uint8Array) {
		event.res.headers.set("content-length", val.byteLength.toString());
		return { body: val };
	}
	if (isJSONSerializable(val, valType)) return {
		body: JSON.stringify(val, void 0, config.debug ? 2 : void 0),
		headers: jsonHeaders
	};
	if (valType === "bigint") return {
		body: val.toString(),
		headers: jsonHeaders
	};
	if (val instanceof Blob) {
		const headers = {
			"content-type": val.type,
			"content-length": val.size.toString()
		};
		let filename = val.name;
		if (filename) {
			filename = encodeURIComponent(filename);
			headers["content-disposition"] = `filename="${filename}"; filename*=UTF-8''${filename}`;
		}
		return {
			body: val.stream(),
			headers
		};
	}
	if (valType === "symbol") return { body: val.toString() };
	if (valType === "function") return { body: `${val.name}()` };
	return { body: val };
}
function nullBody(method, status) {
	return method === "HEAD" || status === 100 || status === 101 || status === 102 || status === 204 || status === 205 || status === 304;
}
function errorResponse(error, debug) {
	return new FastResponse(JSON.stringify({
		...error.toJSON(),
		stack: debug && error.stack ? error.stack.split("\n").map((l) => l.trim()) : void 0
	}, void 0, debug ? 2 : void 0), {
		status: error.status,
		statusText: error.statusText,
		headers: error.headers ? mergeHeaders$1(jsonHeaders, error.headers) : jsonHeaders
	});
}

var _tmpl$$3 = [
  "<div",
  ' style="',
  '"><div style="',
  '"><strong style="',
  '">Something went wrong!</strong><button style="',
  '">',
  '</button></div><div style="',
  '"></div><!--$-->',
  "<!--/--></div>"
], _tmpl$2$1 = [
  "<div",
  '><pre style="',
  '">',
  "</pre></div>"
], _tmpl$3 = [
  "<code",
  ">",
  "</code>"
];
function CatchBoundary(props) {
  return createComponent(Solid$1.ErrorBoundary, {
    fallback: (error, reset) => {
      var _a;
      (_a = props.onCatch) == null ? void 0 : _a.call(props, error);
      Solid$1.createEffect(Solid$1.on([props.getResetKey], () => reset(), { defer: true }));
      return createComponent(Dynamic, {
        get component() {
          var _a2;
          return (_a2 = props.errorComponent) != null ? _a2 : ErrorComponent;
        },
        error,
        reset
      });
    },
    get children() {
      return props.children;
    }
  });
}
function ErrorComponent({ error }) {
  const [show, setShow] = Solid$1.createSignal(false);
  return ssr(_tmpl$$3, ssrHydrationKey(), ssrStyleProperty("padding:", ".5rem") + ssrStyleProperty(";max-width:", "100%"), ssrStyleProperty("display:", "flex") + ssrStyleProperty(";align-items:", "center") + ssrStyleProperty(";gap:", ".5rem"), ssrStyleProperty("font-size:", "1rem"), ssrStyleProperty("appearance:", "none") + ssrStyleProperty(";font-size:", ".6em") + ssrStyleProperty(";border:", "1px solid currentColor") + ssrStyleProperty(";padding:", ".1rem .2rem") + ssrStyleProperty(";font-weight:", "bold") + ssrStyleProperty(";border-radius:", ".25rem"), show() ? "Hide Error" : "Show Error", ssrStyleProperty("height:", ".25rem"), show() ? ssr(_tmpl$2$1, ssrHydrationKey(), ssrStyleProperty("font-size:", ".7em") + ssrStyleProperty(";border:", "1px solid red") + ssrStyleProperty(";border-radius:", ".25rem") + ssrStyleProperty(";padding:", ".3rem") + ssrStyleProperty(";color:", "red") + ssrStyleProperty(";overflow:", "auto"), error.message ? ssr(_tmpl$3, ssrHydrationKey(), escape(error.message)) : escape(null)) : escape(null));
}
function useStore(store, selector = (d) => d) {
  const [slice, setSlice] = createStore({ value: selector(store.state) });
  const unsub = store.subscribe(() => {
    setSlice("value", reconcile(selector(store.state)));
  });
  onCleanup(() => {
    unsub();
  });
  return () => slice.value;
}
var routerContext = Solid$1.createContext(null);
function getRouterContext() {
  if (typeof document === "undefined") return routerContext;
  if (window.__TSR_ROUTER_CONTEXT__) return window.__TSR_ROUTER_CONTEXT__;
  window.__TSR_ROUTER_CONTEXT__ = routerContext;
  return routerContext;
}
function useRouter(opts) {
  var _a;
  const value = Solid$1.useContext(getRouterContext());
  warning(!(((_a = opts == null ? void 0 : opts.warn) != null ? _a : true) && !value), "useRouter must be used inside a <RouterProvider> component!");
  return value;
}
function useRouterState(opts) {
  const contextRouter = useRouter({ warn: (opts == null ? void 0 : opts.router) === void 0 });
  return useStore(((opts == null ? void 0 : opts.router) || contextRouter).__store, (state) => {
    if (opts == null ? void 0 : opts.select) return opts.select(state);
    return state;
  });
}
const usePrevious = (fn) => {
  return Solid$1.createMemo((prev = {
    current: null,
    previous: null
  }) => {
    const current = fn();
    if (prev.current !== current) {
      prev.previous = prev.current;
      prev.current = current;
    }
    return prev;
  });
};
function useIntersectionObserver(ref, callback, intersectionObserverOptions = {}, options = {}) {
  const isIntersectionObserverAvailable = typeof IntersectionObserver === "function";
  let observerRef = null;
  Solid$1.createEffect(() => {
    const r = ref();
    if (!r || !isIntersectionObserverAvailable || options.disabled) return;
    observerRef = new IntersectionObserver(([entry]) => {
      callback(entry);
    }, intersectionObserverOptions);
    observerRef.observe(r);
    Solid$1.onCleanup(() => {
      observerRef == null ? void 0 : observerRef.disconnect();
    });
  });
  return () => observerRef;
}
const matchContext = Solid$1.createContext(() => void 0);
const dummyMatchContext = Solid$1.createContext(() => void 0);
function Transitioner() {
  const router = useRouter();
  let mountLoadForRouter = {
    router,
    mounted: false
  };
  const isLoading = useRouterState({ select: ({ isLoading: isLoading$1 }) => isLoading$1 });
  const [isTransitioning, setIsTransitioning] = Solid$1.createSignal(false);
  const hasPendingMatches = useRouterState({ select: (s) => s.matches.some((d) => d.status === "pending") });
  const previousIsLoading = usePrevious(isLoading);
  const isAnyPending = () => isLoading() || isTransitioning() || hasPendingMatches();
  const previousIsAnyPending = usePrevious(isAnyPending);
  const isPagePending = () => isLoading() || hasPendingMatches();
  const previousIsPagePending = usePrevious(isPagePending);
  router.startTransition = async (fn) => {
    setIsTransitioning(true);
    await fn();
    setIsTransitioning(false);
  };
  Solid$1.onMount(() => {
    const unsub = router.history.subscribe(router.load);
    const nextLocation = router.buildLocation({
      to: router.latestLocation.pathname,
      search: true,
      params: true,
      hash: true,
      state: true,
      _includeValidateSearch: true
    });
    if (trimPathRight(router.latestLocation.href) !== trimPathRight(nextLocation.href)) router.commitLocation({
      ...nextLocation,
      replace: true
    });
    Solid$1.onCleanup(() => {
      unsub();
    });
  });
  Solid$1.createRenderEffect(() => {
    Solid$1.untrack(() => {
      if (mountLoadForRouter.router === router && mountLoadForRouter.mounted) return;
      mountLoadForRouter = {
        router,
        mounted: true
      };
      const tryLoad = async () => {
        try {
          await router.load();
        } catch (err) {
          console.error(err);
        }
      };
      tryLoad();
    });
  });
  Solid$1.createRenderEffect(Solid$1.on([previousIsLoading, isLoading], ([previousIsLoading$1, isLoading$1]) => {
    if (previousIsLoading$1.previous && !isLoading$1) router.emit({
      type: "onLoad",
      ...getLocationChangeInfo(router.state)
    });
  }));
  Solid$1.createRenderEffect(Solid$1.on([isPagePending, previousIsPagePending], ([isPagePending$1, previousIsPagePending$1]) => {
    if (previousIsPagePending$1.previous && !isPagePending$1) router.emit({
      type: "onBeforeRouteMount",
      ...getLocationChangeInfo(router.state)
    });
  }));
  Solid$1.createRenderEffect(Solid$1.on([isAnyPending, previousIsAnyPending], ([isAnyPending$1, previousIsAnyPending$1]) => {
    if (previousIsAnyPending$1.previous && !isAnyPending$1) {
      router.emit({
        type: "onResolved",
        ...getLocationChangeInfo(router.state)
      });
      router.__store.setState((s) => ({
        ...s,
        status: "idle",
        resolvedLocation: s.location
      }));
      handleHashScroll(router);
    }
  }));
  return null;
}
var _tmpl$$2 = ["<p", ">Not Found</p>"];
function CatchNotFound(props) {
  const resetKey = useRouterState({ select: (s) => `not-found-${s.location.pathname}-${s.status}` });
  return createComponent(CatchBoundary, {
    getResetKey: () => resetKey(),
    onCatch: (error) => {
      var _a;
      if (isNotFound(error)) (_a = props.onCatch) == null ? void 0 : _a.call(props, error);
      else throw error;
    },
    errorComponent: ({ error }) => {
      var _a;
      if (isNotFound(error)) return (_a = props.fallback) == null ? void 0 : _a.call(props, error);
      else throw error;
    },
    get children() {
      return props.children;
    }
  });
}
function DefaultGlobalNotFound() {
  return ssr(_tmpl$$2, ssrHydrationKey());
}
function SafeFragment(props) {
  return props.children;
}
function renderRouteNotFound(router, route, data) {
  if (!route.options.notFoundComponent) {
    if (router.options.defaultNotFoundComponent) return createComponent(router.options.defaultNotFoundComponent, { data });
    return createComponent(DefaultGlobalNotFound, {});
  }
  return createComponent(route.options.notFoundComponent, { data });
}
var _tmpl$$1 = [
  "<script",
  ' class="$tsr">',
  "<\/script>"
];
function ScriptOnce({ children: children$1 }) {
  var _a;
  const router = useRouter();
  if (!router.isServer) return null;
  return ssr(_tmpl$$1, ssrHydrationKey() + ssrAttribute("nonce", escape((_a = router.options.ssr) == null ? void 0 : _a.nonce, true), false), [children$1].filter(Boolean).join("\n") + ";$_TSR.c()");
}
function ScrollRestoration() {
  const router = useRouter();
  if (!router.isScrollRestoring || !router.isServer) return null;
  if (typeof router.options.scrollRestoration === "function") {
    if (!router.options.scrollRestoration({ location: router.latestLocation })) return null;
  }
  const userKey = (router.options.getScrollRestorationKey || defaultGetScrollRestorationKey)(router.latestLocation);
  const resolvedKey = userKey !== defaultGetScrollRestorationKey(router.latestLocation) ? userKey : void 0;
  const restoreScrollOptions = {
    storageKey,
    shouldScrollRestoration: true
  };
  if (resolvedKey) restoreScrollOptions.key = resolvedKey;
  return createComponent(ScriptOnce, { get children() {
    return `(${restoreScroll.toString()})(${JSON.stringify(restoreScrollOptions)})`;
  } });
}
const Match$1 = (props) => {
  var _a;
  const router = useRouter();
  const matchState = useRouterState({ select: (s) => {
    const match = s.matches.find((d) => d.id === props.matchId);
    invariant(match, `Could not find match for matchId "${props.matchId}". Please file an issue!`);
    return {
      routeId: match.routeId,
      ssr: match.ssr,
      _displayPending: match._displayPending
    };
  } });
  const route = () => router.routesById[matchState().routeId];
  const PendingComponent = () => {
    var _a2;
    return (_a2 = route().options.pendingComponent) != null ? _a2 : router.options.defaultPendingComponent;
  };
  const routeErrorComponent = () => {
    var _a2;
    return (_a2 = route().options.errorComponent) != null ? _a2 : router.options.defaultErrorComponent;
  };
  const routeOnCatch = () => {
    var _a2;
    return (_a2 = route().options.onCatch) != null ? _a2 : router.options.defaultOnCatch;
  };
  const routeNotFoundComponent = () => {
    var _a2, _b;
    return route().isRoot ? (_b = route().options.notFoundComponent) != null ? _b : (_a2 = router.options.notFoundRoute) == null ? void 0 : _a2.options.component : route().options.notFoundComponent;
  };
  const resolvedNoSsr = matchState().ssr === false || matchState().ssr === "data-only";
  const ResolvedSuspenseBoundary = () => {
    var _a2, _b, _c;
    return (!route().isRoot || route().options.wrapInSuspense || resolvedNoSsr || matchState()._displayPending) && ((_c = (_a2 = route().options.wrapInSuspense) != null ? _a2 : PendingComponent()) != null ? _c : ((_b = route().options.errorComponent) == null ? void 0 : _b.preload) || resolvedNoSsr) ? Solid$1.Suspense : SafeFragment;
  };
  const ResolvedCatchBoundary = () => routeErrorComponent() ? CatchBoundary : SafeFragment;
  const ResolvedNotFoundBoundary = () => routeNotFoundComponent() ? CatchNotFound : SafeFragment;
  const resetKey = useRouterState({ select: (s) => s.loadedAt });
  const parentRouteId = useRouterState({ select: (s) => {
    var _a2;
    const index = s.matches.findIndex((d) => d.id === props.matchId);
    return (_a2 = s.matches[index - 1]) == null ? void 0 : _a2.routeId;
  } });
  return createComponent(route().isRoot ? (_a = route().options.shellComponent) != null ? _a : SafeFragment : SafeFragment, { get children() {
    return [createComponent(matchContext.Provider, {
      value: () => props.matchId,
      get children() {
        return createComponent(Dynamic, {
          get component() {
            return ResolvedSuspenseBoundary();
          },
          get fallback() {
            return createComponent(Dynamic, { get component() {
              return PendingComponent();
            } });
          },
          get children() {
            return createComponent(Dynamic, {
              get component() {
                return ResolvedCatchBoundary();
              },
              getResetKey: () => resetKey(),
              get errorComponent() {
                return routeErrorComponent() || ErrorComponent;
              },
              onCatch: (error) => {
                var _a2;
                if (isNotFound(error)) throw error;
                warning(false, `Error in route match: ${props.matchId}`);
                (_a2 = routeOnCatch()) == null ? void 0 : _a2(error);
              },
              get children() {
                return createComponent(Dynamic, {
                  get component() {
                    return ResolvedNotFoundBoundary();
                  },
                  fallback: (error) => {
                    if (!routeNotFoundComponent() || error.routeId && error.routeId !== matchState().routeId || !error.routeId && !route().isRoot) throw error;
                    return createComponent(Dynamic, mergeProps({ get component() {
                      return routeNotFoundComponent();
                    } }, error));
                  },
                  get children() {
                    return createComponent(Solid$1.Switch, { get children() {
                      return [createComponent(Solid$1.Match, {
                        when: resolvedNoSsr,
                        get children() {
                          return createComponent(Solid$1.Show, {
                            get when() {
                              return !router.isServer;
                            },
                            get fallback() {
                              return createComponent(Dynamic, { get component() {
                                return PendingComponent();
                              } });
                            },
                            get children() {
                              return createComponent(MatchInner, { get matchId() {
                                return props.matchId;
                              } });
                            }
                          });
                        }
                      }), createComponent(Solid$1.Match, {
                        when: !resolvedNoSsr,
                        get children() {
                          return createComponent(MatchInner, { get matchId() {
                            return props.matchId;
                          } });
                        }
                      })];
                    } });
                  }
                });
              }
            });
          }
        });
      }
    }), parentRouteId() === rootRouteId ? [createComponent(OnRendered, {}), createComponent(ScrollRestoration, {})] : null];
  } });
};
function OnRendered() {
  const router = useRouter();
  const location = useRouterState({ select: (s) => {
    var _a;
    return (_a = s.resolvedLocation) == null ? void 0 : _a.state.__TSR_key;
  } });
  Solid$1.createEffect(Solid$1.on([location], () => {
    router.emit({
      type: "onRendered",
      ...getLocationChangeInfo(router.state)
    });
  }));
  return null;
}
const MatchInner = (props) => {
  const router = useRouter();
  const matchState = useRouterState({ select: (s) => {
    var _a, _b;
    const match$1 = s.matches.find((d) => d.id === props.matchId);
    const routeId = match$1.routeId;
    const remountDeps = (_b = (_a = router.routesById[routeId].options.remountDeps) != null ? _a : router.options.defaultRemountDeps) == null ? void 0 : _b({
      routeId,
      loaderDeps: match$1.loaderDeps,
      params: match$1._strictParams,
      search: match$1._strictSearch
    });
    return {
      key: remountDeps ? JSON.stringify(remountDeps) : void 0,
      routeId,
      match: {
        id: match$1.id,
        status: match$1.status,
        error: match$1.error,
        _forcePending: match$1._forcePending,
        _displayPending: match$1._displayPending
      }
    };
  } });
  const route = () => router.routesById[matchState().routeId];
  const match = () => matchState().match;
  const out = () => {
    var _a, _b;
    const Comp = (_a = route().options.component) != null ? _a : router.options.defaultComponent;
    if (Comp) {
      const key = (_b = matchState().key) != null ? _b : matchState().match.id;
      return createComponent(Solid$1.Show, {
        when: key,
        keyed: true,
        get children() {
          return createComponent(Comp, {});
        }
      });
    }
    return createComponent(Outlet, {});
  };
  return createComponent(Solid$1.Switch, { get children() {
    return [
      createComponent(Solid$1.Match, {
        get when() {
          return match()._displayPending;
        },
        children: (_) => {
          const [displayPendingResult] = Solid$1.createResource(() => {
            var _a;
            return (_a = router.getMatch(match().id)) == null ? void 0 : _a._nonReactive.displayPendingPromise;
          });
          return displayPendingResult();
        }
      }),
      createComponent(Solid$1.Match, {
        get when() {
          return match()._forcePending;
        },
        children: (_) => {
          const [minPendingResult] = Solid$1.createResource(() => {
            var _a;
            return (_a = router.getMatch(match().id)) == null ? void 0 : _a._nonReactive.minPendingPromise;
          });
          return minPendingResult();
        }
      }),
      createComponent(Solid$1.Match, {
        get when() {
          return match().status === "pending";
        },
        children: (_) => {
          var _a;
          const pendingMinMs = (_a = route().options.pendingMinMs) != null ? _a : router.options.defaultPendingMinMs;
          if (pendingMinMs) {
            const routerMatch = router.getMatch(match().id);
            if (routerMatch && !routerMatch._nonReactive.minPendingPromise) {
              if (!router.isServer) {
                const minPendingPromise = createControlledPromise();
                routerMatch._nonReactive.minPendingPromise = minPendingPromise;
                setTimeout(() => {
                  minPendingPromise.resolve();
                  routerMatch._nonReactive.minPendingPromise = void 0;
                }, pendingMinMs);
              }
            }
          }
          const [loaderResult] = Solid$1.createResource(async () => {
            var _a2;
            await new Promise((r) => setTimeout(r, 0));
            return (_a2 = router.getMatch(match().id)) == null ? void 0 : _a2._nonReactive.loadPromise;
          });
          return loaderResult();
        }
      }),
      createComponent(Solid$1.Match, {
        get when() {
          return match().status === "notFound";
        },
        children: (_) => {
          invariant(isNotFound(match().error), "Expected a notFound error");
          return renderRouteNotFound(router, route(), match().error);
        }
      }),
      createComponent(Solid$1.Match, {
        get when() {
          return match().status === "redirected";
        },
        children: (_) => {
          invariant(isRedirect(match().error), "Expected a redirect error");
          const [loaderResult] = Solid$1.createResource(async () => {
            var _a;
            await new Promise((r) => setTimeout(r, 0));
            return (_a = router.getMatch(match().id)) == null ? void 0 : _a._nonReactive.loadPromise;
          });
          return loaderResult();
        }
      }),
      createComponent(Solid$1.Match, {
        get when() {
          return match().status === "error";
        },
        children: (_) => {
          var _a;
          if (router.isServer) return createComponent(((_a = route().options.errorComponent) != null ? _a : router.options.defaultErrorComponent) || ErrorComponent, {
            get error() {
              return match().error;
            },
            info: { componentStack: "" }
          });
          throw match().error;
        }
      }),
      createComponent(Solid$1.Match, {
        get when() {
          return match().status === "success";
        },
        get children() {
          return out();
        }
      })
    ];
  } });
};
const Outlet = () => {
  const router = useRouter();
  const matchId = Solid$1.useContext(matchContext);
  const routeId = useRouterState({ select: (s) => {
    var _a;
    return (_a = s.matches.find((d) => d.id === matchId())) == null ? void 0 : _a.routeId;
  } });
  const route = () => router.routesById[routeId()];
  const parentGlobalNotFound = useRouterState({ select: (s) => {
    const parentMatch = s.matches.find((d) => d.id === matchId());
    invariant(parentMatch, `Could not find parent match for matchId "${matchId()}"`);
    return parentMatch.globalNotFound;
  } });
  const childMatchId = useRouterState({ select: (s) => {
    var _a;
    const matches = s.matches;
    return (_a = matches[matches.findIndex((d) => d.id === matchId()) + 1]) == null ? void 0 : _a.id;
  } });
  return createComponent(Solid$1.Switch, { get children() {
    return [createComponent(Solid$1.Match, {
      get when() {
        return parentGlobalNotFound();
      },
      get children() {
        return renderRouteNotFound(router, route(), void 0);
      }
    }), createComponent(Solid$1.Match, {
      get when() {
        return childMatchId();
      },
      children: (matchId$1) => {
        return createComponent(Solid$1.Show, {
          get when() {
            return matchId$1() === rootRouteId;
          },
          get fallback() {
            return createComponent(Match$1, { get matchId() {
              return matchId$1();
            } });
          },
          get children() {
            return createComponent(Solid$1.Suspense, {
              get fallback() {
                return createComponent(Dynamic, { get component() {
                  return router.options.defaultPendingComponent;
                } });
              },
              get children() {
                return createComponent(Match$1, { get matchId() {
                  return matchId$1();
                } });
              }
            });
          }
        });
      }
    })];
  } });
};
function Matches() {
  const router = useRouter();
  const ResolvedSuspense = router.isServer || typeof document !== "undefined" && router.ssr ? SafeFragment : Solid$1.Suspense;
  return createComponent(router.options.InnerWrap || SafeFragment, { get children() {
    return createComponent(ResolvedSuspense, {
      get fallback() {
        return router.options.defaultPendingComponent ? createComponent(router.options.defaultPendingComponent, {}) : null;
      },
      get children() {
        return [!router.isServer && createComponent(Transitioner, {}), createComponent(MatchesInner, {})];
      }
    });
  } });
}
function MatchesInner() {
  const router = useRouter();
  const matchId = useRouterState({ select: (s) => {
    var _a;
    return (_a = s.matches[0]) == null ? void 0 : _a.id;
  } });
  const resetKey = useRouterState({ select: (s) => s.loadedAt });
  const matchComponent = () => {
    const id = matchId();
    return id ? createComponent(Match$1, { matchId: id }) : null;
  };
  return createComponent(matchContext.Provider, {
    value: matchId,
    get children() {
      return router.options.disableGlobalCatchBoundary ? matchComponent() : createComponent(CatchBoundary, {
        getResetKey: () => resetKey(),
        errorComponent: ErrorComponent,
        onCatch: (error) => {
          warning(false, `The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!`);
          warning(false, error.message || error.toString());
        },
        get children() {
          return matchComponent();
        }
      });
    }
  });
}
function RouterContextProvider({ router, children: children$1, ...rest }) {
  router.update({
    ...router.options,
    ...rest,
    context: {
      ...router.options.context,
      ...rest.context
    }
  });
  const routerContext$1 = getRouterContext();
  return createComponent(router.options.Wrap || SafeFragment, { get children() {
    return createComponent(routerContext$1.Provider, {
      value: router,
      get children() {
        return children$1();
      }
    });
  } });
}
function RouterProvider({ router, ...rest }) {
  return createComponent(RouterContextProvider, mergeProps({ router }, rest, { children: () => createComponent(Matches, {}) }));
}
const MetaContext = createContext();
var cascadingTags = ["title", "meta"];
var titleTagProperties = [];
var metaTagProperties = [
  "name",
  "http-equiv",
  "content",
  "charset",
  "media"
].concat(["property"]);
var getTagKey = (tag, properties) => {
  const tagProps = Object.fromEntries(Object.entries(tag.props).filter(([k]) => properties.includes(k)).sort());
  if (Object.hasOwn(tagProps, "name") || Object.hasOwn(tagProps, "property")) {
    tagProps.name = tagProps.name || tagProps.property;
    delete tagProps.property;
  }
  return tag.tag + JSON.stringify(tagProps);
};
function initClientProvider() {
  if (!sharedConfig.context) {
    const ssrTags = document.head.querySelectorAll(`[data-sm]`);
    Array.prototype.forEach.call(ssrTags, (ssrTag) => ssrTag.parentNode.removeChild(ssrTag));
  }
  const cascadedTagInstances = /* @__PURE__ */ new Map();
  function getElement(tag) {
    if (tag.ref) return tag.ref;
    let el = document.querySelector(`[data-sm="${tag.id}"]`);
    if (el) {
      if (el.tagName.toLowerCase() !== tag.tag) {
        if (el.parentNode) el.parentNode.removeChild(el);
        el = document.createElement(tag.tag);
      }
      el.removeAttribute("data-sm");
    } else el = document.createElement(tag.tag);
    return el;
  }
  return {
    addTag(tag) {
      if (cascadingTags.indexOf(tag.tag) !== -1) {
        const tagKey = getTagKey(tag, tag.tag === "title" ? titleTagProperties : metaTagProperties);
        if (!cascadedTagInstances.has(tagKey)) cascadedTagInstances.set(tagKey, []);
        let instances = cascadedTagInstances.get(tagKey);
        let index = instances.length;
        instances = [...instances, tag];
        cascadedTagInstances.set(tagKey, instances);
        let element$1 = getElement(tag);
        tag.ref = element$1;
        spread(element$1, tag.props);
        let lastVisited = null;
        for (var i = index - 1; i >= 0; i--) if (instances[i] != null) {
          lastVisited = instances[i];
          break;
        }
        if (element$1.parentNode != document.head) document.head.appendChild(element$1);
        if (lastVisited && lastVisited.ref && lastVisited.ref.parentNode) document.head.removeChild(lastVisited.ref);
        return index;
      }
      let element = getElement(tag);
      tag.ref = element;
      spread(element, tag.props);
      if (element.parentNode != document.head) document.head.appendChild(element);
      return -1;
    },
    removeTag(tag, index) {
      const tagKey = getTagKey(tag, tag.tag === "title" ? titleTagProperties : metaTagProperties);
      if (tag.ref) {
        const t = cascadedTagInstances.get(tagKey);
        if (t) {
          if (tag.ref.parentNode) {
            tag.ref.parentNode.removeChild(tag.ref);
            for (let i = index - 1; i >= 0; i--) if (t[i] != null) document.head.appendChild(t[i].ref);
          }
          t[index] = null;
          cascadedTagInstances.set(tagKey, t);
        } else if (tag.ref.parentNode) tag.ref.parentNode.removeChild(tag.ref);
      }
    }
  };
}
function initServerProvider() {
  const tags = [];
  useAssets(() => ssr(renderTags(tags)));
  return {
    addTag(tagDesc) {
      if (cascadingTags.indexOf(tagDesc.tag) !== -1) {
        const properties = tagDesc.tag === "title" ? titleTagProperties : metaTagProperties;
        const tagDescKey = getTagKey(tagDesc, properties);
        const index = tags.findIndex((prev) => prev.tag === tagDesc.tag && getTagKey(prev, properties) === tagDescKey);
        if (index !== -1) tags.splice(index, 1);
      }
      tags.push(tagDesc);
      return tags.length;
    },
    removeTag(tag, index) {
    }
  };
}
const MetaProvider = (props) => {
  const actions = !isServer ? initClientProvider() : initServerProvider();
  return createComponent(MetaContext.Provider, {
    value: actions,
    get children() {
      return props.children;
    }
  });
};
var MetaTag = (tag, props, setting) => {
  useHead({
    tag,
    props,
    setting,
    id: createUniqueId(),
    get name() {
      return props.name || props.property;
    }
  });
  return null;
};
function useHead(tagDesc) {
  const c = useContext(MetaContext);
  if (!c) throw new Error("<MetaProvider /> should be in the tree");
  createRenderEffect(() => {
    const index = c.addTag(tagDesc);
    onCleanup(() => c.removeTag(tagDesc, index));
  });
}
function renderTags(tags) {
  return tags.map((tag) => {
    var _a, _b;
    const props = Object.keys(tag.props).map((k) => k === "children" ? "" : ` ${k}="${escape(tag.props[k], true)}"`).join("");
    let children$1 = tag.props.children;
    if (Array.isArray(children$1)) children$1 = children$1.join("");
    if ((_a = tag.setting) == null ? void 0 : _a.close) return `<${tag.tag} data-sm="${tag.id}"${props}>${((_b = tag.setting) == null ? void 0 : _b.escape) ? escape(children$1) : children$1 || ""}</${tag.tag}>`;
    return `<${tag.tag} data-sm="${tag.id}"${props}/>`;
  }).join("");
}
const Title = (props) => MetaTag("title", props, {
  escape: true,
  close: true
});
const Style = (props) => MetaTag("style", props, { close: true });
const Meta = (props) => MetaTag("meta", props);
function Asset({ tag, attrs, children: children$1 }) {
  switch (tag) {
    case "title":
      return createComponent(Title, mergeProps(attrs, { children: children$1 }));
    case "meta":
      return createComponent(Meta, attrs);
    case "link":
      return ssrElement("link", attrs, void 0, true);
    case "style":
      return createComponent(Style, mergeProps(attrs, { innerHTML: children$1 }));
    case "script":
      return createComponent(Script, {
        attrs,
        children: children$1
      });
    default:
      return null;
  }
}
function Script({ attrs, children: children$1 }) {
  const router = useRouter();
  onMount(() => {
    if (attrs == null ? void 0 : attrs.src) {
      const normSrc = (() => {
        try {
          const base = document.baseURI || window.location.href;
          return new URL(attrs.src, base).href;
        } catch {
          return attrs.src;
        }
      })();
      if (Array.from(document.querySelectorAll("script[src]")).find((el) => el.src === normSrc)) return;
      const script = document.createElement("script");
      for (const [key, value] of Object.entries(attrs)) if (value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
      document.head.appendChild(script);
      onCleanup(() => {
        if (script.parentNode) script.parentNode.removeChild(script);
      });
    }
    if (typeof children$1 === "string") {
      const typeAttr = typeof (attrs == null ? void 0 : attrs.type) === "string" ? attrs.type : "text/javascript";
      const nonceAttr = typeof (attrs == null ? void 0 : attrs.nonce) === "string" ? attrs.nonce : void 0;
      if (Array.from(document.querySelectorAll("script:not([src])")).find((el) => {
        var _a, _b;
        if (!(el instanceof HTMLScriptElement)) return false;
        const sType = (_a = el.getAttribute("type")) != null ? _a : "text/javascript";
        const sNonce = (_b = el.getAttribute("nonce")) != null ? _b : void 0;
        return el.textContent === children$1 && sType === typeAttr && sNonce === nonceAttr;
      })) return;
      const script = document.createElement("script");
      script.textContent = children$1;
      if (attrs) {
        for (const [key, value] of Object.entries(attrs)) if (value !== void 0 && value !== false) script.setAttribute(key, typeof value === "boolean" ? "" : String(value));
      }
      document.head.appendChild(script);
      onCleanup(() => {
        if (script.parentNode) script.parentNode.removeChild(script);
      });
    }
  });
  if (router && !router.isServer) return null;
  if ((attrs == null ? void 0 : attrs.src) && typeof attrs.src === "string") return ssrElement("script", attrs, void 0, true);
  if (typeof children$1 === "string") return ssrElement("script", mergeProps(attrs, { innerHTML: children$1 }), void 0, true);
  return null;
}
const useTags = () => {
  const router = useRouter();
  const routeMeta = useRouterState({ select: (state) => {
    return state.matches.map((match) => match.meta).filter(Boolean);
  } });
  const meta = Solid$1.createMemo(() => {
    var _a;
    const resultMeta = [];
    const metaByAttribute = {};
    let title;
    const routeMetasArray = routeMeta();
    for (let i = routeMetasArray.length - 1; i >= 0; i--) {
      const metas = routeMetasArray[i];
      for (let j = metas.length - 1; j >= 0; j--) {
        const m = metas[j];
        if (!m) continue;
        if (m.title) {
          if (!title) title = {
            tag: "title",
            children: m.title
          };
        } else {
          const attribute = (_a = m.name) != null ? _a : m.property;
          if (attribute) if (metaByAttribute[attribute]) continue;
          else metaByAttribute[attribute] = true;
          resultMeta.push({
            tag: "meta",
            attrs: { ...m }
          });
        }
      }
    }
    if (title) resultMeta.push(title);
    resultMeta.reverse();
    return resultMeta;
  });
  const links = useRouterState({ select: (state) => {
    var _a;
    const constructed = state.matches.map((match) => match.links).filter(Boolean).flat(1).map((link) => ({
      tag: "link",
      attrs: { ...link }
    }));
    const manifest = (_a = router.ssr) == null ? void 0 : _a.manifest;
    const assets = state.matches.map((match) => {
      var _a2, _b;
      return (_b = (_a2 = manifest == null ? void 0 : manifest.routes[match.routeId]) == null ? void 0 : _a2.assets) != null ? _b : [];
    }).filter(Boolean).flat(1).filter((asset) => asset.tag === "link").map((asset) => ({
      tag: "link",
      attrs: asset.attrs
    }));
    return [...constructed, ...assets];
  } });
  const preloadMeta = useRouterState({ select: (state) => {
    const preloadMeta$1 = [];
    state.matches.map((match) => router.looseRoutesById[match.routeId]).forEach((route) => {
      var _a, _b, _c, _d;
      return (_d = (_c = (_b = (_a = router.ssr) == null ? void 0 : _a.manifest) == null ? void 0 : _b.routes[route.id]) == null ? void 0 : _c.preloads) == null ? void 0 : _d.filter(Boolean).forEach((preload) => {
        preloadMeta$1.push({
          tag: "link",
          attrs: {
            rel: "modulepreload",
            href: preload
          }
        });
      });
    });
    return preloadMeta$1;
  } });
  const styles = useRouterState({ select: (state) => state.matches.map((match) => match.styles).flat(1).filter(Boolean).map(({ children: children$1, ...style }) => ({
    tag: "style",
    attrs: { ...style },
    children: children$1
  })) });
  const headScripts = useRouterState({ select: (state) => state.matches.map((match) => match.headScripts).flat(1).filter(Boolean).map(({ children: children$1, ...script }) => ({
    tag: "script",
    attrs: { ...script },
    children: children$1
  })) });
  return () => uniqBy([
    ...meta(),
    ...preloadMeta(),
    ...links(),
    ...styles(),
    ...headScripts()
  ], (d) => {
    return JSON.stringify(d);
  });
};
function HeadContent() {
  const tags = useTags();
  return createComponent(MetaProvider, { get children() {
    return tags().map((tag) => createComponent(Asset, tag));
  } });
}
function uniqBy(arr, fn) {
  const seen = /* @__PURE__ */ new Set();
  return arr.filter((item) => {
    const key = fn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
const Scripts = () => {
  const router = useRouter();
  const assetScripts = useRouterState({ select: (state) => {
    var _a;
    const assetScripts$1 = [];
    const manifest = (_a = router.ssr) == null ? void 0 : _a.manifest;
    if (!manifest) return [];
    state.matches.map((match) => router.looseRoutesById[match.routeId]).forEach((route) => {
      var _a2, _b;
      return (_b = (_a2 = manifest.routes[route.id]) == null ? void 0 : _a2.assets) == null ? void 0 : _b.filter((d) => d.tag === "script").forEach((asset) => {
        assetScripts$1.push({
          tag: "script",
          attrs: asset.attrs,
          children: asset.children
        });
      });
    });
    return assetScripts$1;
  } });
  return [...useRouterState({ select: (state) => ({ scripts: state.matches.map((match) => match.scripts).flat(1).filter(Boolean).map(({ children: children$1, ...script }) => ({
    tag: "script",
    attrs: { ...script },
    children: children$1
  })) }) })().scripts, ...assetScripts()].map((asset, i) => createComponent(Asset, asset));
};
var _tmpl$ = ["<head>", "</head>"], _tmpl$2 = [
  "<html>",
  "<body>",
  "</body></html>"
];
function ServerHeadContent() {
  const tags = useTags();
  useAssets(() => {
    return createComponent(MetaProvider, { get children() {
      return tags().map((tag) => createComponent(Asset, tag));
    } });
  });
  return null;
}
var docType = ssr("<!DOCTYPE html>");
function StartServer(props) {
  return createComponent(NoHydration, { get children() {
    return [docType, ssr(_tmpl$2, createComponent(NoHydration, { get children() {
      return ssr(_tmpl$, escape(createComponent(HydrationScript, {})));
    } }), escape(createComponent(Hydration, { get children() {
      return createComponent(RouterProvider, {
        get router() {
          return props.router;
        },
        InnerWrap: (props2) => createComponent(NoHydration, { get children() {
          return createComponent(MetaProvider, { get children() {
            return [
              createComponent(ServerHeadContent, {}),
              createComponent(Hydration, { get children() {
                return props2.children;
              } }),
              createComponent(Scripts, {})
            ];
          } });
        } })
      });
    } })))];
  } });
}
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
var X_TSS_SERIALIZED = "x-tss-serialized";
var X_TSS_RAW_RESPONSE = "x-tss-raw";
var startStorage = new AsyncLocalStorage();
async function runWithStartContext(context, fn) {
  return startStorage.run(context, fn);
}
function getStartContext(opts) {
  const context = startStorage.getStore();
  if (!context && (void 0 ) !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
  return context;
}
var getStartOptions = () => getStartContext().startOptions;
function flattenMiddlewares(middlewares) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware) => {
    middleware.forEach((m) => {
      if (m.options.middleware) recurse(m.options.middleware);
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares);
  return flattened;
}
function getDefaultSerovalPlugins() {
  var _a, _b, _c;
  return [...(_c = (_b = (_a = getStartOptions()) == null ? void 0 : _a.serializationAdapters) == null ? void 0 : _b.map(makeSerovalPlugin)) != null ? _c : [], ...defaultSerovalPlugins];
}
var eventStorage = new AsyncLocalStorage();
function requestHandler(handler) {
  return (request, requestOpts) => {
    const h3Event = new H3Event(request);
    return toResponse(eventStorage.run({ h3Event }, () => handler(request, requestOpts)), h3Event);
  };
}
function getH3Event() {
  const event = eventStorage.getStore();
  if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
  return event.h3Event;
}
function getResponse() {
  return getH3Event()._res;
}
var VIRTUAL_MODULES = {
  startManifest: "tanstack-start-manifest:v",
  serverFnManifest: "tanstack-start-server-fn-manifest:v",
  injectedHeadScripts: "tanstack-start-injected-head-scripts:v"
};
async function loadVirtualModule(id) {
  switch (id) {
    case VIRTUAL_MODULES.startManifest:
      return await import('../_/_tanstack-start-manifest_v-Cu-DMs0b.mjs');
    case VIRTUAL_MODULES.serverFnManifest:
      return await import('../_/_tanstack-start-server-fn-manifest_v-Bg9qgwJy.mjs');
    case VIRTUAL_MODULES.injectedHeadScripts:
      return await import('../_/_tanstack-start-injected-head-scripts_v-CAWOLbl_.mjs');
    default:
      throw new Error(`Unknown virtual module: ${id}`);
  }
}
async function getStartManifest() {
  const { tsrStartManifest } = await loadVirtualModule(VIRTUAL_MODULES.startManifest);
  const startManifest = tsrStartManifest();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
  let script = `import('${startManifest.clientEntry}')`;
  rootRoute.assets.push({
    tag: "script",
    attrs: {
      type: "module",
      suppressHydrationWarning: true,
      async: true
    },
    children: script
  });
  return {
    ...startManifest,
    routes: Object.fromEntries(Object.entries(startManifest.routes).map(([k, v]) => {
      const { preloads, assets } = v;
      return [k, {
        preloads,
        assets
      }];
    }))
  };
}
async function getServerFnById(serverFnId) {
  const { default: serverFnManifest } = await loadVirtualModule(VIRTUAL_MODULES.serverFnManifest);
  const serverFnInfo = serverFnManifest[serverFnId];
  if (!serverFnInfo) {
    console.info("serverFnManifest", serverFnManifest);
    throw new Error("Server function info not found for " + serverFnId);
  }
  const fnModule = await serverFnInfo.importer();
  if (!fnModule) {
    console.info("serverFnInfo", serverFnInfo);
    throw new Error("Server function module not resolved for " + serverFnId);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    console.info("serverFnInfo", serverFnInfo);
    console.info("fnModule", fnModule);
    throw new Error(`Server function module export not resolved for serverFn ID: ${serverFnId}`);
  }
  return action;
}
var regex = void 0;
var handleServerAction = async ({ request, context }) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const abort = () => controller.abort();
  request.signal.addEventListener("abort", abort);
  if (regex === void 0) regex = /* @__PURE__ */ new RegExp(`/_serverFn/([^/?#]+)`);
  const method = request.method;
  const url = new URL(request.url, "http://localhost:3000");
  const match = url.pathname.match(regex);
  const serverFnId = match ? match[1] : null;
  const search = Object.fromEntries(url.searchParams.entries());
  const isCreateServerFn = "createServerFn" in search;
  if (typeof serverFnId !== "string") throw new Error("Invalid server action param for serverFnId: " + serverFnId);
  const action = await getServerFnById(serverFnId);
  const formDataContentTypes = ["multipart/form-data", "application/x-www-form-urlencoded"];
  const contentType = request.headers.get("Content-Type");
  const serovalPlugins = getDefaultSerovalPlugins();
  function parsePayload(payload) {
    return fromJSON(payload, { plugins: serovalPlugins });
  }
  const response = await (async () => {
    var _a;
    try {
      let result = await (async () => {
        if (formDataContentTypes.some((type) => contentType && contentType.includes(type))) {
          invariant(method.toLowerCase() !== "get", "GET requests with FormData payloads are not supported");
          const formData = await request.formData();
          const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
          formData.delete(TSS_FORMDATA_CONTEXT);
          const params = {
            context,
            data: formData
          };
          if (typeof serializedContext === "string") try {
            const parsedContext = JSON.parse(serializedContext);
            if (typeof parsedContext === "object" && parsedContext) params.context = {
              ...context,
              ...parsedContext
            };
          } catch {
          }
          return await action(params, signal);
        }
        if (method.toLowerCase() === "get") {
          invariant(isCreateServerFn, "expected GET request to originate from createServerFn");
          let payload = search.payload;
          payload = payload ? parsePayload(JSON.parse(payload)) : payload;
          payload.context = {
            ...context,
            ...payload.context
          };
          return await action(payload, signal);
        }
        if (method.toLowerCase() !== "post") throw new Error("expected POST method");
        if (!contentType || !contentType.includes("application/json")) throw new Error("expected application/json content type");
        const jsonPayload = await request.json();
        if (isCreateServerFn) {
          const payload = parsePayload(jsonPayload);
          payload.context = {
            ...payload.context,
            ...context
          };
          return await action(payload, signal);
        }
        return await action(...jsonPayload);
      })();
      if (result.result instanceof Response) {
        result.result.headers.set(X_TSS_RAW_RESPONSE, "true");
        return result.result;
      }
      if (!isCreateServerFn) {
        result = result.result;
        if (result instanceof Response) return result;
      }
      if (isNotFound(result)) return isNotFoundResponse(result);
      const response2 = getResponse();
      let nonStreamingBody = void 0;
      if (result !== void 0) {
        let done = false;
        const callbacks = {
          onParse: (value) => {
            nonStreamingBody = value;
          },
          onDone: () => {
            done = true;
          },
          onError: (error) => {
            throw error;
          }
        };
        toCrossJSONStream(result, {
          refs: /* @__PURE__ */ new Map(),
          plugins: serovalPlugins,
          onParse(value) {
            callbacks.onParse(value);
          },
          onDone() {
            callbacks.onDone();
          },
          onError: (error) => {
            callbacks.onError(error);
          }
        });
        if (done) return new Response(nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0, {
          status: response2 == null ? void 0 : response2.status,
          statusText: response2 == null ? void 0 : response2.statusText,
          headers: {
            "Content-Type": "application/json",
            [X_TSS_SERIALIZED]: "true"
          }
        });
        const stream = new ReadableStream({ start(controller2) {
          callbacks.onParse = (value) => controller2.enqueue(JSON.stringify(value) + "\n");
          callbacks.onDone = () => {
            try {
              controller2.close();
            } catch (error) {
              controller2.error(error);
            }
          };
          callbacks.onError = (error) => controller2.error(error);
          if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
        } });
        return new Response(stream, {
          status: response2 == null ? void 0 : response2.status,
          statusText: response2 == null ? void 0 : response2.statusText,
          headers: {
            "Content-Type": "application/x-ndjson",
            [X_TSS_SERIALIZED]: "true"
          }
        });
      }
      return new Response(void 0, {
        status: response2 == null ? void 0 : response2.status,
        statusText: response2 == null ? void 0 : response2.statusText
      });
    } catch (error) {
      if (error instanceof Response) return error;
      if (isNotFound(error)) return isNotFoundResponse(error);
      console.info();
      console.info("Server Fn Error!");
      console.info();
      console.error(error);
      console.info();
      const serializedError = JSON.stringify(await Promise.resolve(toCrossJSONAsync(error, {
        refs: /* @__PURE__ */ new Map(),
        plugins: serovalPlugins
      })));
      const response2 = getResponse();
      return new Response(serializedError, {
        status: (_a = response2 == null ? void 0 : response2.status) != null ? _a : 500,
        statusText: response2 == null ? void 0 : response2.statusText,
        headers: {
          "Content-Type": "application/json",
          [X_TSS_SERIALIZED]: "true"
        }
      });
    }
  })();
  request.signal.removeEventListener("abort", abort);
  return response;
};
function isNotFoundResponse(error) {
  const { headers, ...rest } = error;
  return new Response(JSON.stringify(rest), {
    status: 404,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
var HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
var createServerRpc = (functionId, splitImportFn) => {
  const url = "/_serverFn/" + functionId;
  return Object.assign(splitImportFn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
var ServerFunctionSerializationAdapter = createSerializationAdapter({
  key: "$TSS/serverfn",
  test: (v) => {
    if (typeof v !== "function") return false;
    if (!(TSS_SERVER_FUNCTION in v)) return false;
    return !!v[TSS_SERVER_FUNCTION];
  },
  toSerializable: ({ functionId }) => ({ functionId }),
  fromSerializable: ({ functionId }) => {
    const fn = async (opts, signal) => {
      return (await (await getServerFnById(functionId))(opts != null ? opts : {}, signal)).result;
    };
    return createServerRpc(functionId, fn);
  }
});
function getStartResponseHeaders(opts) {
  return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.state.matches.map((match) => {
    return match.headers;
  }));
}
function createStartHandler(cb) {
  const ROUTER_BASEPATH = "/";
  let startRoutesManifest = null;
  let startEntry = null;
  let routerEntry = null;
  const getEntries = async () => {
    if (routerEntry === null) routerEntry = await import('../_/router-Dq_AAJ66.mjs').then(function (n) { return n.r; });
    if (startEntry === null) startEntry = await import('../_/start-AxgRUVqU.mjs');
    return {
      startEntry,
      routerEntry
    };
  };
  const originalFetch = globalThis.fetch;
  const startRequestResolver = async (request, requestOpts) => {
    var _a;
    const origin = getOrigin(request);
    globalThis.fetch = async function(input, init) {
      function resolve(url2, requestOptions) {
        return startRequestResolver(new Request(url2, requestOptions), requestOpts);
      }
      if (typeof input === "string" && input.startsWith("/")) return resolve(new URL(input, origin), init);
      else if (typeof input === "object" && "url" in input && typeof input.url === "string" && input.url.startsWith("/")) return resolve(new URL(input.url, origin), init);
      return originalFetch(input, init);
    };
    const url = new URL(request.url);
    const href = url.href.replace(url.origin, "");
    let router = null;
    const getRouter = async () => {
      var _a2;
      if (router) return router;
      router = await (await getEntries()).routerEntry.getRouter();
      const isPrerendering = process.env.TSS_PRERENDERING === "true";
      let isShell = process.env.TSS_SHELL === "true";
      if (isPrerendering && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
      const history = createMemoryHistory({ initialEntries: [href] });
      router.update({
        history,
        isShell,
        isPrerendering,
        origin: (_a2 = router.options.origin) != null ? _a2 : origin,
        defaultSsr: startOptions.defaultSsr,
        serializationAdapters: [...startOptions.serializationAdapters || [], ...router.options.serializationAdapters || []],
        basepath: ROUTER_BASEPATH
      });
      return router;
    };
    const startOptions = await ((_a = (await getEntries()).startEntry.startInstance) == null ? void 0 : _a.getOptions()) || {};
    startOptions.serializationAdapters = startOptions.serializationAdapters || [];
    startOptions.serializationAdapters.push(ServerFunctionSerializationAdapter);
    const requestHandlerMiddleware = handlerToMiddleware(async ({ context }) => {
      return await runWithStartContext({
        getRouter,
        startOptions,
        contextAfterGlobalMiddlewares: context,
        request
      }, async () => {
        try {
          if (href.startsWith("/_serverFn/")) return await handleServerAction({
            request,
            context: requestOpts == null ? void 0 : requestOpts.context
          });
          const executeRouter = async ({ serverContext }) => {
            const splitRequestAcceptHeader = (request.headers.get("Accept") || "*/*").split(",");
            if (!["*/*", "text/html"].some((mimeType) => splitRequestAcceptHeader.some((acceptedMimeType) => acceptedMimeType.trim().startsWith(mimeType)))) return json({ error: "Only HTML requests are supported here" }, { status: 500 });
            if (startRoutesManifest === null) startRoutesManifest = await getStartManifest();
            const router2 = await getRouter();
            attachRouterServerSsrUtils({
              router: router2,
              manifest: startRoutesManifest
            });
            router2.update({ additionalContext: { serverContext } });
            await router2.load();
            if (router2.state.redirect) return router2.state.redirect;
            await router2.serverSsr.dehydrate();
            return await cb({
              request,
              router: router2,
              responseHeaders: getStartResponseHeaders({ router: router2 })
            });
          };
          return await handleServerRoutes({
            getRouter,
            request,
            executeRouter
          });
        } catch (err) {
          if (err instanceof Response) return err;
          throw err;
        }
      });
    });
    const response = (await executeMiddleware([...(startOptions.requestMiddleware ? flattenMiddlewares(startOptions.requestMiddleware) : []).map((d) => d.options.server), requestHandlerMiddleware], {
      request,
      context: (requestOpts == null ? void 0 : requestOpts.context) || {}
    })).response;
    if (isRedirect(response)) {
      if (isResolvedRedirect(response)) {
        if (request.headers.get("x-tsr-redirect") === "manual") return json({
          ...response.options,
          isSerializedRedirect: true
        }, { headers: response.headers });
        return response;
      }
      if (response.options.to && typeof response.options.to === "string" && !response.options.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(response.options)}`);
      if ([
        "params",
        "search",
        "hash"
      ].some((d) => typeof response.options[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(response.options).filter((d) => typeof response.options[d] === "function").map((d) => `"${d}"`).join(", ")}`);
      const redirect = (await getRouter()).resolveRedirect(response);
      if (request.headers.get("x-tsr-redirect") === "manual") return json({
        ...response.options,
        isSerializedRedirect: true
      }, { headers: response.headers });
      return redirect;
    }
    return response;
  };
  return requestHandler(startRequestResolver);
}
async function handleServerRoutes({ getRouter, request, executeRouter }) {
  const router = await getRouter();
  let url = new URL(request.url);
  url = executeRewriteInput(router.rewrite, url);
  const pathname = url.pathname;
  const { matchedRoutes, foundRoute, routeParams } = router.getMatchedRoutes(pathname, void 0);
  const middlewares = flattenMiddlewares(matchedRoutes.flatMap((r) => {
    var _a;
    return (_a = r.options.server) == null ? void 0 : _a.middleware;
  }).filter(Boolean)).map((d) => d.options.server);
  const server = foundRoute == null ? void 0 : foundRoute.options.server;
  if (server) {
    if (server.handlers) {
      const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
      const requestMethod = request.method.toLowerCase();
      let method = Object.keys(handlers).find((method2) => method2.toLowerCase() === requestMethod);
      if (!method) method = Object.keys(handlers).find((method2) => method2.toLowerCase() === "all") ? "all" : void 0;
      if (method) {
        const handler = handlers[method];
        if (handler) {
          const mayDefer = !!foundRoute.options.component;
          if (typeof handler === "function") middlewares.push(handlerToMiddleware(handler, mayDefer));
          else {
            const { middleware } = handler;
            if (middleware && middleware.length) middlewares.push(...flattenMiddlewares(middleware).map((d) => d.options.server));
            if (handler.handler) middlewares.push(handlerToMiddleware(handler.handler, mayDefer));
          }
        }
      }
    }
  }
  middlewares.push(handlerToMiddleware((ctx2) => executeRouter({ serverContext: ctx2.context })));
  return (await executeMiddleware(middlewares, {
    request,
    context: {},
    params: routeParams,
    pathname
  })).response;
}
function throwRouteHandlerError() {
  throw new Error("Internal Server Error");
}
function throwIfMayNotDefer() {
  throw new Error("Internal Server Error");
}
function handlerToMiddleware(handler, mayDefer = false) {
  if (mayDefer) return handler;
  return async ({ next: _next, ...rest }) => {
    const response = await handler({
      ...rest,
      next: throwIfMayNotDefer
    });
    if (!response) throwRouteHandlerError();
    return response;
  };
}
function executeMiddleware(middlewares, ctx) {
  let index = -1;
  const next = async (ctx2) => {
    index++;
    const middleware = middlewares[index];
    if (!middleware) return ctx2;
    let result;
    try {
      result = await middleware({
        ...ctx2,
        next: async (nextCtx) => {
          const nextResult = await next({
            ...ctx2,
            ...nextCtx,
            context: {
              ...ctx2.context,
              ...(nextCtx == null ? void 0 : nextCtx.context) || {}
            }
          });
          return Object.assign(ctx2, handleCtxResult(nextResult));
        }
      });
    } catch (err) {
      if (isSpecialResponse(err)) result = { response: err };
      else throw err;
    }
    return Object.assign(ctx2, handleCtxResult(result));
  };
  return handleCtxResult(next(ctx));
}
function handleCtxResult(result) {
  if (isSpecialResponse(result)) return { response: result };
  return result;
}
function isSpecialResponse(err) {
  return isResponse(err) || isRedirect(err);
}
function isResponse(response) {
  return response instanceof Response;
}
const renderRouterToStream = async ({ request, router, responseHeaders, children: children$1 }) => {
  var _a;
  const { writable, readable } = new TransformStream();
  const stream = Solid.renderToStream(children$1, { nonce: (_a = router.options.ssr) == null ? void 0 : _a.nonce });
  if (isbot(request.headers.get("User-Agent"))) await stream;
  stream.pipeTo(writable);
  const responseStream = transformReadableStreamWithRouter(router, readable);
  return new Response(responseStream, {
    status: router.state.statusCode,
    headers: responseHeaders
  });
};
var server_default = { fetch: createStartHandler(defineHandlerCallback(async ({ request, router, responseHeaders }) => await renderRouterToStream({
  request,
  router,
  responseHeaders,
  children: () => createComponent(StartServer, { router })
}))) };

const entry = fromWebHandler(server_default.fetch);

const entry$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: entry
});

export { HeadContent as H, Outlet as O, Scripts as S, useRouterState as a, useIntersectionObserver as b, dummyMatchContext as d, entry$1 as e, matchContext as m, useRouter as u };
//# sourceMappingURL=entry.mjs.map
