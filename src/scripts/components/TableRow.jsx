function TableRow(props) {
  const { row, filterText } = props;
  const properOrder = ['place', 'name', 'firingRate', 'score'];
  const cells = [];

  let unsuitable = false;
  if (filterText) {
    const lowerCaseStat = row.name.toLowerCase();
    const lowerCaseFilterText = filterText.toLowerCase();
    lowerCaseStat.indexOf(lowerCaseFilterText) === -1
      ? (unsuitable = true)
      : (unsuitable = false);
  }

  properOrder.forEach((name) => {
    cells.push(<td key={name}>{row[name]}</td>);
  });
  return unsuitable === false ? <tr>{cells}</tr> : '';
}

export default TableRow;
