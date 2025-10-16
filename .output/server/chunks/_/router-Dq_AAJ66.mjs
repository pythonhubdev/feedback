import { u as useRouter, d as dummyMatchContext, m as matchContext, a as useRouterState, b as useIntersectionObserver, H as HeadContent, O as Outlet, S as Scripts } from '../virtual/entry.mjs';
import { createComponent, mergeProps, Dynamic, isDev, ssr, ssrHydrationKey, isServer, escape } from 'solid-js/web';
import { BaseRootRoute, isModuleNotFoundError, BaseRoute, exactPathTest, removeTrailingSlash, deepEqual, functionalUpdate, preloadWarning, RouterCore } from '@tanstack/router-core';
import * as Solid$1 from 'solid-js';
import { splitProps, useContext, createContext, createResource, createEffect, onCleanup, createSignal, Show, sharedConfig, onMount, createMemo, untrack } from 'solid-js';
import warning from 'tiny-warning';
import { mergeRefs } from '@solid-primitives/refs';
import invariant from 'tiny-invariant';
import { combineStyle } from '@solid-primitives/props';
import { createMotionState, createStyles } from '@motionone/dom';
import process from 'vite-plugin-node-polyfills/shims/process';
import cors from '@elysiajs/cors';
import { treaty } from '@elysiajs/eden';
import openapi, { fromTypes } from '@elysiajs/openapi';
import serverTiming from '@elysiajs/server-timing';
import { toJsonSchema } from '@valibot/to-json-schema';
import { Elysia } from 'elysia';
import * as v from 'valibot';
import { Effect } from 'effect';
import { pgEnum, pgTable, text, varchar, integer, date, unique } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';

