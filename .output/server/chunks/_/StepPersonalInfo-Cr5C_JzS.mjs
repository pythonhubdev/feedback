import { I as Icon_default, c as cn, m as mergeDefaultProps, P as Polymorphic, a as createGenerateId, d as createTagName, e as ButtonRoot, i as isFunction, f as composeEventHandlers, g as clamp, b as callHandler, h as getActiveElement, j as contains$1, k as focusWithoutScrolling, l as getDocument, r as removeItemFromArray, n as isFocusable, v as visuallyHiddenStyles, o as noop, p as isString, q as isNumber, s as getWindow, t as getAllTabbableIn, E as EventKey, u as scrollIntoView, w as isCtrlKey, x as getFocusableTreeWalker, _ as __export } from './button-DALkyRBc.mjs';
import { createComponent, ssr, ssrHydrationKey, escape, mergeProps, ssrAttribute, Portal, isServer, ssrStyle, ssrStyleProperty, ssrElement } from 'solid-js/web';
import { splitProps, mergeProps as mergeProps$1, createMemo, createEffect, onCleanup, Show, createSignal, For, createUniqueId, createContext, on, useContext, children, createComputed, untrack, onMount, Switch, Match } from 'solid-js';
import { combineStyle } from '@solid-primitives/props';
import { cva } from 'class-variance-authority';
import { NumberFormatter } from '@internationalized/number';
import { autoUpdate, offset, flip, shift, size, hide, arrow, computePosition, platform } from '@floating-ui/dom';
import { access, accessWith } from '@solid-primitives/utils';
import { Key } from '@solid-primitives/keyed';
import { createEventListener } from '@solid-primitives/event-listener';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function styleInject(css, { insertAt } = {}) {
  if (typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") if (head.firstChild) head.insertBefore(style, head.firstChild);
  else head.appendChild(style);
  else head.appendChild(style);
  if (style.styleSheet) style.styleSheet.cssText = css;
  else style.appendChild(document.createTextNode(css));
}
styleInject(':where(html[dir=ltr]),\n:where([data-sonner-toaster][dir=ltr]) {\n  --toast-icon-margin-start: -3px;\n  --toast-icon-margin-end: 4px;\n  --toast-svg-margin-start: -1px;\n  --toast-svg-margin-end: 0px;\n  --toast-button-margin-start: auto;\n  --toast-button-margin-end: 0;\n  --toast-close-button-start: 0;\n  --toast-close-button-end: unset;\n  --toast-close-button-transform: translate(-35%, -35%);\n}\n:where(html[dir=rtl]),\n:where([data-sonner-toaster][dir=rtl]) {\n  --toast-icon-margin-start: 4px;\n  --toast-icon-margin-end: -3px;\n  --toast-svg-margin-start: 0px;\n  --toast-svg-margin-end: -1px;\n  --toast-button-margin-start: 0;\n  --toast-button-margin-end: auto;\n  --toast-close-button-start: unset;\n  --toast-close-button-end: 0;\n  --toast-close-button-transform: translate(35%, -35%);\n}\n:where([data-sonner-toaster]) {\n  position: fixed;\n  width: var(--width);\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    Segoe UI,\n    Roboto,\n    Helvetica Neue,\n    Arial,\n    Noto Sans,\n    sans-serif,\n    Apple Color Emoji,\n    Segoe UI Emoji,\n    Segoe UI Symbol,\n    Noto Color Emoji;\n  --gray1: hsl(0, 0%, 99%);\n  --gray2: hsl(0, 0%, 97.3%);\n  --gray3: hsl(0, 0%, 95.1%);\n  --gray4: hsl(0, 0%, 93%);\n  --gray5: hsl(0, 0%, 90.9%);\n  --gray6: hsl(0, 0%, 88.7%);\n  --gray7: hsl(0, 0%, 85.8%);\n  --gray8: hsl(0, 0%, 78%);\n  --gray9: hsl(0, 0%, 56.1%);\n  --gray10: hsl(0, 0%, 52.3%);\n  --gray11: hsl(0, 0%, 43.5%);\n  --gray12: hsl(0, 0%, 9%);\n  --border-radius: 8px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  outline: none;\n  z-index: 999999999;\n}\n:where([data-sonner-toaster][data-x-position=right]) {\n  right: max(var(--offset), env(safe-area-inset-right));\n}\n:where([data-sonner-toaster][data-x-position=left]) {\n  left: max(var(--offset), env(safe-area-inset-left));\n}\n:where([data-sonner-toaster][data-x-position=center]) {\n  left: 50%;\n  transform: translateX(-50%);\n}\n:where([data-sonner-toaster][data-y-position=top]) {\n  top: max(var(--offset), env(safe-area-inset-top));\n}\n:where([data-sonner-toaster][data-y-position=bottom]) {\n  bottom: max(var(--offset), env(safe-area-inset-bottom));\n}\n:where([data-sonner-toast]) {\n  --y: translateY(100%);\n  --lift-amount: calc(var(--lift) * var(--gap));\n  z-index: var(--z-index);\n  position: absolute;\n  opacity: 0;\n  transform: var(--y);\n  filter: blur(0);\n  touch-action: none;\n  transition:\n    transform 400ms,\n    opacity 400ms,\n    height 400ms,\n    box-shadow 200ms;\n  box-sizing: border-box;\n  outline: none;\n  overflow-wrap: anywhere;\n}\n:where([data-sonner-toast][data-styled=true]) {\n  padding: 16px;\n  background: var(--normal-bg);\n  border: 1px solid var(--normal-border);\n  color: var(--normal-text);\n  border-radius: var(--border-radius);\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);\n  width: var(--width);\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n:where([data-sonner-toast]:focus-visible) {\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);\n}\n:where([data-sonner-toast][data-y-position=top]) {\n  top: 0;\n  --y: translateY(-100%);\n  --lift: 1;\n  --lift-amount: calc(1 * var(--gap));\n}\n:where([data-sonner-toast][data-y-position=bottom]) {\n  bottom: 0;\n  --y: translateY(100%);\n  --lift: -1;\n  --lift-amount: calc(var(--lift) * var(--gap));\n}\n:where([data-sonner-toast]) :where([data-description]) {\n  font-weight: 400;\n  line-height: 1.4;\n  color: inherit;\n}\n:where([data-sonner-toast]) :where([data-title]) {\n  font-weight: 500;\n  line-height: 1.5;\n  color: inherit;\n}\n:where([data-sonner-toast]) :where([data-icon]) {\n  display: flex;\n  height: 16px;\n  width: 16px;\n  position: relative;\n  justify-content: flex-start;\n  align-items: center;\n  flex-shrink: 0;\n  margin-left: var(--toast-icon-margin-start);\n  margin-right: var(--toast-icon-margin-end);\n}\n:where([data-sonner-toast][data-promise=true]) :where([data-icon]) > svg {\n  opacity: 0;\n  transform: scale(0.8);\n  transform-origin: center;\n  animation: sonner-fade-in 300ms ease forwards;\n}\n:where([data-sonner-toast]) :where([data-icon]) > * {\n  flex-shrink: 0;\n}\n:where([data-sonner-toast]) :where([data-icon]) svg {\n  margin-left: var(--toast-svg-margin-start);\n  margin-right: var(--toast-svg-margin-end);\n}\n:where([data-sonner-toast]) :where([data-content]) {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n[data-sonner-toast][data-styled=true] [data-button] {\n  border-radius: 4px;\n  padding-left: 8px;\n  padding-right: 8px;\n  height: 24px;\n  font-size: 12px;\n  color: var(--normal-bg);\n  background: var(--normal-text);\n  margin-left: var(--toast-button-margin-start);\n  margin-right: var(--toast-button-margin-end);\n  border: none;\n  cursor: pointer;\n  outline: none;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  transition: opacity 400ms, box-shadow 200ms;\n}\n:where([data-sonner-toast]) :where([data-button]):focus-visible {\n  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);\n}\n:where([data-sonner-toast]) :where([data-button]):first-of-type {\n  margin-left: var(--toast-button-margin-start);\n  margin-right: var(--toast-button-margin-end);\n}\n:where([data-sonner-toast]) :where([data-cancel]) {\n  color: var(--normal-text);\n  background: rgba(0, 0, 0, 0.08);\n}\n:where([data-sonner-toast][data-theme=dark]) :where([data-cancel]) {\n  background: rgba(255, 255, 255, 0.3);\n}\n:where([data-sonner-toast]) :where([data-close-button]) {\n  position: absolute;\n  left: var(--toast-close-button-start);\n  right: var(--toast-close-button-end);\n  top: 0;\n  height: 20px;\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  background: var(--gray1);\n  color: var(--gray12);\n  border: 1px solid var(--gray4);\n  transform: var(--toast-close-button-transform);\n  border-radius: 50%;\n  cursor: pointer;\n  z-index: 1;\n  transition:\n    opacity 100ms,\n    background 200ms,\n    border-color 200ms;\n}\n:where([data-sonner-toast]) :where([data-close-button]):focus-visible {\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 2px rgba(0, 0, 0, 0.2);\n}\n:where([data-sonner-toast]) :where([data-disabled=true]) {\n  cursor: not-allowed;\n}\n:where([data-sonner-toast]):hover :where([data-close-button]):hover {\n  background: var(--gray2);\n  border-color: var(--gray5);\n}\n:where([data-sonner-toast][data-swiping=true])::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100%;\n  z-index: -1;\n}\n:where([data-sonner-toast][data-y-position=top][data-swiping=true])::before {\n  bottom: 50%;\n  transform: scaleY(3) translateY(50%);\n}\n:where([data-sonner-toast][data-y-position=bottom][data-swiping=true])::before {\n  top: 50%;\n  transform: scaleY(3) translateY(-50%);\n}\n:where([data-sonner-toast][data-swiping=false][data-removed=true])::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  transform: scaleY(2);\n}\n:where([data-sonner-toast])::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  height: calc(var(--gap) + 1px);\n  bottom: 100%;\n  width: 100%;\n}\n:where([data-sonner-toast][data-mounted=true]) {\n  --y: translateY(0);\n  opacity: 1;\n}\n:where([data-sonner-toast][data-expanded=false][data-front=false]) {\n  --scale: var(--toasts-before) * 0.05 + 1;\n  --y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));\n  height: var(--front-toast-height);\n}\n:where([data-sonner-toast]) > * {\n  transition: opacity 400ms;\n}\n:where([data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]) > * {\n  opacity: 0;\n}\n:where([data-sonner-toast][data-visible=false]) {\n  opacity: 0;\n  pointer-events: none;\n}\n:where([data-sonner-toast][data-mounted=true][data-expanded=true]) {\n  --y: translateY(calc(var(--lift) * var(--offset)));\n  height: var(--initial-height);\n}\n:where([data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]) {\n  --y: translateY(calc(var(--lift) * -100%));\n  opacity: 0;\n}\n:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]) {\n  --y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));\n  opacity: 0;\n}\n:where([data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]) {\n  --y: translateY(40%);\n  opacity: 0;\n  transition: transform 500ms, opacity 200ms;\n}\n:where([data-sonner-toast][data-removed=true][data-front=false])::before {\n  height: calc(var(--initial-height) + 20%);\n}\n[data-sonner-toast][data-swiping=true] {\n  transform: var(--y) translateY(var(--swipe-amount, 0px));\n  transition: none;\n}\n[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],\n[data-sonner-toast][data-swipe-out=true][data-y-position=top] {\n  animation: swipe-out 200ms ease-out forwards;\n}\n@keyframes swipe-out {\n  from {\n    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));\n    opacity: 1;\n  }\n  to {\n    transform: translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));\n    opacity: 0;\n  }\n}\n@media (max-width: 600px) {\n  [data-sonner-toaster] {\n    position: fixed;\n    --mobile-offset: 16px;\n    right: var(--mobile-offset);\n    left: var(--mobile-offset);\n    width: 100%;\n  }\n  [data-sonner-toaster] [data-sonner-toast] {\n    left: 0;\n    right: 0;\n    width: calc(100% - var(--mobile-offset) * 2);\n  }\n  [data-sonner-toaster][data-x-position=left] {\n    left: var(--mobile-offset);\n  }\n  [data-sonner-toaster][data-y-position=bottom] {\n    bottom: 20px;\n  }\n  [data-sonner-toaster][data-y-position=top] {\n    top: 20px;\n  }\n  [data-sonner-toaster][data-x-position=center] {\n    left: var(--mobile-offset);\n    right: var(--mobile-offset);\n    transform: none;\n  }\n}\n[data-sonner-toaster][data-theme=light] {\n  --normal-bg: #fff;\n  --normal-border: var(--gray4);\n  --normal-text: var(--gray12);\n  --success-bg: hsl(143, 85%, 96%);\n  --success-border: hsl(145, 92%, 91%);\n  --success-text: hsl(140, 100%, 27%);\n  --info-bg: hsl(208, 100%, 97%);\n  --info-border: hsl(221, 91%, 91%);\n  --info-text: hsl(210, 92%, 45%);\n  --warning-bg: hsl(49, 100%, 97%);\n  --warning-border: hsl(49, 91%, 91%);\n  --warning-text: hsl(31, 92%, 45%);\n  --error-bg: hsl(359, 100%, 97%);\n  --error-border: hsl(359, 100%, 94%);\n  --error-text: hsl(360, 100%, 45%);\n}\n[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true] {\n  --normal-bg: #000;\n  --normal-border: hsl(0, 0%, 20%);\n  --normal-text: var(--gray1);\n}\n[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true] {\n  --normal-bg: #fff;\n  --normal-border: var(--gray3);\n  --normal-text: var(--gray12);\n}\n[data-sonner-toaster][data-theme=dark] {\n  --normal-bg: #000;\n  --normal-border: hsl(0, 0%, 20%);\n  --normal-text: var(--gray1);\n  --success-bg: hsl(150, 100%, 6%);\n  --success-border: hsl(147, 100%, 12%);\n  --success-text: hsl(150, 86%, 65%);\n  --info-bg: hsl(215, 100%, 6%);\n  --info-border: hsl(223, 100%, 12%);\n  --info-text: hsl(216, 87%, 65%);\n  --warning-bg: hsl(64, 100%, 6%);\n  --warning-border: hsl(60, 100%, 12%);\n  --warning-text: hsl(46, 87%, 65%);\n  --error-bg: hsl(358, 76%, 10%);\n  --error-border: hsl(357, 89%, 16%);\n  --error-text: hsl(358, 100%, 81%);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=success] {\n  background: var(--success-bg);\n  border-color: var(--success-border);\n  color: var(--success-text);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button] {\n  background: var(--success-bg);\n  border-color: var(--success-border);\n  color: var(--success-text);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=info] {\n  background: var(--info-bg);\n  border-color: var(--info-border);\n  color: var(--info-text);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button] {\n  background: var(--info-bg);\n  border-color: var(--info-border);\n  color: var(--info-text);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=warning] {\n  background: var(--warning-bg);\n  border-color: var(--warning-border);\n  color: var(--warning-text);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button] {\n  background: var(--warning-bg);\n  border-color: var(--warning-border);\n  color: var(--warning-text);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=error] {\n  background: var(--error-bg);\n  border-color: var(--error-border);\n  color: var(--error-text);\n}\n[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button] {\n  background: var(--error-bg);\n  border-color: var(--error-border);\n  color: var(--error-text);\n}\n.sonner-loading-wrapper {\n  --size: 16px;\n  height: var(--size);\n  width: var(--size);\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n}\n.sonner-loading-wrapper[data-visible=false] {\n  transform-origin: center;\n  animation: sonner-fade-out 0.2s ease forwards;\n}\n.sonner-spinner {\n  position: relative;\n  top: 50%;\n  left: 50%;\n  height: var(--size);\n  width: var(--size);\n}\n.sonner-loading-bar {\n  animation: sonner-spin 1.2s linear infinite;\n  background: var(--gray11);\n  border-radius: 6px;\n  height: 8%;\n  left: -10%;\n  position: absolute;\n  top: -3.9%;\n  width: 24%;\n}\n.sonner-loading-bar:nth-child(1) {\n  animation-delay: -1.2s;\n  transform: rotate(0.0001deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(2) {\n  animation-delay: -1.1s;\n  transform: rotate(30deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(3) {\n  animation-delay: -1s;\n  transform: rotate(60deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(4) {\n  animation-delay: -0.9s;\n  transform: rotate(90deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(5) {\n  animation-delay: -0.8s;\n  transform: rotate(120deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(6) {\n  animation-delay: -0.7s;\n  transform: rotate(150deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(7) {\n  animation-delay: -0.6s;\n  transform: rotate(180deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(8) {\n  animation-delay: -0.5s;\n  transform: rotate(210deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(9) {\n  animation-delay: -0.4s;\n  transform: rotate(240deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(10) {\n  animation-delay: -0.3s;\n  transform: rotate(270deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(11) {\n  animation-delay: -0.2s;\n  transform: rotate(300deg) translate(146%);\n}\n.sonner-loading-bar:nth-child(12) {\n  animation-delay: -0.1s;\n  transform: rotate(330deg) translate(146%);\n}\n@keyframes sonner-fade-in {\n  0% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes sonner-fade-out {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n}\n@keyframes sonner-spin {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.15;\n  }\n}\n@media (prefers-reduced-motion) {\n  [data-sonner-toast],\n  [data-sonner-toast] > *,\n  .sonner-loading-bar {\n    transition: none !important;\n    animation: none !important;\n  }\n}\n.sonner-loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center;\n  transition: opacity 200ms, transform 200ms;\n}\n.sonner-loader[data-visible=false] {\n  opacity: 0;\n  transform: scale(0.8) translate(-50%, -50%);\n}\n');
Array(12).fill(0);
var toastsCounter = 0;
var Observer = class {
  constructor() {
    __publicField(this, "subscribers");
    __publicField(this, "toasts");
    __publicField(this, "subscribe", (subscriber) => {
      this.subscribers.push(subscriber);
      return () => {
        const index = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(index, 1);
      };
    });
    __publicField(this, "publish", (data) => {
      this.subscribers.forEach((subscriber) => subscriber(data));
    });
    __publicField(this, "addToast", (data) => {
      this.publish(data);
      this.toasts = [...this.toasts, data];
    });
    __publicField(this, "create", (data) => {
      var _a;
      const { message, ...rest } = data;
      const id = typeof (data == null ? void 0 : data.id) === "number" || data.id && ((_a = data.id) == null ? void 0 : _a.length) > 0 ? data.id : toastsCounter++;
      if (this.toasts.find((toast2) => {
        return toast2.id === id;
      })) this.toasts = this.toasts.map((toast2) => {
        if (toast2.id === id) {
          this.publish({
            ...toast2,
            ...data,
            id,
            title: message
          });
          return {
            ...toast2,
            ...data,
            id,
            title: message
          };
        }
        return toast2;
      });
      else this.addToast({
        title: message,
        ...rest,
        id
      });
      return id;
    });
    __publicField(this, "dismiss", (id) => {
      if (!id) this.toasts.forEach((toast2) => {
        this.subscribers.forEach((subscriber) => subscriber({
          id: toast2.id,
          dismiss: true
        }));
      });
      this.subscribers.forEach((subscriber) => subscriber({
        id,
        dismiss: true
      }));
      return id;
    });
    __publicField(this, "message", (message, data) => {
      return this.create({
        ...data,
        message
      });
    });
    __publicField(this, "error", (message, data) => {
      return this.create({
        ...data,
        message,
        type: "error"
      });
    });
    __publicField(this, "success", (message, data) => {
      return this.create({
        ...data,
        type: "success",
        message
      });
    });
    __publicField(this, "info", (message, data) => {
      return this.create({
        ...data,
        type: "info",
        message
      });
    });
    __publicField(this, "warning", (message, data) => {
      return this.create({
        ...data,
        type: "warning",
        message
      });
    });
    __publicField(this, "promise", (promise, data) => {
      if (!data) return;
      let id;
      if (data.loading !== void 0) id = this.create({
        ...data,
        promise,
        type: "loading",
        message: data.loading
      });
      const p = promise instanceof Promise ? promise : promise();
      let shouldDismiss = id !== void 0;
      p.then((response) => {
        if (response && typeof response.ok === "boolean" && !response.ok) {
          shouldDismiss = false;
          const message = typeof data.error === "function" ? data.error(`HTTP error! status: ${response.status}`) : data.error;
          this.create({
            id,
            type: "error",
            message
          });
        } else if (data.success !== void 0) {
          shouldDismiss = false;
          const message = typeof data.success === "function" ? data.success(response) : data.success;
          this.create({
            id,
            type: "success",
            message
          });
        }
      }).catch((error) => {
        if (data.error !== void 0) {
          shouldDismiss = false;
          const message = typeof data.error === "function" ? data.error(error) : data.error;
          this.create({
            id,
            type: "error",
            message
          });
        }
      }).finally(() => {
        var _a;
        if (shouldDismiss) {
          this.dismiss(id);
          id = void 0;
        }
        (_a = data.finally) == null ? void 0 : _a.call(data);
      });
      return id;
    });
    __publicField(this, "loading", (message, data) => {
      return this.create({
        ...data,
        type: "loading",
        message
      });
    });
    __publicField(this, "custom", (jsx, data) => {
      const id = (data == null ? void 0 : data.id) || toastsCounter++;
      this.publish({
        jsx: jsx(id),
        id,
        ...data
      });
      return id;
    });
    this.subscribers = [];
    this.toasts = [];
  }
};
var ToastState = new Observer();
function toastFunction(message, data) {
  const id = (data == null ? void 0 : data.id) || toastsCounter++;
  ToastState.addToast({
    title: message,
    ...data,
    id
  });
  return id;
}
var basicToast = toastFunction;
var toast = Object.assign(basicToast, {
  success: ToastState.success,
  info: ToastState.info,
  warning: ToastState.warning,
  error: ToastState.error,
  custom: ToastState.custom,
  message: ToastState.message,
  promise: ToastState.promise,
  dismiss: ToastState.dismiss,
  loading: ToastState.loading
});
/*!
* Original code by Emil Kowalski
* MIT Licensed, Copyright 2023 Emil Kowalski, see https://github.com/emilkowalski/sonner/blob/main/LICENSE.md for details
*
* Credits:
* https://github.com/emilkowalski/sonner/blob/main/src/index.tsx
*/
var iconNode$2 = [["path", {
  d: "m12 19-7-7 7-7",
  key: "1l729n"
}], ["path", {
  d: "M19 12H5",
  key: "x3x0zl"
}]];
var ArrowLeft = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$2,
  name: "arrow-left"
}));
var arrow_left_default = ArrowLeft;
var iconNode$1 = [
  ["path", {
    d: "M8 2v4",
    key: "1cmpym"
  }],
  ["path", {
    d: "M16 2v4",
    key: "4m81vk"
  }],
  ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
  }],
  ["path", {
    d: "M3 10h18",
    key: "8toen8"
  }]
];
var Calendar = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$1,
  name: "calendar"
}));
var calendar_default = Calendar;
var iconNode = [["path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56",
  key: "13zald"
}]];
var LoaderCircle = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode,
  name: "loader-circle"
}));
var loader_circle_default = LoaderCircle;
var RTL_SCRIPTS = /* @__PURE__ */ new Set([
  "Avst",
  "Arab",
  "Armi",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]);
