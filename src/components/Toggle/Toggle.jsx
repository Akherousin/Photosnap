import { useState } from 'react';
import styles from './Toggle.module.scss';

function Toggle({ firstValue, secondValue, onChange }) {
  const [currentValue, setCurrentValue] = useState(firstValue);

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <fieldset
      className={styles.radio_switch}
      role="radiogroup"
      aria-labelledby="radio-switch__legend"
    >
      <legend id="radio-switch__legend" hidden>
        Pricing Plan:{' '}
      </legend>

      <label
        htmlFor="toggle-input-1"
        className={currentValue === firstValue ? `${styles.selected}` : ''}
      >
        {firstValue}
      </label>
      <span className={styles.radio_switch__wrapper}>
        <input
          type="radio"
          name="plan"
          id="toggle-input-1"
          value={firstValue}
          checked={currentValue === firstValue}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="plan"
          id="toggle-input-2"
          value={secondValue}
          checked={currentValue === secondValue}
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="32"
          viewBox="0 0 64 32"
          fill="none"
        >
          <rect width="64" height="32" rx="16" fill="#DFDFDF" />
          <circle cx="16" cy="16" r="12" fill="black" />
        </svg>
      </span>
      <label
        htmlFor="toggle-input-2"
        className={currentValue === secondValue ? `${styles.selected}` : ''}
      >
        {secondValue}
      </label>
    </fieldset>
  );
}

export default Toggle;
