import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router";


export default function AccordionExpand() {
    return (
        <div className="container flex flex-col justify-center items-center py-2">
            <h1 className="text-center text-3xl pb-2 ">Save Tension</h1>
            <Accordion className="w-xl" sx={{mt: 3}}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">What is Save Tension Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="justify">
                        Quickly record your blood pressure data and download it to your computer and/or phone later
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion className="w-xl" sx={{my: 2}}>
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">How it Works</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography align="justify">
                        After filling in the required information in the Content section, the information will be saved. You can delete or edit as needed. You can access the content section here <Link to="/content">Content</Link> <Link to="/showing-tension">Showing Tension</Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
