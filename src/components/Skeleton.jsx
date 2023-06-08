import React from 'react';
import './skeleton.scss';

export default function Skeleton() {
  return (
    <div>
      <li className='skeleton-item'>
        <div>
          <div className='skeleton-img' />
        </div>
        <div className='skeleton-info'>
          <p className='skeleton-name' />
          <p className='skeleton-email' />
        </div>
      </li>
    </div>
  );
}
