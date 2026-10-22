import React from 'react'
import {useref} from 'react'
function myFunction() {
  const box = useref(null);
  const update = () => {
    box.current = 1000;
    console.log(box.current);
  };
  return (
    <div>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default App
