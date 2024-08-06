import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
    return (
        <ul>
            <li className={css.item}>Good: {good} </li>
            <li className={css.item}>Neutral: {neutral} </li>
            <li className={css.item}>Bad: {bad} </li>
            <li className={css.item}>Total: {totalFeedback}</li>
            <li className={css.item}>Positive: {positiveFeedback }%</li>
        </ul>
    )
};

export default Feedback;