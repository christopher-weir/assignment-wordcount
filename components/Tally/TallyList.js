import React from 'react';
import PropTypes from 'prop-types';

import TallyListItem from './TallyListItem';

const TallyList = ({ title, data }) => (
    <section>
        <header>
            <h5>{title}</h5>
        </header>
        <ul className="list ma0 pa0">
            {data.map(word => {
                return <TallyListItem key={word} word={word} />;
            })}
        </ul>
    </section>
);

TallyList.defaultProps = {
    title: '',
    data: [],
};

TallyList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};

export default TallyList;
