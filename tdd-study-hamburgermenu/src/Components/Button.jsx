import React from 'react';

export default function Button(props) {

  return (
    <>
      <button onClick={ () => props.propForInput() } type="button">
        {props.buttonName}
      </button>
    </>
  )
}