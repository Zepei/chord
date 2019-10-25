import React, { Component } from 'react';
import Node from '../Node';

export default class ChordView extends Component {
  render() {
    return (
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            height: '550px',
            width: '550px',
            display: 'inline-block',
            position: 'relative',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'inline-block',
              borderRadius: '50%',
              position: 'absolute',
              border: '3px solid #6ebdeb',
            }}
          ></div>
          {this.props.nodes !== null
            ? this.props.nodes.map((e,i) =>
                e === this.props.highlight ? (
                  <Node id={e} key={i} highlight />
                ) : (
                  <Node id={e} key={i} />
                )
              )
            : null}
        </div>
      </div>
    );
  }
}
