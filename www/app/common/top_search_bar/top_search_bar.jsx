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
        <form className="ui-filterable search-box">
          <input id="birdFilter" data-type="search"
                 placeholder="在这里搜索鸟类"
                 value={this.state.searchText}
                 onChange={this.changeSearchText.bind(this)}/>
        </form>
      </div>
    )
  }

  changeSearchText(e) {
    this.setState({searchText: e.target.value})
  }
}
