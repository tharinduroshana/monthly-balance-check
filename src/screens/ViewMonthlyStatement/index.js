import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StatementTable from "../../components/StatementTable";
import AccountSummaryPanel from "../../components/AccountSummaryPanel";

const ViewMonthlyStatement = () => {
  return (
    <Container sx={{ "margin-top": "15px" }} maxWidth={false}>
        <Card>
            <CardContent>
                <Typography variant="subtitle1" component="div">
                    <AccountSummaryPanel />
                </Typography>
                <StatementTable />
            </CardContent>
        </Card>
    </Container>
  );
};

export default ViewMonthlyStatement;
