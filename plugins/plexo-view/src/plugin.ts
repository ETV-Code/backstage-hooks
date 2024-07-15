import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const plexoViewPlugin = createPlugin({
  id: 'plexo-view',
  routes: {
    root: rootRouteRef,
  },
});

export const PlexoViewPage = plexoViewPlugin.provide(
  createRoutableExtension({
    name: 'PlexoViewPage',
    component: () =>
      import('./components/PlexoView').then(m => m.PlexoView),
    mountPoint: rootRouteRef,
  }),
);
