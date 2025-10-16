import { u as useNavigate, M as Motion } from './router-Dq_AAJ66.mjs';
import { B as Button, I as Icon_default } from './button-DALkyRBc.mjs';
import { s as sparkles_default } from './sparkles-F_hK9BWt.mjs';
import { createComponent, ssr, ssrHydrationKey, mergeProps, escape, ssrAttribute } from 'solid-js/web';
import '../virtual/entry.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@tanstack/router-core';
import '@tanstack/history';
import 'solid-js';
import 'vite-plugin-node-polyfills/shims/process';
import 'tiny-warning';
import 'solid-js/store';
import 'tiny-invariant';
import '@tanstack/router-core/ssr/client';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'rou3';
import 'srvx';
import 'seroval';
import 'isbot';
import '@solid-primitives/refs';
import '@solid-primitives/props';
import '@motionone/dom';
import '@elysiajs/cors';
import '@elysiajs/eden';
import '@elysiajs/openapi';
import '@elysiajs/server-timing';
import '@valibot/to-json-schema';
import 'elysia';
import 'valibot';
import 'effect';
import 'drizzle-orm/pg-core';
import 'drizzle-orm/postgres-js';
import 'postgres';
import '@tanstack/solid-query';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';

var iconNode = [["path", {
  d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
  key: "5wwlr5"
}], ["path", {
  d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key: "r6nss1"
}]];
var House = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode,
  name: "house"
}));
var house_default = House;
function ThankYouIcon() {
  return createComponent(Motion.div, {
    initial: {
      scale: 0,
      rotateY: 0
    },
    animate: {
      scale: 1,
      rotateY: 360
    },
    transition: {
      delay: 0.4,
      duration: 0.8,
      easing: [
        0.22,
        1,
        0.36,
        1
      ]
    },
    style: { "transform-style": "preserve-3d" },
    "class": "w-20 h-20 bg-black flex items-center justify-center mx-auto mb-8 rounded-lg",
    get children() {
      return createComponent(sparkles_default, { "class": "w-10 h-10 text-white" });
    }
  });
}
var _tmpl$$1 = ["<p", ' class="text-sm text-neutral-600 mb-4">Want to keep learning?</p>'], _tmpl$2 = [
  "<div",
  ' class="flex flex-wrap justify-center gap-4">',
  "</div>"
], _tmpl$3 = [
  "<a",
  ' class="text-sm underline hover:opacity-60 transition-opacity">',
  "</a>"
];
function ThankYouResources(props) {
  return createComponent(Motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.9 },
    "class": "mt-16 pt-8 border-t-2 border-black",
    get children() {
      return [ssr(_tmpl$$1, ssrHydrationKey()), ssr(_tmpl$2, ssrHydrationKey(), escape(props.links.map((link) => ssr(_tmpl$3, ssrHydrationKey() + ssrAttribute("href", escape(link.href, true), false), escape(link.label)))))];
    }
  });
}
var _tmpl$ = ["<p", ' class="text-xs sm:text-sm text-neutral-500 dark:text-neutral-600">Your response has been recorded anonymously</p>'];
function ThankYouContent(props) {
  const resourceLinks = [
    {
      href: "#",
      label: "GitHub Resources"
    },
    {
      href: "#",
      label: "LinkedIn Tips"
    },
    {
      href: "#",
      label: "Career Guides"
    }
  ];
  return createComponent(Motion.div, {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      delay: 0.2,
      duration: 0.6
    },
    "class": "max-w-2xl text-center px-4",
    get children() {
      return [
        createComponent(ThankYouIcon, {}),
        createComponent(Motion.h1, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.5 },
          "class": "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-black dark:text-white",
          children: "Thanks for your input"
        }),
        createComponent(Motion.p, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.6 },
          "class": "text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12",
          children: "Your feedback helps us create better mentorship sessions. We'll use your insights to make the next one even more valuable."
        }),
        createComponent(Motion.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 0.7 },
          "class": "space-y-4",
          get children() {
            return [createComponent(Button, {
              get onClick() {
                return props.onBackToHome;
              },
              "class": "bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 border-0 w-full md:w-auto text-sm sm:text-base",
              get children() {
                return [createComponent(house_default, { "class": "w-4 h-4 sm:w-5 sm:h-5 mr-2" }), "BACK TO HOME"];
              }
            }), ssr(_tmpl$, ssrHydrationKey())];
          }
        }),
        createComponent(ThankYouResources, { links: resourceLinks })
      ];
    }
  });
}
function ThankYou(props) {
  return createComponent(Motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4 },
    exit: { opacity: 0 },
    "class": "min-h-screen bg-white dark:bg-black flex items-center justify-center p-4 sm:p-6",
    get children() {
      return createComponent(ThankYouContent, { get onBackToHome() {
        return props.onBackToHome;
      } });
    }
  });
}
function ThankYouRoute() {
  const navigate = useNavigate();
  const handleBackToHome = async () => {
    await navigate({ to: "/" });
  };
  return createComponent(ThankYou, { onBackToHome: handleBackToHome });
}

export { ThankYouRoute as component };
//# sourceMappingURL=thank-you-CdNdwWYK.mjs.map
