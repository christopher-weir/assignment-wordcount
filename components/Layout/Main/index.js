import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'tachyons/css/tachyons.min.css';

class Main extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <main className="w-100 sans-serif black-70 pl2 pr2">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>{title}</title>
        </Head>
        {children}
      </main>
    );
  }
}

Main.defaultProps = {
  title: ''
};

Main.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default Main;
