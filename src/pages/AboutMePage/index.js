import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import QuestionBalloon from '../../components/QuestionBalloon';

// Resources
import me from '../../res/img/me.jpg';

// Templates
import DefaultTemplate from '../../templates/DefaultTemplate';

const cx = classNames.bind(styles);

const questions = [
  {
    q: 'What is your name?',
    a: 'My name is Lico.',
  },
  {
    q: 'What do you do?',
    a: `I work as a frontend engineer in South Korea.`,
  },
  {
    q: 'How many years are you working as a developer?',
    a: `I've been working for one year.`,
  },
  {
    q: 'What programming skills do you have?',
    a: `Javascript, Css, Sass, React, Node(Express), Git. I also do a little Python, Docker, Django.`,
  },
  {
    q: 'What do you think is the most important thing in jobs?',
    a:
      'Good Communication. I beleive that communication with good co-workers can improve me.',
  },
  {
    q: 'What are you doing for your career now?',
    a:
      'I want to contribute proejcts like on github. but I know my English level is not enough for it yet. so I am learning English for the first now.',
  },
  {
    q: 'What is your current goal in your career?',
    a:
      'Learning English. Then I will try to get jobs in another country. I want to work with lots of various dev guys.',
  },
];

const AboutMePage = () => {
  return (
    <DefaultTemplate>
      <div className={cx('aboutme-page')}>
        <div className={cx('profile')}>
          <img src={me} alt="owner picture" />
        </div>
        <div className={cx('questions')}>
          <h2>Get to Know Me Questions</h2>
          {questions.map((question, questionIdx) => (
            <React.Fragment key={`question-${questionIdx}`}>
              <QuestionBalloon
                className={cx('question')}
                text={question.q}
                direction="left"
                bold
              />
              <QuestionBalloon
                className={cx('question')}
                text={question.a}
                direction="right"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default AboutMePage;
