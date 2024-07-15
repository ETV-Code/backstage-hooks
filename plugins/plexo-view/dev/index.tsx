import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { plexoViewPlugin, PlexoViewPage } from '../src/plugin';

createDevApp()
  .registerPlugin(plexoViewPlugin)
  .addPage({
    element: <PlexoViewPage />,
    title: 'Root Page',
    path: '/plexo-view',
  })
  .render();
