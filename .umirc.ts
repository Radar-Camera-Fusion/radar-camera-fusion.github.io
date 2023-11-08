import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  history: { type: 'browser' },
  // base: 'Radar-Camera-Fusion',
  // publicPath: 'Radar-Camera-Fusion/',
  // publicPath: '/',
  routes: [
    {
      path: '/',
      component: './Home',
    },
    {
      path: '/radar',
      component: './Radar',
    },
  ],
  npmClient: 'npm',
});

