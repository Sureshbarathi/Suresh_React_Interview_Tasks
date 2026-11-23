import React from 'react';

const Child = React.memo(() => {
  console.log('Child Rendered');
  return <h3>Child</h3>;
});
export default Child;
