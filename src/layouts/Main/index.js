import React from 'react'
import { renderRoutes } from "react-router-config";
import { Page } from './style'

function Main(props) {
  const { route } = props;
  return (
    <Page>
      { renderRoutes(route.routes) }
    </Page>
  )
}

export default React.memo(Main)