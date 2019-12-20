import * as React from 'react';

import {H5, Slider, Switch} from '@blueprintjs/core';

export default class SliderExample extends React.PureComponent {
  state = {
    value1: 0,
    value2: 2.5,
    value3: 30,
    vertical: false,
  };
  handleBooleanChange = () => {};

  toggleVertical = () => {};

  render() {
    const {vertical} = this.state;
    const options = (
      <>
        <H5>Props</H5>
        <Switch
          checked={vertical}
          label="Vertical"
          key="vertical"
          onChange={this.toggleVertical}
        />
      </>
    );

    return (
      <>
        <Slider
          min={0}
          max={10}
          stepSize={0.1}
          labelStepSize={10}
          onChange={this.getChangeHandler('value2')}
          value={this.state.value2}
          vertical={vertical}
        />
      </>
    );
  }

  getChangeHandler(key) {
    return value => this.setState({[key]: value});
  }

  renderLabel2(val) {
    return `${Math.round(val * 100)}%`;
  }

  renderLabel3(val) {
    return val === 0 ? `£${val}` : `£${val},000`;
  }
}
