import React, { Component } from 'react';
import io from 'socket.io-client';

import { createPrevalenceData } from 'utils/prevalence';
import { createTallyData } from 'utils/tally';

import { Main, PageHeader } from 'components/Layout';
import Prevalence from 'components/Prevalence';
import Tally from 'components/Tally';

export default class IndexPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tally: {},
            history: [],
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
            data: words,
        });

        this.setState({
            ...tally,
            ...history,
        });
    };

    render() {
        const { tally } = this.state;

        return (
            <Main title="Unomaly front-end assignment">
                <PageHeader title="Unomaly Assignment" />

                <Prevalence data={createPrevalenceData(tally)} />

                <Tally data={createTallyData(tally)} />
            </Main>
        );
    }
}

IndexPage.defaultProps = {};

IndexPage.propTypes = {};
