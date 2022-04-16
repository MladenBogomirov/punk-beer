import React from 'react';
import {
  determineButtonStyleClass,
  determineButtonType,
} from './button-utilities';
import styles from './Button.module.css';

const Button = ({ type, text, className }) => {
  const styleClass = determineButtonStyleClass(type);

  return (
    <button
      type={determineButtonType(type)}
      className={`${styles.button} ${styles[styleClass]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
