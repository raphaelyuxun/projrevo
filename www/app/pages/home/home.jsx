import React from 'react'

import './home.less'

import TopSearchBar from '../../common/top_search_bar/top_search_bar.jsx'
import BottomNavBar from '../../common/bottom_nav_bar/bottom_nav_bar.jsx'
import BirdItem from '../../common/bird_item/bird_item.jsx'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showTopSearchBar: true
    }

    // debouncing
    this.moveUpCount = 0
    this.moveDownCount = 0
  }

  render() {
    let showTopSearchBar = this.state.showTopSearchBar
    return <div data-role="page"
                className="home"
                onTouchMove={this.touchMove.bind(this)}
              >
              <TopSearchBar> </TopSearchBar>
              <div data-role="main" className="ui-content">
{/*
  {showTopSearchBar ?
  <TopSearchBar> </TopSearchBar> : null}
  */}
                <div className="birds-list">
                  <BirdItem chineseName="丹顶鹤" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤1" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤2" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤3" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤4" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤5" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤6" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤7" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤8" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤9" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤10" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤11" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤12" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                  <BirdItem chineseName="丹顶鹤13" latinName="Grus japonensis" englishName="Manchurian Crane" birdImage="1.jpg"></BirdItem>
                </div>
              </div>
              <BottomNavBar selected="home"> </BottomNavBar>
           </div>
  }

  touchMove(e) {
    let touch = e.nativeEvent.touches[0]
    if (!this.previousY) {
      this.previousY = touch.pageY
    } else {
      let delta = touch.pageY - this.previousY
      this.previousY = touch.pageY
      if (delta < 0) {
        this.moveUpCount = 0
        this.moveDownCount++
        if (this.moveDownCount === 5) {
          // console.log('move down')
          this.setState({showTopSearchBar: false})
          this.moveDownCount = 0
        }
      } else {
        this.moveDownCount = 0
        this.moveUpCount++
        if (this.moveUpCount === 5) {
          // console.log('move up')
          this.setState({showTopSearchBar: true})
          this.moveUpCount = 0
        }
      }
    }
  }
}
