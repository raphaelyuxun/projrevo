import React from 'react'

import './top_nav_bar.less'

export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={"top-navbar" + (this.props.transparent ? ' transparent' : '')}>
        <div className="back-btn">
          <i className="fa fa-chevron-left"></i>
        </div>
        {this.props.transparent ? null : <div className="page-name"> {this.props.pageName} </div>}
      </div>
    )
  }
}

TopNavBar.propTypes = {
  pageName: React.PropTypes.string,
  transparent: React.PropTypes.bool
}
