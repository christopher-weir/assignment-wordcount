import React from 'react';
import PropTypes from 'prop-types';

import { Section } from 'components/Layout';

const StatBar = ({
  total,
  events,
  words,
  frequency: [most = { word: '' }, least = { word: '' }]
}) => (
  <Section>
    <dl className="dib mr5">
      <dd className="f6 f5-ns b ml0">Word Count</dd>
      <dd className="f3 f2-ns b ml0">{total}</dd>
    </dl>
    <dl className="dib mr5">
      <dd className="f6 f5-ns b ml0">Total Events</dd>
      <dd className="f3 f2-ns b ml0">{events}</dd>
    </dl>
    <dl className="dib mr5">
      <dd className="f6 f5-ns b ml0">Total Words</dd>
      <dd className="f3 f2-ns b ml0">{words}</dd>
    </dl>
    {most && (
      <dl className="dib mr5">
        <dd className="f6 f5-ns b ml0">Most Frequent</dd>
        <dd className="f3 f2-ns b ml0">{most.word}</dd>
      </dl>
    )}
    {least && (
      <dl className="dib mr5">
        <dd className="f6 f5-ns b ml0">Least Frequent</dd>
        <dd className="f3 f2-ns b ml0">{least.word}</dd>
      </dl>
    )}
  </Section>
);

StatBar.defaultProps = {
  total: 0,
  events: 0,
  words: 0,
  frequency: []
};

StatBar.propTypes = {
  total: PropTypes.number,
  events: PropTypes.number,
  words: PropTypes.number,
  frequency: PropTypes.array
};

export default StatBar;
