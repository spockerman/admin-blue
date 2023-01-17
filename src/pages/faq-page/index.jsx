import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from "../../theme";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FaqPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frquently asked question pages'/>
            <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you need to make changes to your order after it has been placed, please contact customer service as soon as possible. Our team will do their best to accommodate your request. To track your order, you can log in to your account on our website and view the status of your shipment. Our refund policy states that all refunds must be requested within 30 days of purchase. Additionally, please note that all of our products come with a 1-year warranty. If you have any issues with your order or product, please don't hesitate to reach out to our customer service team. They will be more than happy to assist you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          If you need to make changes to your order after it has been placed, please contact customer service as soon as possible. Our team will do their best to accommodate your request. To track your order, you can log in to your account on our website and view the status of your shipment. Our refund policy states that all refunds must be requested within 30 days of purchase. Additionally, please note that all of our products come with a 1-year warranty. If you have any issues with your order or product, please don't hesitate to reach out to our customer service team. They will be more than happy to assist you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FaqPage;