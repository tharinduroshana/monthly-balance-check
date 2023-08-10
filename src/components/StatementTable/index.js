import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

const StatementTable = ({ transactions }) => {
  return (
    <TableContainer data-testid="statement-table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bolder" }}>ID</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>Description</TableCell>
            <TableCell sx={{ fontWeight: "bolder" }} align="right">
              Amount (€)
            </TableCell>
            <TableCell sx={{ fontWeight: "bolder" }} align="right">
              Balance (€)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(transactions || []).map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row">
                {transaction.id}
              </TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell align="right">
                {Math.abs(transaction.amount).toFixed(2)}
                {transaction.amount > 0 ? (
                  <AddCircleRoundedIcon
                    sx={{ verticalAlign: "bottom", marginLeft: "5px" }}
                    color="success"
                    fontSize="small"
                  />
                ) : (
                  <RemoveCircleRoundedIcon
                    sx={{ verticalAlign: "bottom", marginLeft: "5px" }}
                    color="error"
                    fontSize="small"
                  />
                )}
              </TableCell>
              <TableCell align="right">{transaction.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatementTable;
