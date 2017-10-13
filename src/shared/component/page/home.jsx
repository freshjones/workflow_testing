import React from 'react'
import Helmet from 'react-helmet'
const title = 'Hello World'
const HomePage = function(){
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <h1>HomePage</h1>
    </div>
  )
}
export default HomePage
