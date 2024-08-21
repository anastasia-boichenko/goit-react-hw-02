import s from './Options.module.css';

const Options = ({ options, updateFeedback, total, resetFeedback }) => {
  return (
    <div className={s.container}>
      {options.map((option, i) => (
        <button
          key={i}
          className={s.btn}
          onClick={() => {
            updateFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
      {total > 0 && (
        <button className={s.resetBtn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;