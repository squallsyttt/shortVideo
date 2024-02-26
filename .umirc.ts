import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    // dark: true,
    compact: true,
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@ShortVideo/rank',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '个人中心',
      path: '/user',
      component: './User',
    },
  ],
  npmClient: 'pnpm',
});
