import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, title, subtitle }) => (
  <section className="w-100 mw8 mb5 center">
    {title || subtitle ? (
      <header className="mb4 pb2 bb">
        {title && <h3 className="f4 fw8 ma0 mb2 pa0">{title}</h3>}
        {subtitle && <h4 className="f6 fw4 black-50 ma0 pa0">{subtitle}</h4>}
      </header>
    ) : null}
    <div>{children}</div>
  </section>
);

Section.defaultProps = {
  title: null,
  subtitle: null
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default Section;
