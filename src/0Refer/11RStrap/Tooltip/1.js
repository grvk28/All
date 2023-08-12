import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

function Tool(args) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p>
        Somewhere in here is a{' '}
        <a
          href="https://Tool.com"
          target="_blank"
          rel="noreferrer"
          id="TooltipTool"
        >
          tooltip
        </a>
        .
      </p>
      <Tooltip
        {...args}
        isOpen={tooltipOpen}
        target="TooltipTool"
        toggle={toggle}
      >
        Hello world!
      </Tooltip>
    </div>
  );
}

Tool.args = {
  autohide: true,
  flip: true,
};

Tool.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default Tool;