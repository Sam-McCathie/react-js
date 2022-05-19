import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// useRef
// - Persists between component render.
// - does not cause your componenet to update when it changes but
const UseRefBasics = () => {
   const [name, setName] = useState('');
   // store use ref inside of a variable
   // creates an object with a current property
   // default value is passed as the arg
   const renderCount = useRef(1);
   // access the current favlue of

   console.log({ title: 'Render Count', ...renderCount });

   useEffect(() => {
      renderCount.current = renderCount.current + 1;
   }, [name]);

   return (
      <>
         <h3>Basic E.g.</h3>
         <input onChange={(e) => setName(e.target.value)} />
         <p>Current render count = {renderCount.current}</p>
      </>
   );
};

const UseRefDOM = () => {
   const [name, setName] = useState('');
   const inputRef = useRef(); // adding a ref to an element returns the element like document.getElementById

   const focus = () => {
      console.log({ title: 'Focus', ...inputRef }); // input
      inputRef.current.focus(); // will call the focus() method on the input element with the ref element "inputRef"
   };

   return (
      <>
         <h3>DOM example</h3>
         {/*All elements have a ref attribute*/}
         <input ref={inputRef} onChange={(e) => setName(e.target.value)} />
         <button onClick={focus}>FOCUS</button>
      </>
   );
};

const UseRef = () => {
   return (
      <>
         <Link to="/hooks">Back</Link> | <Link to="/">Home</Link>
         <h1>UseRef</h1>
         <UseRefBasics />
         <hr />
         <UseRefDOM />
      </>
   );
};

export default UseRef;
