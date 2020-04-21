import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    let float = Number.parseFloat(this.props.opacity)
    return (
      <div className="color-box" style={{ opacity: float }}>
        {0.2 < float ? <ColorBox opacity={float - 0.1} /> : null}
      </div>
    )
  }

}

