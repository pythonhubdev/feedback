import { T as TanstackQueryDevtools } from './build-GGxoNg3Q.mjs';
import { ssr, ssrHydrationKey } from 'solid-js/web';
import { createMemo, createEffect, onMount, onCleanup } from 'solid-js';
import { useQueryClient, onlineManager } from '@tanstack/solid-query';

var _tmpl$ = ["<div", ' class="tsqd-parent-container"></div>'];
function SolidQueryDevtools(props) {
  const queryClient = useQueryClient();
  const client = createMemo(() => props.client || queryClient);
  let ref;
  const devtools = new TanstackQueryDevtools({
    client: client(),
    queryFlavor: "Solid Query",
    version: "5",
    onlineManager,
    buttonPosition: props.buttonPosition,
    position: props.position,
    initialIsOpen: props.initialIsOpen,
    errorTypes: props.errorTypes,
    styleNonce: props.styleNonce,
    shadowDOMTarget: props.shadowDOMTarget,
    hideDisabledQueries: props.hideDisabledQueries
  });
  createEffect(() => {
    devtools.setClient(client());
  });
  createEffect(() => {
    const buttonPos = props.buttonPosition;
    if (buttonPos) devtools.setButtonPosition(buttonPos);
  });
  createEffect(() => {
    const pos = props.position;
    if (pos) devtools.setPosition(pos);
  });
  createEffect(() => {
    devtools.setInitialIsOpen(props.initialIsOpen || false);
  });
  createEffect(() => {
    devtools.setErrorTypes(props.errorTypes || []);
  });
  onMount(() => {
    devtools.mount(ref);
    onCleanup(() => devtools.unmount());
  });
  return ssr(_tmpl$, ssrHydrationKey());
}

export { SolidQueryDevtools as default };
//# sourceMappingURL=4LKOWRT2-B6XgyPUg.mjs.map
