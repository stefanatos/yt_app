import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className=' search-bar ui segment'>
        <form
          action=''
          className='ui form'
          onSubmit={e => this.onSubmitHandler(e)}
        >
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
