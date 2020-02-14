import React from 'react';
import { Route } from 'react-router-dom';
import Home from '@/Container/Home';
import Login from '@/Container/Login';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    loadData: Home.loadData
  },
  {
    path: '/login',
    component: Home,
    exact: true
  }
];
