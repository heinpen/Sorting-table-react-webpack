import React from 'react';
import SearchBar from './SearchBar.jsx';
import Table from './Table.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      sortDirection: {
        place: '',
        firingRate: '',
        name: '',
        score: '',
      },
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
  }

  handleSorting(dir, name) {
    this.setState({
      sortDirection: {
        [name]: `${dir}`,
      },
    });
  }

  handleFilterTextChange(text) {
    this.setState({
      filterText: text,
    });
  }

  // setUniqueId() {
  //   const { content } = this.props;
  // }

  render() {
    const { filterText, sortDirection } = this.state;
    const { content } = this.props;

    return (
      <>
        <SearchBar filterText={filterText} onFilterTextChange={this.handleFilterTextChange} />
        <Table
          onSortDirectionChange={this.handleSorting}
          sortDirection={sortDirection}
          headerContent={content[0]}
          tableContent={content}
          filterText={filterText}
        />
      </>
    );
  }
}

export default App;
