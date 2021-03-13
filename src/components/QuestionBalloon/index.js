import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const QuestionBalloon = ({
  className = '',
  text,
  direction = 'left',
  bold,
}) => {
  return (
    <div
      className={cx('question-balloon', direction, { bold }) + ' ' + className}
    >
      <span className={cx('text')}>{text}</span>
    </div>
  );
};

export default QuestionBalloon;
