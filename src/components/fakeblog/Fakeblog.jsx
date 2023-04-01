import { useState, useEffect } from 'react';

function Fakeblog() {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    fetch('fake.json')
      .then(response => response.json())
      .then(data => {
        setFake(data);
      })
  }, []);  

  return (
    <div className="App">
      {fake.map(fake => (
        <div key={fake.id}>
            <div className='container mx-auto'>
          <h2 className='bg-slate-200 rounded-2xl p-5 mb-2 text-2xl font-semibold'>Question: {fake.question}</h2>
          <p className='bg-slate-200 rounded-2xl p-5 mb-2 text-2xl font-semibold'>Answer: {fake.answer}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Fakeblog;
