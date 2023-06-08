import React from 'react';
import Skeleton from '../../components/Skeleton';

export default function WithSkeleton({ isLoading, data }) {
  return (
    <ul className='itemWrap'>
      <li className='title'>Skeleton 사용🔵</li>
      {/* 로딩중일때 (데이터불러오기전 로딩중state가 true돼서 스켈레톤보이니까)*/}
      {isLoading
        ? new Array(6).fill(1).map((_, i) => <Skeleton key={i} />)
        : data.map((item) => (
            <li key={item.id} className='item'>
              <div>
                <img className='img' src={item.avatar} alt='프로필사진' />
              </div>
              <div className='info'>
                <p>
                  <strong>
                    {item.first_name} {item.last_name}
                  </strong>
                </p>
                <p>{item.email}</p>
              </div>
            </li>
          ))}
    </ul>
  );
}
