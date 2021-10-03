import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import TableRow from './TableRow.jsx';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.sortControlling = this.sortControlling.bind(this);
  }

  sorting(dir, sortBy) {
    const { tableContent } = this.props;

    // Put only column of values that user clicked to sort in array.
    // Then sort that array.
    const valuesForSorting = tableContent.map((obj) => obj[sortBy]);
    if (sortBy === 'name' && dir === 'up') {
      if (dir === 'up') {
        valuesForSorting.sort();
      } else {
        valuesForSorting.reverse();
      }
    } else if (sortBy !== 'name' && dir === 'down') {
      valuesForSorting.sort((a, b) => b - a);
    } else {
      valuesForSorting.sort((a, b) => a - b);
    }

    // Create new content of table according to that sorted array.
    this.sortedData = tableContent.map((obj, index) => {
      for (let i = 0; i < tableContent.length; i++) {
        if (tableContent[i][sortBy] === valuesForSorting[index]) {
          return tableContent[i];
        }
      }
      return false;
    });
  }

  sortControlling(e) {
    const { sortDirection, onSortDirectionChange } = this.props;
    // Check pressed key.
    if (e.code !== undefined && e.code !== 'Enter') {
      return;
    }
    const { id } = e.target;

    e.preventDefault();
    if (sortDirection[id] === 'down') {
      onSortDirectionChange('up', `${id}`);
      this.sorting('up', `${id}`);
    } else {
      onSortDirectionChange('down', `${id}`);
      this.sorting('down', `${id}`);
    }
  }

  render() {
    const { tableContent, filterText } = this.props;
    const renderContent = this.sortedData ?? tableContent;

    const rows = renderContent.map((row) => {
      const id = uuidv4();
      console.log(id);
      return (<TableRow row={row} filterText={filterText} key={id} />);
    });

    const thIdArray = ['place', 'name', 'firingRate', 'score'];
    const thContentArray = ['Place', 'Name', 'Firing Rate', 'Score'];

    return (
      <table className="sort-table">
        <thead>
          <tr>
            {thIdArray.map((id, i) => (
              <th
                onClick={this.sortControlling}
                onKeyPress={this.sortControlling}
                tabIndex="0"
                key={id}
                id={id}
              >
                {thContentArray[i]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Table;
