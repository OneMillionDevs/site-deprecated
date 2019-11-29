import React from 'react';
import {
  Intent,
  Popover,
  PopoverInteractionKind,
  Position,
} from '@blueprintjs/core';

export default class PopoverExample extends React.Component {
  render() {
    return (
      <Popover
        interactionKind={PopoverInteractionKind.CLICK}
        position={Position.BOTTOM}>
        <span intent={Intent.PRIMARY}>{this.props.children}</span>
        {this.props.content}
      </Popover>
    );
  }
}
