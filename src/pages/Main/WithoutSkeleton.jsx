import React from 'react';

export default function WithoutSkeleton({ isLoading, data }) {
  return (
    <ul className='itemWrap'>
      <li className='title'>Skeleton 사용❌</li>
      {/* 로딩중아닐때 (스켈레톤이 데이터불러오고는 로딩중state가 false니까)*/}
      {!isLoading &&
        data.map((item) => (
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
