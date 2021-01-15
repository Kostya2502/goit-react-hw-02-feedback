import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map((option) => (
                <button type="button" name={option} key={uuidv4()} onClick={onLeaveFeedback}>{option}</button>
            ))}
        </>
    );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}