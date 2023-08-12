import React from 'react'
import { Button,Fade } from 'reactstrap'

const Fades = () => {
  return (
    <div>
        <div>
          <Button
            color="primary"
            onClick={function noRefCheck(){}}
          >
            Toggle Fade
          </Button>
          <Fade
            className="mt-3"
            tag="h5"
          >
            This content will fade in and out as the button is pressed
          </Fade>
        </div>
    </div>
  )
}

export default Fades