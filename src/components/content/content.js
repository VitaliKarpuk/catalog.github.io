import React, { Component } from 'react'
import { Slider } from './slider/slider'
import { ContentInfo } from './content-info/content-info'
import './style.css'




export default class Content extends Component {


  render() {

    return (
      <div className = 'content'>
      <Slider />
      <ContentInfo />
        </div>
    );
  }
};