import { useState } from 'react';

import type { ToggleSwitchProps } from '../lib/types';

export default function ToggleSwitch({ onToggle }: ToggleSwitchProps) {
  const [isChecked, setIsChecked] = useState(false);
  function handleToggle() {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  }

  return (
    <>
      <section
        className={`toggle-container ${isChecked ? 'checked' : ''}`}
        onClick={handleToggle}
      >
        <div className="toggle-switch">
          <div className="toggle-handle"></div>
        </div>
      </section>
      <p className='text-sm tracking-tighter subpixel-antialiased'>click to switch to {isChecked ? 'plain text' : 'markdown'}</p>
    </>
  );
};
