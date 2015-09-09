import React from 'react'

import './top_search_bar.less'


export default class TopSearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: ''
    }
  }

  render() {
    return (
      <div data-role="header" data-position="fixed" className="top-search-bar">
        <div className="search-group">
          <div className="search-input-wrapper">
            <input type="text"
                   className="search-input"
                   placeholder="在这里搜索鸟类"
                   value={this.state.searchText}
                   onChange={this.changeSearchText.bind(this)}/>
          </div>
          <div className="search-btn-wrapper">
            <i className="fa fa-plus"></i>
          </div>
        </div>
      </div>
    )
  }

  changeSearchText(e) {
    this.setState({searchText: e.target.value})
  }
}
