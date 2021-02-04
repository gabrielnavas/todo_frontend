import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

import { ReducersType } from '../store/configs/root-reducer'

type PrivateRouteProps = {
  exact: boolean
  path: string
  redirectPath: string
  component: () => any
}

export const PrivateRoute = ({ exact, path, redirectPath, component: Component }: PrivateRouteProps) => {
  const isAuthenticated = useSelector<ReducersType>(state => state.auth.isAuthenticated) as boolean

  if (!isAuthenticated) {
    return <Redirect exact to={redirectPath} />
  }

  return (
    <Route exact={exact} path={path} component={Component} />
  )
}
