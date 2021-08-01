import React from 'react';
import { useState } from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';

export function Home() {
  const [input, setInput] = useState(false);

  function toggleInputBoolean() {
    setInput(!input);
  }
  return (
    <div>
      <h1>Hello</h1>
      <Header />
      <Button propForInput={ toggleInputBoolean } buttonName="VideoGame"/>
      { input && (
        <label htmlFor="VideoGame">
          Name
          <input type="text" id="VideoGame" placeholder="Name" />
        </label>
      )}
    </div>
  )
}
