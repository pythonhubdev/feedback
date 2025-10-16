import { a as TanstackQueryDevtoolsPanel } from './build-GGxoNg3Q.mjs';
import { ssr, ssrHydrationKey, ssrStyle } from 'solid-js/web';
import { createMemo, createEffect, onMount, onCleanup } from 'solid-js';
import { useQueryClient, onlineManager } from '@tanstack/solid-query';

var _tmpl$ = [
  "<div",
  ' style="',
  '" class="tsqd-parent-container"></div>'
];
function SolidQueryDevtoolsPanel(props) {
  const queryClient = useQueryClient();
  const client = createMemo(() => props.client || queryClient);
  let ref;
  const { errorTypes, styleNonce, shadowDOMTarget, hideDisabledQueries } = props;
  const devtools = new TanstackQueryDevtoolsPanel({
    client: client(),
    queryFlavor: "Solid Query",
    version: "5",
    onlineManager,
    buttonPosition: "bottom-left",
    position: "bottom",
    initialIsOpen: true,
    errorTypes,
    styleNonce,
    shadowDOMTarget,
    onClose: props.onClose,
    hideDisabledQueries
  });
  createEffect(() => {
    devtools.setClient(client());
  });
  createEffect(() => {
    var _a;
    devtools.setOnClose((_a = props.onClose) != null ? _a : (() => {
    }));
  });
  createEffect(() => {
    devtools.setErrorTypes(props.errorTypes || []);
  });
  onMount(() => {
    devtools.mount(ref);
    onCleanup(() => devtools.unmount());
  });
  return ssr(_tmpl$, ssrHydrationKey(), ssrStyle({
    height: "500px",
    ...props.style
  }));
}

export { SolidQueryDevtoolsPanel as default };
//# sourceMappingURL=YI6MKFAH-BTGD5CSn.mjs.map
