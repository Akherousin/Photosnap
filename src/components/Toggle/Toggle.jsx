import { useState } from 'react';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const plan = isToggled ? 'mounthly' : 'yearly';

  return (
    <button
      role="switch"
      aria-checked="true"
      aria-live="polite"
      onClick={() => setIsToggled(!isToggled)}
    >
      {plan}
    </button>
  );
}

export default Toggle;
