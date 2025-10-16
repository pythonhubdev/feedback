import { R as Route, M as Motion } from './router-Dq_AAJ66.mjs';
import { B as Button, I as Icon_default } from './button-DALkyRBc.mjs';
import { s as sparkles_default } from './sparkles-F_hK9BWt.mjs';
import { createComponent, mergeProps, ssr, ssrHydrationKey, escape } from 'solid-js/web';
import { createSignal, onMount, createEffect } from 'solid-js';
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

var iconNode$4 = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "m12 5 7 7-7 7",
  key: "xquz4c"
}]];
var ArrowRight = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$4,
  name: "arrow-right"
}));
var arrow_right_default = ArrowRight;
var iconNode$3 = [["path", {
  d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
  key: "9ktpf1"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var Compass = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$3,
  name: "compass"
}));
var compass_default = Compass;
var iconNode$2 = [["path", {
  d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
  key: "18887p"
}]];
var MessageSquare = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$2,
  name: "message-square"
}));
var message_square_default = MessageSquare;
var iconNode$1 = [["path", {
  d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
  key: "kfwtm"
}]];
var Moon = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$1,
  name: "moon"
}));
var moon_default = Moon;
var iconNode = [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "4",
    key: "4exip2"
  }],
  ["path", {
    d: "M12 2v2",
    key: "tus03m"
  }],
  ["path", {
    d: "M12 20v2",
    key: "1lh1kg"
  }],
  ["path", {
    d: "m4.93 4.93 1.41 1.41",
    key: "149t6j"
  }],
  ["path", {
    d: "m17.66 17.66 1.41 1.41",
    key: "ptbguv"
  }],
  ["path", {
    d: "M2 12h2",
    key: "1t8f8n"
  }],
  ["path", {
    d: "M20 12h2",
    key: "1q8mjw"
  }],
  ["path", {
    d: "m6.34 17.66-1.41 1.41",
    key: "1m8zz5"
  }],
  ["path", {
    d: "m19.07 4.93-1.41 1.41",
    key: "1shlcs"
  }]
];
var Sun = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode,
  name: "sun"
}));
var sun_default = Sun;
function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = createSignal("light");
  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");
    setCurrentTheme(theme);
    applyTheme(theme);
  });
  const applyTheme = (theme) => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  };
  createEffect(() => {
    applyTheme(currentTheme());
  });
  const handleToggle = () => {
    setCurrentTheme(currentTheme() === "light" ? "dark" : "light");
  };
  return createComponent(Motion.button, {
    hover: { scale: 1.05 },
    press: { scale: 0.95 },
    "class": "p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",
    onClick: handleToggle,
    "aria-label": "Toggle theme",
    get children() {
      return currentTheme() === "light" ? createComponent(moon_default, { "class": "w-5 h-5 text-gray-700 dark:text-gray-300" }) : createComponent(sun_default, { "class": "w-5 h-5 text-gray-700 dark:text-gray-300" });
    }
  });
}
var _tmpl$ = [
  "<div",
  ' class="max-w-7xl mx-auto flex items-center justify-between"><div class="flex items-center gap-2"><div class="w-8 h-8 sm:w-10 sm:h-10 bg-black dark:bg-white flex items-center justify-center">',
  '</div><span class="text-sm sm:text-base tracking-tight text-black dark:text-white">MENTORSHIP.01</span></div><div class="flex items-center gap-2 sm:gap-4"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--></div></div>"
], _tmpl$2 = ["<br", ">"], _tmpl$3 = ["<span", ' class="italic">your future.</span>'], _tmpl$4 = [
  "<div",
  ' class="border-2 border-black dark:border-white p-6 sm:p-8 md:p-12 bg-white dark:bg-black hover:bg-black dark:hover:bg-white transition-colors duration-300"><!--$-->',
  `<!--/--><h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">Give Feedback</h2><p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors">Tell us what worked, what didn't, and what you want to learn next.</p><div class="flex items-center gap-2 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors"><span class="tracking-wider text-xs sm:text-sm">START</span><!--$-->`,
  "<!--/--></div></div>"
], _tmpl$5 = [
  "<div",
  ' class="border-2 border-black dark:border-white p-6 sm:p-8 md:p-12 bg-white dark:bg-black hover:bg-black dark:hover:bg-white transition-colors duration-300"><!--$-->',
  '<!--/--><h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors">Take Career Quiz</h2><p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 transition-colors">Discover which tech role matches your interests and skills.</p><div class="flex items-center gap-2 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors"><span class="tracking-wider text-xs sm:text-sm">START</span><!--$-->',
  "<!--/--></div></div>"
], _tmpl$6 = ["<div", '><h3 class="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">Have ideas for next session?</h3><p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Help us plan topics that actually interest you.</p></div>'], _tmpl$7 = [
  "<main",
  ' class="flex-1 px-4 sm:px-6 md:px-12 pb-8 sm:pb-12"><div class="max-w-7xl mx-auto"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--><!--$-->",
  "<!--/--></div></main>"
];
function Hero(props) {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [
          0.22,
          1,
          0.36,
          1
        ]
      }
    }
  };
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [
          0.22,
          1,
          0.36,
          1
        ]
      }
    }
  };
  return createComponent(Motion.div, mergeProps(containerVariants, {
    exit: {
      opacity: 0,
      transition: { duration: 0.3 }
    },
    "class": "min-h-screen flex flex-col bg-white dark:bg-black",
    get children() {
      return [createComponent(Motion.header, mergeProps(itemVariants, {
        "class": "px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12",
        get children() {
          return ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(sparkles_default, { "class": "w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-black" })), escape(createComponent(Motion.button, {
            hover: { x: 5 },
            "class": "text-xs sm:text-sm tracking-wider hover:opacity-60 transition-opacity text-black dark:text-white hidden sm:block",
            onClick: () => props.onNavigate("roles"),
            children: "EXPLORE ROLES \u2192"
          })), escape(createComponent(ThemeToggle, {})));
        }
      })), ssr(_tmpl$7, ssrHydrationKey(), escape(createComponent(Motion.div, mergeProps(itemVariants, {
        "class": "mb-8 sm:mb-12 md:mb-16",
        get children() {
          return [createComponent(Motion.h1, mergeProps({ "class": "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-5xl text-black dark:text-white leading-tight" }, itemVariants, { get children() {
            return [
              "Thanks for showing up.",
              ssr(_tmpl$2, ssrHydrationKey()),
              "Now let's talk about",
              ssr(_tmpl$2, ssrHydrationKey()),
              ssr(_tmpl$3, ssrHydrationKey())
            ];
          } })), createComponent(Motion.p, mergeProps(itemVariants, {
            "class": "text-sm sm:text-base md:text-lg max-w-2xl text-neutral-600 dark:text-neutral-400",
            children: "You just wrapped a 2-hour session on GitHub and LinkedIn. We want to know what you thought, where you're headed, and what you actually care about in tech."
          }))];
        }
      }))), escape(createComponent(Motion.div, mergeProps(containerVariants, {
        "class": "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12",
        get children() {
          return [createComponent(Motion.div, mergeProps(cardVariants, {
            hover: {
              y: -8,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 }
            },
            style: { "transform-style": "preserve-3d" },
            "class": "group cursor-pointer",
            onClick: () => props.onNavigate("feedback"),
            get children() {
              return ssr(_tmpl$4, ssrHydrationKey(), escape(createComponent(message_square_default, { "class": "w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" })), escape(createComponent(arrow_right_default, { "class": "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" })));
            }
          })), createComponent(Motion.div, mergeProps(cardVariants, {
            hover: {
              y: -8,
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3 }
            },
            style: { "transform-style": "preserve-3d" },
            "class": "group cursor-pointer",
            onClick: () => props.onNavigate("quiz"),
            get children() {
              return ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent(compass_default, { "class": "w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" })), escape(createComponent(arrow_right_default, { "class": "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" })));
            }
          }))];
        }
      }))), escape(createComponent(Motion.div, mergeProps(itemVariants, {
        "class": "flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 p-6 sm:p-8 border-2 border-black dark:border-white bg-white dark:bg-black",
        get children() {
          return [ssr(_tmpl$6, ssrHydrationKey()), createComponent(Button, {
            onClick: () => props.onNavigate("suggestions"),
            disabled: true,
            "class": "w-full md:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 border-0 text-sm sm:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed",
            children: "COMING SOON..."
          })];
        }
      }))))];
    }
  }));
}
function App() {
  const navigate = Route.useNavigate();
  const handleNavigate = (section) => {
    switch (section) {
      case "feedback":
        navigate({ to: "/feedback" });
        break;
      case "quiz":
        navigate({ to: "/career" });
        break;
      case "roles":
        console.log("Roles not implemented yet");
        break;
      case "suggestions":
        console.log("Suggestions not implemented yet");
        break;
    }
  };
  return createComponent(Hero, { onNavigate: handleNavigate });
}

export { App as component };
//# sourceMappingURL=routes-Br8hgGpB.mjs.map
