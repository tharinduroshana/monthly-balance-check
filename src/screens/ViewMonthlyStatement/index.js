import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ViewMonthlyStatement = () => {
  return (
    <Container sx={{ "margin-top": "15px" }} maxWidth={false}>
        <Card>
            <CardContent>
                <Typography variant="subtitle1" component="div" align="right">
                    Monthly Balance:
                </Typography>
            </CardContent>
        </Card>
    </Container>
  );
};

export default ViewMonthlyStatement;
