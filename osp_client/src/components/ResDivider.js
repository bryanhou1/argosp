import React from 'react'
import {Divider} from 'semantic-ui-react'

const ResDivider = ({text, hidden}) => {
  return (
    <Divider horizontal hidden={hidden}>{ hidden ? "" : text }</Divider>
  )
}

export default ResDivider;