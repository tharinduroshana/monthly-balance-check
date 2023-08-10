import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StatementTable from "../../components/StatementTable";
import AccountSummaryPanel from "../../components/AccountSummaryPanel";
import { getTransactionsWithBalance } from "../../util/MockAPI";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen";

const ViewMonthlyStatement = () => {
  const [transactions, setTransactions] = useState(null);
  const [monthlyBalance, setMonthlyBalance] = useState(0);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    const result = await getTransactionsWithBalance();
    setTransactions(result.transactions);
    setMonthlyBalance(result.monthlyBalance);
  };

  return (
    <Container sx={{ "margin-top": "15px" }} maxWidth={false}>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            <AccountSummaryPanel monthlyBalance={monthlyBalance} />
          </Typography>
          {transactions ? (
            <StatementTable transactions={transactions} />
          ) : (
            <LoadingScreen openSpinner={!transactions} />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default ViewMonthlyStatement;
