import { useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import style from "../../styles/Input.module.css";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import moment from "jalali-moment";

import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { useDispatch, useSelector } from "react-redux";
import {
    onChangevalue,
    showKeyboard,
} from "../../Redux/Slices/Keyboard/keyboard";
import KeyBoard from "./KeyBoard";
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
}) {
    // const { show } = useSelector((state) => state.keyboard);
    const [isTargetOpen, setIsTargetOpen] = useState(false);
    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });
    const dispatch = useDispatch();
    const triggerRef = useRef(null);

    const { inputValue } = useSelector((state) => state.keyboard);

    const onChangeInput = (event) => {
        const input = event.target.value;
        console.log(event.target.id);
        // dispatch(onChangevalue(input));
    };

    const onChangekeyboard = (input) => {
        console.log(input);
    };

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const focousHandler = (event) => {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;

        // Calculate the position of the target element to cover the entire area
        const top = triggerRect.bottom + window.scrollY;
        const left = triggerRect.left + window.scrollX;
        const width = windowWidth - triggerRect.left;
        const height = window.innerHeight - triggerRect.bottom;

        setPosition({ top, left, width, height });
        setIsTargetOpen(true);
    };
    const onBlurhandler = () => {
        setIsTargetOpen(false);
        setPosition({ top: 0, left: 0, width: 0, height: 0 });
    };

    return (
        <>
            {type === "text" ? (
                <Box
                    sx={{
                        borderRadius: "12px",
                        background: "#f2f2f2",
                        width: width,
                        height: height,
                        ...center,
                        justifyContent: "space-between",
                        p: "5px"
                    }}
                >
                    <input
                        onFocus={(e) => focousHandler(e)}
                        onBlur={() => onBlurhandler()}
                        value={value}
                        onChange={(e) => onChange(name, e.target.value)}
                        onClick={onClickHandler}
                        id={id}
                        name={name}
                        disabled={disabled}
                        style={newstyle}
                        className={style.inputMainStyle}
                        ref={triggerRef}
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
                    sx={{
                        borderRadius: "12px",
                        background: "#f2f2f2",
                        width: width,
                        height: height,
                        ...center,
                    }}
                >
                    <input
                        onFocus={(e) => focousHandler(e)}
                        onBlur={() => onBlurhandler()}
                        value={value}
                        onChange={onChange}
                        onClick={onClickHandler}
                        id={id}
                        name={name}
                        disabled={disabled}
                        style={newstyle}
                        className={style.inputMainStyle}
                        ref={triggerRef}
                        type="number"
                        // data-kioskboard-type="keyboard"
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
            ) : (
                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                    <DatePicker
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
            )}

            {/* {isTargetOpen && ( 
                <Box
                    sx={{
                        position: "fixed",
                        top: position.top + "px",
                        left: position.left + "px",
                        width: position.width + "px",
                        height: position.height + "px",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: "1000",
                    }}
                >
                    {/* <KeyBoard onChange={onChangekeyboard} type={type} /> */}
            {/* </Box> */}
            {/* // */}
        </>
    );
}
export default Input;
