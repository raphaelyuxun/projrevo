import React from 'react'

import './bird_detail.less'

export default class BirdDetail extends React.Component {
  constructor(props) {
    super(props)

    this.swipeDebounce = 0
  }

  componentDidMount() {
    let slider = $('.bird-images').unslider({
    	speed: 250,               //  The speed to animate each slide (in milliseconds)
    	delay: 0,              //  The delay between slide animations (in milliseconds)
    	complete: function() {},  //  A function that gets called after every slide animation
    	keys: true,               //  Enable keyboard (left, right) arrow shortcuts
    	dots: false,               //  Display dot navigation
    	fluid: false              //  Support responsive design. May break non-responsive designs
    })
    this.sliderData = slider.data('unslider')
  }

  render() {
    return (
      <div className="bird-detail">
        {/* 点击图片出现缩略图 */}
        <div className="bird-images">
          <ul onTouchMove={this.swipeImage.bind(this)}>
            <li>
              <img src="../www/img/1.jpg"/>
            </li>
            <li>
              <img src="../www/img/1.jpg"/>
            </li>
            <li>
              <img src="../www/img/1.jpg"/>
            </li>
          </ul>
        </div>
        <div className="btns">
          <div className="btn">
            <span> 查看地图 </span>
            <i className="fa fa-map-o"></i>
          </div>
          <div className="btn">
            <span> 查看更多图片 </span>
            <i className="fa fa-picture-o"></i>
          </div>
        </div>
        <div className="introduction">
          <p className="name">
            丹顶鹤
          </p>
        </div>
      </div>
    )
  }

  leftImage() {
    if (this.sliderData) {
      this.sliderData.prev()
    }
  }

  rightImage() {
    if (this.sliderData) {
      this.sliderData.next()
    }
  }

  swipeImage(e) {
    let touch = e.nativeEvent.touches[0]
    if (!this.previousX) {
      this.previousX = touch.pageX
    } else {
      let delta = touch.pageX - this.previousX
      this.previousX = touch.pageX

      if (delta < 0) { // swipe left
        if (this.swipeDebounce > 0) {
          this.swipeDebounce = 0
        } else {
          this.swipeDebounce--
          if (this.swipeDebounce < -3) {
            this.swipeDebounce = 0
            this.sliderData.next()
          }
        }
      } else { // swipe right
        if (this.swipeDebounce < 0) {
          this.swipeDebounce = 0
        } else {
          this.swipeDebounce++
          if (this.swipeDebounce > 3) {
            this.swipeDebounce = 0
            this.sliderData.prev()
          }
        }
      }
    }
  }
}

BirdDetail.propTypes = {
}
