import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // history: { type: 'hash' },
  // base: 'Radar-Camera-Fusion',
  publicPath: './',
  routes: [
    {
      path: '/',
      component: './Home',
    },
  ],
  npmClient: 'npm',
});

