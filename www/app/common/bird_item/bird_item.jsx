import React from 'react'

import './bird_item.less'

let BirdItem = React.createClass({
  propTypes: {
    chineseName: React.PropTypes.string,
    latinName: React.PropTypes.string,
    englishName: React.PropTypes.string,
    birdImage: React.PropTypes.string
  },

  render: function() {
    let chineseName = this.props.chineseName,
        latinName = this.props.latinName,
        englishName = this.props.englishName,
        birdImage = this.props.birdImage
    return (
      <li className="bird-item" onClick={this.showDetails} onTouchStart={this.showDetails}>
        <div className="wrapper">
          <div className="introduction">
            <p className="name"> {chineseName} </p>
            <p className="latin"> 拉丁学名: <span className="content"> {latinName} </span> </p>
            <p className="english"> 英文名:  <span className="content"> {englishName} </span> </p>
          </div>
          <div className="image">
            <img src={'../www/img/' + birdImage}/>
          </div>
        </div>
      </li>
    )
  },

  showDetails() {
    // this.transitionTo('bird', {englishName: this.props.englishName})
  }
})

export default BirdItem
