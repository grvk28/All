import React from 'react'
import { Button, UncontrolledCollapse, Card, CardBody } from 'reactstrap'

const Coll = () => {
  return (
    <div><div>
    <Button
      color="primary"
      id="toggler"
      style={{
        marginBottom: '1rem'
      }}
    >
      Toggle
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis similique 
          porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed dignissimos esse fuga! 
          Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div></div>
  )
}

export default Coll