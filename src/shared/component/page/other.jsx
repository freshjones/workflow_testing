import React from 'react'
import Helmet from 'react-helmet'
const title = 'Hello Other'
const OtherPage = function(){
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Other Page" />
      </Helmet>
      <h1>Other Page Mang</h1>
    </div>
  )
}
export default OtherPage
