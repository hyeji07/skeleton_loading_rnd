import React from 'react';
import { Outlet } from 'react-router';

export default function LayoutDefault() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
