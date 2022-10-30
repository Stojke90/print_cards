import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main = () => {
  const [users, setUsers] = useState([[]]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(false);
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          setUsers(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.warn(error.message);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <main className='mainCon'>
      <section>
        <p className='titleMainCon'>Random Users:</p>
      </section>
      {users.length > 0 && (
        <section className='wraperForCards'>
          {users.map((data, index) => (
            <Card
              key={index}
              data={data}
            />
          ))}
        </section>
      )}
      {loading && <div className='loader' />}
      {users.length === 0 && <p className='noData'>No data to show!!!</p>}
      {error && <p className='noData'>Something get wrong!!!</p>}
    </main>
  );
};

export default Main;
