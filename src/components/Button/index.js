import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const Button = ({ children, className = '', ...props }) => {
  return (
    <div className={cx('button') + ' ' + className} role="button" {...props}>
      {children}
    </div>
  );
};

export default Button;
