import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    const { onFilterTextChange } = this.props;
    onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <input
        className="my-input"
        type="text"
        id="my-input"
        placeholder="Search for names.."
        title="Type in a name"
        onChange={this.handleFilterTextChange}
      />
    );
  }
}

export default SearchBar;
