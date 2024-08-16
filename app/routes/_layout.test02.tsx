// import type { LinksFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';
// import styleUrl from '../styles/test.css?url';
// 使用vite时，样式引入写法，如下
import '../styles/test.css';

import TsButton from '~/components/test-practice/TsButton';
// export const link: LinksFunction= () => [
//   {rel: 'stylesheet', href: styleUrl}
// ];

type StatusType03 = 'idle' | 'loading' | 'success' | 'error';
type RequesState =
  | {status: 'idle'}
  | {status: 'loading'}
  | {status: 'success', data: unknown}
  | {status: 'error', error: Error};

export default function Test02() {
  /* 推断类型为"boolean" */
  const [testStatus01, setTestStatus01] = useState(false);

  /* 显式设置类型为 "boolean" */
  const [tsStatus02, setTsStatus02] = useState<boolean>(false);
  
  const [tsStatus03, setTsStatus03] = useState<StatusType03>('loading');

  const [tsStatus04, setTsStatus04] = useState<RequesState>({status: 'idle'});

  
  const handleTsStatus01 = () => {
    setTestStatus01(!testStatus01);
  };

  const handleTsStatus02 = () => {
    setTsStatus02(!tsStatus02);
  };

  const handleTsStatus03 = (type: StatusType03) => {
    setTsStatus03(type);
  };
  const testDate = {name: 'test'};

  const handleTsStatus04 = (type: RequesState) => {
    setTsStatus04(type);
  };

  useEffect(() => {
    // 模拟组件挂载时的数据获取
    // handleTsStatus01();

  }, []);
  

  return (
    <>
      <div className='font-sans p-4 bg-white min-h-screen'>
        <h1>React 文档练习案例</h1>
        <section className='p-10 border-b border-black mb-5'>
          <h2>一、使用Typescript</h2>
          <p>
            <TsButton title='这是一个按钮' disabled={true} />
          </p>
        </section>
        <section className='p-10 border-b border-black mb-5'>
          <h2>二、Hooks 示例</h2>
          <h3>2.1 useState</h3>
          <p className='mb-2'>
            <span>useStatus01:</span>
            <span>{testStatus01? 'true' : 'false'}</span>
            <button onClick={handleTsStatus01}>切换</button>
          </p>
          <p className='mb-2'>
            <span>tsStatus02:</span>
            <span>{tsStatus02? 'true' : 'false'}</span>
            <button onClick={handleTsStatus02}>切换</button>
          </p>
          <p className='mb-2'>
            <span>tsStatus03:</span>
            <span>{tsStatus03}</span>
            <button onClick={() => handleTsStatus03('success')}>切换</button>
          </p>
          <p className='mb-2'>
            <span>tsStatus04:</span>
            <span>
              {tsStatus04.status}
            </span>
            <button onClick={() => handleTsStatus03('success')}>切换</button>
          </p>
        </section>
        <section className='p-10 border-b border-black mb-5'>
          <h2>一、使用Typescript</h2>
        </section>
      </div>
    </>
  );
}