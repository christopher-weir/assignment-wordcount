import React from 'react';
import PropTypes from 'prop-types';
import { Polar } from 'react-chartjs-2';

import { Section } from 'components/Layout';

const Prevalence = ({ data }) => (
  <Section title="Prevalence" subtitle="The most vs least frequent words">
    <Polar data={data} />
  </Section>
);

Prevalence.defaultProps = {
  data: {}
};

Prevalence.propTypes = {
  data: PropTypes.object
};

export default Prevalence;
