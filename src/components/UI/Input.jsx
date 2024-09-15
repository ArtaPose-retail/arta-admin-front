import { useRef, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import style from "../../styles/Input.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "jalali-moment";

import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";


import { center } from "../../styles/theme";

function Input({
    type,
    placeholder,
    newstyle,
    disabled,
    name,
    id,
    hasIcon,
    hasText,
    icon,
    onClickHandler,
    width,
    height,
    value,
    onChange,
    children,
    options
}) {


    const onChangeInput = (event) => {
        const input = event.target.value;
        console.log(event.target.id);
    };

    const onChangekeyboard = (input) => {
        console.log(input);
    };




    const boxRef = useRef(null);

    const handleFocus = () => {
        if (boxRef.current) {
            boxRef.current.style.border = "1px solid blue"; // Apply the border style
        }
    };

    const handleBlur = () => {
        if (boxRef.current) {
            boxRef.current.style.border = "none"; // Reset the border style
        }
    };



    return (
        <>
            {type === "text" ? (
                <Box
                    ref={boxRef}
                    onFocus={handleFocus}
                    onClick={handleFocus}
                    onBlur={handleBlur}
                    sx={{
                        borderRadius: "12px",
                        background: "#f2f2f2",
                        width: width,
                        height: height,
                        ...center,
                        justifyContent: "space-between",
                        p: "5px",
                    }}
                >
                    <input
                        value={value}
                        onChange={(e) => onChange(name, e.target.value)}
                        onClick={onClickHandler}
                        id={id}
                        name={name}
                        disabled={disabled}
                        style={newstyle}
                        className={style.inputMainStyle}

                        type="text"
                        placeholder={placeholder}
                    />
                    {hasIcon &&
                        (icon !== "search" ? (

                            children
                        ) : (
                            <SearchIcon
                                sx={{
                                    ml: 1,
                                }}
                            />
                        ))}
                </Box>
            ) : type === "number" ? (
                <Box
                    ref={boxRef}
                    onFocus={handleFocus}
                    onClick={handleFocus} // Also trigger on click
                    onBlur={handleBlur}
                    sx={{
                        borderRadius: "12px",
                        background: "#f2f2f2",
                        width: width,
                        p: "5px",
                        height: height,
                        ...center,
                    }}
                >
                    <input

                        value={value}
                        onChange={onChange}
                        onClick={onClickHandler}
                        id={id}
                        name={name}
                        disabled={disabled}
                        style={newstyle}
                        className={style.inputMainStyle}
                        type="number"
                        placeholder={placeholder}
                    />

                    {hasText && (
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.divider,
                                fontSize: "12px",
                                fontWeight: 900,
                            }}
                        >
                            ریال
                        </Typography>
                    )}
                </Box>
            ) : type === "date" ? (
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DatePicker
                        onChange={onChange}
                        onClick={onClickHandler}
                        disabled={disabled}
                        aria-invalid="false"
                        className="datePicker2"
                        sx={{
                            height: height,
                            width: "100%",
                            "& .MuiNativeSelect-select": {
                                color: "black",
                                borderColor: "white",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            borderRadius: "12px",
                            bgcolor: "#F2F2F2",
                        }}
                        slotProps={{
                            layout: {
                                sx: {
                                    ".MuiDateCalendar-root": {
                                        color: "#1565c0",
                                        borderRadius: 1,
                                        borderWidth: 0,
                                        // borderColor: '#000',
                                        border: "0px solid",
                                        backgroundColor: "white",
                                    },
                                    ".MuiDayCalendar-weekDayLabel": {
                                        color: "white",
                                        borderRadius: 2,
                                        borderWidth: 0,
                                        background: (theme) => theme.palette.primary.main,
                                    },
                                    ".MuiPickersDay-root": {
                                        color: "black",
                                        borderRadius: 0,
                                        borderWidth: 0,
                                    },
                                },
                            },
                        }}
                        defaultValue={moment(new Date(), "YYYY-MM-DD")
                            .locale("fa")
                            .format(" D MMMM YYYY")}
                    />
                </LocalizationProvider>
            ) : <TextField
                // value={formInformation[item.name]}
                name={name}
                id={id}
                fullWidth
                onChange={onChange}
                onClick={onClickHandler}
                sx={{
                    "& .MuiNativeSelect-select": {
                        color: "black",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    borderRadius: "18px",
                }}
                select={type}
                inputProps={{
                    style: {
                        background: "#F2F2F2",
                        color: "#000",
                        direction: "ltr",
                        borderRadius: "18px",
                    },
                }}
                SelectProps={{
                    native: true,
                    style: {
                        background: "#F2F2F2",
                        color: "#000",
                        direction: "ltr",
                        borderRadius: "18px",
                    },

                    // startAdornment: (
                    //     <>
                    //         {item.hasIcon && (
                    //             <InputAdornment position="start">
                    //                 {item.name == "unit" ? <AddNewUnits />
                    //                     : <AddNewProductType />}
                    //             </InputAdornment>
                    //         )}
                    //     </>
                    // ),
                }}
            >
                {
                    options?.map((option, index) => (
                        <option key={index} value={option.value}>
                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                {option.title}
                            </Typography>
                        </option>
                    ))}

            </TextField>}


        </>
    );
}
export default Input;
