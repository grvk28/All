import React from 'react'
import { List, ListGroup, ListGroupItem } from 'reactstrap'

const Lis = () => {
  return (
    <div>
    <p>
      The{' '}
      <code>
        numbered
      </code>
      {' '}prop can be used to opt into numbered list group items.
    </p>
    <ListGroup numbered>
      <ListGroupItem>
        Cras justo odio
      </ListGroupItem>
      <ListGroupItem>
        Dapibus ac facilisis in
      </ListGroupItem>
      <ListGroupItem>
        Morbi leo risus
      </ListGroupItem>
      <ListGroupItem>
        Porta ac consectetur ac
      </ListGroupItem>
      <ListGroupItem>
        Vestibulum at eros
      </ListGroupItem>
    </ListGroup>
  </div>
  )
}

export default Lis