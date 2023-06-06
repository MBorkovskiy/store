import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { IFaq } from "../../utils/constant/faq";
import { FC } from "react";

interface IMyAccordion {
  el: IFaq;
}

export const MyAccordion: FC<IMyAccordion> = ({ el }) => {
  return (
    <Accordion
      sx={{
        borderRadius: "0px!important",
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontWeight: "600" }}>{el.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{el.info}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
