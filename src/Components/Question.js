
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [readMore, setReadMore] = useState(false);
  return <article className='question'>
  <header>
    <h4>{title}</h4>
    <button className='btn' onClick={() => setReadMore(!readMore)}>
      {readMore ? <AiOutlinePlus /> : <AiOutlineMinus />}
    </button>
  </header>
  {readMore ? info : `...`}
  
</article>;
};

export default Question;