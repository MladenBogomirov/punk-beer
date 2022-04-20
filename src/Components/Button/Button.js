import React from 'react';
import {
  determineButtonStyleClass,
  determineButtonType,
} from './button-utilities';
import styles from './Button.module.css';

const Button = ({ type, text, className, onButtonClick }) => {
  const styleClass = determineButtonStyleClass(type);
  const clickHandler = (event) => {
    if (type === 'route') {
      return;
    }
    onButtonClick();
  };

  return (
    <button
      type={determineButtonType(type)}
      className={`${styles.button} ${styles[styleClass]} ${className}`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
