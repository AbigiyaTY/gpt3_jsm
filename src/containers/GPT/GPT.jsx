import React from 'react'
import Feature from '../../components/Feature/Feature'
import './GPT.css'


const GPT = () =>{
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature />
      <Feature />
      <Feature />
    </div>
  </div>
  )
}

export default GPT