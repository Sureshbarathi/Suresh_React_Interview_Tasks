// npm install react-window

import React, { useState } from 'react';
import { List } from 'react-window';

const Virtualization = () => {
  const users = Array.from({ length: 10000 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
  }));

  function Row({ index, style }) {
    return <div className='suresh' style={style}>{users[index].name}</div>;
  }

  console.log(users);
  return (
    <div>
      <h3>Virtualization</h3>
      <List
        rowComponent={Row}
        rowCount={users.length}
        rowHeight={35}
        rowProps={{}}
        style={{ height: 400, width: 300 }}
      />
    </div>
  );
};
export default Virtualization;
