import Typography from "@mui/material/Typography";
import { Box, Modal } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const LoadingScreen = ({ openSpinner }) => {
  return (
    <Modal
      open={openSpinner}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      data-testid="loading-screen"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Fetching transactions
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <CircularProgress />
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoadingScreen;
