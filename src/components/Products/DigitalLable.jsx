import React, { useState } from "react";
import Title from "../UI/Title";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { center } from "../../styles/theme";
import profile from "../../Assets/images/Fruits/fruits.svg";
import { digitalLable } from "../../utils/data";
import { useDispatch, useSelector } from "react-redux";
import {
  addProd,
  editProd,
  resetPRInfo,
  setMetaData,
} from "../../Redux/Slices/Accounting/Products/product";

function DigitalLable({ handlerCloseDialog, type, id }) {
  const [img, setImg] = useState(null);
  const handlerUploadImg = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  const dispatch = useDispatch();
  const { newProduct } = useSelector((state) => state.product);

  const submitHandler = () => {
    if (type == "edit") {
      dispatch(editProd(id))
      handlerCloseDialog();
    } else {
      dispatch(addProd());
      handlerCloseDialog();
    }
    dispatch(resetPRInfo());
    dispatch(setMetaData());

  };
  return (
    <>
      <Title
        title={"جزییات لیبل دیجیتال"}
        Typoprops={{
          fontSize: "20px",
          fontWeight: "600",
        }}
      />
      <Box sx={{ ...center, flexDirection: "column", gap: "5px" }}>
        <Avatar
          alt="ARTA-POSE"
          src={img ?? profile}
          sx={{
            bgcolor: "#41669A",
            width: 60,
            height: 60,

            ...center,
            cursor: "pointer",
            "& .MuiAvatar-img": {
              width: "60%",
              height: "80%",
            },
          }}
        />

        <Button
          sx={{
            bgcolor: (theme) => theme.palette.darkBlue.main,
            color: (theme) => theme.palette.text.primary,
          }}
          variant="contained"
          component="label"
        >
          اپلود عکس محصول
          <input type="file" hidden onChange={(e) => handlerUploadImg(e)} />
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ p: 1, mt: 1 }}>
        {digitalLable?.map((item, index) => (
          <Grid item xs={3} key={index}>
            <InputLabel>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: item.color,
                }}
              >
                {item.lable}
              </Typography>
            </InputLabel>
            <TextField
              value={newProduct.meta[item.name]}
              onChange={(e) =>
                dispatch(
                  setMetaData({
                    key: item.name,
                    value: e.target.value,
                  })
                )
              }
              name={item.name}
              id={item.name}
              fullWidth
              sx={{
                "& .MuiNativeSelect-select": {
                  color: "black",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                borderRadius: "18px",
              }}
              select={item.select}
              inputProps={{
                style: {
                  background: "#F2F2F2",
                  color: "#000",
                  direction: "ltr",
                  borderRadius: "18px",
                  width: "100%",
                },
              }}
            >
              {item.select &&
                item?.options?.map((option, index) => (
                  <option key={index} value={option.value}>
                    <Typography sx={{ fontSize: "12px", color: "black" }}>
                      {option.title}
                    </Typography>
                  </option>
                ))}
            </TextField>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          ...center,
          mt: 1,
          gap: "15px",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ ...center, gap: "5px" }}>
          <Button
            onClick={submitHandler}
            variant="contained"
            sx={{
              bgcolor: (theme) => theme.palette.green.main,
              color: (theme) => theme.palette.text.primary,
              px: 5,
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            ذخیره
          </Button>
          <Button
            onClick={() => {
              dispatch(resetPRInfo());
            }}
            variant="contained"
            sx={{
              bgcolor: "#F90",
              color: (theme) => theme.palette.text.primary,
              px: 4,
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            پاکسازی فرم
          </Button>
        </Box>

        <Button
          onClick={() => {
            dispatch(resetPRInfo());
            handlerCloseDialog();
          }}
          variant="contained"
          sx={{
            bgcolor: (theme) => theme.palette.warning.main,
            color: (theme) => theme.palette.text.primary,
            px: 4,
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          انصراف
        </Button>
      </Box>
    </>
  );
}

export default DigitalLable;
