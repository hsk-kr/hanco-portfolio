import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import Button from '../../components/Button';

// Resoucres
import HomeBg from '../../res/img/home-bg.jpg';

// Templates
import DefaultTemplate from '../../templates/DefaultTemplate';

const cx = classNames.bind(styles);

const HomePage = () => {
  const history = useHistory();

  const handleAboutMeClick = useCallback(() => {
    history.replace('/aboutme');
  }, []);

  return (
    <DefaultTemplate>
      <div className={cx('home-page')}>
        <div className={cx('first-section')}>
          <div className={cx('bg')}>
            <img src={HomeBg} alt="background-image" />
          </div>
          <h1>Hanco Website</h1>
          <p>Welcome to my website.</p>
          <p> If you need my help, please let me know. I will help you.</p>
          <Button className="btn-aboutme" onClick={handleAboutMeClick}>
            About Me
          </Button>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default HomePage;
