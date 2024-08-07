import { Box } from "@mui/material";
import React from "react";
import { keyboardLatter, keyboardnumber } from "../../utils/data";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
function KeyBoard({ onChange, onKeyPress, keyboardRef, type }) {
    return (
        <Box sx={{ width: "70%" }}>
            {type === "text" ? (
                <Keyboard
                    // keyboardRef={(r) => (keyboardRef.current = r)}
                    onChange={onChange}
                    // onKeyPress={onKeyPress}
                    theme={"hg-theme-default hg-layout-default myTheme"}
                    layoutName={"default"}
                    layout={{
                        default: keyboardLatter,
                    }}
                    buttonTheme={[
                        {
                            class: "hg-red",
                            buttons: "Q W E R T Y q w e r t y",
                        },
                        {
                            class: "hg-highlight",
                            buttons: "Q q",
                        },
                    ]}
                />
            ) : (
                <Keyboard
                    // keyboardRef={(r) => (keyboard.current = r)}
                    onChange={onChange}
                    // onKeyPress={onKeyPress}
                    theme={"hg-theme-default hg-layout-numeric numeric-theme"}
                    layoutName={"default"}
                    layout={{
                        default: keyboardnumber,
                    }}
                    buttonTheme={[
                        {
                            class: "hg-red",
                            buttons: "Q W E R T Y q w e r t y",
                        },
                        {
                            class: "hg-highlight",
                            buttons: "Q q",
                        },
                    ]}
                />
            )}
        </Box>
    );
}

export default KeyBoard;
