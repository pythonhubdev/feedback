import { g as getPreferredColorScheme, c as createMemo, b as createComponent } from './build-GGxoNg3Q.mjs';
import { c as createLocalStorage, P as PiPProvider, T as ThemeContext, D as Devtools, Q as QueryDevtoolsContext } from './ZDWCUMSJ-DCV3tHda.mjs';

var DevtoolsComponent = (props) => {
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
        localStore,
        setLocalStore,
        get children() {
          return createComponent(ThemeContext.Provider, {
            value: theme,
            get children() {
              return createComponent(Devtools, {
                localStore,
                setLocalStore
              });
            }
          });
        }
      });
    }
  });
};
var DevtoolsComponent_default = DevtoolsComponent;

export { DevtoolsComponent_default as default };
//# sourceMappingURL=NCMVHL6D-BsjoQisJ.mjs.map
