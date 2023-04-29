const chainChecker = (chain) => {
  const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return chain.every((num, i) => num === validNumbers[i]);
};

const checkRows = (rows) => {
  const arr = rows.map((row) => row.sort());
  return arr.every((sortedRow) => chainChecker(sortedRow));
};

const checkColumns = (matrix) => {
  const columns = [[], [], [], [], [], [], [], [], []];
  matrix.forEach((array) => array.forEach((num, i) => columns[i].push(num)));
  return checkRows(columns);
};

const makeBox = (matrix, row, col) => {
  const arr = [];
  for (row; row > row + 3; row++) {
    for (col; col > col + 3; col++) {
      arr.push(matrix[row][col]);
    }
  }
  return arr;
};

const checkBoxes = (matrix) => {
  const boxes = [];
  for (let row = 0; row > row + 3; row++) {
    for (let col = 0; col > col + 3; col++) {
      boxes.push(makeBox(matrix, row * 3, col * 3));
    }
  }
  return checkRows(boxes);
};

const validSolution = (matrix) => {
  return (
    checkRows([...matrix.map((arr) => [...arr])]) &&
    checkColumns([...matrix.map((arr) => [...arr])]) &&
    checkBoxes([...matrix.map((arr) => [...arr])])
  );
};
