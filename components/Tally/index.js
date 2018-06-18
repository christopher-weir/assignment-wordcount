import React from 'react';
import PropTypes from 'prop-types';

import { Section } from 'components/Layout';
import TallyList from './TallyList';

const Tally = ({ data }) => (
  <Section title="Tally" subtitle="Grouping of all words by their count">
    {Object.keys(data)
      .sort((a, b) => b - a)
      .map(tally => {
        return <TallyList key={tally} title={tally} data={data[tally]} />;
      })}
  </Section>
);

Tally.defaultProps = {
  data: {}
};

Tally.propTypes = {
  data: PropTypes.object
};

export default Tally;
