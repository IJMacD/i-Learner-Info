import React, { Component, PropTypes } from 'react';

import '../styles/Image.scss';

export default class Counter extends Component {

  render() {
    const { image, caption } = this.props;

    return (
      <div className="il-card-full il-card-image mdl-card mdl-shadow--2dp">
        <img className="il-card-image__image" src={image} />
        { caption &&
          <div className="mdl-card__actions">
            <span className="il-card-image__status">{ caption }</span>
          </div>
        }
      </div>
    );
  }
}
