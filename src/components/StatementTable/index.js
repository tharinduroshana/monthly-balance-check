import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, date, description, amount, balance) {
    return { id, date, description, amount, balance };
}

//Dummy data
const rows = [
    createData('1', 159, 6.0, 24, 4.0),
    createData('2', 237, 9.0, 37, 4.3),
    createData('3', 262, 16.0, 24, 6.0),
    createData('4', 305, 3.7, 67, 4.3),
    createData('5', 356, 16.0, 49, 3.9),
];

const StatementTable = () => {
  return (
      <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="right">Date</TableCell>
                      <TableCell align="right">Description</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Balance</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                      <TableRow
                          key={row.name}
                      >
                          <TableCell component="th" scope="row">
                              {row.id}
                          </TableCell>
                          <TableCell align="right">{row.date}</TableCell>
                          <TableCell align="right">{row.description}</TableCell>
                          <TableCell align="right">{row.amount}</TableCell>
                          <TableCell align="right">{row.balance}</TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
  );
}

export default StatementTable;