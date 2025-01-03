import { useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";
import style from "../../styles/Input.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
    options,
    onIconClick,
    onKeyDown
}) {


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
                        border: disabled ? "1px solid red" : "",
                    }}
                >
                    <input
                        onKeyDown={onKeyDown}
                        value={value}
                        onChange={(e) => onChange(name, e.target.value, type)}
                        onClick={onClickHandler}
                        id={id}
                        name={name}
                        disabled={disabled}
                        style={newstyle}
                        className={style.inputMainStyle}
                        type="text"
                        placeholder={disabled ? "غیر فعال" : placeholder}
                    />
                    {hasIcon &&
                        (icon !== "search" ? (
                            <Box sx={{ cursor: "pointer" }} onClick={onIconClick} >

                                {children}
                            </Box>
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
                        border: disabled ? "1px solid red" : "",
                    }}
                >
                    <input
                        value={value}
                        onChange={(e) => onChange(name, e.target.value, type)}
                        onClick={onClickHandler}
                        id={id}
                        name={name}
                        disabled={disabled}
                        style={newstyle}
                        className={style.inputMainStyle}
                        type="number"
                        placeholder={disabled ? "غیر فعال" : placeholder}
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
                        value={new Date(value)}
                        onChange={(e) => onChange(name, e, type)}
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

                    />
                </LocalizationProvider>
            ) : (
                <TextField
                    value={value}
                    name={name}
                    id={id}
                    fullWidth
                    onChange={(e) => onChange(name, e.target.value, type)}
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
                    {options?.map((option, index) => (
                        <option key={index} value={option.value}>
                            <Typography sx={{ fontSize: "12px", color: "black" }}>
                                {option.title}
                            </Typography>
                        </option>
                    ))}
                </TextField>
            )}
        </>
    );
}
export default Input;
