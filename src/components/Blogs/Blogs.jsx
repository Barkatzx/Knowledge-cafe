import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setblogs] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    }, [])
    return (
        <div className='flex justify-between p-6 flex-col md:flex-row'>
            <div className="card bg-base-100 shadow-xl mb-4">
  <figure><img src="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{blogs.length}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            <div>
            <div className='bg-purple-100 rounded-lg text-center p-4 outline-purple-600 outline'>
                <h2 className='text-lg font-semibold text-purple-600'>Spent time on read : 0 min</h2>
            </div>
            </div>
        </div>
    );
};

export default Blogs;