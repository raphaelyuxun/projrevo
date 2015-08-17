import React from 'react'

import './bird_item.less'

export default class BirdItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bird-item">
        <div className="wrapper">
          <div className="introduction">
            <p className="name"> 丹顶鹤 </p>
            <p className="latin"> 拉丁学名: <span className="content"> Grus japonensis </span> </p>
            <p className="english"> 英文名:  <span className="content"> Manchurian Crane </span> </p>
          </div>
          <div className="image">
            <img src={'../www/img/1.jpg'}/>
          </div>
        </div>
      </div>
    )
  }
}

BirdItem.propTypes = {

}
