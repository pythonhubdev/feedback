import { g as getPreferredColorScheme, c as createMemo, b as createComponent } from './build-GGxoNg3Q.mjs';
import { c as createLocalStorage, P as PiPProvider, T as ThemeContext, a as ParentPanel, C as ContentView, Q as QueryDevtoolsContext } from './ZDWCUMSJ-DCV3tHda.mjs';

var DevtoolsPanelComponent = (props) => {
  const [localStore, setLocalStore] = createLocalStorage({ prefix: "TanstackQueryDevtools" });
  const colorScheme = getPreferredColorScheme();
  const theme = createMemo(() => {
    const preference = localStore.theme_preference || "system";
    if (preference !== "system") return preference;
    return colorScheme();
  });
  return createComponent(QueryDevtoolsContext.Provider, {
    value: props,
    get children() {
      return createComponent(PiPProvider, {
        disabled: true,
        localStore,
        setLocalStore,
        get children() {
          return createComponent(ThemeContext.Provider, {
            value: theme,
            get children() {
              return createComponent(ParentPanel, { get children() {
                return createComponent(ContentView, {
                  localStore,
                  setLocalStore,
                  get onClose() {
                    return props.onClose;
                  },
                  showPanelViewOnly: true
                });
              } });
            }
          });
        }
      });
    }
  });
};
var DevtoolsPanelComponent_default = DevtoolsPanelComponent;

export { DevtoolsPanelComponent_default as default };
//# sourceMappingURL=2AITGKQY-DgLTrnov.mjs.map
