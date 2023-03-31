import React from 'react';
import img from '../Header/avator.jpg';

const Header = () => {
  return (
    <div>
      <div className="App">
        <div className="navbar ps-10 pe-10">
  <div className="flex-1">
    <a className="text-2xl font-bold">Knowledge Cafe</a>
  </div>
  <div className="avatar">
  <div className="w-10 rounded-full">
    <img src={img} />
  </div>
</div>
    </div>
    <hr />
  </div>
    </div>
  );
};

export default Header;