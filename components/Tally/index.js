import React from 'react';
import PropTypes from 'prop-types';

import { Section } from 'components/Layout';
import TallyList from './TallyList';

const Tally = ({ data }) => (
    <Section title="Tally">
        {Object.keys(data)
            .sort((a, b) => a - b)
            .reverse()
            .map(tally => {
                return (
                    <TallyList key={tally} title={tally} data={data[tally]} />
                );
            })}
    </Section>
);

Tally.defaultProps = {
    data: {},
};

Tally.propTypes = {
    data: PropTypes.object,
};

export default Tally;
