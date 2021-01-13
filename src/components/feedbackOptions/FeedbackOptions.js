import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map((option) => (
                <button type="button" name={option} key={option} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </>
    );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}