import React from 'react'


const View = ({ match }) => (
  <div>
    <h3>{match.params.viewId}</h3>
  </div>
)

export default View