function useLinkProps(options) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = Solid$1.createSignal(false);
  let hasRenderFetched = false;
  const [local, rest] = Solid$1.splitProps(Solid$1.mergeProps({
    activeProps: () => ({ class: "active" }),
    inactiveProps: () => ({})
  }, options), [
    "activeProps",
    "inactiveProps",
    "activeOptions",
    "to",
    "preload",
    "preloadDelay",
    "hashScrollIntoView",
    "replace",
    "startTransition",
    "resetScroll",
    "viewTransition",
    "target",
    "disabled",
    "style",
    "class",
    "onClick",
    "onFocus",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseOver",
    "onMouseOut",
    "onTouchStart",
    "ignoreBlocker"
  ]);
  const [_, propsSafeToSpread] = Solid$1.splitProps(rest, [
    "params",
    "search",
    "hash",
    "state",
    "mask",
    "reloadDocument",
    "unsafeRelative"
  ]);
  const currentSearch = useRouterState({ select: (s) => s.location.searchStr });
  const from = options.from;
  const _options = () => {
    return {
      ...options,
      from
    };
  };
  const next = Solid$1.createMemo(() => {
    currentSearch();
    return router.buildLocation(_options());
  });
  const hrefOption = Solid$1.createMemo(() => {
    if (_options().disabled) return;
    let href;
    const maskedLocation = next().maskedLocation;
    if (maskedLocation) href = maskedLocation.url;
    else href = next().url;
    let external = false;
    if (router.origin) if (href.startsWith(router.origin)) href = router.history.createHref(href.replace(router.origin, ""));
    else external = true;
    return {
      href,
      external
    };
  });
  const externalLink = Solid$1.createMemo(() => {
    const _href = hrefOption();
    if (_href == null ? void 0 : _href.external) return _href.href;
    try {
      new URL(_options().to);
      return _options().to;
    } catch {
    }
  });
  const preload = Solid$1.createMemo(() => {
    var _a;
    if (_options().reloadDocument || externalLink()) return false;
    return (_a = local.preload) != null ? _a : router.options.defaultPreload;
  });
  const preloadDelay = () => {
    var _a, _b;
    return (_b = (_a = local.preloadDelay) != null ? _a : router.options.defaultPreloadDelay) != null ? _b : 0;
  };
  const isActive = useRouterState({ select: (s) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (externalLink()) return false;
    if ((_a = local.activeOptions) == null ? void 0 : _a.exact) {
      if (!exactPathTest(s.location.pathname, next().pathname, router.basepath)) return false;
    } else {
      const currentPathSplit = removeTrailingSlash(s.location.pathname, router.basepath).split("/");
      if (!((_d = (_c = removeTrailingSlash((_b = next()) == null ? void 0 : _b.pathname, router.basepath)) == null ? void 0 : _c.split("/")) == null ? void 0 : _d.every((d, i) => d === currentPathSplit[i]))) return false;
    }
    if ((_f = (_e = local.activeOptions) == null ? void 0 : _e.includeSearch) != null ? _f : true) {
      if (!deepEqual(s.location.search, next().search, {
        partial: !((_g = local.activeOptions) == null ? void 0 : _g.exact),
        ignoreUndefined: !((_h = local.activeOptions) == null ? void 0 : _h.explicitUndefined)
      })) return false;
    }
    if ((_i = local.activeOptions) == null ? void 0 : _i.includeHash) return s.location.hash === next().hash;
    return true;
  } });
  const doPreload = () => router.preloadRoute(_options()).catch((err) => {
    console.warn(err);
    console.warn(preloadWarning);
  });
  const preloadViewportIoCallback = (entry) => {
    if (entry == null ? void 0 : entry.isIntersecting) doPreload();
  };
  const [ref, setRef] = Solid$1.createSignal(null);
  useIntersectionObserver(ref, preloadViewportIoCallback, { rootMargin: "100px" }, { disabled: !!local.disabled || !(preload() === "viewport") });
  Solid$1.createEffect(() => {
    if (hasRenderFetched) return;
    if (!local.disabled && preload() === "render") {
      doPreload();
      hasRenderFetched = true;
    }
  });
  if (externalLink()) return Solid$1.mergeProps(propsSafeToSpread, {
    ref,
    href: externalLink
  }, Solid$1.splitProps(local, [
    "target",
    "disabled",
    "style",
    "class",
    "onClick",
    "onFocus",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseOut",
    "onMouseOver",
    "onTouchStart"
  ])[0]);
  const handleClick = (e) => {
    const elementTarget = e.currentTarget.target;
    const effectiveTarget = local.target !== void 0 ? local.target : elementTarget;
    if (!local.disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!effectiveTarget || effectiveTarget === "_self") && e.button === 0) {
      e.preventDefault();
      setIsTransitioning(true);
      const unsub = router.subscribe("onResolved", () => {
        unsub();
        setIsTransitioning(false);
      });
      router.navigate({
        ..._options(),
        replace: local.replace,
        resetScroll: local.resetScroll,
        hashScrollIntoView: local.hashScrollIntoView,
        startTransition: local.startTransition,
        viewTransition: local.viewTransition,
        ignoreBlocker: local.ignoreBlocker
      });
    }
  };
  const handleFocus = (_$1) => {
    if (local.disabled) return;
    if (preload()) doPreload();
  };
  const handleTouchStart = handleFocus;
  const handleEnter = (e) => {
    if (local.disabled) return;
    const eventTarget = e.target || {};
    if (preload()) {
      if (eventTarget.preloadTimeout) return;
      eventTarget.preloadTimeout = setTimeout(() => {
        eventTarget.preloadTimeout = null;
        doPreload();
      }, preloadDelay());
    }
  };
  const handleLeave = (e) => {
    if (local.disabled) return;
    const eventTarget = e.target || {};
    if (eventTarget.preloadTimeout) {
      clearTimeout(eventTarget.preloadTimeout);
      eventTarget.preloadTimeout = null;
    }
  };
  function callHandler(event, handler) {
    if (handler) if (typeof handler === "function") handler(event);
    else handler[0](handler[1], event);
    return event.defaultPrevented;
  }
  function composeEventHandlers(handlers) {
    return (event) => {
      for (const handler of handlers) callHandler(event, handler);
    };
  }
  const resolvedActiveProps = () => {
    var _a;
    return isActive() ? (_a = functionalUpdate(local.activeProps, {})) != null ? _a : {} : {};
  };
  const resolvedInactiveProps = () => isActive() ? {} : functionalUpdate(local.inactiveProps, {});
  const resolvedClassName = () => [
    local.class,
    resolvedActiveProps().class,
    resolvedInactiveProps().class
  ].filter(Boolean).join(" ");
  const resolvedStyle = () => ({
    ...local.style,
    ...resolvedActiveProps().style,
    ...resolvedInactiveProps().style
  });
  return Solid$1.mergeProps(propsSafeToSpread, resolvedActiveProps, resolvedInactiveProps, () => {
    var _a;
    return {
      href: (_a = hrefOption()) == null ? void 0 : _a.href,
      ref: mergeRefs(setRef, _options().ref),
      onClick: composeEventHandlers([local.onClick, handleClick]),
      onFocus: composeEventHandlers([local.onFocus, handleFocus]),
      onMouseEnter: composeEventHandlers([local.onMouseEnter, handleEnter]),
      onMouseOver: composeEventHandlers([local.onMouseOver, handleEnter]),
      onMouseLeave: composeEventHandlers([local.onMouseLeave, handleLeave]),
      onMouseOut: composeEventHandlers([local.onMouseOut, handleLeave]),
      onTouchStart: composeEventHandlers([local.onTouchStart, handleTouchStart]),
      disabled: !!local.disabled,
      target: local.target,
      ...Object.keys(resolvedStyle).length && { style: resolvedStyle },
      ...resolvedClassName() && { class: resolvedClassName() },
      ...local.disabled && {
        role: "link",
        "aria-disabled": true
      },
      ...isActive() && {
        "data-status": "active",
        "aria-current": "page"
      },
      ...isTransitioning() && { "data-transitioning": "transitioning" }
    };
  });
}
const Link = (props) => {
  const [local, rest] = Solid$1.splitProps(props, ["_asChild", "children"]);
  const [_, linkProps] = Solid$1.splitProps(useLinkProps(rest), ["type"]);
  const children$1 = Solid$1.createMemo(() => {
    const ch = local.children;
    if (typeof ch === "function") return ch({
      get isActive() {
        return linkProps["data-status"] === "active";
      },
      isTransitioning: false
    });
    return ch;
  });
  return createComponent(Dynamic, mergeProps({ get component() {
    return local._asChild ? local._asChild : "a";
  } }, linkProps, { get children() {
    return children$1();
  } }));
};
function isCtrlEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function useMatch(opts) {
  const nearestMatchId = Solid$1.useContext(opts.from ? dummyMatchContext : matchContext);
  return useRouterState({ select: (state) => {
    var _a;
    const match = state.matches.find((d) => opts.from ? opts.from === d.routeId : d.id === nearestMatchId());
    invariant(!(((_a = opts.shouldThrow) != null ? _a : true) && !match), `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`);
    if (match === void 0) return;
    return opts.select ? opts.select(match) : match;
  } });
}
function useLoaderData(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    select: (s) => {
      return opts.select ? opts.select(s.loaderData) : s.loaderData;
    }
  });
}
function useLoaderDeps(opts) {
  const { select, ...rest } = opts;
  return useMatch({
    ...rest,
    select: (s) => {
      return select ? select(s.loaderDeps) : s.loaderDeps;
    }
  });
}
function useParams(opts) {
  return useMatch({
    from: opts.from,
    shouldThrow: opts.shouldThrow,
    strict: opts.strict,
    select: (match) => {
      const params = opts.strict === false ? match.params : match._strictParams;
      return opts.select ? opts.select(params) : params;
    }
  });
}
function useSearch(opts) {
  return useMatch({
    from: opts.from,
    strict: opts.strict,
    shouldThrow: opts.shouldThrow,
    select: (match) => {
      return opts.select ? opts.select(match.search) : match.search;
    }
  });
}
function useNavigate(_defaultOpts) {
  const router = useRouter();
  return (options) => {
    var _a;
    return router.navigate({
      ...options,
      from: (_a = options.from) != null ? _a : _defaultOpts == null ? void 0 : _defaultOpts.from
    });
  };
}
var Route$6 = class Route extends BaseRoute {
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({
        ...opts,
        from: this.id
      });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({
        ...opts,
        from: this.id
      });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = (props) => {
      const _self$ = this;
      return createComponent(Link, mergeProps({ get from() {
        return _self$.fullPath;
      } }, props));
    };
  }
};
function createRoute(options) {
  return new Route$6(options);
}
function createRootRouteWithContext() {
  return (options) => {
    return createRootRoute(options);
  };
}
var RootRoute = class extends BaseRootRoute {
  constructor(options) {
    super(options);
    this.useMatch = (opts) => {
      return useMatch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useRouteContext = (opts) => {
      return useMatch({
        ...opts,
        from: this.id,
        select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
      });
    };
    this.useSearch = (opts) => {
      return useSearch({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useParams = (opts) => {
      return useParams({
        select: opts == null ? void 0 : opts.select,
        from: this.id
      });
    };
    this.useLoaderDeps = (opts) => {
      return useLoaderDeps({
        ...opts,
        from: this.id
      });
    };
    this.useLoaderData = (opts) => {
      return useLoaderData({
        ...opts,
        from: this.id
      });
    };
    this.useNavigate = () => {
      return useNavigate({ from: this.fullPath });
    };
    this.Link = (props) => {
      const _self$2 = this;
      return createComponent(Link, mergeProps({ get from() {
        return _self$2.fullPath;
      } }, props));
    };
  }
};
function createRootRoute(options) {
  return new RootRoute(options);
}
function createFileRoute(path) {
  if (typeof path === "object") return new FileRoute(path, { silent: true }).createRoute(path);
  return new FileRoute(path, { silent: true }).createRoute;
}
var FileRoute = class {
  constructor(path, _opts) {
    this.path = path;
    this.createRoute = (options) => {
      warning(this.silent, "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead.");
      const route = createRoute(options);
      route.isRoot = false;
      return route;
    };
    this.silent = _opts == null ? void 0 : _opts.silent;
  }
};
var LazyRoute = class {
  constructor(opts) {
    this.useMatch = (opts$1) => {
      return useMatch({
        select: opts$1 == null ? void 0 : opts$1.select,
        from: this.options.id
      });
    };
    this.useRouteContext = (opts$1) => {
      return useMatch({
        from: this.options.id,
        select: (d) => (opts$1 == null ? void 0 : opts$1.select) ? opts$1.select(d.context) : d.context
      });
    };
    this.useSearch = (opts$1) => {
      return useSearch({
        select: opts$1 == null ? void 0 : opts$1.select,
        from: this.options.id
      });
    };
    this.useParams = (opts$1) => {
      return useParams({
        select: opts$1 == null ? void 0 : opts$1.select,
        from: this.options.id
      });
    };
    this.useLoaderDeps = (opts$1) => {
      return useLoaderDeps({
        ...opts$1,
        from: this.options.id
      });
    };
    this.useLoaderData = (opts$1) => {
      return useLoaderData({
        ...opts$1,
        from: this.options.id
      });
    };
    this.useNavigate = () => {
      return useNavigate({ from: useRouter().routesById[this.options.id].fullPath });
    };
    this.options = opts;
  }
};
function createLazyFileRoute(id) {
  if (typeof id === "object") return new LazyRoute(id);
  return (opts) => new LazyRoute({
    id,
    ...opts
  });
}
function lazyRouteComponent(importer, exportName) {
  let loadPromise;
  let comp;
  let error;
  const load = () => {
    if (!loadPromise) loadPromise = importer().then((res) => {
      loadPromise = void 0;
      comp = res[exportName ];
      return comp;
    }).catch((err) => {
      error = err;
    });
    return loadPromise;
  };
  const lazyComp = function Lazy(props) {
    if (error) {
      if (isModuleNotFoundError(error)) ;
      throw error;
    }
    if (!comp) {
      const [compResource] = createResource(load, {
        initialValue: comp,
        ssrLoadFrom: "initial"
      });
      return compResource();
    }
    return createComponent(Dynamic, mergeProps({ component: comp }, props));
  };
  lazyComp.preload = load;
  return lazyComp;
}
var PresenceContext = createContext();
function createAndBindMotionState(el, options, presence_state, parent_state) {
  const state = createMotionState((presence_state == null ? void 0 : presence_state.initial) === false ? {
    ...options(),
    initial: false
  } : options(), parent_state);
  createEffect(() => {
    if (presence_state && !presence_state.mount()) return;
    const el_ref = el(), unmount = state.mount(el_ref);
    createEffect(() => state.update(options()));
    onCleanup(() => {
      if (presence_state && options().exit) {
        state.setActive("exit", true);
        el_ref.addEventListener("motioncomplete", unmount);
      } else unmount();
    });
  });
  return [state, createStyles(state.getTarget())];
}
var OPTION_KEYS = [
  "initial",
  "animate",
  "inView",
  "inViewOptions",
  "hover",
  "press",
  "variants",
  "transition",
  "exit"
];
var ATTR_KEYS = ["tag"];
var ParentContext = createContext();
var MotionComponent = (props) => {
  const [options, , attrs] = splitProps(props, OPTION_KEYS, ATTR_KEYS);
  const [state, style2] = createAndBindMotionState(() => root, () => ({ ...options }), useContext(PresenceContext), useContext(ParentContext));
  let root;
  return createComponent(ParentContext.Provider, {
    value: state,
    get children() {
      return createComponent(Dynamic, mergeProps(attrs, {
        get component() {
          return props.tag || "div";
        },
        get style() {
          return combineStyle(props.style, style2);
        }
      }));
    }
  });
};
var Motion = new Proxy(MotionComponent, { get: (_, tag) => (props) => createComponent(MotionComponent, mergeProps(props, { tag })) });

var $$splitComponentImporter$3 = () => import('./thank-you-CdNdwWYK.mjs');
const Route$5 = createFileRoute("/thank-you")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });

var $$splitComponentImporter$2 = () => import('./feedback-Br1J2KGF.mjs');
const Route$4 = createFileRoute("/feedback")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });

