import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [totalReadTime, setTotalReadTime] = useState(0);


  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  const handleAddCart = (element) => {
    const isAlreadyBookmarked = bookmarks.some((bookmark) => bookmark.id === element.id);
    if (isAlreadyBookmarked) {
      toast.error('You Have Already Bookmarked This Blog.');
    } else {
      setBookmarks(bookmarks => [...bookmarks, element]);
      toast.success('Successfully Bookmark Added');
    }
  };
  
  const handleAddCart2 = (element) => {
    setTotalReadTime(totalReadTime => totalReadTime + parseInt(element.read));
  };
  

  return (
    <div className='flex gap-10 justify-between p-6 flex-col md:flex-row container mx-auto'>
      <div className="">
        {data.map(element => (
          <Element
            key={element.id}
            element={element}
            handleAddCart={handleAddCart}
            handleAddCart2={handleAddCart2}
          />
        ))}
        <ToastContainer />
      </div>
      <div>
        <div className='bg-purple-100 rounded-lg text-center p-4 outline-purple-600 outline'>
          <h2 className='text-lg font-semibold text-purple-600'>Spent time on read : {totalReadTime}  min</h2>
        </div>

        <div className="mt-5 bg-slate-300 rounded-lg p-2 outline outline-slate-600 w-full">
          <h2 className='text-center text-2xl font-bold'>Bookmark Blogs: {bookmarks.length}</h2>
          {bookmarks.map((bookmark, index) => (
            <div key={index} className='text-xl font-semibold bg-white p-3 rounded-lg mt-2'>{bookmark.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
