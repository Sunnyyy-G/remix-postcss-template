import type { LinksFunction } from "@remix-run/node";
import style from '../styles/test.css';
export const link: LinksFunction= () => [
  {rel: 'stylesheet', href: style}
];

export default function Test() {
  return (
    <>
      <div className='test'>test</div>
    </>
  );
}