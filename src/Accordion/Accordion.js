import React, { useState } from 'react';
import accordionData from './data';
import './Accordion.css';

const Accordion = () => {
  console.log(accordionData);
  const [activeId, setActiveId] = useState(null);

  const handleCollapse = (id) => {
    console.log(id);
    setActiveId(activeId === id ? null : id);
  };
  return (
    <div>
      <h3>Accordion</h3>
      <div>
        {accordionData.map((item) => (
          <div className="item-wrapper">
            <span>{item.title}</span>
            <button onClick={() => handleCollapse(item.id)}>
              {activeId === item.id ? '-' : '+'}
            </button>
            {activeId === item.id ? <p>{item.content}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordion;
