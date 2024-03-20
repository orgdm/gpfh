import React from 'react';

type ServiceProps = {
  img: string;
  title: string;
  desc: string;
  reverse: boolean;
};

const Service = ({ img, title, desc, reverse }: ServiceProps) => {
  return (
    <div className='p-4'>
      <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
        <div>
          <h3>{title}</h3>
          <img src={img} alt={title} />
        </div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Service;
