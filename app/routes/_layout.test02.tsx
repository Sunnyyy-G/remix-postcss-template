import type { LinksFunction } from "@remix-run/node";
import style from '../styles/test.css';
export const link: LinksFunction= () => [
  {rel: 'stylesheet', href: style}
];

const ButtonTest = () => {
  return (
    <button type='button' className='w-40 h-10 rounded-lg bg-blue-400 border-solid text-white border-01'>button</button>
  )
}

export default function Test02() {
  return (
    <>
      <div className='font-sans p-4 bg-teal-100 min-h-screen'>
        Test02
        <p>
          <ButtonTest />
        </p>
      </div>
    </>
  );
}