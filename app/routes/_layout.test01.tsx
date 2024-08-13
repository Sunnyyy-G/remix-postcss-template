import type { LinksFunction } from "@remix-run/node";
import style from '../styles/test.css';
export const link: LinksFunction= () => [
  {rel: 'stylesheet', href: style}
];

export default function Test01() {
  return (
    <>
      <div className='test'>Test01</div>
    </>
  );
}