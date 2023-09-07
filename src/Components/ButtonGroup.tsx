import React, { useState } from 'react';
import { ButtonsProps } from '../types';

const Button = ({
  text,
  active,
  onClick,
}: {
  text: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button className={`state-btn ${active ? 'active' : ''}`} onClick={onClick}>
    {text}
  </button>
);

const ButtonGroup = ({ setAppState }: ButtonsProps): React.JSX.Element => {
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (state: string) => {
    setAppState(state);
    setActiveButton(state);
  };

  return (
    <div className="button-group">
      {['all', 'active', 'completed'].map((state) => (
        <Button
          key={state}
          text={state.charAt(0).toUpperCase() + state.slice(1)}
          active={activeButton === state}
          onClick={() => handleButtonClick(state)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
