import { u as useNavigate, M as Motion, a as api, C as CareerResult } from './router-Dq_AAJ66.mjs';
import { t as toast, a as arrow_left_default, P as Progress, S as StepPersonalInfo$1, T as TextField, b as TextFieldLabel, c as TextFieldTextArea, l as loader_circle_default, F as FORM_CONTROL_PROP_NAMES, d as createControllableSignal, e as createFormControl, f as createFormResetListener, g as FormControlContext, u as useFormControlContext, h as createRegisterId, s as src_default$1, i as FormControlErrorMessage, j as FormControlDescription, k as FormControlLabel } from './StepPersonalInfo-Cr5C_JzS.mjs';
import { B as Button, c as cn, m as mergeDefaultProps, P as Polymorphic, a as createGenerateId, v as visuallyHiddenStyles, I as Icon_default, b as callHandler, E as EventKey, _ as __export } from './button-DALkyRBc.mjs';
import { createComponent, ssr, ssrHydrationKey, escape, ssrAttribute, mergeProps } from 'solid-js/web';
import { createSignal, Show, Switch, Match, createMemo, For, splitProps, createUniqueId, createContext, createEffect, on, onCleanup, useContext } from 'solid-js';
import { useMutation } from '@tanstack/solid-query';
import { combineStyle } from '@solid-primitives/props';
import { access } from '@solid-primitives/utils';
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
import 'class-variance-authority';
import '@internationalized/number';
import '@floating-ui/dom';
import '@solid-primitives/keyed';
import '@solid-primitives/event-listener';
import 'clsx';
import 'tailwind-merge';

