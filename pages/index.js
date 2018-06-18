import React, { Component } from 'react';
import io from 'socket.io-client';

import { createPrevalenceDataset, sortPrevalence } from 'utils/prevalence';
import { createTallyGroups } from 'utils/tally';
import {
  calculateTotalCount,
  calculateTotalWords,
  calculateTotalEvents
} from 'utils/stats';
import { createFeedDataset } from 'utils/feed';

import { Main, PageHeader } from 'components/Layout';
import StatBar from 'components/StatBar';
import Prevalence from 'components/Prevalence';
import Feed from 'components/Feed';
import Tally from 'components/Tally';

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tally: {},
      history: []
    };
  }

  componentDidMount() {
    this.socket = io('/');
    this.socket.on('words', this.handleReceivedWords);
  }

  componentWillUnmount() {
    this.socket.off('words', this.handleReceivedWords);
    this.socket.close();
  }

  handleReceivedWords = words => {
    const { tally, history } = this.state;

    words.forEach(({ word, count }) => {
      tally[word] = tally[word] ? tally[word] + count : count;
    });

    history.push({
      time: Date.now(),
      data: words
    });

    this.setState({
      tally,
      history
    });
  };

  render() {
    const { tally, history } = this.state;

    return (
      <Main title="Unomaly front-end assignment">
        <PageHeader title="Unomaly Assignment" />
        <StatBar
          total={calculateTotalCount(tally)}
          events={calculateTotalEvents(history)}
          words={calculateTotalWords(tally)}
          frequency={sortPrevalence(tally, 1)}
        />
        <Prevalence data={createPrevalenceDataset(tally)} />
        <Feed data={createFeedDataset(history)} />
        <Tally data={createTallyGroups(tally)} />
      </Main>
    );
  }
}

IndexPage.defaultProps = {};

IndexPage.propTypes = {};
