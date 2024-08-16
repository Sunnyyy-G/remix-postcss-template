import type { LinksFunction } from "@remix-run/node";
import style from '../styles/test.css?url';
export const link: LinksFunction= () => [
  {rel: 'stylesheet', href: style}
];

export default function Index() {
  return (
    <>
      <div className='index'>首页</div>
    </>
  );
}