function useCareerSubmission() {
  const mutation = useMutation(() => ({
    mutationKey: ["career submission"],
    mutationFn: async (data) => {
      var _a, _b, _c, _d;
      const response = await api().career.post(data);
      if (!response.data) {
        const errorMessage = ((_b = (_a = response.error) == null ? void 0 : _a.value) == null ? void 0 : _b.message) || ((_d = (_c = response.error) == null ? void 0 : _c.value) == null ? void 0 : _d.summary) || "Failed to submit career information";
        throw new Error(errorMessage);
      }
      return response.data;
    },
    onSuccess: () => {
      toast.success("Career information submitted successfully! Check your results.");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit. Please try again.");
    }
  }));
  const isSubmitting = createMemo(() => mutation.isPending);
  return {
    submitCareer: mutation.mutateAsync,
    isSubmitting,
    error: mutation.error,
    reset: mutation.reset
  };
}
var iconNode$2 = [["path", {
  d: "m16 18 6-6-6-6",
  key: "eg8j8"
}], ["path", {
  d: "m8 6-6 6 6 6",
  key: "ppft3o"
}]];
var Code = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$2,
  name: "code"
}));
var code_default = Code;
var iconNode$1 = [
  ["ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3",
    key: "msslwz"
  }],
  ["path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5",
    key: "1wlel7"
  }],
  ["path", {
    d: "M3 12A9 3 0 0 0 21 12",
    key: "mv7ke4"
  }]
];
var Database = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode: iconNode$1,
  name: "database"
}));
var database_default = Database;
var iconNode = [
  ["path", {
    d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
    key: "e79jfc"
  }],
  ["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
  }],
  ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
  }],
  ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
  }],
  ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
  }]
];
var Palette = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode,
  name: "palette"
}));
var palette_default = Palette;
var _tmpl$$5 = ["<span", ' class="tracking-wider text-xs sm:text-sm">BACK</span>'], _tmpl$2$1 = [
  "<div",
  ' class="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12 border-b-2 border-black dark:border-white"><div class="max-w-4xl mx-auto"><!--$-->',
  '<!--/--><div class="mb-4 sm:mb-6"><h2 class="mb-2 text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white">Career Interest Quiz</h2><p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">',
  "</p></div><!--$-->",
  "<!--/--></div></div>"
];
function CareerQuizHeader(props) {
  return ssr(_tmpl$2$1, ssrHydrationKey(), escape(createComponent(Button, {
    get onClick() {
      return props.onBack;
    },
    variant: "ghost",
    "class": "flex items-center gap-2 mb-6 sm:mb-8 hover:opacity-60 transition-opacity p-0 h-auto",
    get children() {
      return [createComponent(arrow_left_default, { "class": "w-5 h-5" }), ssr(_tmpl$$5, ssrHydrationKey())];
    }
  })), props.currentStep === 0 ? "Your Details" : `Question ${escape(props.currentStep)} of ${escape(props.totalSteps) - 1}`, escape(createComponent(Progress, {
    get value() {
      return props.progress;
    },
    "class": "h-1"
  })));
}
var _tmpl$$4 = [
  "<div",
  ' class="mb-6 sm:mb-8 text-black dark:text-white">',
  "</div>"
], _tmpl$2 = [
  "<h1",
  ' class="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white">',
  "</h1>"
], _tmpl$3 = [
  "<p",
  ' class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 max-w-3xl">',
  "</p>"
], _tmpl$4 = [
  "<div",
  ' class="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"><div class="border-2 border-black dark:border-white p-6 sm:p-8"><h3 class="mb-4 text-lg sm:text-xl font-bold text-black dark:text-white">Skills to explore</h3><ul class="space-y-3">',
  '</ul></div><div class="border-2 border-black dark:border-white p-6 sm:p-8"><h3 class="mb-4 text-lg sm:text-xl font-bold text-black dark:text-white">Where to start</h3><ul class="space-y-3">',
  "</ul></div></div>"
], _tmpl$5 = [
  "<div",
  ' class="px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16"><div class="max-w-4xl mx-auto">',
  "</div></div>"
], _tmpl$6 = [
  "<li",
  ' class="flex items-center gap-2 text-sm sm:text-base text-black dark:text-white"><div class="w-1.5 h-1.5 bg-black dark:bg-white"></div><span>',
  "</span></li>"
], _tmpl$7 = [
  "<li",
  ' class="text-sm sm:text-base"><a',
  ' class="hover:opacity-60 transition-opacity underline text-black dark:text-white">',
  "</a></li>"
], _tmpl$8 = [
  "<div",
  ' class="border-2 border-black dark:border-white p-6 sm:p-8 mb-8 sm:mb-12"><h3 class="mb-4 text-lg sm:text-xl font-bold text-black dark:text-white">Connecting your interests to tech</h3><p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">You mentioned: <span class="text-black dark:text-white italic">"<!--$-->',
  `<!--/-->"</span></p><p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">These interests can totally intersect with tech! Art \u2192 UI/UX design or game graphics. Music \u2192 building streaming apps or audio tools. Gaming \u2192 game development or esports platforms. Writing \u2192 content strategy or documentation. Tech is a tool for anything you're passionate about.</p></div>`
];
function CareerResults(props) {
  return createComponent(Motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    "class": "min-h-screen bg-white dark:bg-black",
    get children() {
      return ssr(_tmpl$5, ssrHydrationKey(), escape(createComponent(Motion.div, {
        initial: {
          opacity: 0,
          y: 20
        },
        animate: {
          opacity: 1,
          y: 0
        },
        transition: { delay: 0.2 },
        get children() {
          return [
            ssr(_tmpl$$4, ssrHydrationKey(), escape(props.result.icon)),
            ssr(_tmpl$2, ssrHydrationKey(), escape(props.result.title)),
            ssr(_tmpl$3, ssrHydrationKey(), escape(props.result.description)),
            ssr(_tmpl$4, ssrHydrationKey(), escape(createComponent(For, {
              get each() {
                return props.result.skills;
              },
              children: (skill) => ssr(_tmpl$6, ssrHydrationKey(), escape(skill))
            })), escape(createComponent(For, {
              get each() {
                return props.result.resources;
              },
              children: (resource) => ssr(_tmpl$7, ssrHydrationKey(), ssrAttribute("href", escape(resource.url, true), false), escape(resource.name))
            }))),
            props.otherInterests && ssr(_tmpl$8, ssrHydrationKey(), escape(props.otherInterests)),
            createComponent(Button, {
              get onClick() {
                return props.onComplete;
              },
              get disabled() {
                return props.isSubmitting;
              },
              "class": "bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 border-0 text-sm sm:text-base disabled:opacity-50",
              get children() {
                return createComponent(Show, {
                  get when() {
                    return !props.isSubmitting;
                  },
                  get fallback() {
                    return createComponent(loader_circle_default, { "class": "w-5 h-5 animate-spin" });
                  },
                  children: "FINISH QUIZ"
                });
              }
            })
          ];
        }
      })));
    }
  });
}
function getResultContent(role) {
  return {
    designer: {
      icon: createComponent(palette_default, { "class": "w-12 h-12 sm:w-16 sm:h-16" }),
      title: "You might vibe with UI/UX Design",
      description: "You seem drawn to the visual and creative side of tech. UI/UX designers create the look, feel, and flow of digital products\u2014like designing the Instagram interface or planning how a user navigates an app.",
      skills: [
        "Figma",
        "Adobe XD",
        "Color theory",
        "User research",
        "Prototyping"
      ],
      resources: [
        {
          name: "Figma Basics",
          url: "#"
        },
        {
          name: "Daily UI Challenge",
          url: "#"
        },
        {
          name: "Refactoring UI",
          url: "#"
        }
      ]
    },
    frontend: {
      icon: createComponent(code_default, { "class": "w-12 h-12 sm:w-16 sm:h-16" }),
      title: "Frontend Development could be your thing",
      description: "You're interested in bringing designs to life with code. Frontend developers build the interactive parts of websites\u2014buttons, animations, forms\u2014using HTML, CSS, and JavaScript.",
      skills: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Responsive design",
        "Animation"
      ],
      resources: [
        {
          name: "freeCodeCamp",
          url: "#"
        },
        {
          name: "Frontend Mentor",
          url: "#"
        },
        {
          name: "JavaScript30",
          url: "#"
        }
      ]
    },
    backend: {
      icon: createComponent(database_default, { "class": "w-12 h-12 sm:w-16 sm:h-16" }),
      title: "Backend Development might suit you",
      description: "You like solving logical problems and working with data. Backend developers build the server-side logic, databases, and APIs that power apps\u2014the engine under the hood.",
      skills: [
        "Python/Node.js",
        "Databases",
        "APIs",
        "Server logic",
        "Problem solving"
      ],
      resources: [
        {
          name: "CS50",
          url: "#"
        },
        {
          name: "The Odin Project",
          url: "#"
        },
        {
          name: "Backend Roadmap",
          url: "#"
        }
      ]
    }
  }[role];
}
__export({}, {
  Description: () => FormControlDescription,
  ErrorMessage: () => FormControlErrorMessage,
  Item: () => RadioGroupItem$1,
  ItemControl: () => RadioGroupItemControl,
  ItemDescription: () => RadioGroupItemDescription,
  ItemIndicator: () => RadioGroupItemIndicator,
  ItemInput: () => RadioGroupItemInput,
  ItemLabel: () => RadioGroupItemLabel$1,
  Label: () => RadioGroupLabel,
  RadioGroup: () => RadioGroup$1,
  Root: () => RadioGroupRoot,
  useRadioGroupContext: () => useRadioGroupContext
});
var RadioGroupContext = createContext();
function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);
  if (context === void 0) throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");
  return context;
}
var RadioGroupItemContext = createContext();
function useRadioGroupItemContext() {
  const context = useContext(RadioGroupItemContext);
  if (context === void 0) throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");
  return context;
}
function RadioGroupItem$1(props) {
  const formControlContext = useFormControlContext();
  const radioGroupContext = useRadioGroupContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: `${formControlContext.generateId("item")}-${createUniqueId()}` }, props), [
    "value",
    "disabled",
    "onPointerDown"
  ]);
  const [inputId, setInputId] = createSignal();
  const [labelId, setLabelId] = createSignal();
  const [descriptionId, setDescriptionId] = createSignal();
  const [inputRef, setInputRef] = createSignal();
  const [isFocused, setIsFocused] = createSignal(false);
  const isDefault = createMemo(() => {
    return radioGroupContext.isDefaultValue(local.value);
  });
  const isSelected = createMemo(() => {
    return radioGroupContext.isSelectedValue(local.value);
  });
  const isDisabled = createMemo(() => {
    return local.disabled || formControlContext.isDisabled() || false;
  });
  const onPointerDown = (e) => {
    callHandler(e, local.onPointerDown);
    if (isFocused()) e.preventDefault();
  };
  const dataset = createMemo(() => ({
    ...formControlContext.dataset(),
    "data-disabled": isDisabled() ? "" : void 0,
    "data-checked": isSelected() ? "" : void 0
  }));
  const context = {
    value: () => local.value,
    dataset,
    isDefault,
    isSelected,
    isDisabled,
    inputId,
    labelId,
    descriptionId,
    inputRef,
    select: () => radioGroupContext.setSelectedValue(local.value),
    generateId: createGenerateId(() => others.id),
    registerInput: createRegisterId(setInputId),
    registerLabel: createRegisterId(setLabelId),
    registerDescription: createRegisterId(setDescriptionId),
    setIsFocused,
    setInputRef
  };
  return createComponent(RadioGroupItemContext.Provider, {
    value: context,
    get children() {
      return createComponent(Polymorphic, mergeProps({
        as: "div",
        role: "group",
        onPointerDown
      }, dataset, others));
    }
  });
}
function RadioGroupItemControl(props) {
  const context = useRadioGroupItemContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("control") }, props), ["onClick", "onKeyDown"]);
  const onClick = (e) => {
    var _a;
    callHandler(e, local.onClick);
    context.select();
    (_a = context.inputRef()) == null ? void 0 : _a.focus();
  };
  const onKeyDown = (e) => {
    var _a;
    callHandler(e, local.onKeyDown);
    if (e.key === EventKey.Space) {
      context.select();
      (_a = context.inputRef()) == null ? void 0 : _a.focus();
    }
  };
  return createComponent(Polymorphic, mergeProps({
    as: "div",
    onClick,
    onKeyDown
  }, () => context.dataset(), others));
}
function RadioGroupItemDescription(props) {
  const context = useRadioGroupItemContext();
  const mergedProps = mergeDefaultProps({ id: context.generateId("description") }, props);
  createEffect(() => onCleanup(context.registerDescription(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), mergedProps));
}
function RadioGroupItemIndicator(props) {
  const context = useRadioGroupItemContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: context.generateId("indicator") }, props), ["ref", "forceMount"]);
  const [ref, setRef] = createSignal();
  const { present } = src_default$1({
    show: () => local.forceMount || context.isSelected(),
    element: () => {
      var _a;
      return (_a = ref()) != null ? _a : null;
    }
  });
  return createComponent(Show, {
    get when() {
      return present();
    },
    get children() {
      return createComponent(Polymorphic, mergeProps({ as: "div" }, () => context.dataset(), others));
    }
  });
}
function RadioGroupItemInput(props) {
  const formControlContext = useFormControlContext();
  const radioGroupContext = useRadioGroupContext();
  const radioContext = useRadioGroupItemContext();
  const [local, others] = splitProps(mergeDefaultProps({ id: radioContext.generateId("input") }, props), [
    "ref",
    "style",
    "aria-labelledby",
    "aria-describedby",
    "onChange",
    "onFocus",
    "onBlur"
  ]);
  const ariaLabelledBy = () => {
    return [
      local["aria-labelledby"],
      radioContext.labelId(),
      local["aria-labelledby"] != null && others["aria-label"] != null ? others.id : void 0
    ].filter(Boolean).join(" ") || void 0;
  };
  const ariaDescribedBy = () => {
    return [
      local["aria-describedby"],
      radioContext.descriptionId(),
      radioGroupContext.ariaDescribedBy()
    ].filter(Boolean).join(" ") || void 0;
  };
  const [isInternalChangeEvent, setIsInternalChangeEvent] = createSignal(false);
  const onChange = (e) => {
    callHandler(e, local.onChange);
    e.stopPropagation();
    if (!isInternalChangeEvent()) {
      radioGroupContext.setSelectedValue(radioContext.value());
      const target = e.target;
      target.checked = radioContext.isSelected();
    }
    setIsInternalChangeEvent(false);
  };
  const onFocus = (e) => {
    callHandler(e, local.onFocus);
    radioContext.setIsFocused(true);
  };
  const onBlur = (e) => {
    callHandler(e, local.onBlur);
    radioContext.setIsFocused(false);
  };
  createEffect(on([() => radioContext.isSelected(), () => radioContext.value()], (c) => {
    if (!c[0] && c[1] === radioContext.value()) return;
    setIsInternalChangeEvent(true);
    const ref = radioContext.inputRef();
    ref == null ? void 0 : ref.dispatchEvent(new Event("input", {
      bubbles: true,
      cancelable: true
    }));
    ref == null ? void 0 : ref.dispatchEvent(new Event("change", {
      bubbles: true,
      cancelable: true
    }));
  }, { defer: true }));
  createEffect(() => onCleanup(radioContext.registerInput(others.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "input",
    type: "radio",
    get name() {
      return formControlContext.name();
    },
    get value() {
      return radioContext.value();
    },
    get checked() {
      return radioContext.isSelected();
    },
    get required() {
      return formControlContext.isRequired();
    },
    get disabled() {
      return radioContext.isDisabled();
    },
    get readonly() {
      return formControlContext.isReadOnly();
    },
    get style() {
      return combineStyle({ ...visuallyHiddenStyles }, local.style);
    },
    get ["aria-labelledby"]() {
      return ariaLabelledBy();
    },
    get ["aria-describedby"]() {
      return ariaDescribedBy();
    },
    onChange,
    onFocus,
    onBlur
  }, () => radioContext.dataset(), others));
}
function RadioGroupItemLabel$1(props) {
  const context = useRadioGroupItemContext();
  const mergedProps = mergeDefaultProps({ id: context.generateId("label") }, props);
  createEffect(() => onCleanup(context.registerLabel(mergedProps.id)));
  return createComponent(Polymorphic, mergeProps({
    as: "label",
    get ["for"]() {
      return context.inputId();
    }
  }, () => context.dataset(), mergedProps));
}
function RadioGroupLabel(props) {
  return createComponent(FormControlLabel, mergeProps({ as: "span" }, props));
}
function RadioGroupRoot(props) {
  let ref;
  const [local, formControlProps, others] = splitProps(mergeDefaultProps({
    id: `radiogroup-${createUniqueId()}`,
    orientation: "vertical"
  }, props), [
    "ref",
    "value",
    "defaultValue",
    "onChange",
    "orientation",
    "aria-labelledby",
    "aria-describedby"
  ], FORM_CONTROL_PROP_NAMES);
  const [selected, setSelected] = createControllableSignal({
    value: () => local.value,
    defaultValue: () => local.defaultValue,
    onChange: (value) => {
      var _a;
      return (_a = local.onChange) == null ? void 0 : _a.call(local, value);
    }
  });
  const { formControlContext } = createFormControl(formControlProps);
  createFormResetListener(() => ref, () => {
    var _a;
    return setSelected((_a = local.defaultValue) != null ? _a : "");
  });
  const ariaLabelledBy = () => {
    return formControlContext.getAriaLabelledBy(access(formControlProps.id), others["aria-label"], local["aria-labelledby"]);
  };
  const ariaDescribedBy = () => {
    return formControlContext.getAriaDescribedBy(local["aria-describedby"]);
  };
  const isDefaultValue = (value) => {
    return value === props.defaultValue;
  };
  const isSelectedValue = (value) => {
    return value === selected();
  };
  const setSelectedValue = (value) => {
    if (formControlContext.isReadOnly() || formControlContext.isDisabled()) return;
    setSelected(value);
  };
  const context = {
    ariaDescribedBy,
    isDefaultValue,
    isSelectedValue,
    setSelectedValue
  };
  return createComponent(FormControlContext.Provider, {
    value: formControlContext,
    get children() {
      return createComponent(RadioGroupContext.Provider, {
        value: context,
        get children() {
          return createComponent(Polymorphic, mergeProps({
            as: "div",
            role: "radiogroup",
            get id() {
              return access(formControlProps.id);
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
            get ["aria-orientation"]() {
              return local.orientation;
            },
            get ["aria-labelledby"]() {
              return ariaLabelledBy();
            },
            get ["aria-describedby"]() {
              return ariaDescribedBy();
            }
          }, () => formControlContext.dataset(), others));
        }
      });
    }
  });
}
var RadioGroup$1 = Object.assign(RadioGroupRoot, {
  Description: FormControlDescription,
  ErrorMessage: FormControlErrorMessage,
  Item: RadioGroupItem$1,
  ItemControl: RadioGroupItemControl,
  ItemDescription: RadioGroupItemDescription,
  ItemIndicator: RadioGroupItemIndicator,
  ItemInput: RadioGroupItemInput,
  ItemLabel: RadioGroupItemLabel$1,
  Label: RadioGroupLabel
});
var _tmpl$$3 = ["<svg", ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-2.5 fill-current text-current"><title>Radio</title><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path></svg>'];
var RadioGroup = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(RadioGroupRoot, mergeProps({ get ["class"]() {
    return cn("grid gap-2", local.class);
  } }, others));
};
var RadioGroupItem = (props) => {
  const [local, others] = splitProps(props, ["class", "children"]);
  return createComponent(RadioGroupItem$1, mergeProps({ get ["class"]() {
    return cn("flex items-center space-x-2", local.class);
  } }, others, { get children() {
    return [
      createComponent(RadioGroupItemInput, {}),
      createComponent(RadioGroupItemControl, {
        "class": "aspect-square size-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        get children() {
          return createComponent(RadioGroupItemIndicator, {
            "class": "flex h-full items-center justify-center ",
            get children() {
              return ssr(_tmpl$$3, ssrHydrationKey());
            }
          });
        }
      }),
      local.children
    ];
  } }));
};
var RadioGroupItemLabel = (props) => {
  const [local, others] = splitProps(props, ["class"]);
  return createComponent(RadioGroupItemLabel$1, mergeProps({ get ["class"]() {
    return cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", local.class);
  } }, others));
};
var _tmpl$$2 = [
  "<div",
  '><h3 class="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-black dark:text-white">',
  "</h3><!--$-->",
  "<!--/--></div>"
];
function QuestionChoice(props) {
  return ssr(_tmpl$$2, ssrHydrationKey(), escape(props.question), escape(createComponent(RadioGroup, {
    get value() {
      return props.value;
    },
    get onChange() {
      return props.onChange;
    },
    "class": "space-y-4",
    get children() {
      return createComponent(For, {
        get each() {
          return props.options;
        },
        children: (option, _index) => createComponent(Motion.div, {
          animate: { x: [
            0,
            4,
            0
          ] },
          transition: { duration: 0.3 },
          onMouseEnter: (e) => {
            const target = e.currentTarget;
            target.style.transform = "translateX(4px)";
          },
          onMouseLeave: (e) => {
            const target = e.currentTarget;
            target.style.transform = "translateX(0)";
          },
          "class": "border-2 border-black dark:border-white p-4 sm:p-6 cursor-pointer hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group",
          onClick: () => props.onChange(option),
          get children() {
            return createComponent(RadioGroupItem, {
              value: option,
              "class": "flex items-center gap-4",
              get children() {
                return createComponent(RadioGroupItemLabel, {
                  "class": "cursor-pointer flex-1 text-sm sm:text-base group-hover:text-white dark:group-hover:text-black",
                  children: option
                });
              }
            });
          }
        })
      });
    }
  })));
}
var _tmpl$$1 = [
  "<div",
  '><h3 class="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-black dark:text-white">',
  "</h3><!--$-->",
  "<!--/--></div>"
];
function QuestionText(props) {
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(props.question), escape(createComponent(TextField, { get children() {
    return [createComponent(TextFieldLabel, {
      "class": "sr-only",
      children: "Your answer"
    }), createComponent(TextFieldTextArea, {
      get value() {
        return props.value;
      },
      onInput: (e) => props.onChange(e.currentTarget.value),
      get placeholder() {
        return props.placeholder || "Tell us what you're into...";
      },
      "class": "min-h-[200px] border-2 border-black dark:border-white resize-none text-base p-4 sm:p-6 bg-white dark:bg-gray-950 text-black dark:text-white"
    })];
  } })));
}
const questions = [
  {
    id: 1,
    question: "What sounds more exciting to you?",
    type: "choice",
    options: [
      "Creating beautiful visual designs and layouts",
      "Building interactive website features",
      "Solving complex logic and data problems",
      "I'm not sure yet"
    ],
    role: "general"
  },
  {
    id: 2,
    question: "When you use an app, what do you notice first?",
    type: "choice",
    options: [
      "The colors, fonts, and overall look",
      "How smooth the animations and interactions are",
      "How fast and reliable it is",
      "I don't really think about it"
    ],
    role: "general"
  },
  {
    id: 3,
    question: "Which activity appeals to you most?",
    type: "choice",
    options: [
      "Sketching ideas and making mood boards",
      "Bringing designs to life with code",
      "Working with databases and APIs",
      "Learning a bit of everything"
    ],
    role: "general"
  },
  {
    id: 4,
    question: "Did you choose this tech course yourself?",
    type: "choice",
    options: [
      "Yes, I'm genuinely interested in tech",
      "Mostly me, but got some encouragement",
      "Mainly parental or external influence",
      "I'm still figuring it out"
    ],
    role: "general"
  },
  {
    id: 5,
    question: "What are your other interests outside of tech?",
    type: "text",
    role: "general"
  }
];
function calculateResults(answers) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const scores = {
    designer: 0,
    frontend: 0,
    backend: 0
  };
  if ((_a = answers[1]) == null ? void 0 : _a.includes("visual")) scores.designer += 2;
  if ((_b = answers[1]) == null ? void 0 : _b.includes("interactive")) scores.frontend += 2;
  if ((_c = answers[1]) == null ? void 0 : _c.includes("logic")) scores.backend += 2;
  if ((_d = answers[2]) == null ? void 0 : _d.includes("colors")) scores.designer += 2;
  if ((_e = answers[2]) == null ? void 0 : _e.includes("smooth")) scores.frontend += 2;
  if ((_f = answers[2]) == null ? void 0 : _f.includes("fast")) scores.backend += 2;
  if ((_g = answers[3]) == null ? void 0 : _g.includes("Sketching")) scores.designer += 2;
  if ((_h = answers[3]) == null ? void 0 : _h.includes("Bringing")) scores.frontend += 2;
  if ((_i = answers[3]) == null ? void 0 : _i.includes("databases")) scores.backend += 2;
  const maxScore = Math.max(scores.designer, scores.frontend, scores.backend);
  if (scores.designer === maxScore) return "designer";
  if (scores.frontend === maxScore) return "frontend";
  return "backend";
}
function StepPersonalInfo(props) {
  return createComponent(StepPersonalInfo$1, {
    get data() {
      return props.data;
    },
    get onChange() {
      return props.onChange;
    },
    variant: "career"
  });
}
var _tmpl$ = [
  "<div",
  ' class="px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16"><div class="max-w-4xl mx-auto"><!--$-->',
  '<!--/--><div class="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--></div></div></div>"
];
function CareerQuiz(props) {
  const [currentQuestion, setCurrentQuestion] = createSignal(-1);
  const [personalInfo, setPersonalInfo] = createSignal({
    name: "",
    email: "",
    year: "",
    batch: "",
    department: ""
  });
  const [answers, setAnswers] = createSignal({});
  const [showResults, setShowResults] = createSignal(false);
  const { submitCareer, isSubmitting } = useCareerSubmission();
  const totalSteps = questions.length + 1;
  const progress = () => (currentQuestion() + 2) / totalSteps * 100;
  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion()].id]: answer
    }));
  };
  const handleNext = () => {
    if (currentQuestion() < questions.length - 1) setCurrentQuestion(currentQuestion() + 1);
    else setShowResults(true);
  };
  const handleQuizComplete = async () => {
    try {
      const info = personalInfo();
      const role = calculateResults(answers());
      const resultMap = {
        designer: CareerResult.Design,
        frontend: CareerResult.Frontend,
        backend: CareerResult.Backend
      };
      await submitCareer({
        name: info.name,
        email: info.email,
        year: Number.parseInt(info.year, 10),
        batch: Number.parseInt(info.batch, 10),
        department: info.department,
        reasonToChooseTech: answers()[4] || "",
        otherInterests: answers()[5] || "",
        result: resultMap[role] || CareerResult.Fullstack
      });
      props.onComplete();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };
  const handlePrevious = () => {
    if (currentQuestion() > -1) setCurrentQuestion(currentQuestion() - 1);
  };
  const canProceed = () => {
    var _a;
    if (currentQuestion() === -1) {
      const info = personalInfo();
      return info.name.trim().length > 0 && info.email.trim().length > 0 && info.year && info.batch && info.department;
    }
    return ((_a = answers()[questions[currentQuestion()].id]) == null ? void 0 : _a.trim().length) > 0;
  };
  const getResults = () => {
    return getResultContent(calculateResults(answers()));
  };
  return createComponent(Show, {
    get when() {
      return !showResults();
    },
    get fallback() {
      return createComponent(CareerResults, {
        get result() {
          return getResults();
        },
        get otherInterests() {
          return answers()[5];
        },
        onComplete: handleQuizComplete,
        get isSubmitting() {
          return isSubmitting();
        }
      });
    },
    get children() {
      return createComponent(Motion.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        "class": "min-h-screen bg-white dark:bg-black",
        get children() {
          return [createComponent(CareerQuizHeader, {
            get currentStep() {
              return currentQuestion() + 1;
            },
            totalSteps,
            get progress() {
              return progress();
            },
            get onBack() {
              return props.onBack;
            }
          }), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Switch, { get children() {
            return [createComponent(Match, {
              get when() {
                return currentQuestion() === -1;
              },
              get children() {
                return createComponent(Motion.div, {
                  initial: {
                    opacity: 0,
                    x: 20
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  exit: {
                    opacity: 0,
                    x: -20
                  },
                  transition: { duration: 0.4 },
                  get children() {
                    return createComponent(StepPersonalInfo, {
                      get data() {
                        return personalInfo();
                      },
                      onChange: setPersonalInfo
                    });
                  }
                });
              }
            }), createComponent(Match, {
              get when() {
                return currentQuestion() >= 0;
              },
              get children() {
                return createComponent(Motion.div, {
                  initial: {
                    opacity: 0,
                    x: 20
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  exit: {
                    opacity: 0,
                    x: -20
                  },
                  transition: { duration: 0.4 },
                  get children() {
                    return createComponent(Show, {
                      get when() {
                        return questions[currentQuestion()].type === "choice";
                      },
                      get fallback() {
                        return createComponent(QuestionText, {
                          get question() {
                            return questions[currentQuestion()].question;
                          },
                          get value() {
                            return answers()[questions[currentQuestion()].id] || "";
                          },
                          onChange: handleAnswer
                        });
                      },
                      get children() {
                        return createComponent(QuestionChoice, {
                          get question() {
                            return questions[currentQuestion()].question;
                          },
                          get options() {
                            return questions[currentQuestion()].options || [];
                          },
                          get value() {
                            return answers()[questions[currentQuestion()].id] || "";
                          },
                          onChange: handleAnswer
                        });
                      }
                    });
                  }
                });
              }
            })];
          } })), escape(createComponent(Show, {
            get when() {
              return currentQuestion() > -1;
            },
            get children() {
              return createComponent(Button, {
                onClick: handlePrevious,
                variant: "outline",
                "class": "border-2 border-black dark:border-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto",
                children: "PREVIOUS"
              });
            }
          })), escape(createComponent(Button, {
            onClick: handleNext,
            get disabled() {
              return !canProceed();
            },
            "class": "bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 disabled:opacity-30 border-0 text-sm sm:text-base w-full sm:w-auto",
            get children() {
              return currentQuestion() === -1 ? "START QUIZ" : currentQuestion() === questions.length - 1 ? "SEE RESULTS" : "NEXT QUESTION";
            }
          })))];
        }
      });
    }
  });
}
function CareerRoute() {
  const navigate = useNavigate();
  const handleBackToHome = async () => {
    await navigate({ to: "/" });
  };
  const handleComplete = async () => {
    await navigate({ to: "/thank-you" });
  };
  return createComponent(CareerQuiz, {
    onComplete: handleComplete,
    onBack: handleBackToHome
  });
}

export { CareerRoute as component };
//# sourceMappingURL=career-DSoBYV2F.mjs.map
