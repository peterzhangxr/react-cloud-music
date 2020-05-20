import React, {lazy, Suspense} from 'react'
import { Redirect } from 'react-router-dom'
import MainLayout from '../layouts/Main'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

export default [
  {
    path: '/',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={"/home"} />
      },
      {
        path: '/home',
        component: SuspenseComponent(lazy(() => import('../application/Home/')))
      }
    ]
  }
]