import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Element = (props) => {
    const {thumnail, author, name, title, date, read, tags} = props.element;
    return (
        <div className='mb-8 container mx-auto'>
              <img className='rounded-2xl' src={thumnail} />
              <div className='flex justify-between pt-4'>
  <div className="flex items-center">
  <div className="avatar">
  <div className="w-10 rounded-full">
    <img src={author} />
  </div>
</div>
    <div className='ps-6'>
    <div className='text-xl font-semibold'>{name}</div>
    <div className=''>{date}</div></div>
  </div>
  <div className='text-lg mt-2 pr-10'>{read}  <FontAwesomeIcon icon={faBookmark} /></div>
        </div>
        
        <div className='mt-3 text-3xl font-semibold'>{title}</div>
        <div className='mt-3'>{tags}</div>
        <div className='mt-3 text-blue-800 font-bold underline'>Mark as read</div>
        </div>
    );
};

export default Element;