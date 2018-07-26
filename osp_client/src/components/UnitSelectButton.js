import React from 'react'
import { Button } from 'semantic-ui-react'

const UnitSelectButton = ({active, onClick, optionName, changeTableTwoDisplayUnit}) => {
  return (
    <Button
      active={active}
      onClick={() => onClick(optionName, changeTableTwoDisplayUnit)}
    >
      {optionName}
    </Button>
  )
}

export default UnitSelectButton;

