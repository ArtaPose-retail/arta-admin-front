import { Box } from "@mui/material";


import { useDispatch, useSelector } from "react-redux";
import {
    onChangevalue,
    showKeyboard,
} from "../../Redux/Slices/Keyboard/keyboard";

export default function Input2() {
    const dispatch = useDispatch();

    const { inputValue } = useSelector((state) => state.keyboard);

    const onChangeInput = (event) => {
        const input = event.target.value;

        dispatch(onChangevalue(input));
    };

    return (
        <Box sx={{ width: "100%" }}>
            <input
                onFocus={() => dispatch(showKeyboard(true))}
                onBlur={() => dispatch(showKeyboard(false))}
                value={inputValue}
                placeholder={"Tap on the virtual keyboard to start"}
                onChange={onChangeInput}
            />

        </Box>
    );
}
