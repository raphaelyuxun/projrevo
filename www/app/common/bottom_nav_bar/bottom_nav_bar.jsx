import React from 'react'

import './bottom_nav_bar.less'

export default class BottomNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div data-role="footer" data-position="fixed" className="bottom-navbar">
        <div className={'nav-btn ' + (this.props.selected === 'home' ? 'selected' : '')}>
          <i className="fa fa-book"></i>
        </div>
        <div className={'nav-btn ' + (this.props.selected === 'discovery' ? 'selected' : '')}>
          <i className="fa fa-safari"></i>
        </div>
        <div className={'nav-btn ' + (this.props.selected === 'comments' ? 'selected' : '')}>
          <i className="fa fa-commenting"></i>
        </div>
        <div className={'nav-btn ' + (this.props.selected === 'profile' ? 'selected' : '')}>
          <i className="fa fa-user"></i>
        </div>
      </div>
    )
  }
}

BottomNavBar.propTypes = {
  selected: React.PropTypes.string
}
