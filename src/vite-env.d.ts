/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'my-components' {
  import type { App } from 'vue'
  
  const plugin: {
    install: (app: App) => void;
  };
  
  export default plugin;
}
