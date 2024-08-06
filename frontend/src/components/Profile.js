import React, { useState } from 'react';

// קומפוננטת בריאקט
const SimpleComponent = () => {
  const [count, setCount] = useState(0);

  // פונקציה פשוטה להגדלת המונה ב-1
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>Increase Counter</button>
    </div>
  );
};

export default SimpleComponent;
