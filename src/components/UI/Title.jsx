import { Typography } from "@mui/material";
import React from "react";


const Title = ({ title, Typoprops }) => {
  return <Typography sx={{ ...Typoprops }}>{title}</Typography>;
};

export default Title;
