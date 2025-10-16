import { u as useNavigate, M as Motion, a as api, S as SessionName, b as SessionTypes } from './router-Dq_AAJ66.mjs';
import { S as StepPersonalInfo, l as loader_circle_default, t as toast, a as arrow_left_default, P as Progress, T as TextField, b as TextFieldLabel, c as TextFieldTextArea } from './StepPersonalInfo-Cr5C_JzS.mjs';
import { B as Button, I as Icon_default } from './button-DALkyRBc.mjs';
import { createComponent, ssr, ssrHydrationKey, escape, mergeProps } from 'solid-js/web';
import { createSignal, Show, createMemo, For } from 'solid-js';
import { useMutation } from '@tanstack/solid-query';
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
import 'class-variance-authority';
import '@internationalized/number';
import '@floating-ui/dom';
import '@solid-primitives/utils';
import '@solid-primitives/keyed';
import '@solid-primitives/event-listener';
import 'clsx';
import 'tailwind-merge';

var iconNode = [["path", {
  d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
  key: "r04s7s"
}]];
var Star = (props) => createComponent(Icon_default, mergeProps(props, {
  iconNode,
  name: "star"
}));
var star_default = Star;
const useFeedbackSubmission = () => {
  const mutation = useMutation(() => ({
    mutationKey: ["feedback submission"],
    mutationFn: async (data) => {
      var _a, _b, _c, _d;
      const response = await api().feedback.post(data);
      if (!response.data) {
        const errorMessage = ((_b = (_a = response.error) == null ? void 0 : _a.value) == null ? void 0 : _b.message) || ((_d = (_c = response.error) == null ? void 0 : _c.value) == null ? void 0 : _d.summary) || "Failed to submit feedback";
        throw new Error(errorMessage);
      }
      return response.data;
    },
    onSuccess: () => {
      toast.success("Feedback submitted successfully! Thank you for your response.");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit feedback. Please try again.");
    }
  }));
  const isSubmitting = createMemo(() => mutation.isPending);
  return {
    submitFeedback: mutation.mutateAsync,
    isSubmitting,
    error: mutation.error,
    reset: mutation.reset
  };
};
var _tmpl$$4 = ["<span", ' class="tracking-wider text-xs sm:text-sm">BACK</span>'], _tmpl$2$1 = [
  "<div",
  ' class="px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-12 border-b-2 border-black dark:border-white bg-white dark:bg-black"><div class="max-w-4xl mx-auto"><!--$-->',
  '<!--/--><div class="mb-4 sm:mb-6"><h2 class="mb-2 text-black dark:text-white text-lg sm:text-xl font-medium">Session Feedback</h2><p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">Step <!--$-->',
  "<!--/--> of <!--$-->",
  "<!--/--></p></div><!--$-->",
  "<!--/--></div></div>"
];
function FeedbackHeader(props) {
  const progress = () => props.currentStep / props.totalSteps * 100;
  return ssr(_tmpl$2$1, ssrHydrationKey(), escape(createComponent(Button, {
    get onClick() {
      return props.onBack;
    },
    variant: "outline",
    "class": "flex items-center gap-2 mb-6 sm:mb-8 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-4 py-2 sm:px-6 sm:py-3",
    get children() {
      return [createComponent(arrow_left_default, { "class": "w-4 h-4 sm:w-5 sm:h-5" }), ssr(_tmpl$$4, ssrHydrationKey())];
    }
  })), escape(props.currentStep), escape(props.totalSteps), escape(createComponent(Progress, {
    get value() {
      return progress();
    },
    "class": "h-0.5"
  })));
}
var _tmpl$$3 = [
  "<div",
  ' class="flex gap-2">',
  "</div>"
];
function RatingStars(props) {
  return ssr(_tmpl$$3, ssrHydrationKey(), escape(createComponent(For, {
    each: [
      1,
      2,
      3,
      4,
      5
    ],
    children: (star) => createComponent(Motion.button, {
      hover: { scale: 1.1 },
      press: { scale: 0.95 },
      onClick: () => props.onChange(star),
      "class": "focus:outline-none",
      get children() {
        return createComponent(star_default, { get ["class"]() {
          return `w-8 h-8 md:w-10 md:h-10 transition-colors ${star <= props.value ? "fill-black dark:fill-white stroke-black dark:stroke-white" : "stroke-black dark:stroke-white fill-white dark:fill-transparent"}`;
        } });
      }
    })
  })));
}
var _tmpl$$2 = [
  "<div",
  ' class="space-y-12"><div><h3 class="mb-2 text-black dark:text-white">How useful was the session?</h3><p class="text-neutral-600 dark:text-neutral-400 mb-6">Rate the practical value you got from it</p><!--$-->',
  '<!--/--></div><div><h3 class="mb-2 text-black dark:text-white">How clear was the content?</h3><p class="text-neutral-600 dark:text-neutral-400 mb-6">Was it easy to understand and follow?</p><!--$-->',
  '<!--/--></div><div><h3 class="mb-2 text-black dark:text-white">How engaging was it?</h3><p class="text-neutral-600 dark:text-neutral-400 mb-6">Did it keep your attention?</p><!--$-->',
  "<!--/--></div></div>"
];
function StepRatings(props) {
  const updateRating = (category) => (value) => {
    props.onChange({
      ...props.data,
      [category]: value
    });
  };
  return ssr(_tmpl$$2, ssrHydrationKey(), escape(createComponent(RatingStars, {
    get value() {
      return props.data.usefulness;
    },
    get onChange() {
      return updateRating("usefulness");
    }
  })), escape(createComponent(RatingStars, {
    get value() {
      return props.data.clarity;
    },
    get onChange() {
      return updateRating("clarity");
    }
  })), escape(createComponent(RatingStars, {
    get value() {
      return props.data.engagement;
    },
    get onChange() {
      return updateRating("engagement");
    }
  })));
}
var _tmpl$$1 = [
  "<div",
  ' class="space-y-6"><div><h3 class="mb-2 text-black dark:text-white">',
  '</h3><p class="text-neutral-600 dark:text-neutral-400 mb-6">',
  "</p></div><!--$-->",
  "<!--/--><!--$-->",
  "<!--/--></div>"
], _tmpl$2 = ["<p", ' class="text-sm text-neutral-500 dark:text-neutral-400">Optional - but your input matters!</p>'];
function StepTextFeedback(props) {
  const updateField = (field) => (value) => {
    props.onChange({
      ...props.data,
      [field]: value
    });
  };
  const config = [
    {
      title: "What did you like most?",
      description: "Tell us what resonated with you",
      placeholder: "I really enjoyed learning about..."
    },
    {
      title: "What could be improved?",
      description: "Your honest feedback helps us get better",
      placeholder: "I think it would be better if..."
    },
    {
      title: "What topics interest you?",
      description: "What should we cover in the next session?",
      placeholder: "I'd love to learn about...",
      optional: true
    }
  ][props.step];
  const fieldName = [
    "liked",
    "improve",
    "nextTopics"
  ][props.step];
  return ssr(_tmpl$$1, ssrHydrationKey(), escape(config.title), escape(config.description), escape(createComponent(TextField, { get children() {
    return [createComponent(TextFieldLabel, { "class": "text-sm font-medium mb-2 block text-black dark:text-white" }), createComponent(TextFieldTextArea, {
      get value() {
        return props.data[fieldName];
      },
      onInput: (e) => updateField(fieldName)(e.currentTarget.value),
      get placeholder() {
        return config.placeholder;
      },
      "class": "min-h-[200px] border-black dark:border-white resize-none text-sm p-6 bg-white dark:bg-gray-950 text-black dark:text-white focus:ring-border-neutral-200 focus:ring-neutral-300"
    })];
  } })), config.optional && _tmpl$2[0] + ssrHydrationKey() + _tmpl$2[1]);
}
var _tmpl$ = [
  "<div",
  ' class="px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16"><div class="max-w-4xl mx-auto"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--><!--$-->",
  "<!--/--><!--$-->",
  "<!--/--><!--$-->",
  '<!--/--><div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12"><!--$-->',
  "<!--/--><!--$-->",
  "<!--/--><!--$-->",
  "<!--/--></div></div></div>"
];
function FeedbackForm(props) {
  const { submitFeedback, isSubmitting } = useFeedbackSubmission();
  const [currentStep, setCurrentStep] = createSignal(0);
  const [personalInfo, setPersonalInfo] = createSignal({
    name: "",
    email: "",
    year: "",
    batch: "",
    department: ""
  });
  const [ratings, setRatings] = createSignal({
    usefulness: 0,
    clarity: 0,
    engagement: 0
  });
  const [feedback, setFeedback] = createSignal({
    liked: "",
    improve: "",
    nextTopics: ""
  });
  const totalSteps = 5;
  const canProceed = () => {
    const step = currentStep();
    const info = personalInfo();
    const rating = ratings();
    const text = feedback();
    if (step === 0) return info.name.trim().length > 0 && info.email.trim().length > 0 && info.year && info.batch && info.department;
    if (step === 1) return rating.usefulness > 0 && rating.clarity > 0 && rating.engagement > 0;
    if (step === 2) return text.liked.trim().length > 0;
    if (step === 3) return text.improve.trim().length > 0;
    return true;
  };
  const handleSubmit = async () => {
    try {
      const info = personalInfo();
      const rating = ratings();
      const feedbackData = feedback();
      const avgRating = Math.round((rating.usefulness + rating.clarity + rating.engagement) / 3);
      const parsedYear = parseInt(info.year, 10);
      const parsedBatch = parseInt(info.batch, 10);
      await submitFeedback({
        name: info.name,
        email: info.email,
        year: parsedYear,
        batch: parsedBatch,
        department: info.department,
        workedWell: feedbackData.liked,
        improve: feedbackData.improve,
        rating: avgRating,
        sessionType: SessionTypes.Lecture,
        sessionName: SessionName.GitLinkedInBase,
        sessionDate: "2025-10-14"
      });
      props.onComplete();
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };
  return createComponent(Motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    "class": "min-h-screen bg-white dark:bg-black",
    get children() {
      return [createComponent(FeedbackHeader, {
        get currentStep() {
          return currentStep() + 1;
        },
        totalSteps,
        get onBack() {
          return props.onBack;
        }
      }), ssr(_tmpl$, ssrHydrationKey(), escape(createComponent(Show, {
        get when() {
          return currentStep() === 0;
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
      })), escape(createComponent(Show, {
        get when() {
          return currentStep() === 1;
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
              return createComponent(StepRatings, {
                get data() {
                  return ratings();
                },
                onChange: setRatings
              });
            }
          });
        }
      })), escape(createComponent(Show, {
        get when() {
          return currentStep() === 2;
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
              return createComponent(StepTextFeedback, {
                step: 0,
                get data() {
                  return feedback();
                },
                onChange: setFeedback
              });
            }
          });
        }
      })), escape(createComponent(Show, {
        get when() {
          return currentStep() === 3;
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
              return createComponent(StepTextFeedback, {
                step: 1,
                get data() {
                  return feedback();
                },
                onChange: setFeedback
              });
            }
          });
        }
      })), escape(createComponent(Show, {
        get when() {
          return currentStep() === 4;
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
              return createComponent(StepTextFeedback, {
                step: 2,
                get data() {
                  return feedback();
                },
                onChange: setFeedback
              });
            }
          });
        }
      })), escape(createComponent(Show, {
        get when() {
          return currentStep() > 0;
        },
        get children() {
          return createComponent(Button, {
            onClick: () => setCurrentStep(currentStep() - 1),
            variant: "outline",
            "class": "w-full sm:w-auto border-2 border-black dark:border-white px-6 sm:px-8 py-4 sm:py-6 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-sm sm:text-base",
            children: "PREVIOUS"
          });
        }
      })), escape(createComponent(Show, {
        get when() {
          return currentStep() < totalSteps - 1;
        },
        get children() {
          return createComponent(Button, {
            onClick: () => setCurrentStep(currentStep() + 1),
            get disabled() {
              return !canProceed();
            },
            "class": "w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 disabled:opacity-30 border-0 text-sm sm:text-base",
            children: "NEXT STEP"
          });
        }
      })), escape(createComponent(Show, {
        get when() {
          return currentStep() === totalSteps - 1;
        },
        get children() {
          return createComponent(Button, {
            onClick: handleSubmit,
            get disabled() {
              return isSubmitting();
            },
            "class": "w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-6 sm:px-8 py-4 sm:py-6 border-0 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base",
            get children() {
              return [createComponent(Show, {
                get when() {
                  return isSubmitting();
                },
                get children() {
                  return createComponent(loader_circle_default, {
                    "class": "animate-spin",
                    size: 16
                  });
                }
              }), isSubmitting() ? "SUBMITTING..." : "SUBMIT FEEDBACK"];
            }
          });
        }
      })))];
    }
  });
}
function FeedbackRoute() {
  const navigate = useNavigate();
  const handleBackToHome = async () => {
    await navigate({ to: "/" });
  };
  const handleComplete = async () => {
    await navigate({ to: "/thank-you" });
  };
  return createComponent(FeedbackForm, {
    onComplete: handleComplete,
    onBack: handleBackToHome
  });
}

export { FeedbackRoute as component };
//# sourceMappingURL=feedback-Br1J2KGF.mjs.map
