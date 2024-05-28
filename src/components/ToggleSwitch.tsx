import React from 'react';

interface ToggleSwitchProps {
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle }) => {
  return (
    <>
    <div className='darkModeSwitch'>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} />
        <span className="slider round"></span>
      </label>
      </div>
    </>
  );
};

export default ToggleSwitch;
