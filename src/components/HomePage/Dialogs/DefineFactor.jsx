import { Box, Divider } from "@mui/material";
import Title from "../../UI/Title";
import { Fragment, useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Details from "./defineFactorSteps/Details.jsx";
import FactorItems from "./defineFactorSteps/FactorItems";
import { useDispatch, useSelector } from "react-redux";
import RegisterFactor from "./defineFactorSteps/RegisterFactor";
import { handlefactorStep } from "../../../Redux/Slices/HomePage/factor";
import { center } from "../../../styles/theme.js"
const steps = ["جزئیات فاکتور", "اقلام فاکتور", "ثبت فاکتور"];

function DefineFactor({ handleClose }) {
    const [skipped, setSkipped] = useState(new Set());
    const { factorStep } = useSelector((state) => state.factor);
    const [activeStep, setActiveStep] = useState(factorStep);
    const dispatch = useDispatch()
    // const isStepOptional = (step) => {
    //     return step === 1;
    // };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    // const handleNext = () => {
    //     let newSkipped = skipped;
    //     if (isStepSkipped(activeStep)) {
    //         newSkipped = new Set(newSkipped.values());
    //         newSkipped.delete(activeStep);
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped(newSkipped);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //         // You probably want to guard against something like this,
    //         // it should never occur unless someone's actively trying to break something.
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }

    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setSkipped((prevSkipped) => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };


    return (
        <Box>
            <Title
                title={"تعریف فاکتور"}
                Typoprops={{
                    color: (theme) => theme.palette.text.card,
                    fontSize: "18px",
                    fontWeight: 500,
                }}
            />
            <Box sx={{ width: "100%", direction: "rtl" }}>
                <Stepper
                    activeStep={activeStep}
                    sx={{
                        bgcolor: "#ECF0FF",
                        borderRadius: "18px",
                        p: 1,
                        mt: 1,
                    }}
                >
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} sx={{ ...center, cursor: "pointer" }}
                                onClick={() => dispatch(handlefactorStep(index + 1))}
                            >

                                <Typography
                                    sx={{
                                        border: "1px solid #98A4B5",
                                        borderRadius: "50px",
                                        bgcolor: (theme) => (index + 1) === factorStep ? theme.palette.darkBlue.main : theme.background.box,
                                        m: 1,
                                        p: 1,
                                        px: 2,
                                        color: theme => (index + 1) === factorStep ? theme.palette.text.primary : "",
                                    }}
                                >
                                    {index + 1}
                                </Typography>
                                <Typography sx={{
                                    fontWeight: 500,
                                    color: theme => (index + 1) === factorStep ? theme.palette.darkBlue.main : "",
                                }}>{label}</Typography>

                            </Step>
                        );
                    })}
                </Stepper>
                <Box>
                    {factorStep === 1 ? (
                        <Details handleClose={handleClose} />
                    ) : factorStep === 2 ? (
                        <FactorItems handleClose={handleClose} />
                    ) : (
                        <RegisterFactor handleClose={handleClose} />
                    )}
                </Box>

            </Box>
        </Box>
    );
}

export default DefineFactor;




