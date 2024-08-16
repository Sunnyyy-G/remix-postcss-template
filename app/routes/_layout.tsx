import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { Outlet } from '@remix-run/react';
// 使用vite时，样式引入写法，如下
import '~/styles/common/global.css';
// import style from '~/styles/common/global.css?url';
import Header from '~/components/globals/header/Header';
import Footer from '~/components/globals/footer/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// export const link: LinksFunction= () => [
//   {rel: 'stylesheet', href: style}
// ];

export default function Layout() {
  return <>
      <Header />
      <Outlet/>
      <Footer />
    </>;
}
