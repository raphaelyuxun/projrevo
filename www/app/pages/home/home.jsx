import React from 'react'

import './home.less'

import TopSearchBar from '../../common/top_search_bar/top_search_bar.jsx'
import BottomNavBar from '../../common/bottom_nav_bar/bottom_nav_bar.jsx'
import BirdItem from '../../common/bird_item/bird_item.jsx'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div data-role="page"
                className="home"
              >
              <TopSearchBar> </TopSearchBar>
              <div data-role="main" className="ui-content">
                <ul className="birds-list" data-role="listview" data-filter="true" data-input="#birdFilter">
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
                </ul>
              </div>
              <BottomNavBar selected="home"> </BottomNavBar>
           </div>
  }
}
