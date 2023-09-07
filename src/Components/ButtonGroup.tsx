import React from 'react';
import { ButtonsProps } from '../types';

const ButtonGroup = ({ setAppState }: ButtonsProps): React.JSX.Element => {
  return (
    <div className="button-group">
      <button className="state-btn" onClick={() => setAppState('all')}>
        All
      </button>
      <button className="state-btn" onClick={() => setAppState('active')}>
        Active
      </button>
      <button className="state-btn" onClick={() => setAppState('completed')}>
        Completed
      </button>
    </div>
  );
};

export default ButtonGroup;
