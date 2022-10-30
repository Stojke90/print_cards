import React from 'react';

const Card = ({ data }) => {
  return (
    <div className='cardWraper'>
      <h2 className='numberUser'>User Nr. 1</h2>
      <article className='card'>
        <p>
          <span>Name:</span> {data?.name}
        </p>
        <p>
          <span>E-Mail Address:</span> {data?.email}
        </p>
        <p>
          <span>Phone Number:</span> {data?.phone}
        </p>
        <p>
          <span>Street:</span> {data?.address?.street}
        </p>
        <p>
          <span>City:</span> {data?.address?.city}
        </p>
        <p>
          <span>Zipcode:</span> {data?.address?.zipcode}
        </p>
      </article>
    </div>
  );
};

export default Card;
