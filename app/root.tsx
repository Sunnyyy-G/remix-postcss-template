import {
  Links,
  // LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ExternalScripts } from 'remix-utils/external-scripts';
import { cssBundleHref } from '@remix-run/css-bundle';
import "./tailwind.css";
// import style from '~/styles/common/global.css?url';
import { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: 'stylesheet', href: cssBundleHref }]
    : []),
  // {rel: 'stylesheet', href: style}
];

/*
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        依赖 remix-utils 工具中来完成按 page 引入 script lib
        <ExternalScripts />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
*/
/* 
export default function App() {
  return <Outlet />;
}
 */
export default function App() {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <Meta />
        <Links />
        {/* 依赖 remix-utils 工具中来完成按 page 引入 script lib */}
        <ExternalScripts />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration getKey={({ state, key }) => {
          // 路由变化的时： 处理页面滚动
          if (state && state.type === 'scroll' && typeof state.top !== 'undefined') {
            // 当页面跳转时： 可以回滚到页面顶部
            if (state.container === 'body') {
              document.body.scrollTo(0, state.top);
            } else {
              document.documentElement.scrollTop = state.top;
            }
          }
          return key;
        }} />
        <Scripts />
        {/* LiveReload 是一种开发工具，主要用于在开发 web 应用时实现自动刷新功能。当代码发生变化时，LiveReload 会自动更新浏览器中的页面，无需手动刷新。 */}
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}
