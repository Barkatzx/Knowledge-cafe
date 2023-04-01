import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [readTime, setReadTime] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  useEffect(() => {
    const storedTime = JSON.parse(localStorage.getItem("readTime"));
    if (storedTime) {
      setReadTime(storedTime);
    }
  }, []);

  const handleAddCart = (element) => {
    // setReadTime(prevReadTime => prevTime + element.readTime);
    setReadTime(prevReadTime => [...prevReadTime, element]);
  }

  useEffect(() => {
    localStorage.setItem("readTime", JSON.stringify(readTime));
  }, [readTime]);

  return (
    <div className='flex gap-10 justify-between p-6 flex-col md:flex-row container mx-auto'>
      <div className="">
        {data.map(element => (
          <Element
            key={element.id}
            element={element}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>
      <div>
        <div className='bg-purple-100 rounded-lg text-center p-4 outline-purple-600 outline'>
          <h2 className='text-lg font-semibold text-purple-600'>Spent time on read : {readTime}  min</h2>
        </div>

        <div className="mt-5 bg-slate-300 rounded-lg p-2 outline outline-slate-600">
          <h2 className='text-center text-2xl font-bold'>Bookmark Blogs:</h2>
          <div className='text-xl font-semibold bg-white p-3 rounded-lg mt-2'>How to get your first job as a self-taught programmer</div>
          <div className='text-xl font-semibold bg-white p-3 rounded-lg mt-2'>How to become a React developer in 2023</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
