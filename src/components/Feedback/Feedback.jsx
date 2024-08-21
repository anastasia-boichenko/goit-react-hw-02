import s from './Feedback.module.css';

const Feedback = ({ options, total, rate }) => {
  return (
    <div>
      <ul className={s.list}>
        {options.map(([key, value]) => (
          <li key={key} >
            {key}: {value}
          </li>
        ))}
        <li className={s.total}>Total: {total}</li>
        <li className={s.positive}>Positive: {rate}%</li>
      </ul>
    </div>
  );
};



export default Feedback;