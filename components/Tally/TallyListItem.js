import React from 'react';
import PropTypes from 'prop-types';

const TallyListItem = ({ word }) => (
  <li className="dib mr1 mb2">
    <span className="f6 f5-ns b db pa2 link dim dark-gray ba b--black-20">
      {word}
    </span>
  </li>
);

TallyListItem.defaultProps = {
  word: ''
};

TallyListItem.propTypes = {
  word: PropTypes.string
};

export default TallyListItem;