var RTL_LANGS = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function isRTL(locale) {
  var _a;
  if (Intl.Locale) {
    const script = (_a = new Intl.Locale(locale).maximize().script) != null ? _a : "";
    return RTL_SCRIPTS.has(script);
  }
  const lang = locale.split("-")[0];
  return RTL_LANGS.has(lang);
}
function getReadingDirection(locale) {
  return isRTL(locale) ? "rtl" : "ltr";
}
function getDefaultLocale() {
  let locale = typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([locale]);
  } catch (_err) {
    locale = "en-US";
  }
  return {
    locale,
    direction: getReadingDirection(locale)
  };
}
var currentLocale = getDefaultLocale();
var listeners = /* @__PURE__ */ new Set();
function updateLocale() {
  currentLocale = getDefaultLocale();
  for (const listener of listeners) listener(currentLocale);
}
function createDefaultLocale() {
  const defaultSSRLocale = {
    locale: "en-US",
    direction: "ltr"
  };
  const [defaultClientLocale, setDefaultClientLocale] = createSignal(currentLocale);
  const defaultLocale = createMemo(() => isServer ? defaultSSRLocale : defaultClientLocale());
  onMount(() => {
    if (listeners.size === 0) window.addEventListener("languagechange", updateLocale);
    listeners.add(setDefaultClientLocale);
    onCleanup(() => {
      listeners.delete(setDefaultClientLocale);
      if (listeners.size === 0) window.removeEventListener("languagechange", updateLocale);
    });
  });
  return {
    locale: () => defaultLocale().locale,
    direction: () => defaultLocale().direction
  };
}
var I18nContext = createContext();
function useLocale() {
  const defaultLocale = createDefaultLocale();
  return useContext(I18nContext) || defaultLocale;
}
var cache$1 = /* @__PURE__ */ new Map();
function createCollator(options) {
  const { locale } = useLocale();
  const cacheKey = createMemo(() => {
    return locale() + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  });
  return createMemo(() => {
    const key = cacheKey();
    let collator;
    if (cache$1.has(key)) collator = cache$1.get(key);
    if (!collator) {
      collator = new Intl.Collator(locale(), options);
      cache$1.set(key, collator);
    }
    return collator;
  });
}
function createNumberFormatter(options) {
  const { locale } = useLocale();
  return createMemo(() => new NumberFormatter(locale(), access(options)));
}
function createRegisterId(setter) {
  return (id) => {
    setter(id);
    return () => setter(void 0);
  };
}
var MeterContext = createContext();
function useMeterContext() {
  const context = useContext(MeterContext);
  if (context === void 0) throw new Error("[kobalte]: `useMeterContext` must be used within a `Meter.Root` component");
  return context;
}
function MeterFill(props) {
  const context = useMeterContext();
  const [local, others] = splitProps(props, ["style"]);
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    get style() {
      return combineStyle({ "--kb-meter-fill-width": context.meterFillWidth() }, local.style);
    }
  }, () => context.dataset(), others));
}
function MeterLabel(props) {
  const context = useMeterContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("label") }, props), ["id"]);
  createEffect(() => onCleanup(context.registerLabelId(local.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "span",
    get id() {
      return local.id;
    }
  }, () => context.dataset(), others));
}
function MeterRoot(props) {
  const [local, others] = splitProps(mergeDefaultProps({
    id: `meter-${createUniqueId()}`,
    value: 0,
    minValue: 0,
    maxValue: 100,
    role: "meter",
    indeterminate: false
  }, props), [
    "value",
    "minValue",
    "maxValue",
    "getValueLabel",
    "role",
    "aria-valuetext",
    "aria-labelledby",
    "aria-valuemax",
    "aria-valuemin",
    "aria-valuenow",
    "indeterminate"
  ]);
  const [labelId, setLabelId] = createSignal();
  const defaultFormatter = createNumberFormatter(() => ({ style: "percent" }));
  const value = () => {
    return clamp(local.value, local.minValue, local.maxValue);
  };
  const valuePercent = () => {
    return (value() - local.minValue) / (local.maxValue - local.minValue);
  };
  const valueLabel = () => {
    if (local.indeterminate) return;
    if (local.getValueLabel) return local.getValueLabel({
      value: value(),
      min: local.minValue,
      max: local.maxValue
    });
    return defaultFormatter().format(valuePercent());
  };
  const meterFillWidth = () => {
    return `${valuePercent() * 100}%`;
  };
  const dataset = createMemo(() => {
    return {};
  });
  const context = {
    dataset,
    value,
    valuePercent,
    valueLabel,
    labelId,
    meterFillWidth,
    generateId: createGenerateId(() => others.id),
    registerLabelId: createRegisterId(setLabelId)
  };
  return createComponent(MeterContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div",
        get role() {
          return local.role || "meter";
        },
        get ["aria-valuenow"]() {
          return local.indeterminate ? void 0 : value();
        },
        get ["aria-valuemin"]() {
          return local.minValue;
        },
        get ["aria-valuemax"]() {
          return local.maxValue;
        },
        get ["aria-valuetext"]() {
          return valueLabel();
        },
        get ["aria-labelledby"]() {
          return labelId();
        }
      }, dataset, others));
    }
  });
}
function MeterTrack(props) {
  const context = useMeterContext();
  return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), props));
}
function MeterValueLabel(props) {
  const context = useMeterContext();
  return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), props, { get children() {
    return context.valueLabel();
  } }));
}
var Meter = Object.assign(MeterRoot, {
  Fill: MeterFill,
  Label: MeterLabel,
  Track: MeterTrack,
  ValueLabel: MeterValueLabel
});
__export({}, {
  Fill: () => ProgressFill,
  Label: () => ProgressLabel,
  Progress: () => Progress$1,
  Root: () => ProgressRoot,
  Track: () => ProgressTrack,
  ValueLabel: () => ProgressValueLabel,
  useProgressContext: () => useProgressContext
});
var ProgressContext = createContext();
function useProgressContext() {
  const context = useContext(ProgressContext);
  if (context === void 0) throw new Error("[kobalte]: `useProgressContext` must be used within a `Progress.Root` component");
  return context;
}
function ProgressFill(props) {
  const context = useProgressContext();
  const [local, others] = splitProps(props, ["style"]);
  return createComponent(Meter.Fill, mergeProps({ get style() {
    return combineStyle({ "--kb-progress-fill-width": context.progressFillWidth() }, local.style);
  } }, () => context.dataset(), others));
}
function ProgressLabel(props) {
  const context = useProgressContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("label") }, props), ["id"]);
  createEffect(() => onCleanup(context.registerLabelId(local.id)));
  return createComponent(Meter.Label, mergeProps({ get id() {
    return local.id;
  } }, () => context.dataset(), others));
}
function ProgressRoot(props) {
  const mergedProps = mergeDefaultProps({
    id: `progress-${createUniqueId()}`,
    value: 0,
    minValue: 0,
    maxValue: 100
  }, props);
  const [local, others] = splitProps(mergedProps, [
    "value",
    "minValue",
    "maxValue",
    "indeterminate",
    "getValueLabel"
  ]);
  const [labelId, setLabelId] = createSignal();
  const defaultFormatter = createNumberFormatter(() => ({ style: "percent" }));
  const value = () => {
    return clamp(local.value, local.minValue, local.maxValue);
  };
  const valuePercent = () => {
    return (value() - local.minValue) / (local.maxValue - local.minValue);
  };
  const valueLabel = () => {
    if (local.indeterminate) return;
    if (local.getValueLabel) return local.getValueLabel({
      value: value(),
      min: local.minValue,
      max: local.maxValue
    });
    return defaultFormatter().format(valuePercent());
  };
  const progressFillWidth = () => {
    return local.indeterminate ? void 0 : `${valuePercent() * 100}%`;
  };
  const dataset = createMemo(() => {
    let dataProgress = void 0;
    if (!local.indeterminate) dataProgress = valuePercent() === 1 ? "complete" : "loading";
    return {
      "data-progress": dataProgress,
      "data-indeterminate": local.indeterminate ? "" : void 0
    };
  });
  const context = {
    dataset,
    value,
    valuePercent,
    valueLabel,
    labelId,
    progressFillWidth,
    generateId: createGenerateId(() => others.id),
    registerLabelId: createRegisterId(setLabelId)
  };
  return createComponent(ProgressContext.Provider, {
    value: context,
    get children() {
      return createComponent(Meter, mergeProps({
        role: "progressbar",
        get indeterminate() {
          return local.indeterminate || false;
        }
      }, dataset, mergedProps));
    }
  });
}
function ProgressTrack(props) {
  const context = useProgressContext();
  return createComponent(Meter.Track, mergeProps(() => context.dataset(), props));
}
function ProgressValueLabel(props) {
  const context = useProgressContext();
  return createComponent(Meter.ValueLabel, mergeProps(() => context.dataset(), props));
}
var Progress$1 = Object.assign(ProgressRoot, {
  Fill: ProgressFill,
  Label: ProgressLabel,
  Track: ProgressTrack,
  ValueLabel: ProgressValueLabel
});
var Progress = (props) => {
  const [local, others] = splitProps(props, ["children"]);
  return createComponent(ProgressRoot, mergeProps(others, { get children() {
    return [local.children, createComponent(ProgressTrack, {
      "class": "relative h-1 w-full overflow-hidden rounded-full bg-secondary",
      get children() {
        return createComponent(ProgressFill, { "class": "h-full w-[var(--kb-progress-fill-width)] flex-1 bg-primary transition-all" });
      }
    })];
  } }));
};
var FORM_CONTROL_PROP_NAMES = [
  "id",
  "name",
  "validationState",
  "required",
  "disabled",
  "readOnly"
];
function createFormControl(props) {
  const mergedProps = mergeDefaultProps({ id: `form-control-${createUniqueId()}` }, props);
  const [labelId, setLabelId] = createSignal();
  const [fieldId, setFieldId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const [errorMessageId, setErrorMessageId] = createSignal();
  const getAriaLabelledBy = (fieldId2, fieldAriaLabel, fieldAriaLabelledBy) => {
    const hasAriaLabelledBy = fieldAriaLabelledBy != null || labelId() != null;
    return [
      fieldAriaLabelledBy,
      labelId(),
      hasAriaLabelledBy && fieldAriaLabel != null ? fieldId2 : void 0
    ].filter(Boolean).join(" ") || void 0;
  };
  const getAriaDescribedBy = (fieldAriaDescribedBy) => {
    return [
      descriptionId(),
      errorMessageId(),
      fieldAriaDescribedBy
    ].filter(Boolean).join(" ") || void 0;
  };
  return { formControlContext: {
    name: () => {
      var _a;
      return (_a = access(mergedProps.name)) != null ? _a : access(mergedProps.id);
    },
    dataset: createMemo(() => ({
      "data-valid": access(mergedProps.validationState) === "valid" ? "" : void 0,
      "data-invalid": access(mergedProps.validationState) === "invalid" ? "" : void 0,
      "data-required": access(mergedProps.required) ? "" : void 0,
      "data-disabled": access(mergedProps.disabled) ? "" : void 0,
      "data-readonly": access(mergedProps.readOnly) ? "" : void 0
    })),
    validationState: () => access(mergedProps.validationState),
    isRequired: () => access(mergedProps.required),
    isDisabled: () => access(mergedProps.disabled),
    isReadOnly: () => access(mergedProps.readOnly),
    labelId,
    fieldId,
    descriptionId,
    errorMessageId,
    getAriaLabelledBy,
    getAriaDescribedBy,
    generateId: createGenerateId(() => access(mergedProps.id)),
    registerLabel: createRegisterId(setLabelId),
    registerField: createRegisterId(setFieldId),
    registerDescription: createRegisterId(setDescriptionId),
    registerErrorMessage: createRegisterId(setErrorMessageId)
  } };
}
var FormControlContext = createContext();
function useFormControlContext() {
  const context = useContext(FormControlContext);
  if (context === void 0) throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
  return context;
}
function FormControlDescription(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({ id: context.generateId("description") }, props);
  createEffect(() => onCleanup(context.registerDescription(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), mergedProps));
}
function FormControlLabel(props) {
  let ref;
  const context = useFormControlContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("label") }, props), ["ref"]);
  const tagName = createTagName(() => ref, () => "label");
  createEffect(() => onCleanup(context.registerLabel(others.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "label",
    get ["for"]() {
      return tagName() === "label" ? context.fieldId() : void 0;
    }
  }, () => context.dataset(), others));
}
function createFormResetListener(element, handler) {
  createEffect(on(element, (element2) => {
    if (element2 == null) return;
    const form = getClosestForm(element2);
    if (form == null) return;
    form.addEventListener("reset", handler, { passive: true });
    onCleanup(() => {
      form.removeEventListener("reset", handler);
    });
  }));
}
function getClosestForm(element) {
  return isFormElement(element) ? element.form : element.closest("form");
}
function isFormElement(element) {
  return element.matches("textarea, input, select, button");
}
function FormControlErrorMessage(props) {
  const context = useFormControlContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("error-message") }, props), ["forceMount"]);
  const isInvalid = () => context.validationState() === "invalid";
  createEffect(() => {
    if (!isInvalid()) return;
    onCleanup(context.registerErrorMessage(others.id));
  });
  return createComponent(Show, {
    get when() {
      return local.forceMount || isInvalid();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), others));
    }
  });
}
function createControllableSignal(props) {
  var _a;
  const [_value, _setValue] = createSignal((_a = props.defaultValue) == null ? void 0 : _a.call(props));
  const isControlled = createMemo(() => {
    var _a2;
    return ((_a2 = props.value) == null ? void 0 : _a2.call(props)) !== void 0;
  });
  const value = createMemo(() => {
    var _a2;
    return isControlled() ? (_a2 = props.value) == null ? void 0 : _a2.call(props) : _value();
  });
  const setValue = (next) => {
    untrack(() => {
      var _a2;
      const nextValue = accessWith(next, value());
      if (!Object.is(nextValue, value())) {
        if (!isControlled()) _setValue(nextValue);
        (_a2 = props.onChange) == null ? void 0 : _a2.call(props, nextValue);
      }
      return nextValue;
    });
  };
  return [value, setValue];
}
function createControllableBooleanSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => {
    var _a;
    return (_a = _value()) != null ? _a : false;
  };
  return [value, setValue];
}
var access$1 = (v) => typeof v === "function" ? v() : v;
var createPresence = (props) => {
  const refStyles = createMemo(() => {
    const element = access$1(props.element);
    if (!element) return;
    return getComputedStyle(element);
  });
  const getAnimationName = () => {
    var _a, _b;
    return (_b = (_a = refStyles()) == null ? void 0 : _a.animationName) != null ? _b : "none";
  };
  const [presentState, setPresentState] = createSignal(access$1(props.show) ? "present" : "hidden");
  let animationName = "none";
  createEffect((prevShow) => {
    const show = access$1(props.show);
    untrack(() => {
      var _a;
      if (prevShow === show) return show;
      const prevAnimationName = animationName;
      const currentAnimationName = getAnimationName();
      if (show) setPresentState("present");
      else if (currentAnimationName === "none" || ((_a = refStyles()) == null ? void 0 : _a.display) === "none") setPresentState("hidden");
      else if (prevShow === true && prevAnimationName !== currentAnimationName) setPresentState("hiding");
      else setPresentState("hidden");
    });
    return show;
  });
  createEffect(() => {
    const element = access$1(props.element);
    if (!element) return;
    const handleAnimationStart = (event) => {
      if (event.target === element) animationName = getAnimationName();
    };
    const handleAnimationEnd = (event) => {
      const isCurrentAnimation = getAnimationName().includes(event.animationName);
      if (event.target === element && isCurrentAnimation && presentState() === "hiding") setPresentState("hidden");
    };
    element.addEventListener("animationstart", handleAnimationStart);
    element.addEventListener("animationcancel", handleAnimationEnd);
    element.addEventListener("animationend", handleAnimationEnd);
    onCleanup(() => {
      element.removeEventListener("animationstart", handleAnimationStart);
      element.removeEventListener("animationcancel", handleAnimationEnd);
      element.removeEventListener("animationend", handleAnimationEnd);
    });
  });
  return {
    present: () => presentState() === "present" || presentState() === "hiding",
    state: presentState,
    setState: setPresentState
  };
};
var src_default$1 = createPresence;
var FORM_CONTROL_FIELD_PROP_NAMES = [
  "id",
  "aria-label",
  "aria-labelledby",
  "aria-describedby"
];
function createFormControlField(props) {
  const context = useFormControlContext();
  const mergedProps = mergeDefaultProps({ id: context.generateId("field") }, props);
  createEffect(() => onCleanup(context.registerField(access(mergedProps.id))));
  return { fieldProps: {
    id: () => access(mergedProps.id),
    ariaLabel: () => access(mergedProps["aria-label"]),
    ariaLabelledBy: () => context.getAriaLabelledBy(access(mergedProps.id), access(mergedProps["aria-label"]), access(mergedProps["aria-labelledby"])),
    ariaDescribedBy: () => context.getAriaDescribedBy(access(mergedProps["aria-describedby"]))
  } };
}
__export({}, {
  Description: () => FormControlDescription,
  ErrorMessage: () => FormControlErrorMessage,
  Input: () => TextFieldInput$1,
  Label: () => FormControlLabel,
  Root: () => TextFieldRoot,
  TextArea: () => TextFieldTextArea$1,
  TextField: () => TextField$1,
  useTextFieldContext: () => useTextFieldContext
});
var TextFieldContext = createContext();
function useTextFieldContext() {
  const context = useContext(TextFieldContext);
  if (context === void 0) throw new Error("[kobalte]: `useTextFieldContext` must be used within a `TextField` component");
  return context;
}
function TextFieldInput$1(props) {
  return createComponent(TextFieldInputBase, mergeProps({ type: "text" }, props));
}
function TextFieldInputBase(props) {
  const formControlContext = useFormControlContext();
  const context = useTextFieldContext();
  const [local, formControlFieldProps, others] = splitProps(mergeDefaultProps({ id: context.generateId("input") }, props), ["onInput"], FORM_CONTROL_FIELD_PROP_NAMES);
  const { fieldProps } = createFormControlField(formControlFieldProps);
  return createComponent(Polymorphic, mergeProps({
    as: "input",
    get id() {
      return fieldProps.id();
    },
    get name() {
      return formControlContext.name();
    },
    get value() {
      return context.value();
    },
    get required() {
      return formControlContext.isRequired();
    },
    get disabled() {
      return formControlContext.isDisabled();
    },
    get readonly() {
      return formControlContext.isReadOnly();
    },
    get ["aria-label"]() {
      return fieldProps.ariaLabel();
    },
    get ["aria-labelledby"]() {
      return fieldProps.ariaLabelledBy();
    },
    get ["aria-describedby"]() {
      return fieldProps.ariaDescribedBy();
    },
    get ["aria-invalid"]() {
      return formControlContext.validationState() === "invalid" || void 0;
    },
    get ["aria-required"]() {
      return formControlContext.isRequired() || void 0;
    },
    get ["aria-disabled"]() {
      return formControlContext.isDisabled() || void 0;
    },
    get ["aria-readonly"]() {
      return formControlContext.isReadOnly() || void 0;
    },
    get onInput() {
      return composeEventHandlers([local.onInput, context.onInput]);
    }
  }, () => formControlContext.dataset(), others));
}
function TextFieldRoot(props) {
  let ref;
  const [local, formControlProps, others] = splitProps(mergeDefaultProps({ id: `textfield-${createUniqueId()}` }, props), [
    "ref",
    "value",
    "defaultValue",
    "onChange"
  ], FORM_CONTROL_PROP_NAMES);
  const initialValue = local.value;
  const [value, setValue] = createControllableSignal({
    value: () => {
      var _a;
      return initialValue === void 0 ? void 0 : (_a = local.value) != null ? _a : "";
    },
    defaultValue: () => local.defaultValue,
    onChange: (value2) => {
      var _a;
      return (_a = local.onChange) == null ? void 0 : _a.call(local, value2);
    }
  });
  const { formControlContext } = createFormControl(formControlProps);
  createFormResetListener(() => ref, () => {
    var _a;
    return setValue((_a = local.defaultValue) != null ? _a : "");
  });
  const onInput = (e) => {
    var _a;
    if (formControlContext.isReadOnly() || formControlContext.isDisabled()) return;
    const target = e.target;
    setValue(target.value);
    target.value = (_a = value()) != null ? _a : "";
  };
  const context = {
    value,
    generateId: createGenerateId(() => access(formControlProps.id)),
    onInput
  };
  return createComponent(FormControlContext.Provider, {
    value: formControlContext,
    get children() {
      return createComponent(TextFieldContext.Provider, {
        value: context,
        get children() {
          return createComponent(Polymorphic, mergeProps({
            as: "div",
            role: "group",
            get id() {
              return access(formControlProps.id);
            }
          }, () => formControlContext.dataset(), others));
        }
      });
    }
  });
}
function TextFieldTextArea$1(props) {
  let ref;
  const context = useTextFieldContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("textarea") }, props), [
    "ref",
    "autoResize",
    "submitOnEnter",
    "onKeyPress"
  ]);
  createEffect(on([
    () => ref,
    () => local.autoResize,
    () => context.value()
  ], ([ref2, autoResize]) => {
    if (!ref2 || !autoResize) return;
    adjustHeight(ref2);
  }));
  const onKeyPress = (event) => {
  };
  return createComponent(TextFieldInputBase, mergeProps({
    as: "textarea",
    get ["aria-multiline"]() {
      return local.submitOnEnter ? "false" : void 0;
    },
    get onKeyPress() {
      return composeEventHandlers([local.onKeyPress, onKeyPress]);
    }
  }, others));
}
function adjustHeight(el) {
  const prevAlignment = el.style.alignSelf;
  const prevOverflow = el.style.overflow;
  if (!("MozAppearance" in el.style)) el.style.overflow = "hidden";
  el.style.alignSelf = "start";
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight + (el.offsetHeight - el.clientHeight)}px`;
  el.style.overflow = prevOverflow;
  el.style.alignSelf = prevAlignment;
}
var TextField$1 = Object.assign(TextFieldRoot, {
  Description: FormControlDescription,
  ErrorMessage: FormControlErrorMessage,
  Input: TextFieldInput$1,
  Label: FormControlLabel,
  TextArea: TextFieldTextArea$1
});
var TextField = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(TextFieldRoot, mergeProps({ get ["class"]() {
    return cn("flex flex-col gap-1", local.class);
  } }, others));
};
var TextFieldInput = (rawProps) => {
  const [local, others] = splitProps(mergeProps$1({ type: "text" }, rawProps), ["type", "class"]);
  return createComponent(TextFieldInput$1, mergeProps({
    get type() {
      return local.type;
    },
    get ["class"]() {
      return cn("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid]:border-error-foreground data-[invalid]:text-error-foreground", local.class);
    }
  }, others));
};
var TextFieldTextArea = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(TextFieldTextArea$1, mergeProps({ get ["class"]() {
    return cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", local.class);
  } }, others));
};
var labelVariants$1 = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", {
  variants: { variant: {
    label: "data-[invalid]:text-destructive",
    description: "font-normal text-muted-foreground",
    error: "text-xs text-destructive"
  } },
  defaultVariants: { variant: "label" }
});
var TextFieldLabel = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(FormControlLabel, mergeProps({ get ["class"]() {
    return cn(labelVariants$1(), local.class);
  } }, others));
};
function buildNodes(params) {
  var _a, _b, _c;
  let index = (_a = params.startIndex) != null ? _a : 0;
  const level = (_b = params.startLevel) != null ? _b : 0;
  const nodes = [];
  const getKey = (data) => {
    var _a2;
    if (data == null) return "";
    const _getKey = (_a2 = params.getKey) != null ? _a2 : "key";
    const dataKey = isString(_getKey) ? data[_getKey] : _getKey(data);
    return dataKey != null ? String(dataKey) : "";
  };
  const getTextValue = (data) => {
    var _a2;
    if (data == null) return "";
    const _getTextValue = (_a2 = params.getTextValue) != null ? _a2 : "textValue";
    const dataTextValue = isString(_getTextValue) ? data[_getTextValue] : _getTextValue(data);
    return dataTextValue != null ? String(dataTextValue) : "";
  };
  const getDisabled = (data) => {
    var _a2, _b2;
    if (data == null) return false;
    const _getDisabled = (_a2 = params.getDisabled) != null ? _a2 : "disabled";
    return (_b2 = isString(_getDisabled) ? data[_getDisabled] : _getDisabled(data)) != null ? _b2 : false;
  };
  const getSectionChildren = (data) => {
    var _a2;
    if (data == null) return;
    if (isString(params.getSectionChildren)) return data[params.getSectionChildren];
    return (_a2 = params.getSectionChildren) == null ? void 0 : _a2.call(params, data);
  };
  for (const data of params.dataSource) {
    if (isString(data) || isNumber(data)) {
      nodes.push({
        type: "item",
        rawValue: data,
        key: String(data),
        textValue: String(data),
        disabled: getDisabled(data),
        level,
        index
      });
      index++;
      continue;
    }
    if (getSectionChildren(data) != null) {
      nodes.push({
        type: "section",
        rawValue: data,
        key: "",
        textValue: "",
        disabled: false,
        level,
        index
      });
      index++;
      const sectionChildren = (_c = getSectionChildren(data)) != null ? _c : [];
      if (sectionChildren.length > 0) {
        const childNodes = buildNodes({
          dataSource: sectionChildren,
          getKey: params.getKey,
          getTextValue: params.getTextValue,
          getDisabled: params.getDisabled,
          getSectionChildren: params.getSectionChildren,
          startIndex: index,
          startLevel: level + 1
        });
        nodes.push(...childNodes);
        index += childNodes.length;
      }
    } else {
      nodes.push({
        type: "item",
        rawValue: data,
        key: getKey(data),
        textValue: getTextValue(data),
        disabled: getDisabled(data),
        level,
        index
      });
      index++;
    }
  }
  return nodes;
}
function createCollection(props, deps = []) {
  return createMemo(() => {
    const nodes = buildNodes({
      dataSource: access(props.dataSource),
      getKey: access(props.getKey),
      getTextValue: access(props.getTextValue),
      getDisabled: access(props.getDisabled),
      getSectionChildren: access(props.getSectionChildren)
    });
    for (let i = 0; i < deps.length; i++) deps[i]();
    return props.factory(nodes);
  });
}
var Selection = class _Selection extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    __publicField(this, "anchorKey");
    __publicField(this, "currentKey");
    if (keys instanceof _Selection) {
      this.anchorKey = anchorKey || keys.anchorKey;
      this.currentKey = currentKey || keys.currentKey;
    } else {
      this.anchorKey = anchorKey;
      this.currentKey = currentKey;
    }
  }
};
function createControllableSelectionSignal(props) {
  const [_value, setValue] = createControllableSignal(props);
  const value = () => {
    var _a;
    return (_a = _value()) != null ? _a : new Selection();
  };
  return [value, setValue];
}
function isNonContiguousSelectionModifier(e) {
  return e.ctrlKey;
}
function isCtrlKeyPressed(e) {
  return e.ctrlKey;
}
function convertSelection(selection) {
  return new Selection(selection);
}
function isSameSelection(setA, setB) {
  if (setA.size !== setB.size) return false;
  for (const item of setA) if (!setB.has(item)) return false;
  return true;
}
function createMultipleSelectionState(props) {
  const mergedProps = mergeDefaultProps({
    selectionMode: "none",
    selectionBehavior: "toggle"
  }, props);
  const [isFocused, setFocused] = createSignal(false);
  const [focusedKey, setFocusedKey] = createSignal();
  const [selectedKeys, _setSelectedKeys] = createControllableSelectionSignal({
    value: createMemo(() => {
      const selection = access(mergedProps.selectedKeys);
      if (selection != null) return convertSelection(selection);
      return selection;
    }),
    defaultValue: createMemo(() => {
      const defaultSelection = access(mergedProps.defaultSelectedKeys);
      if (defaultSelection != null) return convertSelection(defaultSelection);
      return new Selection();
    }),
    onChange: (value) => {
      var _a;
      return (_a = mergedProps.onSelectionChange) == null ? void 0 : _a.call(mergedProps, value);
    }
  });
  const [selectionBehavior, setSelectionBehavior] = createSignal(access(mergedProps.selectionBehavior));
  const selectionMode = () => access(mergedProps.selectionMode);
  const disallowEmptySelection = () => {
    var _a;
    return (_a = access(mergedProps.disallowEmptySelection)) != null ? _a : false;
  };
  const setSelectedKeys = (keys) => {
    if (access(mergedProps.allowDuplicateSelectionEvents) || !isSameSelection(keys, selectedKeys())) _setSelectedKeys(keys);
  };
  createEffect(() => {
    const selection = selectedKeys();
    if (access(mergedProps.selectionBehavior) === "replace" && selectionBehavior() === "toggle" && typeof selection === "object" && selection.size === 0) setSelectionBehavior("replace");
  });
  createEffect(() => {
    var _a;
    setSelectionBehavior((_a = access(mergedProps.selectionBehavior)) != null ? _a : "toggle");
  });
  return {
    selectionMode,
    disallowEmptySelection,
    selectionBehavior,
    setSelectionBehavior,
    isFocused,
    setFocused,
    focusedKey,
    setFocusedKey,
    selectedKeys,
    setSelectedKeys
  };
}
function createTypeSelect(props) {
  const [search, setSearch] = createSignal("");
  const [timeoutId, setTimeoutId] = createSignal(-1);
  const onKeyDown = (e) => {
    var _a, _b, _c;
    if (access(props.isDisabled)) return;
    const delegate = access(props.keyboardDelegate);
    const manager = access(props.selectionManager);
    if (!delegate.getKeyForSearch) return;
    const character = getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey) return;
    if (character === " " && search().trim().length > 0) {
      e.preventDefault();
      e.stopPropagation();
    }
    let newSearch = setSearch((prev) => prev + character);
    let key = (_a = delegate.getKeyForSearch(newSearch, manager.focusedKey())) != null ? _a : delegate.getKeyForSearch(newSearch);
    if (key == null && isAllSameLetter(newSearch)) {
      newSearch = newSearch[0];
      key = (_b = delegate.getKeyForSearch(newSearch, manager.focusedKey())) != null ? _b : delegate.getKeyForSearch(newSearch);
    }
    if (key != null) {
      manager.setFocusedKey(key);
      (_c = props.onTypeSelect) == null ? void 0 : _c.call(props, key);
    }
    clearTimeout(timeoutId());
    setTimeoutId(window.setTimeout(() => setSearch(""), 500));
  };
  return { typeSelectHandlers: { onKeyDown } };
}
function getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
  return "";
}
function isAllSameLetter(search) {
  return search.split("").every((letter) => letter === search[0]);
}
function createSelectableCollection(props, ref, scrollRef) {
  const mergedProps = mergeProps$1({ selectOnFocus: () => access(props.selectionManager).selectionBehavior() === "replace" }, props);
  const finalScrollRef = () => {
    var _a;
    return (_a = scrollRef == null ? void 0 : scrollRef()) != null ? _a : ref();
  };
  const { direction } = useLocale();
  let scrollPos = {
    top: 0,
    left: 0
  };
  createEventListener(() => !access(mergedProps.isVirtualized) ? finalScrollRef() : void 0, "scroll", () => {
    const scrollEl = finalScrollRef();
    if (!scrollEl) return;
    scrollPos = {
      top: scrollEl.scrollTop,
      left: scrollEl.scrollLeft
    };
  });
  const { typeSelectHandlers } = createTypeSelect({
    isDisabled: () => access(mergedProps.disallowTypeAhead),
    keyboardDelegate: () => access(mergedProps.keyboardDelegate),
    selectionManager: () => access(mergedProps.selectionManager)
  });
  const orientation = () => {
    var _a;
    return (_a = access(mergedProps.orientation)) != null ? _a : "vertical";
  };
  const onKeyDown = (e) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    callHandler(e, typeSelectHandlers.onKeyDown);
    if (e.altKey && e.key === "Tab") e.preventDefault();
    const refEl = ref();
    if (!(refEl == null ? void 0 : refEl.contains(e.target))) return;
    const manager = access(mergedProps.selectionManager);
    const selectOnFocus = access(mergedProps.selectOnFocus);
    const navigateToKey = (key) => {
      if (key != null) {
        manager.setFocusedKey(key);
        if (e.shiftKey && manager.selectionMode() === "multiple") manager.extendSelection(key);
        else if (selectOnFocus && !isNonContiguousSelectionModifier(e)) manager.replaceSelection(key);
      }
    };
    const delegate = access(mergedProps.keyboardDelegate);
    const shouldFocusWrap = access(mergedProps.shouldFocusWrap);
    const focusedKey = manager.focusedKey();
    switch (e.key) {
      case (orientation() === "vertical" ? "ArrowDown" : "ArrowRight"):
        if (delegate.getKeyBelow) {
          e.preventDefault();
          let nextKey;
          if (focusedKey != null) nextKey = delegate.getKeyBelow(focusedKey);
          else nextKey = (_a = delegate.getFirstKey) == null ? void 0 : _a.call(delegate);
          if (nextKey == null && shouldFocusWrap) nextKey = (_b = delegate.getFirstKey) == null ? void 0 : _b.call(delegate, focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case (orientation() === "vertical" ? "ArrowUp" : "ArrowLeft"):
        if (delegate.getKeyAbove) {
          e.preventDefault();
          let nextKey;
          if (focusedKey != null) nextKey = delegate.getKeyAbove(focusedKey);
          else nextKey = (_c = delegate.getLastKey) == null ? void 0 : _c.call(delegate);
          if (nextKey == null && shouldFocusWrap) nextKey = (_d = delegate.getLastKey) == null ? void 0 : _d.call(delegate, focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case (orientation() === "vertical" ? "ArrowLeft" : "ArrowUp"):
        if (delegate.getKeyLeftOf) {
          e.preventDefault();
          const isRTL$1 = direction() === "rtl";
          let nextKey;
          if (focusedKey != null) nextKey = delegate.getKeyLeftOf(focusedKey);
          else nextKey = isRTL$1 ? (_e = delegate.getFirstKey) == null ? void 0 : _e.call(delegate) : (_f = delegate.getLastKey) == null ? void 0 : _f.call(delegate);
          navigateToKey(nextKey);
        }
        break;
      case (orientation() === "vertical" ? "ArrowRight" : "ArrowDown"):
        if (delegate.getKeyRightOf) {
          e.preventDefault();
          const isRTL$1 = direction() === "rtl";
          let nextKey;
          if (focusedKey != null) nextKey = delegate.getKeyRightOf(focusedKey);
          else nextKey = isRTL$1 ? (_g = delegate.getLastKey) == null ? void 0 : _g.call(delegate) : (_h = delegate.getFirstKey) == null ? void 0 : _h.call(delegate);
          navigateToKey(nextKey);
        }
        break;
      case "Home":
        if (delegate.getFirstKey) {
          e.preventDefault();
          const firstKey = delegate.getFirstKey(focusedKey, isCtrlKeyPressed(e));
          if (firstKey != null) {
            manager.setFocusedKey(firstKey);
            if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") manager.extendSelection(firstKey);
            else if (selectOnFocus) manager.replaceSelection(firstKey);
          }
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          e.preventDefault();
          const lastKey = delegate.getLastKey(focusedKey, isCtrlKeyPressed(e));
          if (lastKey != null) {
            manager.setFocusedKey(lastKey);
            if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") manager.extendSelection(lastKey);
            else if (selectOnFocus) manager.replaceSelection(lastKey);
          }
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow && focusedKey != null) {
          e.preventDefault();
          navigateToKey(delegate.getKeyPageBelow(focusedKey));
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove && focusedKey != null) {
          e.preventDefault();
          navigateToKey(delegate.getKeyPageAbove(focusedKey));
        }
        break;
      case "a":
        if (isCtrlKeyPressed(e) && manager.selectionMode() === "multiple" && access(mergedProps.disallowSelectAll) !== true) {
          e.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        if (!e.defaultPrevented) {
          e.preventDefault();
          if (!access(mergedProps.disallowEmptySelection)) manager.clearSelection();
        }
        break;
      case "Tab":
        if (!access(mergedProps.allowsTabNavigation)) {
          if (e.shiftKey) refEl.focus();
          else {
            const walker = getFocusableTreeWalker(refEl, { tabbable: true });
            let next;
            let last;
            do {
              last = walker.lastChild();
              if (last) next = last;
            } while (last);
            if (next && !next.contains(document.activeElement)) focusWithoutScrolling(next);
          }
          break;
        }
    }
  };
  const onFocusIn = (e) => {
    var _a, _b, _c, _d;
    const manager = access(mergedProps.selectionManager);
    const delegate = access(mergedProps.keyboardDelegate);
    const selectOnFocus = access(mergedProps.selectOnFocus);
    if (manager.isFocused()) {
      if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
      return;
    }
    if (!e.currentTarget.contains(e.target)) return;
    manager.setFocused(true);
    if (manager.focusedKey() == null) {
      const navigateToFirstKey = (key) => {
        if (key == null) return;
        manager.setFocusedKey(key);
        if (selectOnFocus) manager.replaceSelection(key);
      };
      const relatedTarget = e.relatedTarget;
      if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey((_b = manager.lastSelectedKey()) != null ? _b : (_a = delegate.getLastKey) == null ? void 0 : _a.call(delegate));
      else navigateToFirstKey((_d = manager.firstSelectedKey()) != null ? _d : (_c = delegate.getFirstKey) == null ? void 0 : _c.call(delegate));
    } else if (!access(mergedProps.isVirtualized)) {
      const scrollEl = finalScrollRef();
      if (scrollEl) {
        scrollEl.scrollTop = scrollPos.top;
        scrollEl.scrollLeft = scrollPos.left;
        const element = scrollEl.querySelector(`[data-key="${manager.focusedKey()}"]`);
        if (element) {
          focusWithoutScrolling(element);
          scrollIntoView(scrollEl, element);
        }
      }
    }
  };
  const onFocusOut = (e) => {
    const manager = access(mergedProps.selectionManager);
    if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
  };
  const onMouseDown = (e) => {
    if (finalScrollRef() === e.target) e.preventDefault();
  };
  const tryAutoFocus = () => {
    var _a, _b;
    const autoFocus = access(mergedProps.autoFocus);
    if (!autoFocus) return;
    const manager = access(mergedProps.selectionManager);
    const delegate = access(mergedProps.keyboardDelegate);
    let focusedKey;
    if (autoFocus === "first") focusedKey = (_a = delegate.getFirstKey) == null ? void 0 : _a.call(delegate);
    if (autoFocus === "last") focusedKey = (_b = delegate.getLastKey) == null ? void 0 : _b.call(delegate);
    const selectedKeys = manager.selectedKeys();
    if (selectedKeys.size) focusedKey = selectedKeys.values().next().value;
    manager.setFocused(true);
    manager.setFocusedKey(focusedKey);
    const refEl = ref();
    if (refEl && focusedKey == null && !access(mergedProps.shouldUseVirtualFocus)) focusWithoutScrolling(refEl);
  };
  onMount(() => {
    if (mergedProps.deferAutoFocus) setTimeout(tryAutoFocus, 0);
    else tryAutoFocus();
  });
  createEffect(on([
    finalScrollRef,
    () => access(mergedProps.isVirtualized),
    () => access(mergedProps.selectionManager).focusedKey()
  ], (newValue) => {
    var _a;
    const [scrollEl, isVirtualized, focusedKey] = newValue;
    if (isVirtualized) focusedKey && ((_a = mergedProps.scrollToKey) == null ? void 0 : _a.call(mergedProps, focusedKey));
    else if (focusedKey && scrollEl) {
      const element = scrollEl.querySelector(`[data-key="${focusedKey}"]`);
      if (element) scrollIntoView(scrollEl, element);
    }
  }));
  return {
    tabIndex: createMemo(() => {
      if (access(mergedProps.shouldUseVirtualFocus)) return;
      return access(mergedProps.selectionManager).focusedKey() == null ? 0 : -1;
    }),
    onKeyDown,
    onMouseDown,
    onFocusIn,
    onFocusOut
  };
}
function createSelectableItem(props, ref) {
  const manager = () => access(props.selectionManager);
  const key = () => access(props.key);
  const shouldUseVirtualFocus = () => access(props.shouldUseVirtualFocus);
  const onSelect = (e) => {
    if (manager().selectionMode() === "none") return;
    if (manager().selectionMode() === "single") if (manager().isSelected(key()) && !manager().disallowEmptySelection()) manager().toggleSelection(key());
    else manager().replaceSelection(key());
    else if (e == null ? void 0 : e.shiftKey) manager().extendSelection(key());
    else if (manager().selectionBehavior() === "toggle" || isCtrlKeyPressed(e) || "pointerType" in e && e.pointerType === "touch") manager().toggleSelection(key());
    else manager().replaceSelection(key());
  };
  const isSelected = () => manager().isSelected(key());
  const isDisabled = () => access(props.disabled) || manager().isDisabled(key());
  const allowsSelection = () => !isDisabled() && manager().canSelectItem(key());
  let pointerDownType = null;
  const onPointerDown = (e) => {
    if (!allowsSelection()) return;
    pointerDownType = e.pointerType;
    if (e.pointerType === "mouse" && e.button === 0 && !access(props.shouldSelectOnPressUp)) onSelect(e);
  };
  const onPointerUp = (e) => {
    if (!allowsSelection()) return;
    if (e.pointerType === "mouse" && e.button === 0 && access(props.shouldSelectOnPressUp) && access(props.allowsDifferentPressOrigin)) onSelect(e);
  };
  const onClick = (e) => {
    if (!allowsSelection()) return;
    if (access(props.shouldSelectOnPressUp) && !access(props.allowsDifferentPressOrigin) || pointerDownType !== "mouse") onSelect(e);
  };
  const onKeyDown = (e) => {
    if (!allowsSelection() || !["Enter", " "].includes(e.key)) return;
    if (isNonContiguousSelectionModifier(e)) manager().toggleSelection(key());
    else onSelect(e);
  };
  const onMouseDown = (e) => {
    if (isDisabled()) e.preventDefault();
  };
  const onFocus = (e) => {
    const refEl = ref();
    if (shouldUseVirtualFocus() || isDisabled() || !refEl) return;
    if (e.target === refEl) manager().setFocusedKey(key());
  };
  const tabIndex = createMemo(() => {
    if (shouldUseVirtualFocus() || isDisabled()) return;
    return key() === manager().focusedKey() ? 0 : -1;
  });
  const dataKey = createMemo(() => {
    return access(props.virtualized) ? void 0 : key();
  });
  createEffect(on([
    ref,
    key,
    shouldUseVirtualFocus,
    () => manager().focusedKey(),
    () => manager().isFocused()
  ], ([refEl, key2, shouldUseVirtualFocus2, focusedKey, isFocused]) => {
    if (refEl && key2 === focusedKey && isFocused && !shouldUseVirtualFocus2 && document.activeElement !== refEl) if (props.focus) props.focus();
    else focusWithoutScrolling(refEl);
  }));
  return {
    isSelected,
    isDisabled,
    allowsSelection,
    tabIndex,
    dataKey,
    onPointerDown,
    onPointerUp,
    onClick,
    onKeyDown,
    onMouseDown,
    onFocus
  };
}
var SelectionManager = class {
  constructor(collection, state) {
    __publicField(this, "collection");
    __publicField(this, "state");
    this.collection = collection;
    this.state = state;
  }
  selectionMode() {
    return this.state.selectionMode();
  }
  disallowEmptySelection() {
    return this.state.disallowEmptySelection();
  }
  selectionBehavior() {
    return this.state.selectionBehavior();
  }
  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  isFocused() {
    return this.state.isFocused();
  }
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  focusedKey() {
    return this.state.focusedKey();
  }
  setFocusedKey(key) {
    if (key == null || this.collection().getItem(key)) this.state.setFocusedKey(key);
  }
  selectedKeys() {
    return this.state.selectedKeys();
  }
  isSelected(key) {
    if (this.state.selectionMode() === "none") return false;
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) return false;
    return this.state.selectedKeys().has(retrievedKey);
  }
  isEmpty() {
    return this.state.selectedKeys().size === 0;
  }
  isSelectAll() {
    if (this.isEmpty()) return false;
    const selectedKeys = this.state.selectedKeys();
    return this.getAllSelectableKeys().every((k) => selectedKeys.has(k));
  }
  firstSelectedKey() {
    let first;
    for (const key of this.state.selectedKeys()) {
      const item = this.collection().getItem(key);
      const isItemBeforeFirst = (item == null ? void 0 : item.index) != null && (first == null ? void 0 : first.index) != null && item.index < first.index;
      if (!first || isItemBeforeFirst) first = item;
    }
    return first == null ? void 0 : first.key;
  }
  lastSelectedKey() {
    let last;
    for (const key of this.state.selectedKeys()) {
      const item = this.collection().getItem(key);
      const isItemAfterLast = (item == null ? void 0 : item.index) != null && (last == null ? void 0 : last.index) != null && item.index > last.index;
      if (!last || isItemAfterLast) last = item;
    }
    return last == null ? void 0 : last.key;
  }
  extendSelection(toKey) {
    if (this.selectionMode() === "none") return;
    if (this.selectionMode() === "single") {
      this.replaceSelection(toKey);
      return;
    }
    const retrievedToKey = this.getKey(toKey);
    if (retrievedToKey == null) return;
    const selectedKeys = this.state.selectedKeys();
    const anchorKey = selectedKeys.anchorKey || retrievedToKey;
    const selection = new Selection(selectedKeys, anchorKey, retrievedToKey);
    for (const key of this.getKeyRange(anchorKey, selectedKeys.currentKey || retrievedToKey)) selection.delete(key);
    for (const key of this.getKeyRange(retrievedToKey, anchorKey)) if (this.canSelectItem(key)) selection.add(key);
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    const fromItem = this.collection().getItem(from);
    const toItem = this.collection().getItem(to);
    if (fromItem && toItem) {
      if (fromItem.index != null && toItem.index != null && fromItem.index <= toItem.index) return this.getKeyRangeInternal(from, to);
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    const keys = [];
    let key = from;
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item") keys.push(key);
      if (key === to) return keys;
      key = this.collection().getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    const item = this.collection().getItem(key);
    if (!item) return key;
    if (!item || item.type !== "item") return null;
    return item.key;
  }
  toggleSelection(key) {
    if (this.selectionMode() === "none") return;
    if (this.selectionMode() === "single" && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) return;
    const keys = new Selection(this.state.selectedKeys());
    if (keys.has(retrievedKey)) keys.delete(retrievedKey);
    else if (this.canSelectItem(retrievedKey)) {
      keys.add(retrievedKey);
      keys.anchorKey = retrievedKey;
      keys.currentKey = retrievedKey;
    }
    if (this.disallowEmptySelection() && keys.size === 0) return;
    this.state.setSelectedKeys(keys);
  }
  replaceSelection(key) {
    if (this.selectionMode() === "none") return;
    const retrievedKey = this.getKey(key);
    if (retrievedKey == null) return;
    const selection = this.canSelectItem(retrievedKey) ? new Selection([retrievedKey], retrievedKey, retrievedKey) : new Selection();
    this.state.setSelectedKeys(selection);
  }
  setSelectedKeys(keys) {
    if (this.selectionMode() === "none") return;
    const selection = new Selection();
    for (const key of keys) {
      const retrievedKey = this.getKey(key);
      if (retrievedKey != null) {
        selection.add(retrievedKey);
        if (this.selectionMode() === "single") break;
      }
    }
    this.state.setSelectedKeys(selection);
  }
  selectAll() {
    if (this.selectionMode() === "multiple") this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
  }
  clearSelection() {
    const selectedKeys = this.state.selectedKeys();
    if (!this.disallowEmptySelection() && selectedKeys.size > 0) this.state.setSelectedKeys(new Selection());
  }
  toggleSelectAll() {
    if (this.isSelectAll()) this.clearSelection();
    else this.selectAll();
  }
  select(key, e) {
    if (this.selectionMode() === "none") return;
    if (this.selectionMode() === "single") if (this.isSelected(key) && !this.disallowEmptySelection()) this.toggleSelection(key);
    else this.replaceSelection(key);
    else if (this.selectionBehavior() === "toggle" || e && e.pointerType === "touch") this.toggleSelection(key);
    else this.replaceSelection(key);
  }
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys()) return true;
    const selectedKeys = this.selectedKeys();
    if (selection.size !== selectedKeys.size) return false;
    for (const key of selection) if (!selectedKeys.has(key)) return false;
    for (const key of selectedKeys) if (!selection.has(key)) return false;
    return true;
  }
  canSelectItem(key) {
    if (this.state.selectionMode() === "none") return false;
    const item = this.collection().getItem(key);
    return item != null && !item.disabled;
  }
  isDisabled(key) {
    const item = this.collection().getItem(key);
    return !item || item.disabled;
  }
  getAllSelectableKeys() {
    const keys = [];
    const addKeys = (key) => {
      while (key != null) {
        if (this.canSelectItem(key)) {
          const item = this.collection().getItem(key);
          if (!item) continue;
          if (item.type === "item") keys.push(key);
        }
        key = this.collection().getKeyAfter(key);
      }
    };
    addKeys(this.collection().getFirstKey());
    return keys;
  }
};
var ListCollection = class {
  constructor(nodes) {
    __publicField(this, "keyMap", /* @__PURE__ */ new Map());
    __publicField(this, "iterable");
    __publicField(this, "firstKey");
    __publicField(this, "lastKey");
    this.iterable = nodes;
    for (const node of nodes) this.keyMap.set(node.key, node);
    if (this.keyMap.size === 0) return;
    let last;
    let index = 0;
    for (const [key, node] of this.keyMap) {
      if (last) {
        last.nextKey = key;
        node.prevKey = last.key;
      } else {
        this.firstKey = key;
        node.prevKey = void 0;
      }
      if (node.type === "item") node.index = index++;
      last = node;
      last.nextKey = void 0;
    }
    this.lastKey = last.key;
  }
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  getSize() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    var _a;
    return (_a = this.keyMap.get(key)) == null ? void 0 : _a.prevKey;
  }
  getKeyAfter(key) {
    var _a;
    return (_a = this.keyMap.get(key)) == null ? void 0 : _a.nextKey;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [...this.getKeys()];
    return this.getItem(keys[idx]);
  }
};
function createListState(props) {
  const selectionState = createMultipleSelectionState(props);
  const factory = (nodes) => {
    return props.filter ? new ListCollection(props.filter(nodes)) : new ListCollection(nodes);
  };
  const collection = createCollection({
    dataSource: () => access(props.dataSource),
    getKey: () => access(props.getKey),
    getTextValue: () => access(props.getTextValue),
    getDisabled: () => access(props.getDisabled),
    getSectionChildren: () => access(props.getSectionChildren),
    factory
  }, [() => props.filter]);
  const selectionManager = new SelectionManager(collection, selectionState);
  createComputed(() => {
    const focusedKey = selectionState.focusedKey();
    if (focusedKey != null && !collection().getItem(focusedKey)) selectionState.setFocusedKey(void 0);
  });
  return {
    collection,
    selectionManager: () => selectionManager
  };
}
var _tmpl$$4 = [
  "<option",
  "",
  ">",
  "</option>"
], _tmpl$2$2 = "<option></option>", _tmpl$3$2 = [
  "<div",
  ' style="',
  '" aria-hidden="true"><input type="text"',
  ' style="',
  '"',
  "",
  ">",
  "</div>"
];
function HiddenSelectBase(props) {
  const [local, others] = splitProps(props, [
    "ref",
    "onChange",
    "collection",
    "selectionManager",
    "isOpen",
    "isMultiple",
    "isVirtualized",
    "focusTrigger"
  ]);
  const formControlContext = useFormControlContext();
  const [isInternalChangeEvent, setIsInternalChangeEvent] = createSignal(false);
  const renderOption = (key) => {
    const item = local.collection.getItem(key);
    return createComponent(Show, {
      get when() {
        return (item == null ? void 0 : item.type) === "item";
      },
      get children() {
        return ssr(_tmpl$$4, ssrHydrationKey() + ssrAttribute("value", escape(key, true), false), ssrAttribute("selected", local.selectionManager.isSelected(key), true), escape(item == null ? void 0 : item.textValue));
      }
    });
  };
  createEffect(on(() => local.selectionManager.selectedKeys(), (keys, prevKeys) => {
    if (prevKeys && isSameSelection(keys, prevKeys)) return;
    setIsInternalChangeEvent(true);
  }, { defer: true }));
  return ssr(_tmpl$3$2, ssrHydrationKey(), ssrStyle(visuallyHiddenStyles), ssrAttribute("tabindex", local.selectionManager.isFocused() || local.isOpen ? -1 : 0, false), ssrStyleProperty("font-size:", "16px"), ssrAttribute("required", formControlContext.isRequired(), true), ssrAttribute("disabled", formControlContext.isDisabled(), true) + ssrAttribute("readonly", escape(formControlContext.isReadOnly(), true), false), ssrElement("select", mergeProps({
    tabIndex: -1,
    get multiple() {
      return local.isMultiple;
    },
    get name() {
      return formControlContext.name();
    },
    get required() {
      return formControlContext.isRequired();
    },
    get disabled() {
      return formControlContext.isDisabled();
    },
    get size() {
      return local.collection.getSize();
    },
    get value() {
      var _a;
      return (_a = local.selectionManager.firstSelectedKey()) != null ? _a : "";
    }
  }, others), () => [
    ssr(_tmpl$2$2),
    "<!--$-->",
    escape(createComponent(Show, {
      get when() {
        return local.isVirtualized;
      },
      get fallback() {
        return createComponent(For, {
          get each() {
            return [...local.collection.getKeys()];
          },
          children: renderOption
        });
      },
      get children() {
        return createComponent(For, {
          get each() {
            return [...local.selectionManager.selectedKeys()];
          },
          children: renderOption
        });
      }
    })),
    "<!--/-->"
  ], false));
}
var cache = /* @__PURE__ */ new WeakMap();
function getItemCount(collection) {
  let count = cache.get(collection);
  if (count != null) return count;
  count = 0;
  for (const item of collection) if (item.type === "item") count++;
  cache.set(collection, count);
  return count;
}
var ListKeyboardDelegate = class {
  constructor(collection, ref, collator) {
    __publicField(this, "collection");
    __publicField(this, "ref");
    __publicField(this, "collator");
    this.collection = collection;
    this.ref = ref;
    this.collator = collator;
  }
  getKeyBelow(key) {
    let keyAfter = this.collection().getKeyAfter(key);
    while (keyAfter != null) {
      const item = this.collection().getItem(keyAfter);
      if (item && item.type === "item" && !item.disabled) return keyAfter;
      keyAfter = this.collection().getKeyAfter(keyAfter);
    }
  }
  getKeyAbove(key) {
    let keyBefore = this.collection().getKeyBefore(key);
    while (keyBefore != null) {
      const item = this.collection().getItem(keyBefore);
      if (item && item.type === "item" && !item.disabled) return keyBefore;
      keyBefore = this.collection().getKeyBefore(keyBefore);
    }
  }
  getFirstKey() {
    let key = this.collection().getFirstKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item" && !item.disabled) return key;
      key = this.collection().getKeyAfter(key);
    }
  }
  getLastKey() {
    let key = this.collection().getLastKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item && item.type === "item" && !item.disabled) return key;
      key = this.collection().getKeyBefore(key);
    }
  }
  getItem(key) {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.ref) == null ? void 0 : _a.call(this)) == null ? void 0 : _b.querySelector(`[data-key="${key}"]`)) != null ? _c : null;
  }
  getKeyPageAbove(key) {
    var _a;
    const menu = (_a = this.ref) == null ? void 0 : _a.call(this);
    let item = this.getItem(key);
    if (!menu || !item) return;
    const pageY = Math.max(0, item.offsetTop + item.offsetHeight - menu.offsetHeight);
    let keyAbove = key;
    while (keyAbove && item && item.offsetTop > pageY) {
      keyAbove = this.getKeyAbove(keyAbove);
      item = keyAbove != null ? this.getItem(keyAbove) : null;
    }
    return keyAbove;
  }
  getKeyPageBelow(key) {
    var _a;
    const menu = (_a = this.ref) == null ? void 0 : _a.call(this);
    let item = this.getItem(key);
    if (!menu || !item) return;
    const pageY = Math.min(menu.scrollHeight, item.offsetTop - item.offsetHeight + menu.offsetHeight);
    let keyBelow = key;
    while (keyBelow && item && item.offsetTop < pageY) {
      keyBelow = this.getKeyBelow(keyBelow);
      item = keyBelow != null ? this.getItem(keyBelow) : null;
    }
    return keyBelow;
  }
  getKeyForSearch(search, fromKey) {
    var _a;
    const collator = (_a = this.collator) == null ? void 0 : _a.call(this);
    if (!collator) return;
    let key = fromKey != null ? this.getKeyBelow(fromKey) : this.getFirstKey();
    while (key != null) {
      const item = this.collection().getItem(key);
      if (item) {
        const substring = item.textValue.slice(0, search.length);
        if (item.textValue && collator.compare(substring, search) === 0) return key;
      }
      key = this.getKeyBelow(key);
    }
  }
};
function createSelectableList(props, ref, scrollRef) {
  const collator = createCollator({
    usage: "search",
    sensitivity: "base"
  });
  return createSelectableCollection({
    selectionManager: () => access(props.selectionManager),
    keyboardDelegate: createMemo(() => {
      const keyboardDelegate = access(props.keyboardDelegate);
      if (keyboardDelegate) return keyboardDelegate;
      return new ListKeyboardDelegate(props.collection, ref, collator);
    }),
    autoFocus: () => access(props.autoFocus),
    deferAutoFocus: () => access(props.deferAutoFocus),
    shouldFocusWrap: () => access(props.shouldFocusWrap),
    disallowEmptySelection: () => access(props.disallowEmptySelection),
    selectOnFocus: () => access(props.selectOnFocus),
    disallowTypeAhead: () => access(props.disallowTypeAhead),
    shouldUseVirtualFocus: () => access(props.shouldUseVirtualFocus),
    allowsTabNavigation: () => access(props.allowsTabNavigation),
    isVirtualized: () => access(props.isVirtualized),
    scrollToKey: (key) => {
      var _a;
      return (_a = access(props.scrollToKey)) == null ? void 0 : _a(key);
    },
    orientation: () => access(props.orientation)
  }, ref, scrollRef);
}
__export({}, {
  Item: () => ListboxItem,
  ItemDescription: () => ListboxItemDescription,
  ItemIndicator: () => ListboxItemIndicator,
  ItemLabel: () => ListboxItemLabel,
  Listbox: () => Listbox,
  Root: () => ListboxRoot,
  Section: () => ListboxSection,
  useListboxContext: () => useListboxContext
});
var ListboxContext = createContext();
function useListboxContext() {
  const context = useContext(ListboxContext);
  if (context === void 0) throw new Error("[kobalte]: `useListboxContext` must be used within a `Listbox` component");
  return context;
}
var ListboxItemContext = createContext();
function useListboxItemContext() {
  const context = useContext(ListboxItemContext);
  if (context === void 0) throw new Error("[kobalte]: `useListboxItemContext` must be used within a `Listbox.Item` component");
  return context;
}
function ListboxItem(props) {
  let ref;
  const listBoxContext = useListboxContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: `${listBoxContext.generateId("item")}-${createUniqueId()}` }, props), [
    "ref",
    "item",
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "onPointerMove",
    "onPointerDown",
    "onPointerUp",
    "onClick",
    "onKeyDown",
    "onMouseDown",
    "onFocus"
  ]);
  const [labelId, setLabelId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const selectionManager = () => listBoxContext.listState().selectionManager();
  const isHighlighted = () => selectionManager().focusedKey() === local.item.key;
  const selectableItem = createSelectableItem({
    key: () => local.item.key,
    selectionManager,
    shouldSelectOnPressUp: listBoxContext.shouldSelectOnPressUp,
    allowsDifferentPressOrigin: () => {
      return listBoxContext.shouldSelectOnPressUp() && listBoxContext.shouldFocusOnHover();
    },
    shouldUseVirtualFocus: listBoxContext.shouldUseVirtualFocus,
    disabled: () => local.item.disabled
  }, () => ref);
  const ariaSelected = () => {
    if (selectionManager().selectionMode() === "none") return;
    return selectableItem.isSelected();
  };
  const isNotSafariMacOS = createMemo(() => true);
  const ariaLabel = () => isNotSafariMacOS() ? local["aria-label"] : void 0;
  const ariaLabelledBy = () => isNotSafariMacOS() ? labelId() : void 0;
  const ariaDescribedBy = () => isNotSafariMacOS() ? descriptionId() : void 0;
  const ariaPosInSet = () => {
    var _a;
    if (!listBoxContext.isVirtualized()) return;
    const index = (_a = listBoxContext.listState().collection().getItem(local.item.key)) == null ? void 0 : _a.index;
    return index != null ? index + 1 : void 0;
  };
  const ariaSetSize = () => {
    if (!listBoxContext.isVirtualized()) return;
    return getItemCount(listBoxContext.listState().collection());
  };
  const onPointerMove = (e) => {
    callHandler(e, local.onPointerMove);
    if (e.pointerType !== "mouse") return;
    if (!selectableItem.isDisabled() && listBoxContext.shouldFocusOnHover()) {
      focusWithoutScrolling(e.currentTarget);
      selectionManager().setFocused(true);
      selectionManager().setFocusedKey(local.item.key);
    }
  };
  const dataset = createMemo(() => ({
    "data-disabled": selectableItem.isDisabled() ? "" : void 0,
    "data-selected": selectableItem.isSelected() ? "" : void 0,
    "data-highlighted": isHighlighted() ? "" : void 0
  }));
  const context = {
    isSelected: selectableItem.isSelected,
    dataset,
    generateId: createGenerateId(() => others.id),
    registerLabelId: createRegisterId(setLabelId),
    registerDescriptionId: createRegisterId(setDescriptionId)
  };
  return createComponent(ListboxItemContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "li",
        role: "option",
        get tabIndex() {
          return selectableItem.tabIndex();
        },
        get ["aria-disabled"]() {
          return selectableItem.isDisabled();
        },
        get ["aria-selected"]() {
          return ariaSelected();
        },
        get ["aria-label"]() {
          return ariaLabel();
        },
        get ["aria-labelledby"]() {
          return ariaLabelledBy();
        },
        get ["aria-describedby"]() {
          return ariaDescribedBy();
        },
        get ["aria-posinset"]() {
          return ariaPosInSet();
        },
        get ["aria-setsize"]() {
          return ariaSetSize();
        },
        get ["data-key"]() {
          return selectableItem.dataKey();
        },
        get onPointerDown() {
          return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
        },
        get onPointerUp() {
          return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
        },
        get onClick() {
          return composeEventHandlers([local.onClick, selectableItem.onClick]);
        },
        get onKeyDown() {
          return composeEventHandlers([local.onKeyDown, selectableItem.onKeyDown]);
        },
        get onMouseDown() {
          return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
        },
        get onFocus() {
          return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
        },
        onPointerMove
      }, dataset, others));
    }
  });
}
function ListboxItemDescription(props) {
  const context = useListboxItemContext();
  const mergedProps = mergeDefaultProps({ id: context.generateId("description") }, props);
  createEffect(() => onCleanup(context.registerDescriptionId(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), mergedProps));
}
function ListboxItemIndicator(props) {
  const context = useListboxItemContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("indicator") }, props), ["forceMount"]);
  return createComponent(Show, {
    get when() {
      return local.forceMount || context.isSelected();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div",
        "aria-hidden": "true"
      }, () => context.dataset(), others));
    }
  });
}
function ListboxItemLabel(props) {
  const context = useListboxItemContext();
  const mergedProps = mergeDefaultProps({ id: context.generateId("label") }, props);
  createEffect(() => onCleanup(context.registerLabelId(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), mergedProps));
}
function ListboxRoot(props) {
  let ref;
  const mergedProps = mergeDefaultProps({
    id: `listbox-${createUniqueId()}`,
    selectionMode: "single",
    virtualized: false
  }, props);
  const [local, others] = splitProps(mergedProps, [
    "ref",
    "children",
    "renderItem",
    "renderSection",
    "value",
    "defaultValue",
    "onChange",
    "options",
    "optionValue",
    "optionTextValue",
    "optionDisabled",
    "optionGroupChildren",
    "state",
    "keyboardDelegate",
    "autoFocus",
    "selectionMode",
    "shouldFocusWrap",
    "shouldUseVirtualFocus",
    "shouldSelectOnPressUp",
    "shouldFocusOnHover",
    "allowDuplicateSelectionEvents",
    "disallowEmptySelection",
    "selectionBehavior",
    "selectOnFocus",
    "disallowTypeAhead",
    "allowsTabNavigation",
    "virtualized",
    "scrollToItem",
    "scrollRef",
    "onKeyDown",
    "onMouseDown",
    "onFocusIn",
    "onFocusOut"
  ]);
  const listState = createMemo(() => {
    if (local.state) return local.state;
    return createListState({
      selectedKeys: () => local.value,
      defaultSelectedKeys: () => local.defaultValue,
      onSelectionChange: local.onChange,
      allowDuplicateSelectionEvents: () => access(local.allowDuplicateSelectionEvents),
      disallowEmptySelection: () => access(local.disallowEmptySelection),
      selectionBehavior: () => access(local.selectionBehavior),
      selectionMode: () => access(local.selectionMode),
      dataSource: () => {
        var _a;
        return (_a = local.options) != null ? _a : [];
      },
      getKey: () => local.optionValue,
      getTextValue: () => local.optionTextValue,
      getDisabled: () => local.optionDisabled,
      getSectionChildren: () => local.optionGroupChildren
    });
  });
  const selectableList = createSelectableList({
    selectionManager: () => listState().selectionManager(),
    collection: () => listState().collection(),
    autoFocus: () => access(local.autoFocus),
    shouldFocusWrap: () => access(local.shouldFocusWrap),
    keyboardDelegate: () => local.keyboardDelegate,
    disallowEmptySelection: () => access(local.disallowEmptySelection),
    selectOnFocus: () => access(local.selectOnFocus),
    disallowTypeAhead: () => access(local.disallowTypeAhead),
    shouldUseVirtualFocus: () => access(local.shouldUseVirtualFocus),
    allowsTabNavigation: () => access(local.allowsTabNavigation),
    isVirtualized: () => local.virtualized,
    scrollToKey: () => local.scrollToItem
  }, () => ref, () => {
    var _a;
    return (_a = local.scrollRef) == null ? void 0 : _a.call(local);
  });
  const context = {
    listState,
    generateId: createGenerateId(() => others.id),
    shouldUseVirtualFocus: () => mergedProps.shouldUseVirtualFocus,
    shouldSelectOnPressUp: () => mergedProps.shouldSelectOnPressUp,
    shouldFocusOnHover: () => mergedProps.shouldFocusOnHover,
    isVirtualized: () => local.virtualized
  };
  return createComponent(ListboxContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "ul",
        role: "listbox",
        get tabIndex() {
          return selectableList.tabIndex();
        },
        get ["aria-multiselectable"]() {
          return listState().selectionManager().selectionMode() === "multiple" ? true : void 0;
        },
        get onKeyDown() {
          return composeEventHandlers([local.onKeyDown, selectableList.onKeyDown]);
        },
        get onMouseDown() {
          return composeEventHandlers([local.onMouseDown, selectableList.onMouseDown]);
        },
        get onFocusIn() {
          return composeEventHandlers([local.onFocusIn, selectableList.onFocusIn]);
        },
        get onFocusOut() {
          return composeEventHandlers([local.onFocusOut, selectableList.onFocusOut]);
        }
      }, others, { get children() {
        return createComponent(Show, {
          get when() {
            return !local.virtualized;
          },
          get fallback() {
            var _a;
            return (_a = local.children) == null ? void 0 : _a.call(local, listState().collection);
          },
          get children() {
            return createComponent(Key, {
              get each() {
                return [...listState().collection()];
              },
              by: "key",
              children: (item) => createComponent(Switch, { get children() {
                return [createComponent(Match, {
                  get when() {
                    return item().type === "section";
                  },
                  get children() {
                    var _a;
                    return (_a = local.renderSection) == null ? void 0 : _a.call(local, item());
                  }
                }), createComponent(Match, {
                  get when() {
                    return item().type === "item";
                  },
                  get children() {
                    var _a;
                    return (_a = local.renderItem) == null ? void 0 : _a.call(local, item());
                  }
                })];
              } })
            });
          }
        });
      } }));
    }
  });
}
function ListboxSection(props) {
  return createComponent(Polymorphic, mergeProps({
    as: "li",
    role: "presentation"
  }, props));
}
var Listbox = Object.assign(ListboxRoot, {
  Item: ListboxItem,
  ItemDescription: ListboxItemDescription,
  ItemIndicator: ListboxItemIndicator,
  ItemLabel: ListboxItemLabel,
  Section: ListboxSection
});
var _tmpl$$3 = [
  "<svg",
  ' display="block" viewBox="',
  '" style="transform:scale(1.02)"><g',
  '><path fill="none"',
  '></path><path stroke="none"',
  "></path></g></svg>"
];
var PopperContext = createContext();
function usePopperContext() {
  const context = useContext(PopperContext);
  if (context === void 0) throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
  return context;
}
var DEFAULT_SIZE = 30;
var HALF_DEFAULT_SIZE = DEFAULT_SIZE / 2;
var ROTATION_DEG = {
  top: 180,
  right: -90,
  bottom: 0,
  left: 90
};
var ARROW_PATH = "M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z";
function PopperArrow(props) {
  const context = usePopperContext();
  const [local, others] = splitProps(mergeDefaultProps({ size: DEFAULT_SIZE }, props), [
    "ref",
    "style",
    "size"
  ]);
  const dir = () => context.currentPlacement().split("-")[0];
  const contentStyle = createComputedStyle(context.contentRef);
  const fill = () => {
    var _a;
    return ((_a = contentStyle()) == null ? void 0 : _a.getPropertyValue("background-color")) || "none";
  };
  const stroke = () => {
    var _a;
    return ((_a = contentStyle()) == null ? void 0 : _a.getPropertyValue(`border-${dir()}-color`)) || "none";
  };
  const borderWidth = () => {
    var _a;
    return ((_a = contentStyle()) == null ? void 0 : _a.getPropertyValue(`border-${dir()}-width`)) || "0px";
  };
  const strokeWidth = () => {
    return Number.parseInt(borderWidth()) * 2 * (DEFAULT_SIZE / local.size);
  };
  const rotate = () => {
    return `rotate(${ROTATION_DEG[dir()]} ${HALF_DEFAULT_SIZE} ${HALF_DEFAULT_SIZE}) translate(0 2)`;
  };
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    "aria-hidden": "true",
    get style() {
      return combineStyle({
        position: "absolute",
        "font-size": `${local.size}px`,
        width: "1em",
        height: "1em",
        "pointer-events": "none",
        fill: fill(),
        stroke: stroke(),
        "stroke-width": strokeWidth()
      }, local.style);
    }
  }, others, { get children() {
    return ssr(_tmpl$$3, ssrHydrationKey(), `0 0 ${escape(DEFAULT_SIZE, true)} ${escape(DEFAULT_SIZE, true)}`, ssrAttribute("transform", escape(rotate(), true), false), ssrAttribute("d", escape(ARROW_PATH, true), false), ssrAttribute("d", escape(ARROW_PATH, true), false));
  } }));
}
function createComputedStyle(element) {
  const [style, setStyle] = createSignal();
  createEffect(() => {
    const el = element();
    el && setStyle(getWindow(el).getComputedStyle(el));
  });
  return style;
}
function PopperPositioner(props) {
  usePopperContext();
  const [local, others] = splitProps(props, ["ref", "style"]);
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    "data-popper-positioner": "",
    get style() {
      return combineStyle({
        position: "absolute",
        top: 0,
        left: 0,
        "min-width": "max-content"
      }, local.style);
    }
  }, others));
}
function createDOMRect(anchorRect) {
  const { x = 0, y = 0, width = 0, height = 0 } = anchorRect != null ? anchorRect : {};
  if (typeof DOMRect === "function") return new DOMRect(x, y, width, height);
  const rect = {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x
  };
  return {
    ...rect,
    toJSON: () => rect
  };
}
function getAnchorElement(anchor, getAnchorRect) {
  return {
    contextElement: anchor,
    getBoundingClientRect: () => {
      const anchorRect = getAnchorRect(anchor);
      if (anchorRect) return createDOMRect(anchorRect);
      if (anchor) return anchor.getBoundingClientRect();
      return createDOMRect();
    }
  };
}
function isValidPlacement(flip2) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(flip2);
}
var REVERSE_BASE_PLACEMENT = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
function getTransformOrigin(placement, readingDirection) {
  const [basePlacement, alignment] = placement.split("-");
  const reversePlacement = REVERSE_BASE_PLACEMENT[basePlacement];
  if (!alignment) return `${reversePlacement} center`;
  if (basePlacement === "left" || basePlacement === "right") return `${reversePlacement} ${alignment === "start" ? "top" : "bottom"}`;
  if (alignment === "start") return `${reversePlacement} ${readingDirection === "rtl" ? "right" : "left"}`;
  return `${reversePlacement} ${readingDirection === "rtl" ? "left" : "right"}`;
}
function PopperRoot(props) {
  const mergedProps = mergeDefaultProps({
    getAnchorRect: (anchor) => anchor == null ? void 0 : anchor.getBoundingClientRect(),
    placement: "bottom",
    gutter: 0,
    shift: 0,
    flip: true,
    slide: true,
    overlap: false,
    sameWidth: false,
    fitViewport: false,
    hideWhenDetached: false,
    detachedPadding: 0,
    arrowPadding: 4,
    overflowPadding: 8
  }, props);
  const [positionerRef, setPositionerRef] = createSignal();
  const [arrowRef, setArrowRef] = createSignal();
  const [currentPlacement, setCurrentPlacement] = createSignal(mergedProps.placement);
  const anchorRef = () => {
    var _a;
    return getAnchorElement((_a = mergedProps.anchorRef) == null ? void 0 : _a.call(mergedProps), mergedProps.getAnchorRect);
  };
  const { direction } = useLocale();
  async function updatePosition() {
    var _a, _b, _c;
    const referenceEl = anchorRef();
    const floatingEl = positionerRef();
    const arrowEl = arrowRef();
    if (!referenceEl || !floatingEl) return;
    const arrowOffset = ((arrowEl == null ? void 0 : arrowEl.clientHeight) || 0) / 2;
    const finalGutter = typeof mergedProps.gutter === "number" ? mergedProps.gutter + arrowOffset : (_a = mergedProps.gutter) != null ? _a : arrowOffset;
    floatingEl.style.setProperty("--kb-popper-content-overflow-padding", `${mergedProps.overflowPadding}px`);
    referenceEl.getBoundingClientRect();
    const middleware = [offset(({ placement }) => {
      return {
        mainAxis: finalGutter,
        crossAxis: !!!placement.split("-")[1] ? mergedProps.shift : void 0,
        alignmentAxis: mergedProps.shift
      };
    })];
    if (mergedProps.flip !== false) {
      const fallbackPlacements = typeof mergedProps.flip === "string" ? mergedProps.flip.split(" ") : void 0;
      if (fallbackPlacements !== void 0 && !fallbackPlacements.every(isValidPlacement)) throw new Error("`flip` expects a spaced-delimited list of placements");
      middleware.push(flip({
        padding: mergedProps.overflowPadding,
        fallbackPlacements
      }));
    }
    if (mergedProps.slide || mergedProps.overlap) middleware.push(shift({
      mainAxis: mergedProps.slide,
      crossAxis: mergedProps.overlap,
      padding: mergedProps.overflowPadding
    }));
    middleware.push(size({
      padding: mergedProps.overflowPadding,
      apply({ availableWidth, availableHeight, rects }) {
        const referenceWidth = Math.round(rects.reference.width);
        availableWidth = Math.floor(availableWidth);
        availableHeight = Math.floor(availableHeight);
        floatingEl.style.setProperty("--kb-popper-anchor-width", `${referenceWidth}px`);
        floatingEl.style.setProperty("--kb-popper-content-available-width", `${availableWidth}px`);
        floatingEl.style.setProperty("--kb-popper-content-available-height", `${availableHeight}px`);
        if (mergedProps.sameWidth) floatingEl.style.width = `${referenceWidth}px`;
        if (mergedProps.fitViewport) {
          floatingEl.style.maxWidth = `${availableWidth}px`;
          floatingEl.style.maxHeight = `${availableHeight}px`;
        }
      }
    }));
    if (mergedProps.hideWhenDetached) middleware.push(hide({ padding: mergedProps.detachedPadding }));
    if (arrowEl) middleware.push(arrow({
      element: arrowEl,
      padding: mergedProps.arrowPadding
    }));
    const pos = await computePosition(referenceEl, floatingEl, {
      placement: mergedProps.placement,
      strategy: "absolute",
      middleware,
      platform: {
        ...platform,
        isRTL: () => direction() === "rtl"
      }
    });
    setCurrentPlacement(pos.placement);
    (_b = mergedProps.onCurrentPlacementChange) == null ? void 0 : _b.call(mergedProps, pos.placement);
    if (!floatingEl) return;
    floatingEl.style.setProperty("--kb-popper-content-transform-origin", getTransformOrigin(pos.placement, direction()));
    const x = Math.round(pos.x);
    const y = Math.round(pos.y);
    let visibility;
    if (mergedProps.hideWhenDetached) visibility = ((_c = pos.middlewareData.hide) == null ? void 0 : _c.referenceHidden) ? "hidden" : "visible";
    Object.assign(floatingEl.style, {
      top: "0",
      left: "0",
      transform: `translate3d(${x}px, ${y}px, 0)`,
      visibility
    });
    if (arrowEl && pos.middlewareData.arrow) {
      const { x: arrowX, y: arrowY } = pos.middlewareData.arrow;
      const dir = pos.placement.split("-")[0];
      Object.assign(arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        [dir]: "100%"
      });
    }
  }
  createEffect(() => {
    const referenceEl = anchorRef();
    const floatingEl = positionerRef();
    if (!referenceEl || !floatingEl) return;
    onCleanup(autoUpdate(referenceEl, floatingEl, updatePosition, { elementResize: typeof ResizeObserver === "function" }));
  });
  createEffect(() => {
    var _a;
    const positioner = positionerRef();
    const content = (_a = mergedProps.contentRef) == null ? void 0 : _a.call(mergedProps);
    if (!positioner || !content) return;
    queueMicrotask(() => {
      positioner.style.zIndex = getComputedStyle(content).zIndex;
    });
  });
  const context = {
    currentPlacement,
    contentRef: () => {
      var _a;
      return (_a = mergedProps.contentRef) == null ? void 0 : _a.call(mergedProps);
    },
    setPositionerRef,
    setArrowRef
  };
  return createComponent(PopperContext.Provider, {
    value: context,
    get children() {
      return mergedProps.children;
    }
  });
}
var Popper = Object.assign(PopperRoot, {
  Arrow: PopperArrow,
  Context: PopperContext,
  usePopperContext,
  Positioner: PopperPositioner
});
var DATA_TOP_LAYER_ATTR = "data-kb-top-layer";
var originalBodyPointerEvents;
var hasDisabledBodyPointerEvents = false;
var layers = [];
function indexOf(node) {
  return layers.findIndex((layer) => layer.node === node);
}
function find(node) {
  return layers[indexOf(node)];
}
function isTopMostLayer(node) {
  return layers[layers.length - 1].node === node;
}
function getPointerBlockingLayers() {
  return layers.filter((layer) => layer.isPointerBlocking);
}
function getTopMostPointerBlockingLayer() {
  return [...getPointerBlockingLayers()].slice(-1)[0];
}
function hasPointerBlockingLayer() {
  return getPointerBlockingLayers().length > 0;
}
function isBelowPointerBlockingLayer(node) {
  var _a;
  const highestBlockingIndex = indexOf((_a = getTopMostPointerBlockingLayer()) == null ? void 0 : _a.node);
  return indexOf(node) < highestBlockingIndex;
}
function addLayer(layer) {
  layers.push(layer);
}
function removeLayer(node) {
  const index = indexOf(node);
  if (index < 0) return;
  layers.splice(index, 1);
}
function assignPointerEventToLayers() {
  for (const { node } of layers) node.style.pointerEvents = isBelowPointerBlockingLayer(node) ? "none" : "auto";
}
function disableBodyPointerEvents(node) {
  if (hasPointerBlockingLayer() && !hasDisabledBodyPointerEvents) {
    const ownerDocument = getDocument(node);
    originalBodyPointerEvents = document.body.style.pointerEvents;
    ownerDocument.body.style.pointerEvents = "none";
    hasDisabledBodyPointerEvents = true;
  }
}
function restoreBodyPointerEvents(node) {
  if (hasPointerBlockingLayer()) return;
  const ownerDocument = getDocument(node);
  ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
  if (ownerDocument.body.style.length === 0) ownerDocument.body.removeAttribute("style");
  hasDisabledBodyPointerEvents = false;
}
var layerStack = {
  layers,
  isTopMostLayer,
  hasPointerBlockingLayer,
  isBelowPointerBlockingLayer,
  addLayer,
  removeLayer,
  indexOf,
  find,
  assignPointerEventToLayers,
  disableBodyPointerEvents,
  restoreBodyPointerEvents
};
var AUTOFOCUS_ON_MOUNT_EVENT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT_EVENT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
  bubbles: false,
  cancelable: true
};
var focusScopeStack = {
  stack: [],
  active() {
    return this.stack[0];
  },
  add(scope) {
    var _a;
    if (scope !== this.active()) (_a = this.active()) == null ? void 0 : _a.pause();
    this.stack = removeItemFromArray(this.stack, scope);
    this.stack.unshift(scope);
  },
  remove(scope) {
    var _a;
    this.stack = removeItemFromArray(this.stack, scope);
    (_a = this.active()) == null ? void 0 : _a.resume();
  }
};
function createFocusScope(props, ref) {
  const [isPaused, setIsPaused] = createSignal(false);
  const focusScope = {
    pause() {
      setIsPaused(true);
    },
    resume() {
      setIsPaused(false);
    }
  };
  let lastFocusedElement = null;
  const onMountAutoFocus = (e) => {
    var _a;
    return (_a = props.onMountAutoFocus) == null ? void 0 : _a.call(props, e);
  };
  const onUnmountAutoFocus = (e) => {
    var _a;
    return (_a = props.onUnmountAutoFocus) == null ? void 0 : _a.call(props, e);
  };
  const ownerDocument = () => getDocument(ref());
  const createSentinel = () => {
    const element = ownerDocument().createElement("span");
    element.setAttribute("data-focus-trap", "");
    element.tabIndex = 0;
    Object.assign(element.style, visuallyHiddenStyles);
    return element;
  };
  const tabbables = () => {
    const container = ref();
    if (!container) return [];
    return getAllTabbableIn(container, true).filter((el) => !el.hasAttribute("data-focus-trap"));
  };
  const firstTabbable = () => {
    const items = tabbables();
    return items.length > 0 ? items[0] : null;
  };
  const lastTabbable = () => {
    const items = tabbables();
    return items.length > 0 ? items[items.length - 1] : null;
  };
  const shouldPreventUnmountAutoFocus = () => {
    const container = ref();
    if (!container) return false;
    const activeElement = getActiveElement(container);
    if (!activeElement) return false;
    if (contains$1(container, activeElement)) return false;
    return isFocusable(activeElement);
  };
  createEffect(() => {
    if (isServer) return;
    const container = ref();
    if (!container) return;
    focusScopeStack.add(focusScope);
    const previouslyFocusedElement = getActiveElement(container);
    if (!contains$1(container, previouslyFocusedElement)) {
      const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT_EVENT, EVENT_OPTIONS);
      container.addEventListener(AUTOFOCUS_ON_MOUNT_EVENT, onMountAutoFocus);
      container.dispatchEvent(mountEvent);
      if (!mountEvent.defaultPrevented) setTimeout(() => {
        focusWithoutScrolling(firstTabbable());
        if (getActiveElement(container) === previouslyFocusedElement) focusWithoutScrolling(container);
      }, 0);
    }
    onCleanup(() => {
      container.removeEventListener(AUTOFOCUS_ON_MOUNT_EVENT, onMountAutoFocus);
      setTimeout(() => {
        const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT_EVENT, EVENT_OPTIONS);
        if (shouldPreventUnmountAutoFocus()) unmountEvent.preventDefault();
        container.addEventListener(AUTOFOCUS_ON_UNMOUNT_EVENT, onUnmountAutoFocus);
        container.dispatchEvent(unmountEvent);
        if (!unmountEvent.defaultPrevented) focusWithoutScrolling(previouslyFocusedElement != null ? previouslyFocusedElement : ownerDocument().body);
        container.removeEventListener(AUTOFOCUS_ON_UNMOUNT_EVENT, onUnmountAutoFocus);
        focusScopeStack.remove(focusScope);
      }, 0);
    });
  });
  createEffect(() => {
    if (isServer) return;
    const container = ref();
    if (!container || !access(props.trapFocus) || isPaused()) return;
    const onFocusIn = (event) => {
      const target = event.target;
      if (target == null ? void 0 : target.closest(`[data-kb-top-layer]`)) return;
      if (contains$1(container, target)) lastFocusedElement = target;
      else focusWithoutScrolling(lastFocusedElement);
    };
    const onFocusOut = (event) => {
      var _a;
      const target = (_a = event.relatedTarget) != null ? _a : getActiveElement(container);
      if (target == null ? void 0 : target.closest(`[data-kb-top-layer]`)) return;
      if (!contains$1(container, target)) focusWithoutScrolling(lastFocusedElement);
    };
    ownerDocument().addEventListener("focusin", onFocusIn);
    ownerDocument().addEventListener("focusout", onFocusOut);
    onCleanup(() => {
      ownerDocument().removeEventListener("focusin", onFocusIn);
      ownerDocument().removeEventListener("focusout", onFocusOut);
    });
  });
  createEffect(() => {
    if (isServer) return;
    const container = ref();
    if (!container || !access(props.trapFocus) || isPaused()) return;
    const startSentinel = createSentinel();
    container.insertAdjacentElement("afterbegin", startSentinel);
    const endSentinel = createSentinel();
    container.insertAdjacentElement("beforeend", endSentinel);
    function onFocus(event) {
      const first = firstTabbable();
      const last = lastTabbable();
      if (event.relatedTarget === first) focusWithoutScrolling(last);
      else focusWithoutScrolling(first);
    }
    startSentinel.addEventListener("focusin", onFocus);
    endSentinel.addEventListener("focusin", onFocus);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.previousSibling === endSentinel) {
          endSentinel.remove();
          container.insertAdjacentElement("beforeend", endSentinel);
        }
        if (mutation.nextSibling === startSentinel) {
          startSentinel.remove();
          container.insertAdjacentElement("afterbegin", startSentinel);
        }
      }
    });
    observer.observe(container, {
      childList: true,
      subtree: false
    });
    onCleanup(() => {
      startSentinel.removeEventListener("focusin", onFocus);
      endSentinel.removeEventListener("focusin", onFocus);
      startSentinel.remove();
      endSentinel.remove();
      observer.disconnect();
    });
  });
}
var DATA_LIVE_ANNOUNCER_ATTR = "data-live-announcer";
function createHideOutside(props) {
  createEffect(() => {
    if (access(props.isDisabled)) return;
    onCleanup(ariaHideOutside(access(props.targets), access(props.root)));
  });
}
var refCountMap = /* @__PURE__ */ new WeakMap();
var observerStack = [];
function ariaHideOutside(targets, root = document.body) {
  const visibleNodes = new Set(targets);
  const hiddenNodes = /* @__PURE__ */ new Set();
  const walk = (root2) => {
    for (const element of root2.querySelectorAll(`[${DATA_LIVE_ANNOUNCER_ATTR}], [${DATA_TOP_LAYER_ATTR}]`)) visibleNodes.add(element);
    const acceptNode = (node) => {
      if (visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
      for (const target of visibleNodes) if (node.contains(target)) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    };
    const walker = document.createTreeWalker(root2, NodeFilter.SHOW_ELEMENT, { acceptNode });
    const acceptRoot = acceptNode(root2);
    if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide$1(root2);
    if (acceptRoot !== NodeFilter.FILTER_REJECT) {
      let node = walker.nextNode();
      while (node != null) {
        hide$1(node);
        node = walker.nextNode();
      }
    }
  };
  const hide$1 = (node) => {
    var _a;
    const refCount = (_a = refCountMap.get(node)) != null ? _a : 0;
    if (node.getAttribute("aria-hidden") === "true" && refCount === 0) return;
    if (refCount === 0) node.setAttribute("aria-hidden", "true");
    hiddenNodes.add(node);
    refCountMap.set(node, refCount + 1);
  };
  if (observerStack.length) observerStack[observerStack.length - 1].disconnect();
  walk(root);
  const observer = new MutationObserver((changes) => {
    for (const change of changes) {
      if (change.type !== "childList" || change.addedNodes.length === 0) continue;
      if (![...visibleNodes, ...hiddenNodes].some((node) => node.contains(change.target))) {
        for (const node of change.removedNodes) if (node instanceof Element) {
          visibleNodes.delete(node);
          hiddenNodes.delete(node);
        }
        for (const node of change.addedNodes) if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) visibleNodes.add(node);
        else if (node instanceof Element) walk(node);
      }
    }
  });
  observer.observe(root, {
    childList: true,
    subtree: true
  });
  const observerWrapper = {
    observe() {
      observer.observe(root, {
        childList: true,
        subtree: true
      });
    },
    disconnect() {
      observer.disconnect();
    }
  };
  observerStack.push(observerWrapper);
  return () => {
    observer.disconnect();
    for (const node of hiddenNodes) {
      const count = refCountMap.get(node);
      if (count == null) return;
      if (count === 1) {
        node.removeAttribute("aria-hidden");
        refCountMap.delete(node);
      } else refCountMap.set(node, count - 1);
    }
    if (observerWrapper === observerStack[observerStack.length - 1]) {
      observerStack.pop();
      if (observerStack.length) observerStack[observerStack.length - 1].observe();
    } else observerStack.splice(observerStack.indexOf(observerWrapper), 1);
  };
}
var POINTER_DOWN_OUTSIDE_EVENT = "interactOutside.pointerDownOutside";
var FOCUS_OUTSIDE_EVENT = "interactOutside.focusOutside";
function createInteractOutside(props, ref) {
  let pointerDownTimeoutId;
  let clickHandler = noop;
  const ownerDocument = () => getDocument(ref());
  const onPointerDownOutside = (e) => {
    var _a;
    return (_a = props.onPointerDownOutside) == null ? void 0 : _a.call(props, e);
  };
  const onFocusOutside = (e) => {
    var _a;
    return (_a = props.onFocusOutside) == null ? void 0 : _a.call(props, e);
  };
  const onInteractOutside = (e) => {
    var _a;
    return (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, e);
  };
  const isEventOutside = (e) => {
    var _a;
    const target = e.target;
    if (!(target instanceof Element)) return false;
    if (target.closest(`[data-kb-top-layer]`)) return false;
    if (!contains$1(ownerDocument(), target)) return false;
    if (contains$1(ref(), target)) return false;
    return !((_a = props.shouldExcludeElement) == null ? void 0 : _a.call(props, target));
  };
  const onPointerDown = (e) => {
    function handler() {
      const container = ref();
      const target = e.target;
      if (!container || !target || !isEventOutside(e)) return;
      const handler2 = composeEventHandlers([onPointerDownOutside, onInteractOutside]);
      target.addEventListener(POINTER_DOWN_OUTSIDE_EVENT, handler2, { once: true });
      const pointerDownOutsideEvent = new CustomEvent(POINTER_DOWN_OUTSIDE_EVENT, {
        bubbles: false,
        cancelable: true,
        detail: {
          originalEvent: e,
          isContextMenu: e.button === 2 || isCtrlKey(e) && e.button === 0
        }
      });
      target.dispatchEvent(pointerDownOutsideEvent);
    }
    if (e.pointerType === "touch") {
      ownerDocument().removeEventListener("click", handler);
      clickHandler = handler;
      ownerDocument().addEventListener("click", handler, { once: true });
    } else handler();
  };
  const onFocusIn = (e) => {
    const container = ref();
    const target = e.target;
    if (!container || !target || !isEventOutside(e)) return;
    const handler = composeEventHandlers([onFocusOutside, onInteractOutside]);
    target.addEventListener(FOCUS_OUTSIDE_EVENT, handler, { once: true });
    const focusOutsideEvent = new CustomEvent(FOCUS_OUTSIDE_EVENT, {
      bubbles: false,
      cancelable: true,
      detail: {
        originalEvent: e,
        isContextMenu: false
      }
    });
    target.dispatchEvent(focusOutsideEvent);
  };
  createEffect(() => {
    if (isServer) return;
    if (access(props.isDisabled)) return;
    pointerDownTimeoutId = window.setTimeout(() => {
      ownerDocument().addEventListener("pointerdown", onPointerDown, true);
    }, 0);
    ownerDocument().addEventListener("focusin", onFocusIn, true);
    onCleanup(() => {
      window.clearTimeout(pointerDownTimeoutId);
      ownerDocument().removeEventListener("click", clickHandler);
      ownerDocument().removeEventListener("pointerdown", onPointerDown, true);
      ownerDocument().removeEventListener("focusin", onFocusIn, true);
    });
  });
}
function createEscapeKeyDown(props) {
  const handleKeyDown = (event) => {
    var _a;
    if (event.key === EventKey.Escape) (_a = props.onEscapeKeyDown) == null ? void 0 : _a.call(props, event);
  };
  createEffect(() => {
    var _a, _b;
    if (isServer) return;
    if (access(props.isDisabled)) return;
    const document$1 = (_b = (_a = props.ownerDocument) == null ? void 0 : _a.call(props)) != null ? _b : getDocument();
    document$1.addEventListener("keydown", handleKeyDown);
    onCleanup(() => {
      document$1.removeEventListener("keydown", handleKeyDown);
    });
  });
}
var DismissableLayerContext = createContext();
function useOptionalDismissableLayerContext() {
  return useContext(DismissableLayerContext);
}
function DismissableLayer(props) {
  let ref;
  const parentContext = useOptionalDismissableLayerContext();
  const [local, others] = splitProps(props, [
    "ref",
    "disableOutsidePointerEvents",
    "excludedElements",
    "onEscapeKeyDown",
    "onPointerDownOutside",
    "onFocusOutside",
    "onInteractOutside",
    "onDismiss",
    "bypassTopMostLayerCheck"
  ]);
  const nestedLayers = /* @__PURE__ */ new Set([]);
  const registerNestedLayer = (element) => {
    nestedLayers.add(element);
    const parentUnregister = parentContext == null ? void 0 : parentContext.registerNestedLayer(element);
    return () => {
      nestedLayers.delete(element);
      parentUnregister == null ? void 0 : parentUnregister();
    };
  };
  const shouldExcludeElement = (element) => {
    return false;
  };
  const onPointerDownOutside = (e) => {
  };
  const onFocusOutside = (e) => {
    var _a, _b, _c;
    (_a = local.onFocusOutside) == null ? void 0 : _a.call(local, e);
    (_b = local.onInteractOutside) == null ? void 0 : _b.call(local, e);
    if (!e.defaultPrevented) (_c = local.onDismiss) == null ? void 0 : _c.call(local);
  };
  createInteractOutside({
    shouldExcludeElement,
    onPointerDownOutside,
    onFocusOutside
  }, () => ref);
  createEscapeKeyDown({
    ownerDocument: () => getDocument(ref),
    onEscapeKeyDown: (e) => {
    }
  });
  onMount(() => {
  });
  createEffect(on([() => ref, () => local.disableOutsidePointerEvents], ([ref2, disableOutsidePointerEvents]) => {
    if (!ref2) return;
    const layer = layerStack.find(ref2);
    if (layer && layer.isPointerBlocking !== disableOutsidePointerEvents) {
      layer.isPointerBlocking = disableOutsidePointerEvents;
      layerStack.assignPointerEventToLayers();
    }
    if (disableOutsidePointerEvents) layerStack.disableBodyPointerEvents(ref2);
    onCleanup(() => {
      layerStack.restoreBodyPointerEvents(ref2);
    });
  }, { defer: true }));
  const context = { registerNestedLayer };
  return createComponent(DismissableLayerContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({ as: "div" }, others));
    }
  });
}
function createDisclosureState(props = {}) {
  const [isOpen, setIsOpen] = createControllableBooleanSignal({
    value: () => access(props.open),
    defaultValue: () => !!access(props.defaultOpen),
    onChange: (value) => {
      var _a;
      return (_a = props.onOpenChange) == null ? void 0 : _a.call(props, value);
    }
  });
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    isOpen() ? close() : open();
  };
  return {
    isOpen,
    setIsOpen,
    open,
    close,
    toggle
  };
}
var contains = (wrapper, target) => {
  var _a;
  if (wrapper.contains(target)) return true;
  let currentElement = target;
  while (currentElement) {
    if (currentElement === wrapper) return true;
    currentElement = (_a = currentElement._$host) != null ? _a : currentElement.parentElement;
  }
  return false;
};
var activeStyles = /* @__PURE__ */ new Map();
var createStyle = (props) => {
  createEffect(() => {
    var _a, _b;
    const style = (_a = access$1(props.style)) != null ? _a : {};
    const properties = (_b = access$1(props.properties)) != null ? _b : [];
    const originalStyles = {};
    for (const key in style) originalStyles[key] = props.element.style[key];
    const activeStyle = activeStyles.get(props.key);
    if (activeStyle) activeStyle.activeCount++;
    else activeStyles.set(props.key, {
      activeCount: 1,
      originalStyles,
      properties: properties.map((property) => property.key)
    });
    Object.assign(props.element.style, props.style);
    for (const property of properties) props.element.style.setProperty(property.key, property.value);
    onCleanup(() => {
      var _a2;
      const activeStyle2 = activeStyles.get(props.key);
      if (!activeStyle2) return;
      if (activeStyle2.activeCount !== 1) {
        activeStyle2.activeCount--;
        return;
      }
      activeStyles.delete(props.key);
      for (const [key, value] of Object.entries(activeStyle2.originalStyles)) props.element.style[key] = value;
      for (const property of activeStyle2.properties) props.element.style.removeProperty(property);
      if (props.element.style.length === 0) props.element.removeAttribute("style");
      (_a2 = props.cleanup) == null ? void 0 : _a2.call(props);
    });
  });
};
var style_default = createStyle;
var getScrollDimensions = (element, axis) => {
  switch (axis) {
    case "x":
      return [
        element.clientWidth,
        element.scrollLeft,
        element.scrollWidth
      ];
    case "y":
      return [
        element.clientHeight,
        element.scrollTop,
        element.scrollHeight
      ];
  }
};
var isScrollContainer = (element, axis) => {
  const styles = getComputedStyle(element);
  const overflow = axis === "x" ? styles.overflowX : styles.overflowY;
  return overflow === "auto" || overflow === "scroll" || element.tagName === "HTML" && overflow === "visible";
};
var getScrollAtLocation = (location, axis, stopAt) => {
  var _a;
  const directionFactor = axis === "x" && window.getComputedStyle(location).direction === "rtl" ? -1 : 1;
  let currentElement = location;
  let availableScroll = 0;
  let availableScrollTop = 0;
  let wrapperReached = false;
  do {
    const [clientSize, scrollOffset, scrollSize] = getScrollDimensions(currentElement, axis);
    const scrolled = scrollSize - clientSize - directionFactor * scrollOffset;
    if ((scrollOffset !== 0 || scrolled !== 0) && isScrollContainer(currentElement, axis)) {
      availableScroll += scrolled;
      availableScrollTop += scrollOffset;
    }
    if (currentElement === (stopAt != null ? stopAt : document.documentElement)) wrapperReached = true;
    else currentElement = (_a = currentElement._$host) != null ? _a : currentElement.parentElement;
  } while (currentElement && !wrapperReached);
  return [availableScroll, availableScrollTop];
};
var [preventScrollStack, setPreventScrollStack] = createSignal([]);
var isActive = (id) => preventScrollStack().indexOf(id) === preventScrollStack().length - 1;
var createPreventScroll = (props) => {
  const defaultedProps = mergeProps$1({
    element: null,
    enabled: true,
    hideScrollbar: true,
    preventScrollbarShift: true,
    preventScrollbarShiftMode: "padding",
    restoreScrollPosition: true,
    allowPinchZoom: false
  }, props);
  const preventScrollId = createUniqueId();
  let currentTouchStart = [0, 0];
  let currentTouchStartAxis = null;
  let currentTouchStartDelta = null;
  createEffect(() => {
    if (!access$1(defaultedProps.enabled)) return;
    setPreventScrollStack((stack) => [...stack, preventScrollId]);
    onCleanup(() => {
      setPreventScrollStack((stack) => stack.filter((id) => id !== preventScrollId));
    });
  });
  createEffect(() => {
    if (!access$1(defaultedProps.enabled) || !access$1(defaultedProps.hideScrollbar)) return;
    const { body } = document;
    const scrollbarWidth = window.innerWidth - body.offsetWidth;
    if (access$1(defaultedProps.preventScrollbarShift)) {
      const style = { overflow: "hidden" };
      const properties = [];
      if (scrollbarWidth > 0) {
        if (access$1(defaultedProps.preventScrollbarShiftMode) === "padding") style.paddingRight = `calc(${window.getComputedStyle(body).paddingRight} + ${scrollbarWidth}px)`;
        else style.marginRight = `calc(${window.getComputedStyle(body).marginRight} + ${scrollbarWidth}px)`;
        properties.push({
          key: "--scrollbar-width",
          value: `${scrollbarWidth}px`
        });
      }
      const offsetTop = window.scrollY;
      const offsetLeft = window.scrollX;
      style_default({
        key: "prevent-scroll",
        element: body,
        style,
        properties,
        cleanup: () => {
          if (access$1(defaultedProps.restoreScrollPosition) && scrollbarWidth > 0) window.scrollTo(offsetLeft, offsetTop);
        }
      });
    } else style_default({
      key: "prevent-scroll",
      element: body,
      style: { overflow: "hidden" }
    });
  });
  createEffect(() => {
    if (!isActive(preventScrollId) || !access$1(defaultedProps.enabled)) return;
    document.addEventListener("wheel", maybePreventWheel, { passive: false });
    document.addEventListener("touchstart", logTouchStart, { passive: false });
    document.addEventListener("touchmove", maybePreventTouch, { passive: false });
    onCleanup(() => {
      document.removeEventListener("wheel", maybePreventWheel);
      document.removeEventListener("touchstart", logTouchStart);
      document.removeEventListener("touchmove", maybePreventTouch);
    });
  });
  const logTouchStart = (event) => {
    currentTouchStart = getTouchXY(event);
    currentTouchStartAxis = null;
    currentTouchStartDelta = null;
  };
  const maybePreventWheel = (event) => {
    const target = event.target;
    const wrapper = access$1(defaultedProps.element);
    const delta = getDeltaXY(event);
    const axis = Math.abs(delta[0]) > Math.abs(delta[1]) ? "x" : "y";
    const resultsInScroll = wouldScroll(target, axis, axis === "x" ? delta[0] : delta[1], wrapper);
    let shouldCancel;
    if (wrapper && contains(wrapper, target)) shouldCancel = !resultsInScroll;
    else shouldCancel = true;
    if (shouldCancel && event.cancelable) event.preventDefault();
  };
  const maybePreventTouch = (event) => {
    const wrapper = access$1(defaultedProps.element);
    const target = event.target;
    let shouldCancel;
    if (event.touches.length === 2) shouldCancel = !access$1(defaultedProps.allowPinchZoom);
    else {
      if (currentTouchStartAxis == null || currentTouchStartDelta === null) {
        const delta = getTouchXY(event).map((touch, i) => currentTouchStart[i] - touch);
        const axis = Math.abs(delta[0]) > Math.abs(delta[1]) ? "x" : "y";
        currentTouchStartAxis = axis;
        currentTouchStartDelta = axis === "x" ? delta[0] : delta[1];
      }
      if (target.type === "range") shouldCancel = false;
      else {
        const wouldResultInScroll = wouldScroll(target, currentTouchStartAxis, currentTouchStartDelta, wrapper);
        if (wrapper && contains(wrapper, target)) shouldCancel = !wouldResultInScroll;
        else shouldCancel = true;
      }
    }
    if (shouldCancel && event.cancelable) event.preventDefault();
  };
};
var getDeltaXY = (event) => [event.deltaX, event.deltaY];
var getTouchXY = (event) => event.changedTouches[0] ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
var wouldScroll = (target, axis, delta, wrapper) => {
  const [availableScroll, availableScrollTop] = getScrollAtLocation(target, axis, wrapper !== null && contains(wrapper, target) ? wrapper : void 0);
  if (delta > 0 && Math.abs(availableScroll) <= 1) return false;
  if (delta < 0 && Math.abs(availableScrollTop) < 1) return false;
  return true;
};
var src_default = createPreventScroll;
__export({}, {
  Arrow: () => PopperArrow,
  Content: () => SelectContent$1,
  Description: () => FormControlDescription,
  ErrorMessage: () => FormControlErrorMessage,
  HiddenSelect: () => SelectHiddenSelect$1,
  Icon: () => SelectIcon,
  Item: () => ListboxItem,
  ItemDescription: () => ListboxItemDescription,
  ItemIndicator: () => ListboxItemIndicator,
  ItemLabel: () => ListboxItemLabel,
  Label: () => SelectLabel,
  Listbox: () => SelectListbox,
  Portal: () => SelectPortal,
  Root: () => SelectRoot,
  Section: () => ListboxSection,
  Select: () => Select$1,
  Trigger: () => SelectTrigger$1,
  Value: () => SelectValue$1,
  useSelectContext: () => useSelectContext
});
var SelectContext = createContext();
function useSelectContext() {
  const context = useContext(SelectContext);
  if (context === void 0) throw new Error("[kobalte]: `useSelectContext` must be used within a `Select` component");
  return context;
}
function SelectContent$1(props) {
  let ref;
  const context = useSelectContext();
  const [local, others] = splitProps(props, [
    "ref",
    "style",
    "onCloseAutoFocus",
    "onFocusOutside"
  ]);
  const onEscapeKeyDown = (e) => {
    context.close();
  };
  const onFocusOutside = (e) => {
    var _a;
    (_a = local.onFocusOutside) == null ? void 0 : _a.call(local, e);
    if (context.isOpen() && context.isModal()) e.preventDefault();
  };
  createHideOutside({
    isDisabled: () => !(context.isOpen() && context.isModal()),
    targets: () => []
  });
  src_default({
    element: () => null,
    enabled: () => context.contentPresent() && context.preventScroll()
  });
  createFocusScope({
    trapFocus: () => context.isOpen() && context.isModal(),
    onMountAutoFocus: (e) => {
      e.preventDefault();
    },
    onUnmountAutoFocus: (e) => {
      var _a;
      (_a = local.onCloseAutoFocus) == null ? void 0 : _a.call(local, e);
      if (!e.defaultPrevented) {
        focusWithoutScrolling(context.triggerRef());
        e.preventDefault();
      }
    }
  }, () => ref);
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Popper.Positioner, { get children() {
        return createComponent(DismissableLayer, mergeProps({
          get disableOutsidePointerEvents() {
            return context.isModal() && context.isOpen();
          },
          get excludedElements() {
            return [context.triggerRef];
          },
          get style() {
            return combineStyle({
              "--kb-select-content-transform-origin": "var(--kb-popper-content-transform-origin)",
              position: "relative"
            }, local.style);
          },
          onEscapeKeyDown,
          onFocusOutside,
          get onDismiss() {
            return context.close;
          }
        }, () => context.dataset(), others));
      } });
    }
  });
}
function SelectHiddenSelect$1(props) {
  const context = useSelectContext();
  return createComponent(HiddenSelectBase, mergeProps({
    get collection() {
      return context.listState().collection();
    },
    get selectionManager() {
      return context.listState().selectionManager();
    },
    get isOpen() {
      return context.isOpen();
    },
    get isMultiple() {
      return context.isMultiple();
    },
    get isVirtualized() {
      return context.isVirtualized();
    },
    focusTrigger: () => {
      var _a;
      return (_a = context.triggerRef()) == null ? void 0 : _a.focus();
    }
  }, props));
}
function SelectIcon(props) {
  const context = useSelectContext();
  const mergedProps = mergeDefaultProps({ children: "\u25BC" }, props);
  return createComponent(Polymorphic, mergeProps({
    as: "span",
    "aria-hidden": "true"
  }, () => context.dataset(), mergedProps));
}
function SelectLabel(props) {
  const context = useSelectContext();
  const [local, others] = splitProps(props, ["onClick"]);
  const onClick = (e) => {
    var _a;
    callHandler(e, local.onClick);
    if (!context.isDisabled()) (_a = context.triggerRef()) == null ? void 0 : _a.focus();
  };
  return createComponent(FormControlLabel, mergeProps({
    as: "span",
    onClick
  }, others));
}
function SelectListbox(props) {
  const context = useSelectContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("listbox") }, props), [
    "ref",
    "id",
    "onKeyDown"
  ]);
  createEffect(() => onCleanup(context.registerListboxId(local.id)));
  const onKeyDown = (e) => {
    callHandler(e, local.onKeyDown);
    if (e.key === "Escape") e.preventDefault();
  };
  return createComponent(ListboxRoot, mergeProps({
    get id() {
      return local.id;
    },
    get state() {
      return context.listState();
    },
    get virtualized() {
      return context.isVirtualized();
    },
    get autoFocus() {
      return context.autoFocus();
    },
    shouldSelectOnPressUp: true,
    shouldFocusOnHover: true,
    get shouldFocusWrap() {
      return context.shouldFocusWrap();
    },
    get disallowTypeAhead() {
      return context.disallowTypeAhead();
    },
    get ["aria-labelledby"]() {
      return context.listboxAriaLabelledBy();
    },
    get renderItem() {
      return context.renderItem;
    },
    get renderSection() {
      return context.renderSection;
    },
    onKeyDown
  }, others));
}
function SelectPortal(props) {
  const context = useSelectContext();
  return createComponent(Show, {
    get when() {
      return context.contentPresent();
    },
    get children() {
      return createComponent(Portal, props);
    }
  });
}
function SelectBase(props) {
  const [local, popperProps, formControlProps, others] = splitProps(mergeDefaultProps({
    id: `select-${createUniqueId()}`,
    selectionMode: "single",
    disallowEmptySelection: false,
    closeOnSelection: props.selectionMode === "single",
    allowDuplicateSelectionEvents: true,
    gutter: 8,
    sameWidth: true,
    modal: false
  }, props), [
    "itemComponent",
    "sectionComponent",
    "open",
    "defaultOpen",
    "onOpenChange",
    "value",
    "defaultValue",
    "onChange",
    "placeholder",
    "options",
    "optionValue",
    "optionTextValue",
    "optionDisabled",
    "optionGroupChildren",
    "keyboardDelegate",
    "allowDuplicateSelectionEvents",
    "disallowEmptySelection",
    "closeOnSelection",
    "disallowTypeAhead",
    "shouldFocusWrap",
    "selectionBehavior",
    "selectionMode",
    "virtualized",
    "modal",
    "preventScroll",
    "forceMount"
  ], [
    "getAnchorRect",
    "placement",
    "gutter",
    "shift",
    "flip",
    "slide",
    "overlap",
    "sameWidth",
    "fitViewport",
    "hideWhenDetached",
    "detachedPadding",
    "arrowPadding",
    "overflowPadding"
  ], FORM_CONTROL_PROP_NAMES);
  const [triggerId, setTriggerId] = createSignal();
  const [valueId, setValueId] = createSignal();
  const [listboxId, setListboxId] = createSignal();
  const [triggerRef, setTriggerRef] = createSignal();
  const [contentRef, setContentRef] = createSignal();
  const [listboxRef, setListboxRef] = createSignal();
  const [listboxAriaLabelledBy, setListboxAriaLabelledBy] = createSignal();
  const [focusStrategy, setFocusStrategy] = createSignal(true);
  const getOptionValue = (option) => {
    const optionValue = local.optionValue;
    if (optionValue == null) return String(option);
    return String(isFunction(optionValue) ? optionValue(option) : option[optionValue]);
  };
  const flattenOptions = createMemo(() => {
    const optionGroupChildren = local.optionGroupChildren;
    if (optionGroupChildren == null) return local.options;
    return local.options.flatMap((item) => {
      var _a;
      return (_a = item[optionGroupChildren]) != null ? _a : item;
    });
  });
  const flattenOptionKeys = createMemo(() => {
    return flattenOptions().map((option) => getOptionValue(option));
  });
  const getOptionsFromValues = (values) => {
    return [...values].map((value) => flattenOptions().find((option) => getOptionValue(option) === value)).filter((option) => option != null);
  };
  const disclosureState = createDisclosureState({
    open: () => local.open,
    defaultOpen: () => local.defaultOpen,
    onOpenChange: (isOpen) => {
      var _a;
      return (_a = local.onOpenChange) == null ? void 0 : _a.call(local, isOpen);
    }
  });
  const listState = createListState({
    selectedKeys: () => {
      if (local.value != null) return local.value.map(getOptionValue);
      return local.value;
    },
    defaultSelectedKeys: () => {
      if (local.defaultValue != null) return local.defaultValue.map(getOptionValue);
      return local.defaultValue;
    },
    onSelectionChange: (selectedKeys) => {
      var _a;
      (_a = local.onChange) == null ? void 0 : _a.call(local, getOptionsFromValues(selectedKeys));
      if (local.closeOnSelection) close();
    },
    allowDuplicateSelectionEvents: () => access(local.allowDuplicateSelectionEvents),
    disallowEmptySelection: () => access(local.disallowEmptySelection),
    selectionBehavior: () => access(local.selectionBehavior),
    selectionMode: () => local.selectionMode,
    dataSource: () => {
      var _a;
      return (_a = local.options) != null ? _a : [];
    },
    getKey: () => local.optionValue,
    getTextValue: () => local.optionTextValue,
    getDisabled: () => local.optionDisabled,
    getSectionChildren: () => local.optionGroupChildren
  });
  const selectedOptions = createMemo(() => {
    return getOptionsFromValues(listState.selectionManager().selectedKeys());
  });
  const removeOptionFromSelection = (option) => {
    listState.selectionManager().toggleSelection(getOptionValue(option));
  };
  const { present: contentPresent } = src_default$1({
    show: () => local.forceMount || disclosureState.isOpen(),
    element: () => {
      var _a;
      return (_a = contentRef()) != null ? _a : null;
    }
  });
  const focusListbox = () => {
    const listboxEl = listboxRef();
    if (listboxEl) focusWithoutScrolling(listboxEl);
  };
  const open = (focusStrategy2) => {
    if (local.options.length <= 0) return;
    setFocusStrategy(focusStrategy2);
    disclosureState.open();
    let focusedKey = listState.selectionManager().firstSelectedKey();
    if (focusedKey == null) {
      if (focusStrategy2 === "first") focusedKey = listState.collection().getFirstKey();
      else if (focusStrategy2 === "last") focusedKey = listState.collection().getLastKey();
    }
    focusListbox();
    listState.selectionManager().setFocused(true);
    listState.selectionManager().setFocusedKey(focusedKey);
  };
  const close = () => {
    disclosureState.close();
    listState.selectionManager().setFocused(false);
    listState.selectionManager().setFocusedKey(void 0);
  };
  const toggle = (focusStrategy2) => {
    if (disclosureState.isOpen()) close();
    else open(focusStrategy2);
  };
  const { formControlContext } = createFormControl(formControlProps);
  createFormResetListener(triggerRef, () => {
    const defaultSelectedKeys = local.defaultValue ? [...local.defaultValue].map(getOptionValue) : new Selection();
    listState.selectionManager().setSelectedKeys(defaultSelectedKeys);
  });
  const collator = createCollator({
    usage: "search",
    sensitivity: "base"
  });
  const delegate = createMemo(() => {
    const keyboardDelegate = access(local.keyboardDelegate);
    if (keyboardDelegate) return keyboardDelegate;
    return new ListKeyboardDelegate(listState.collection, void 0, collator);
  });
  const renderItem = (item) => {
    var _a;
    return (_a = local.itemComponent) == null ? void 0 : _a.call(local, { item });
  };
  const renderSection = (section) => {
    var _a;
    return (_a = local.sectionComponent) == null ? void 0 : _a.call(local, { section });
  };
  createEffect(on([flattenOptionKeys], ([flattenOptionKeys2]) => {
    const keysToKeep = [...listState.selectionManager().selectedKeys()].filter((key) => flattenOptionKeys2.includes(key));
    listState.selectionManager().setSelectedKeys(keysToKeep);
  }, { defer: true }));
  const dataset = createMemo(() => ({
    "data-expanded": disclosureState.isOpen() ? "" : void 0,
    "data-closed": !disclosureState.isOpen() ? "" : void 0
  }));
  const context = {
    dataset,
    isOpen: disclosureState.isOpen,
    isDisabled: () => {
      var _a;
      return (_a = formControlContext.isDisabled()) != null ? _a : false;
    },
    isMultiple: () => access(local.selectionMode) === "multiple",
    isVirtualized: () => {
      var _a;
      return (_a = local.virtualized) != null ? _a : false;
    },
    isModal: () => {
      var _a;
      return (_a = local.modal) != null ? _a : false;
    },
    preventScroll: () => {
      var _a;
      return (_a = local.preventScroll) != null ? _a : context.isModal();
    },
    disallowTypeAhead: () => {
      var _a;
      return (_a = local.disallowTypeAhead) != null ? _a : false;
    },
    shouldFocusWrap: () => {
      var _a;
      return (_a = local.shouldFocusWrap) != null ? _a : false;
    },
    selectedOptions,
    contentPresent,
    autoFocus: focusStrategy,
    triggerRef,
    listState: () => listState,
    keyboardDelegate: delegate,
    triggerId,
    valueId,
    listboxId,
    listboxAriaLabelledBy,
    setListboxAriaLabelledBy,
    setTriggerRef,
    setContentRef,
    setListboxRef,
    open,
    close,
    toggle,
    placeholder: () => local.placeholder,
    renderItem,
    renderSection,
    removeOptionFromSelection,
    generateId: createGenerateId(() => access(formControlProps.id)),
    registerTriggerId: createRegisterId(setTriggerId),
    registerValueId: createRegisterId(setValueId),
    registerListboxId: createRegisterId(setListboxId)
  };
  return createComponent(FormControlContext.Provider, {
    value: formControlContext,
    get children() {
      return createComponent(SelectContext.Provider, {
        value: context,
        get children() {
          return createComponent(Popper, mergeProps({
            anchorRef: triggerRef,
            contentRef
          }, popperProps, { get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              role: "group",
              get id() {
                return access(formControlProps.id);
              }
            }, () => formControlContext.dataset(), dataset, others));
          } }));
        }
      });
    }
  });
}
function SelectRoot(props) {
  const [local, others] = splitProps(props, [
    "value",
    "defaultValue",
    "onChange",
    "multiple"
  ]);
  const value = createMemo(() => {
    if (local.value != null) return local.multiple ? local.value : [local.value];
    return local.value;
  });
  const defaultValue = createMemo(() => {
    if (local.defaultValue != null) return local.multiple ? local.defaultValue : [local.defaultValue];
    return local.defaultValue;
  });
  const onChange = (value2) => {
    var _a, _b, _c;
    if (local.multiple) (_a = local.onChange) == null ? void 0 : _a.call(local, value2 != null ? value2 : []);
    else (_c = local.onChange) == null ? void 0 : _c.call(local, (_b = value2[0]) != null ? _b : null);
  };
  return createComponent(SelectBase, mergeProps({
    get value() {
      return value();
    },
    get defaultValue() {
      return defaultValue();
    },
    onChange,
    get selectionMode() {
      return local.multiple ? "multiple" : "single";
    }
  }, others));
}
function SelectTrigger$1(props) {
  const formControlContext = useFormControlContext();
  const context = useSelectContext();
  const [local, formControlFieldProps, others] = splitProps(mergeDefaultProps({ id: context.generateId("trigger") }, props), [
    "ref",
    "disabled",
    "onPointerDown",
    "onClick",
    "onKeyDown",
    "onFocus",
    "onBlur"
  ], FORM_CONTROL_FIELD_PROP_NAMES);
  const selectionManager = () => context.listState().selectionManager();
  const keyboardDelegate = () => context.keyboardDelegate();
  const isDisabled = () => local.disabled || context.isDisabled();
  const { fieldProps } = createFormControlField(formControlFieldProps);
  const { typeSelectHandlers } = createTypeSelect({
    keyboardDelegate,
    selectionManager,
    onTypeSelect: (key) => selectionManager().select(key)
  });
  const ariaLabelledBy = () => {
    return [context.listboxAriaLabelledBy(), context.valueId()].filter(Boolean).join(" ") || void 0;
  };
  const onPointerDown = (e) => {
    callHandler(e, local.onPointerDown);
    e.currentTarget.dataset.pointerType = e.pointerType;
    if (!isDisabled() && e.pointerType !== "touch" && e.button === 0) {
      e.preventDefault();
      context.toggle(true);
    }
  };
  const onClick = (e) => {
    callHandler(e, local.onClick);
    if (!isDisabled() && e.currentTarget.dataset.pointerType === "touch") context.toggle(true);
  };
  const onKeyDown = (e) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    callHandler(e, local.onKeyDown);
    if (isDisabled()) return;
    callHandler(e, typeSelectHandlers.onKeyDown);
    switch (e.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
        e.stopPropagation();
        e.preventDefault();
        context.toggle("first");
        break;
      case "ArrowUp":
        e.stopPropagation();
        e.preventDefault();
        context.toggle("last");
        break;
      case "ArrowLeft": {
        e.preventDefault();
        if (context.isMultiple()) return;
        const firstSelectedKey = selectionManager().firstSelectedKey();
        const key = firstSelectedKey != null ? (_b = (_a = keyboardDelegate()).getKeyAbove) == null ? void 0 : _b.call(_a, firstSelectedKey) : (_d = (_c = keyboardDelegate()).getFirstKey) == null ? void 0 : _d.call(_c);
        if (key != null) selectionManager().select(key);
        break;
      }
      case "ArrowRight": {
        e.preventDefault();
        if (context.isMultiple()) return;
        const firstSelectedKey = selectionManager().firstSelectedKey();
        const key = firstSelectedKey != null ? (_f = (_e = keyboardDelegate()).getKeyBelow) == null ? void 0 : _f.call(_e, firstSelectedKey) : (_h = (_g = keyboardDelegate()).getFirstKey) == null ? void 0 : _h.call(_g);
        if (key != null) selectionManager().select(key);
        break;
      }
    }
  };
  const onFocus = (e) => {
    callHandler(e, local.onFocus);
    if (selectionManager().isFocused()) return;
    selectionManager().setFocused(true);
  };
  const onBlur = (e) => {
    callHandler(e, local.onBlur);
    if (context.isOpen()) return;
    selectionManager().setFocused(false);
  };
  createEffect(() => onCleanup(context.registerTriggerId(fieldProps.id())));
  createEffect(() => {
    context.setListboxAriaLabelledBy([fieldProps.ariaLabelledBy(), fieldProps.ariaLabel() && !fieldProps.ariaLabelledBy() ? fieldProps.id() : null].filter(Boolean).join(" ") || void 0);
  });
  return createComponent(ButtonRoot, mergeProps({
    get id() {
      return fieldProps.id();
    },
    get disabled() {
      return isDisabled();
    },
    "aria-haspopup": "listbox",
    get ["aria-expanded"]() {
      return context.isOpen();
    },
    get ["aria-controls"]() {
      return context.isOpen() ? context.listboxId() : void 0;
    },
    get ["aria-label"]() {
      return fieldProps.ariaLabel();
    },
    get ["aria-labelledby"]() {
      return ariaLabelledBy();
    },
    get ["aria-describedby"]() {
      return fieldProps.ariaDescribedBy();
    },
    onPointerDown,
    onClick,
    onKeyDown,
    onFocus,
    onBlur
  }, () => context.dataset(), () => formControlContext.dataset(), others));
}
function SelectValue$1(props) {
  const formControlContext = useFormControlContext();
  const context = useSelectContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("value") }, props), ["id", "children"]);
  const selectionManager = () => context.listState().selectionManager();
  const isSelectionEmpty = () => {
    const selectedKeys = selectionManager().selectedKeys();
    if (selectedKeys.size === 1 && selectedKeys.has("")) return true;
    return selectionManager().isEmpty();
  };
  createEffect(() => onCleanup(context.registerValueId(local.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "span",
    get id() {
      return local.id;
    },
    get ["data-placeholder-shown"]() {
      return isSelectionEmpty() ? "" : void 0;
    }
  }, () => formControlContext.dataset(), others, { get children() {
    return createComponent(Show, {
      get when() {
        return !isSelectionEmpty();
      },
      get fallback() {
        return context.placeholder();
      },
      get children() {
        return createComponent(SelectValueChild, {
          state: {
            selectedOption: () => context.selectedOptions()[0],
            selectedOptions: () => context.selectedOptions(),
            remove: (option) => context.removeOptionFromSelection(option),
            clear: () => selectionManager().clearSelection()
          },
          get children() {
            return local.children;
          }
        });
      }
    });
  } }));
}
function SelectValueChild(props) {
  return children(() => {
    const body = props.children;
    return isFunction(body) ? body(props.state) : body;
  })();
}
var Select$1 = Object.assign(SelectRoot, {
  Arrow: PopperArrow,
  Content: SelectContent$1,
  Description: FormControlDescription,
  ErrorMessage: FormControlErrorMessage,
  HiddenSelect: SelectHiddenSelect$1,
  Icon: SelectIcon,
  Item: ListboxItem,
  ItemDescription: ListboxItemDescription,
  ItemIndicator: ListboxItemIndicator,
  ItemLabel: ListboxItemLabel,
  Label: SelectLabel,
  Listbox: SelectListbox,
  Portal: SelectPortal,
  Section: ListboxSection,
  Trigger: SelectTrigger$1,
  Value: SelectValue$1
});
var _tmpl$$2 = ["<path", ' d="M8 9l4 -4l4 4"></path>'], _tmpl$2$1 = ["<path", ' d="M16 15l-4 4l-4 -4"></path>'], _tmpl$3$1 = ["<svg", ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><title>Select Arrow</title><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>'];
var Select = SelectRoot;
var SelectValue = SelectValue$1;
var SelectTrigger = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(SelectTrigger$1, mergeProps({ get ["class"]() {
    return cn("flex h-10 w-full items-center justify-between rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-950 px-3 py-2 text-sm text-black dark:text-white placeholder:text-muted-foreground focus:outline-none focus:border-neutral-400 focus:dark:border-neutral-600 disabled:cursor-not-allowed disabled:opacity-50", local.class);
  } }, others, { get children() {
    return [local.children, createComponent(SelectIcon, {
      as: "svg",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "class": "size-4 opacity-50",
      get children() {
        return [ssr(_tmpl$$2, ssrHydrationKey()), ssr(_tmpl$2$1, ssrHydrationKey())];
      }
    })];
  } }));
};
var SelectContent = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(SelectPortal, { get children() {
    return createComponent(SelectContent$1, mergeProps({ get ["class"]() {
      return cn("relative z-50 min-w-32 overflow-hidden rounded-md border-2 border-black dark:border-white bg-white dark:bg-gray-950 text-black dark:text-white shadow-md animate-in fade-in-80", local.class);
    } }, others, { get children() {
      return createComponent(SelectListbox, { "class": "m-0 p-1" });
    } }));
  } });
};
var SelectItem = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(ListboxItem, mergeProps({ get ["class"]() {
    return cn("relative mt-0 flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800 text-black dark:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50", local.class);
  } }, others, { get children() {
    return [createComponent(ListboxItemIndicator, {
      "class": "absolute right-2 flex size-3.5 items-center justify-center",
      get children() {
        return ssr(_tmpl$3$1, ssrHydrationKey());
      }
    }), createComponent(ListboxItemLabel, { get children() {
      return local.children;
    } })];
  } }));
};
cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", {
  variants: { variant: {
    label: "data-[invalid]:text-destructive",
    description: "font-normal text-muted-foreground",
    error: "text-xs text-destructive"
  } },
  defaultVariants: { variant: "label" }
});
var _tmpl$$1 = ["<div", ' class="px-3 py-4 text-gray-500 text-center">No years found</div>'], _tmpl$2 = [
  "<div",
  ' class="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-950 border-2 border-black dark:border-white rounded-md shadow-lg max-h-48 overflow-hidden"><div class="p-2 border-b border-gray-200 dark:border-gray-700"><input type="text" placeholder="Search year..."',
  ' class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white placeholder-gray-500"></div><div class="max-h-32 overflow-y-auto"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--></div></div>"
], _tmpl$3 = ["<button", ' type="button" class="fixed inset-0 z-40 bg-transparent" aria-label="Close year dropdown"></button>'], _tmpl$4 = [
  "<div",
  ' class="relative"><button type="button" class="',
  '"><span',
  ">",
  "</span><!--$-->",
  "<!--/--></button><!--$-->",
  "<!--/--><!--$-->",
  "<!--/--></div>"
], _tmpl$5 = [
  "<button",
  ' type="button" class="',
  '">',
  "</button>"
];
function YearDropdown(props) {
  const [isOpen, setIsOpen] = createSignal(false);
  const [searchTerm, setSearchTerm] = createSignal("");
  const startYear = props.startYear || 2022;
  const endYear = props.endYear || 2030;
  const years = () => {
    const yearsArray = [];
    for (let year = endYear; year >= startYear; year--) yearsArray.push(year.toString());
    return yearsArray;
  };
  const filteredYears = () => {
    const search = searchTerm().toLowerCase();
    if (!search) return years();
    return years().filter((year) => year.includes(search));
  };
  return ssr(_tmpl$4, ssrHydrationKey(), `border-2 border-black dark:border-white h-10 bg-white dark:bg-gray-950 w-full text-sm px-3 py-2 rounded-md flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${escape(props.class, true)} focus:outline-none focus:border-neutral-400 focus:dark:border-neutral-600`, ssrAttribute("class", props.value ? "text-black dark:text-white" : "text-gray-500", false), escape(props.value) || escape(props.placeholder) || "Select year", escape(createComponent(calendar_default, { "class": "w-5 h-5 text-gray-500 flex-shrink-0" })), escape(createComponent(Show, {
    get when() {
      return isOpen();
    },
    get children() {
      return ssr(_tmpl$2, ssrHydrationKey(), ssrAttribute("value", escape(searchTerm(), true), false), escape(createComponent(For, {
        get each() {
          return filteredYears();
        },
        children: (year) => ssr(_tmpl$5, ssrHydrationKey(), `w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors ${props.value === year ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white" : "text-black dark:text-white"} focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-800`, escape(year))
      })), escape(createComponent(Show, {
        get when() {
          return filteredYears().length === 0;
        },
        get children() {
          return ssr(_tmpl$$1, ssrHydrationKey());
        }
      })));
    }
  })), escape(createComponent(Show, {
    get when() {
      return isOpen();
    },
    get children() {
      return ssr(_tmpl$3, ssrHydrationKey());
    }
  })));
}
var _tmpl$ = [
  "<div",
  ` class="space-y-8"><div><h3 class="mb-2 text-black dark:text-white">Let's start with your details</h3><p class="text-neutral-600 dark:text-neutral-400 mb-8">`,
  '</p></div><div class="space-y-6"><!--$-->',
  "<!--/--><!--$-->",
  '<!--/--><div class="grid md:grid-cols-2 gap-6"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--></div><!--$-->",
  "<!--/--></div></div>"
];
function StepPersonalInfo(props) {
  const variant = props.variant || "feedback";
  const startYear = 2025;
  const yearOptions = [
    {
      label: "I",
      value: "1"
    },
    {
      label: "II",
      value: "2"
    },
    {
      label: "III",
      value: "3"
    },
    {
      label: "IV",
      value: "4"
    }
  ];
  const departments = [
    "Computer Science and Engineering",
    "AIDS",
    "CSBS"
  ];
  const updateField = (field) => (value) => {
    props.onChange({
      ...props.data,
      [field]: value || ""
    });
  };
  return ssr(_tmpl$, ssrHydrationKey(), variant === "career" ? "This helps us personalize your results" : "This helps us organize and personalize feedback", escape(createComponent(TextField, { get children() {
    return [createComponent(TextFieldLabel, {
      "class": "text-sm font-medium mb-2 block text-black dark:text-white",
      children: "Name *"
    }), createComponent(TextFieldInput, {
      id: variant === "career" ? "quiz-name" : "name",
      type: "text",
      get value() {
        return props.data.name;
      },
      onInput: (e) => updateField("name")(e.currentTarget.value),
      placeholder: "Your full name",
      "class": "border-2 border-black dark:border-white h-12 text-sm bg-white dark:bg-gray-950 text-black dark:text-white"
    })];
  } })), escape(createComponent(TextField, { get children() {
    return [createComponent(TextFieldLabel, {
      "class": "text-sm font-medium mb-2 block text-black dark:text-white",
      children: "Email *"
    }), createComponent(TextFieldInput, {
      id: variant === "career" ? "quiz-email" : "email",
      type: "email",
      get value() {
        return props.data.email;
      },
      onInput: (e) => updateField("email")(e.currentTarget.value),
      placeholder: "your.email@example.com",
      "class": "border-2 border-black dark:border-white h-12 text-sm bg-white dark:bg-gray-950 text-black dark:text-white"
    })];
  } })), escape(createComponent(TextField, { get children() {
    return [createComponent(TextFieldLabel, {
      "class": "text-sm font-medium mb-2 block text-black dark:text-white",
      children: "Year *"
    }), createComponent(Select, {
      get value() {
        return props.data.year;
      },
      get onChange() {
        return updateField("year");
      },
      get options() {
        return yearOptions.map((opt) => opt.value);
      },
      placeholder: "Select year",
      itemComponent: (props$1) => {
        const option = yearOptions.find((opt) => opt.value === props$1.item.rawValue);
        return createComponent(SelectItem, {
          get item() {
            return props$1.item;
          },
          get children() {
            return (option == null ? void 0 : option.label) || props$1.item.rawValue;
          }
        });
      },
      get children() {
        return [createComponent(SelectTrigger, {
          "class": "border-2 border-black dark:border-white h-10 bg-white dark:bg-gray-950 w-full text-sm",
          get children() {
            return createComponent(SelectValue, { children: (state) => {
              var _a;
              const selectedValue = state.selectedOption();
              return ((_a = yearOptions.find((opt) => opt.value === selectedValue)) == null ? void 0 : _a.label) || selectedValue;
            } });
          }
        }), createComponent(SelectContent, {})];
      }
    })];
  } })), escape(createComponent(TextField, { get children() {
    return [createComponent(TextFieldLabel, {
      "class": "text-sm font-medium mb-2 block text-black dark:text-white",
      children: "Batch Year *"
    }), createComponent(YearDropdown, {
      get value() {
        return props.data.batch;
      },
      get onChange() {
        return updateField("batch");
      },
      startYear,
      endYear: 2035,
      placeholder: "Select batch year",
      "class": "border-2 border-black dark:border-white"
    })];
  } })), escape(createComponent(TextField, { get children() {
    return [createComponent(TextFieldLabel, {
      "class": "text-sm font-medium mb-2 block text-black dark:text-white",
      children: "Department *"
    }), createComponent(Select, {
      get value() {
        return props.data.department;
      },
      get onChange() {
        return updateField("department");
      },
      options: departments,
      placeholder: "Select your department",
      itemComponent: (props$1) => createComponent(SelectItem, {
        get item() {
          return props$1.item;
        },
        get children() {
          return props$1.item.rawValue;
        }
      }),
      get children() {
        return [createComponent(SelectTrigger, {
          "class": "border-2 border-black dark:border-white h-10 bg-white dark:bg-gray-950 w-full text-sm",
          get children() {
            return createComponent(SelectValue, { children: (state) => state.selectedOption() });
          }
        }), createComponent(SelectContent, {})];
      }
    })];
  } })));
}

export { FORM_CONTROL_PROP_NAMES as F, Progress as P, StepPersonalInfo as S, TextField as T, arrow_left_default as a, TextFieldLabel as b, TextFieldTextArea as c, createControllableSignal as d, createFormControl as e, createFormResetListener as f, FormControlContext as g, createRegisterId as h, FormControlErrorMessage as i, FormControlDescription as j, FormControlLabel as k, loader_circle_default as l, src_default$1 as s, toast as t, useFormControlContext as u };
//# sourceMappingURL=StepPersonalInfo-Cr5C_JzS.mjs.map
