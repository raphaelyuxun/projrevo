import React from 'react'

import './bird_page.less'

import TopNavBar from '../../common/top_nav_bar/top_nav_bar.jsx'
import BirdDetail from '../../common/bird_detail/bird_detail.jsx'

export default class BirdPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div data-role="page" className="bird-page">
        <div data-role="main" className="ui-content">
          <TopNavBar transparent={true}> </TopNavBar>
          <div className="content">
            <BirdDetail> </BirdDetail>
          </div>
        </div>
      </div>
    )
  }
}
