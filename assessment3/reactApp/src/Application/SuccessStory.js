import React from 'react'

const SuccessStory = (props) => {

  return (
    <>
      <h4>Success Story Component</h4>
      <button onClick={() => props.getSuccessStory("test from success story component")}>Pass value to Success</button>
    </>
  )
}

export default SuccessStory;