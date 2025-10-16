import { createComponent, mergeProps, ssrElement, escape, Dynamic } from 'solid-js/web';
import { splitProps, createMemo, For, mergeProps as mergeProps$1, createSignal, createEffect } from 'solid-js';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

var defaultAttributes_default = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var Icon = (props) => {
  const [localProps, rest] = splitProps(props, [
    "color",
    "size",
    "strokeWidth",
    "children",
    "class",
    "name",
    "iconNode",
    "absoluteStrokeWidth"
  ]);
  return ssrElement("svg", mergeProps(defaultAttributes_default, {
    get width() {
      var _a;
      return (_a = localProps.size) != null ? _a : defaultAttributes_default.width;
    },
    get height() {
      var _a;
      return (_a = localProps.size) != null ? _a : defaultAttributes_default.height;
    },
    get stroke() {
      var _a;
      return (_a = localProps.color) != null ? _a : defaultAttributes_default.stroke;
    },
    get ["stroke-width"]() {
      var _a, _b;
      return localProps.absoluteStrokeWidth ? Number((_a = localProps.strokeWidth) != null ? _a : defaultAttributes_default["stroke-width"]) * 24 / Number(localProps.size) : Number((_b = localProps.strokeWidth) != null ? _b : defaultAttributes_default["stroke-width"]);
    },
    get ["class"]() {
      return mergeClasses("lucide", "lucide-icon", ...localProps.name != null ? [`lucide-${toKebabCase(toPascalCase(localProps.name))}`, `lucide-${toKebabCase(localProps.name)}`] : [], localProps.class != null ? localProps.class : "");
    }
  }, rest), () => escape(createComponent(For, {
    get each() {
      return localProps.iconNode;
    },
    children: ([elementName, attrs]) => {
      return createComponent(Dynamic, mergeProps({ component: elementName }, attrs));
    }
  })), true);
};
var Icon_default = Icon;
function removeItemFromArray(array, item) {
  const updatedArray = [...array];
  const index = updatedArray.indexOf(item);
  if (index !== -1) updatedArray.splice(index, 1);
  return updatedArray;
}
function isNumber(value) {
  return typeof value === "number";
}
function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isFunction(value) {
  return typeof value === "function";
}
function createGenerateId(baseId) {
  return (suffix) => `${baseId()}-${suffix}`;
}
function contains(parent, child) {
  if (!parent) return false;
  return parent === child || parent.contains(child);
}
function getActiveElement(node, activeDescendant = false) {
  const { activeElement } = getDocument(node);
  if (!(activeElement == null ? void 0 : activeElement.nodeName)) return null;
  if (isFrame(activeElement) && activeElement.contentDocument) return getActiveElement(activeElement.contentDocument.body, activeDescendant);
  if (activeDescendant) {
    const id = activeElement.getAttribute("aria-activedescendant");
    if (id) {
      const element = getDocument(activeElement).getElementById(id);
      if (element) return element;
    }
  }
  return activeElement;
}
function getWindow(node) {
  return getDocument(node).defaultView || window;
}
function getDocument(node) {
  return node ? node.ownerDocument || node : document;
}
function isFrame(element) {
  return element.tagName === "IFRAME";
}
var EventKey = /* @__PURE__ */ ((EventKey2) => {
  EventKey2["Escape"] = "Escape";
  EventKey2["Enter"] = "Enter";
  EventKey2["Tab"] = "Tab";
  EventKey2["Space"] = " ";
  EventKey2["ArrowDown"] = "ArrowDown";
  EventKey2["ArrowLeft"] = "ArrowLeft";
  EventKey2["ArrowRight"] = "ArrowRight";
  EventKey2["ArrowUp"] = "ArrowUp";
  EventKey2["End"] = "End";
  EventKey2["Home"] = "Home";
  EventKey2["PageDown"] = "PageDown";
  EventKey2["PageUp"] = "PageUp";
  return EventKey2;
})(EventKey || {});
function callHandler(event, handler) {
  if (handler) if (isFunction(handler)) handler(event);
  else handler[0](handler[1], event);
  return event == null ? void 0 : event.defaultPrevented;
}
function composeEventHandlers(handlers) {
  return (event) => {
    for (const handler of handlers) callHandler(event, handler);
  };
}
function isCtrlKey(e) {
  return e.ctrlKey && !e.metaKey;
}
function focusWithoutScrolling(element) {
  if (!element) return;
  if (supportsPreventScroll()) element.focus({ preventScroll: true });
  else {
    const scrollableElements = getScrollableElements(element);
    element.focus();
    restoreScrollPosition(scrollableElements);
  }
}
var supportsPreventScrollCached = null;
function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false;
    try {
      document.createElement("div").focus({ get preventScroll() {
        supportsPreventScrollCached = true;
        return true;
      } });
    } catch (e) {
    }
  }
  return supportsPreventScrollCached;
}
function getScrollableElements(element) {
  let parent = element.parentNode;
  const scrollableElements = [];
  const rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function restoreScrollPosition(scrollableElements) {
  for (const { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
var focusableElements = [
  "input:not([type='hidden']):not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "[tabindex]",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]:not([contenteditable='false'])"
];
var tabbableElements = [...focusableElements, '[tabindex]:not([tabindex="-1"]):not([disabled])'];
var FOCUSABLE_ELEMENT_SELECTOR = `${focusableElements.join(":not([hidden]),")},[tabindex]:not([disabled]):not([hidden])`;
var TABBABLE_ELEMENT_SELECTOR = tabbableElements.join(':not([hidden]):not([tabindex="-1"]),');
function getAllTabbableIn(container, includeContainer) {
  const tabbableElements2 = Array.from(container.querySelectorAll(FOCUSABLE_ELEMENT_SELECTOR)).filter(isTabbable);
  if (includeContainer && isTabbable(container)) tabbableElements2.unshift(container);
  tabbableElements2.forEach((element, i) => {
    if (isFrame(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      const allFrameTabbable = getAllTabbableIn(frameBody, false);
      tabbableElements2.splice(i, 1, ...allFrameTabbable);
    }
  });
  return tabbableElements2;
}
function isTabbable(element) {
  return isFocusable(element) && !hasNegativeTabIndex(element);
}
function isFocusable(element) {
  return element.matches(FOCUSABLE_ELEMENT_SELECTOR) && isElementVisible(element);
}
function hasNegativeTabIndex(element) {
  return Number.parseInt(element.getAttribute("tabindex") || "0", 10) < 0;
}
function isElementVisible(element, childElement) {
  return element.nodeName !== "#comment" && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
}
function isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
  const { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    if (!element.ownerDocument.defaultView) return isVisible;
    const { getComputedStyle } = element.ownerDocument.defaultView;
    const { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function getFocusableTreeWalker(root, opts, scope) {
  const selector = (opts == null ? void 0 : opts.tabbable) ? TABBABLE_ELEMENT_SELECTOR : FOCUSABLE_ELEMENT_SELECTOR;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, { acceptNode(node) {
    var _a;
    if ((_a = opts == null ? void 0 : opts.from) == null ? void 0 : _a.contains(node)) return NodeFilter.FILTER_REJECT;
    if (node.matches(selector) && isElementVisible(node) && (true) && (!(opts == null ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
    return NodeFilter.FILTER_SKIP;
  } });
  if (opts == null ? void 0 : opts.from) walker.currentNode = opts.from;
  return walker;
}
function noop() {
}
function clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(value, min), max);
}
function mergeDefaultProps(defaultProps, props) {
  return mergeProps$1(defaultProps, props);
}
function setupGlobalEvents() {
  return;
}
if (typeof document !== "undefined") if (document.readyState !== "loading") ;
else document.addEventListener("DOMContentLoaded", setupGlobalEvents);
function scrollIntoView(scrollView, element) {
  const offsetX = relativeOffset(scrollView, element, "left");
  const offsetY = relativeOffset(scrollView, element, "top");
  const width = element.offsetWidth;
  const height = element.offsetHeight;
  let x = scrollView.scrollLeft;
  let y = scrollView.scrollTop;
  const maxX = x + scrollView.offsetWidth;
  const maxY = y + scrollView.offsetHeight;
  if (offsetX <= x) x = offsetX;
  else if (offsetX + width > maxX) x += offsetX + width - maxX;
  if (offsetY <= y) y = offsetY;
  else if (offsetY + height > maxY) y += offsetY + height - maxY;
  scrollView.scrollLeft = x;
  scrollView.scrollTop = y;
}
function relativeOffset(ancestor, child, axis) {
  const prop = axis === "left" ? "offsetLeft" : "offsetTop";
  let sum = 0;
  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor) break;
    if (child.offsetParent.contains(ancestor)) {
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }
  return sum;
}
var visuallyHiddenStyles = {
  border: "0",
  clip: "rect(0 0 0 0)",
  "clip-path": "inset(50%)",
  height: "1px",
  margin: "0 -1px -1px 0",
  overflow: "hidden",
  padding: "0",
  position: "absolute",
  width: "1px",
  "white-space": "nowrap"
};
function createTagName(ref, fallback) {
  const [tagName, setTagName] = createSignal(stringOrUndefined(fallback == null ? void 0 : fallback()));
  createEffect(() => {
    var _a;
    setTagName(((_a = ref()) == null ? void 0 : _a.tagName.toLowerCase()) || stringOrUndefined(fallback == null ? void 0 : fallback()));
  });
  return tagName;
}
function stringOrUndefined(value) {
  return isString(value) ? value : void 0;
}
function Polymorphic(props) {
  const [local, others] = splitProps(props, ["as"]);
  if (!local.as) throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
  return createComponent(Dynamic, mergeProps(others, { get component() {
    return local.as;
  } }));
}
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
__export({}, {
  Button: () => Button$1,
  Root: () => ButtonRoot
});
var BUTTON_INPUT_TYPES = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
];
function isButton(element) {
  const tagName = element.tagName.toLowerCase();
  if (tagName === "button") return true;
  if (tagName === "input" && element.type) return BUTTON_INPUT_TYPES.indexOf(element.type) !== -1;
  return false;
}
function ButtonRoot(props) {
  let ref;
  const [local, others] = splitProps(mergeDefaultProps({ type: "button" }, props), [
    "ref",
    "type",
    "disabled"
  ]);
  const tagName = createTagName(() => ref, () => "button");
  const isNativeButton = createMemo(() => {
    const elementTagName = tagName();
    if (elementTagName == null) return false;
    return isButton({
      tagName: elementTagName,
      type: local.type
    });
  });
  const isNativeInput = createMemo(() => {
    return tagName() === "input";
  });
  const isNativeLink = createMemo(() => {
    return tagName() === "a" && (void 0 ) != null;
  });
  return createComponent(Polymorphic, mergeProps({
    as: "button",
    get type() {
      return isNativeButton() || isNativeInput() ? local.type : void 0;
    },
    get role() {
      return !isNativeButton() && !isNativeLink() ? "button" : void 0;
    },
    get tabIndex() {
      return !isNativeButton() && !isNativeLink() && !local.disabled ? 0 : void 0;
    },
    get disabled() {
      return isNativeButton() || isNativeInput() ? local.disabled : void 0;
    },
    get ["aria-disabled"]() {
      return !isNativeButton() && !isNativeInput() && local.disabled ? true : void 0;
    },
    get ["data-disabled"]() {
      return local.disabled ? "" : void 0;
    }
  }, others));
}
var Button$1 = ButtonRoot;
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3 text-xs",
      lg: "h-11 px-8",
      icon: "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var Button = (props) => {
  const [local, others] = splitProps(props, [
    "variant",
    "size",
    "class"
  ]);
  return createComponent(ButtonRoot, mergeProps({ get ["class"]() {
    return cn(buttonVariants({
      variant: local.variant,
      size: local.size
    }), local.class);
  } }, others));
};

export { Button as B, EventKey as E, Icon_default as I, Polymorphic as P, __export as _, createGenerateId as a, callHandler as b, cn as c, createTagName as d, ButtonRoot as e, composeEventHandlers as f, clamp as g, getActiveElement as h, isFunction as i, contains as j, focusWithoutScrolling as k, getDocument as l, mergeDefaultProps as m, isFocusable as n, noop as o, isString as p, isNumber as q, removeItemFromArray as r, getWindow as s, getAllTabbableIn as t, scrollIntoView as u, visuallyHiddenStyles as v, isCtrlKey as w, getFocusableTreeWalker as x };
//# sourceMappingURL=button-DALkyRBc.mjs.map
