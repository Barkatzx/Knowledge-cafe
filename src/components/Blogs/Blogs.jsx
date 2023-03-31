import React, { useEffect, useState } from 'react';
import Element from '../Element/Element';
const Blogs = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div className='flex justify-between p-6 flex-col md:flex-row container mx-auto'>
            <div className="">
                {
                    data.map(element => <Element 
                    key={element.id}
                    element = {element}>
                    </Element>)
                }
</div>
            <div>
            <div className='bg-purple-100 rounded-lg text-center p-4 outline-purple-600 outline'>
                <h2 className='text-lg font-semibold text-purple-600'>Spent time on read : 0 min</h2>
            </div>
    
            <div className="overflow-x-auto mt-5">
  <table className="table w-full rounded-2xl">
  <thead>
      <tr>
        <th className='text-center text-lg font-bold'>Bookmark Blogs:</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td className='text-xl font-semibold'>How to get your first job as a self-taught programmer
</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Blogs;