import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { Section } from 'components/Layout';

const Feed = ({ data }) => (
  <Section title="Feed" subtitle="The most recent events">
    <Line
      data={data}
      options={{
        legend: {
          display: false
        },
        animation: {
          duration: 0
        },
        hover: {
          animationDuration: 0
        },
        responsiveAnimationDuration: 0
      }}
    />
  </Section>
);

Feed.defaultProps = {
  data: {}
};

Feed.propTypes = {
  data: PropTypes.object
};

export default Feed;
