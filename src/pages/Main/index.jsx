import React from 'react';
import { useEffect, useState } from 'react';

import { GetPersonData } from '../../services/PersonService';
import WithSkeleton from './WithSkeleton';
import WithoutSkeleton from './WithoutSkeleton';
import './main.scss';

export default function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); //로딩중 (스켈레톤 화면 보이게)

      await new Promise((res) =>
        setTimeout(res, 2000)
      ); /* setTimeout:그냥 async await 안돼서 앞에 new Promise로 Promise객체로 만들어준후 async await 사용해야함 */

      try {
        const response = await GetPersonData(
          'https://reqres.in/api/users?page=2'
        );
        setData(response.data.data);
        setTimeout(
          () => setIsLoading(false),
          1000
        ); /* 로딩해제(api받아온 사진,데이터 보이게) */
      } catch (err) {
        console.err('Error fetching data:', err);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className='contentWrapper'>
      <div className='contentInner'>
        <WithoutSkeleton isLoading={isLoading} data={data} />
        <WithSkeleton isLoading={isLoading} data={data} />
      </div>
    </div>
  );
}
