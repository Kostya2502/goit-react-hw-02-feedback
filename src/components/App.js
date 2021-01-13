import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from "./notification/Notification";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const result = good + neutral + bad;
        return result
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = ((good * 100) / total);
        return Math.round(positivePercentage)
    }

    onLeaveFeedback = (e) => {
        const name = e.target.name;
        this.setState((prevState) => ({ [name]: prevState[name] + 1 }))
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const objKey = Object.keys(this.state);

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
                </Section>

                {total === 0 ? (
                    <Notification message="No feedback given" />
                ) : (
                        <Section title="Statistics">
                            <Statistics
                                good={good}
                                neutral={neutral}
                                bad={bad}
                                total={total}
                                positivePercentage={positivePercentage}
                            />
                        </Section>
                    )}
            </>
        );
    }
}
