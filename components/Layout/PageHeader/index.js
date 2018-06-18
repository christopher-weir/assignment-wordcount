import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title }) => (
  <section className="w-100 mw8 center">
    <header className="mb3 mt5 pb2">
      <h1 className="f2 fw8">{title}</h1>
    </header>
  </section>
);

PageHeader.defaultProps = {
  title: ''
};

PageHeader.propTypes = {
  title: PropTypes.string
};

export default PageHeader;