var $$splitComponentImporter$1 = () => import('./career-DSoBYV2F.mjs');
const Route$3 = createFileRoute("/career")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });

var $$splitComponentImporter = () => import('./routes-Br8hgGpB.mjs');
const Route$2 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
var Status = /* @__PURE__ */ (function(Status$1) {
  Status$1["Success"] = "SUCCESS";
  Status$1["Error"] = "ERROR";
  Status$1["Failure"] = "FAILURE";
  return Status$1;
})(Status || {});
var ResponseSchema = v.object({
  status: v.enum(Status, "Status must be 'success' or 'error'"),
  message: v.string("Message must be a string")
});
var DataResponseSchema = v.object({
  ...ResponseSchema.entries,
  data: v.optional(v.record(v.string(), v.unknown()))
});
var CareerResult = /* @__PURE__ */ (function(CareerResult$1) {
  CareerResult$1["Frontend"] = "FRONTEND";
  CareerResult$1["Backend"] = "BACKEND";
  CareerResult$1["Design"] = "DESIGN";
  CareerResult$1["Fullstack"] = "FULLSTACK";
  return CareerResult$1;
})(CareerResult || {});
var CareerSchema = v.object({
  name: v.string("Name must be a string"),
  email: v.pipe(v.string(), v.nonEmpty("Please enter your email."), v.email("The email is badly formatted."), v.maxLength(100, "Your email is too long.")),
  year: v.pipe(v.number("Year must be a number"), v.minValue(1, "Year must be at least 1"), v.maxValue(5, "Year must be at most 5")),
  batch: v.pipe(v.number(), v.minValue(2025, "Batch must be at least 2025")),
  department: v.pipe(v.string("Department must be a string"), v.maxLength(100, "Department name is too long.")),
  reasonToChooseTech: v.pipe(v.string("Reason to choose tech must be a string"), v.maxLength(2e3, "Reason is too long.")),
  otherInterests: v.pipe(v.string("Other interests must be a string"), v.maxLength(2e3, "Other interests description is too long.")),
  result: v.enum(CareerResult, "Result must be one of the predefined options")
});
v.object({
  id: v.number("ID must be a number"),
  ...CareerSchema.entries
});
var DatabaseError = class extends Error {
  constructor(message, cause) {
    super(message);
    __publicField(this, "_tag", "DatabaseError");
    this.cause = cause;
    this.name = "DatabaseError";
  }
};
var DuplicateError = class extends Error {
  constructor(message) {
    super(message);
    __publicField(this, "_tag", "DuplicateError");
    this.name = "DuplicateError";
  }
};
const careerResultEnum = pgEnum("careerResult", [
  "FRONTEND",
  "BACKEND",
  "DESIGN",
  "FULLSTACK"
]);
const careerTable = pgTable("career", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  year: integer().notNull(),
  batch: integer().notNull().default(2025),
  department: varchar({ length: 100 }).notNull(),
  reasonToChooseTech: text().notNull(),
  otherInterests: text().notNull(),
  result: careerResultEnum().notNull(),
  createdAt: text().notNull().default("2025-01-01")
});
const sessionTypeEnum = pgEnum("sessionType", [
  "WORKSHOP",
  "LECTURE",
  "HANDS_ON",
  "MOCK_INTERVIEW"
]);
const sessionNameEnum = pgEnum("sessionName", ["GIT_LINKEDIN_BASE"]);
const feedbackTable = pgTable("feedback", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  year: integer().notNull(),
  batch: integer().notNull().default(2025),
  department: varchar({ length: 100 }).notNull(),
  workedWell: varchar({ length: 1e3 }).notNull(),
  improve: varchar({ length: 1e3 }).notNull(),
  rating: integer().notNull(),
  sessionType: sessionTypeEnum().default("LECTURE"),
  sessionName: sessionNameEnum().notNull().default("GIT_LINKEDIN_BASE"),
  sessionDate: date().notNull().default("2025-10-14")
}, (table) => [unique("email_date_unique").on(table.email, table.sessionDate)]);
const database = drizzle(postgres(process.env.SUPABASE_URL || "", { prepare: false }));
var CareerEffect = (_a = class {
}, __publicField(_a, "createCareerEffect", (body) => Effect.tryPromise({
  try: () => database.insert(careerTable).values({
    ...body,
    createdAt: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  }).returning(),
  catch: (error) => {
    var _a2, _b2;
    return error instanceof Error && (error.message.includes("unique") || ((_b2 = (_a2 = error.cause) == null ? void 0 : _a2.constraint_name) == null ? void 0 : _b2.includes("unique"))) ? new DuplicateError("A career submission with this email already exists.") : new DatabaseError("Failed to create career submission. Please try again later.", error);
  }
})), __publicField(_a, "toApiResponse", (result) => {
  const career = result[0];
  return {
    status: Status.Success,
    message: "Career submission created successfully!",
    data: career || {}
  };
}), _a);
var CareerService = class {
  static async create(body) {
    const program = CareerEffect.createCareerEffect(body).pipe(Effect.map(CareerEffect.toApiResponse), Effect.catchAll((error) => Effect.succeed(error._tag === "DuplicateError" ? {
      status: Status.Error,
      message: error.message,
      data: void 0
    } : {
      status: Status.Error,
      message: error.message,
      data: void 0
    })));
    return Effect.runPromise(program);
  }
};
const careerService = new Elysia({
  prefix: "/career",
  tags: ["Career"]
}).post("", ({ body }) => CareerService.create(body), {
  body: CareerSchema,
  response: DataResponseSchema,
  detail: {
    summary: "Create career submission",
    description: "Submit career information to help determine the best career path."
  }
});
var SessionTypes = /* @__PURE__ */ (function(SessionTypes$1) {
  SessionTypes$1["Lecture"] = "LECTURE";
  return SessionTypes$1;
})(SessionTypes || {});
var SessionName = /* @__PURE__ */ (function(SessionName$1) {
  SessionName$1["GitLinkedInBase"] = "GIT_LINKEDIN_BASE";
  return SessionName$1;
})(SessionName || {});
var FeedbackSchema = v.object({
  name: v.string("Name must be a string"),
  email: v.pipe(v.string(), v.nonEmpty("Please enter your email."), v.email("The email is badly formatted."), v.maxLength(30, "Your email is too long.")),
  year: v.pipe(v.number("Year must be a number"), v.minValue(1, "Year must be at least 1"), v.maxValue(5, "Year must be at most 5")),
  batch: v.pipe(v.number("Batch must be a number"), v.minValue(2025, "Batch must be at least 2025")),
  department: v.pipe(v.string("Department must be a string"), v.maxLength(100, "Department name is too long.")),
  workedWell: v.pipe(v.string("Worked well must be a string"), v.maxLength(1e3, "Your feedback is too long.")),
  improve: v.pipe(v.string("Improve must be a string"), v.maxLength(1e3, "Your feedback is too long.")),
  rating: v.pipe(v.number("Rating must be a number"), v.minValue(1, "Rating must be at least 1"), v.maxValue(5, "Rating must be at most 5")),
  sessionType: v.enum(SessionTypes, "Session type must be one of the predefined types"),
  sessionName: v.enum(SessionName, "Session name must be one of the predefined names"),
  sessionDate: v.string("Session date must be a string")
});
v.object({
  id: v.number("ID must be a number"),
  ...FeedbackSchema.entries
});
var FeedbackEffect = (_b = class {
}, __publicField(_b, "createFeedbackEffect", (body) => Effect.tryPromise({
  try: () => database.insert(feedbackTable).values({
    ...body,
    sessionDate: new Date(body.sessionDate).toISOString().split("T")[0] || (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  }).returning(),
  catch: (error) => {
    var _a2, _b2;
    return error instanceof Error && (error.message.includes("unique") || ((_b2 = (_a2 = error.cause) == null ? void 0 : _a2.constraint_name) == null ? void 0 : _b2.includes("unique"))) ? new DuplicateError("A feedback with this email for this session date already exists.") : new DatabaseError("Failed to create feedback. Please try again later.", error);
  }
})), __publicField(_b, "toApiResponse", (result) => {
  const feedback = result[0];
  return {
    status: Status.Success,
    message: "Feedback created successfully!",
    data: feedback ? {
      ...feedback,
      sessionDate: new Date(feedback.sessionDate).toISOString().split("T")[0]
    } : {}
  };
}), _b);
var FeedbackService = class {
  static async create(body) {
    const program = FeedbackEffect.createFeedbackEffect(body).pipe(Effect.map(FeedbackEffect.toApiResponse), Effect.catchAll((error) => Effect.succeed(error._tag === "DuplicateError" ? {
      status: Status.Error,
      message: error.message,
      data: void 0
    } : {
      status: Status.Error,
      message: error.message,
      data: void 0
    })));
    return Effect.runPromise(program);
  }
};
const feedbackService = new Elysia({
  prefix: "/feedback",
  tags: ["Feedback"]
}).post("", ({ body }) => FeedbackService.create(body), {
  body: FeedbackSchema,
  response: DataResponseSchema,
  detail: {
    summary: "Create feedback",
    description: "Create feedback for a session that was conducted."
  }
});
var RootService = class {
  static async root() {
    return {
      status: Status.Success,
      message: "Welcome to Mentorship.01 API! Elysia is running!"
    };
  }
};
var root_default = new Elysia({ detail: {
  tags: ["Root"],
  summary: "Get welcome message",
  description: "Returns a welcome message confirming the API is running"
} }).get("", () => RootService.root(), { response: ResponseSchema });
var app = new Elysia({
  prefix: "/api",
  aot: true,
  name: "Mentorship.01",
  analytic: true,
  sucrose: {}
}).use(cors({
  origin: true,
  methods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "OPTIONS"
  ],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
})).use(serverTiming()).use(openapi({
  documentation: {
    info: {
      title: "Mentorship.01",
      description: "Mentorship.01: A mentorship application for mentoring people, collecting feedback after each session, and providing guidance, extensible to handle future session types.",
      version: "0.0.1"
    },
    servers: [{
      url: "http://localhost:3000/api",
      description: "Development server"
    }, {
      url: "https://mentorship01.crazzle.dev/api",
      description: "Production server"
    }]
  },
  mapJsonSchema: { valibot: toJsonSchema },
  references: fromTypes("dist/index.d.ts" )
})).get("/health", () => {
  return {
    status: Status.Success,
    message: "Service is healthy"
  };
}, {
  response: ResponseSchema,
  detail: {
    tags: ["Health"],
    summary: "Check service health",
    description: "Returns the health status of the API service"
  }
}).use(root_default).use(feedbackService).use(careerService);
var handle = async ({ request }) => {
  try {
    return await app.fetch(request);
  } catch (_error) {
    console.log("API handler error:", _error);
    return new Response(JSON.stringify({
      status: "error",
      message: "Internal server error"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const Route$1 = createFileRoute("/api/$")({ server: { handlers: {
  GET: handle,
  POST: handle,
  PUT: handle,
  DELETE: handle,
  PATCH: handle,
  OPTIONS: handle
} } });
const api = () => treaty(app).api;

const createRouter = (options) => {
  return new Router(options);
};
var Router = class extends RouterCore {
  constructor(options) {
    super(options);
  }
};
if (typeof globalThis !== "undefined") {
  globalThis.createFileRoute = createFileRoute;
  globalThis.createLazyFileRoute = createLazyFileRoute;
}
const TanStackRouterDevtools = function() {
  return null;
} ;
var _tmpl$$1 = [
  "<div",
  ' class="text-center"><div class="perspective-container mb-12"><div class="cube-wrapper"><div class="cube"><div class="cube-face front"></div><div class="cube-face back"></div><div class="cube-face right"></div><div class="cube-face left"></div><div class="cube-face top"></div><div class="cube-face bottom"></div></div></div></div><!--$-->',
  '<!--/--><div class="flex justify-center gap-2 mt-6"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--><!--$-->",
  "<!--/--></div></div>"
], _tmpl$2 = ["<style", ">\n				.perspective-container {\n					perspective: 1200px;\n					width: 120px;\n					height: 120px;\n					margin: 0 auto;\n				}\n\n				.cube-wrapper {\n					width: 120px;\n					height: 120px;\n					position: relative;\n					transform-style: preserve-3d;\n					animation: rotateCube 4s infinite linear;\n				}\n\n				@keyframes rotateCube {\n					0% {\n						transform: rotateX(-25deg) rotateY(-25deg);\n					}\n					100% {\n						transform: rotateX(-25deg) rotateY(335deg);\n					}\n				}\n\n				.cube {\n					width: 120px;\n					height: 120px;\n					position: relative;\n					transform-style: preserve-3d;\n					animation: breathe 2s infinite ease-in-out;\n				}\n\n				@keyframes breathe {\n					0%, 100% {\n						transform: scale(1);\n					}\n					50% {\n						transform: scale(1.05);\n					}\n				}\n\n				.cube-face {\n					position: absolute;\n					width: 120px;\n					height: 120px;\n					border: 2px solid;\n					opacity: 0.95;\n					backdrop-filter: blur(10px);\n					transition: border-color 0.3s ease, background 0.3s ease;\n					backface-visibility: visible;\n				}\n\n				.cube-face {\n					border-color: #000000;\n					background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%);\n					box-shadow: \n						inset 0 0 20px rgba(0, 0, 0, 0.05),\n						0 0 30px rgba(0, 0, 0, 0.03);\n				}\n\n				.dark .cube-face {\n					border-color: #ffffff;\n					background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%);\n					box-shadow: \n						inset 0 0 20px rgba(255, 255, 255, 0.05),\n						0 0 30px rgba(255, 255, 255, 0.08);\n				}\n\n				.front {\n					transform: rotateY(0deg) translateZ(60px);\n				}\n\n				.back {\n					transform: rotateY(180deg) translateZ(60px);\n				}\n\n				.right {\n					transform: rotateY(90deg) translateZ(60px);\n				}\n\n				.left {\n					transform: rotateY(-90deg) translateZ(60px);\n				}\n\n				.top {\n					transform: rotateX(90deg) translateZ(60px);\n				}\n\n				.bottom {\n					transform: rotateX(-90deg) translateZ(60px);\n				}\n\n				/* Add some animation to the faces */\n				.cube-face::before {\n					content: '';\n					position: absolute;\n					inset: 10px;\n					border: 1px solid currentColor;\n					opacity: 0.2;\n					animation: pulse 2s infinite ease-in-out;\n				}\n\n				@keyframes pulse {\n					0%, 100% {\n						opacity: 0.1;\n						transform: scale(1);\n					}\n					50% {\n						opacity: 0.3;\n						transform: scale(0.95);\n					}\n				}\n\n				.front::before { animation-delay: 0s; }\n				.back::before { animation-delay: 0.2s; }\n				.right::before { animation-delay: 0.4s; }\n				.left::before { animation-delay: 0.6s; }\n				.top::before { animation-delay: 0.8s; }\n				.bottom::before { animation-delay: 1s; }\n			</style>"];
function LoadingSplash(props) {
  const [isExiting, setIsExiting] = createSignal(false);
  onMount(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        props.onLoadingComplete();
      }, 800);
    }, 2500);
    return () => clearTimeout(timer);
  });
  return createComponent(Motion.div, {
    initial: { opacity: 1 },
    get animate() {
      return {
        opacity: isExiting() ? 0 : 1,
        scale: isExiting() ? 1.2 : 1
      };
    },
    transition: { duration: 0.8 },
    "class": "fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center transition-colors duration-200",
    get children() {
      return [ssr(_tmpl$$1, ssrHydrationKey(), escape(createComponent(Motion.div, {
        "class": "tracking-widest text-sm font-medium text-black dark:text-white",
        animate: { opacity: [
          0.4,
          1,
          0.4
        ] },
        get transition() {
          return {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            easing: "ease-in-out"
          };
        },
        children: "LOADING MENTORSHIP"
      })), escape(createComponent(Motion.div, {
        "class": "w-2 h-2 rounded-full bg-black dark:bg-white",
        animate: {
          scale: [
            1,
            1.5,
            1
          ],
          opacity: [
            0.3,
            1,
            0.3
          ]
        },
        get transition() {
          return {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
            delay: 0
          };
        }
      })), escape(createComponent(Motion.div, {
        "class": "w-2 h-2 rounded-full bg-black dark:bg-white",
        animate: {
          scale: [
            1,
            1.5,
            1
          ],
          opacity: [
            0.3,
            1,
            0.3
          ]
        },
        get transition() {
          return {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
            delay: 0.2
          };
        }
      })), escape(createComponent(Motion.div, {
        "class": "w-2 h-2 rounded-full bg-black dark:bg-white",
        animate: {
          scale: [
            1,
            1.5,
            1
          ],
          opacity: [
            0.3,
            1,
            0.3
          ]
        },
        get transition() {
          return {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
            delay: 0.4
          };
        }
      }))), ssr(_tmpl$2, ssrHydrationKey())];
    }
  });
}
function clientOnly(fn) {
  if (isServer) return (props) => props.fallback;
  const [comp, setComp] = createSignal();
  fn().then((m) => setComp(() => m.default));
  return (props) => {
    let Comp;
    let m;
    const [, rest] = splitProps(props, ["fallback"]);
    if ((Comp = comp()) && !sharedConfig.context) return Comp(rest);
    const [mounted, setMounted] = createSignal(!sharedConfig.context);
    onMount(() => setMounted(true));
    return createMemo(() => (Comp = comp(), m = mounted(), untrack(() => Comp && m ? Comp(rest) : props.fallback)));
  };
}
var SolidQueryDevtools = isDev ? clientOnly(() => import('./4LKOWRT2-B6XgyPUg.mjs')) : function() {
  return null;
};
isDev && clientOnly(() => import('./YI6MKFAH-BTGD5CSn.mjs'));
var MentorshipQueryDevTools = () => {
  return createComponent(SolidQueryDevtools, { buttonPosition: "bottom-right" });
};
var qdevtools_default = MentorshipQueryDevTools;
var queryClient = new QueryClient();
var MentorshipQueryProvider = (props) => {
  return createComponent(QueryClientProvider, {
    client: queryClient,
    get children() {
      return props.children;
    }
  });
};
var query_default = MentorshipQueryProvider;
var styles_default = "/assets/styles-B_rn2JGv.css";
const Route = createRootRouteWithContext()({
  head: () => ({
    links: [{
      rel: "stylesheet",
      href: styles_default
    }],
    meta: [{
      title: "Mentorship.01",
      lang: "en-US",
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    }]
  }),
  shellComponent: RootComponent
});
function RootComponent() {
  const [isLoading, setIsLoading] = createSignal(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return [createComponent(query_default, { get children() {
    return [
      createComponent(HeadContent, {}),
      createComponent(Show, {
        get when() {
          return isLoading();
        },
        get children() {
          return createComponent(LoadingSplash, { onLoadingComplete: handleLoadingComplete });
        }
      }),
      createComponent(Show, {
        get when() {
          return !isLoading();
        },
        get children() {
          return [
            createComponent(Outlet, {}),
            createComponent(TanStackRouterDevtools, {}),
            createComponent(qdevtools_default, {})
          ];
        }
      })
    ];
  } }), createComponent(Scripts, {})];
}
var ThankYouRoute = Route$5.update({
  id: "/thank-you",
  path: "/thank-you",
  getParentRoute: () => Route
});
var FeedbackRoute = Route$4.update({
  id: "/feedback",
  path: "/feedback",
  getParentRoute: () => Route
});
var CareerRoute = Route$3.update({
  id: "/career",
  path: "/career",
  getParentRoute: () => Route
});
var rootRouteChildren = {
  IndexRoute: Route$2.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route
  }),
  CareerRoute,
  FeedbackRoute,
  ThankYouRoute,
  ApiSplatRoute: Route$1.update({
    id: "/api/$",
    path: "/api/$",
    getParentRoute: () => Route
  })
};
const routeTree = Route._addFileChildren(rootRouteChildren)._addFileTypes();
var _tmpl$ = ["<div", ' class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"><div class="text-center px-6"><h1 class="text-6xl font-bold text-black dark:text-white mb-4">404</h1><p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p><a href="/" class="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">Go Home</a></div></div>'];
const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: () => ssr(_tmpl$, ssrHydrationKey())
  });
};

const routerDq_AAJ66 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getRouter: getRouter
});

export { CareerResult as C, Motion as M, Route$2 as R, SessionName as S, api as a, SessionTypes as b, routerDq_AAJ66 as r, useNavigate as u };
//# sourceMappingURL=router-Dq_AAJ66.mjs.map
