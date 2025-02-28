import React, { useState, useEffect, useContext } from 'react';

import Answer from './Answer.jsx';

const AnswerList = (props) => {
  const [count, setCount] = useState(2);

  let answers = props.answers;
  let answerCount = answers.length;
  let answerList;

  let handleShowMore = () => {
    setCount(count + 2);
  }

  let handleShowLess = () => {
    setCount(2);
  }

  if (count < answerCount) {
    answerList = answers.slice(0, count).map(answer =>
      <Answer key={answer.answer_id} answer={answer} />)
  } else {
    answerList = answers.map(answer =>
      <Answer key={answer.answer_id} answer={answer} />)
  }

  return (
    <div className='answers'>
      {answerList}
      {(count < answerCount && count >= 2) &&
      <button onClick={handleShowMore}>Show More Answers</button>}
      {(count >= answerCount && answerCount > 2) &&
      <button onClick={handleShowLess}>Show Less Answers</button>}
    </div>
  )
}

export default AnswerList;