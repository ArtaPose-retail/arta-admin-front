import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import logo from "../../Assets/images/logo.png";
const drawerWidth = 328;
import { menuData } from "../../utils/data";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Avatar, Collapse } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import reactRouts from "../../utils/reactRouts";
import profile from "../../Assets/images/profileImage.png";
import { center } from "../../styles/theme";
import { checkAccess } from "../../utils/setting";
import { useDispatch, useSelector } from "react-redux";
import { resetLoginInfo } from "../../Redux/Slices/Auth/auth";
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),

    overflowX: "hidden",
    width: `calc(${theme.spacing(8)} + 30px)`,

    display: "flex",
    flexDirection: "column",

    alignItems: "center",
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    display: "flex",

    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function SideBar() {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const profilehandler = () => {
        navigate(reactRouts.auth.signIn);
    };

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const [openSubItems, setOpenSubItems] = useState({});

    const handleSubItemClick = (itemTitle) => {
        setOpenSubItems((prevState) => ({
            [itemTitle]: !prevState[itemTitle],
        }));
        setOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (open && !event.target.closest("#sidebarDrawer")) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    const { UserInfo } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const LogOutHandler = () => {
        console.log("gere")
        localStorage.removeItem("TOKEN")
        localStorage.removeItem("persist:root")
        dispatch(resetLoginInfo())
        navigate(reactRouts.auth.signIn)
    }

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <Drawer id="sidebarDrawer" variant="permanent" open={open} anchor="right">
                <DrawerHeader sx={{ mt: 2, ...center }}>
                    <IconButton onClick={handleDrawerOpen}>
                        <img src={logo} style={{ width: 80, height: 60 }} />
                    </IconButton>
                </DrawerHeader>

                {menuData.map((item, index) => (

                    checkAccess(item.RoleAccess) && <List
                        key={index}
                        dir="rtl"
                        sx={{
                            ...center,
                            flexDirection: "column",
                            width: "100%",
                            mt: 4,
                            p: 1,
                            alignItems: open ? "flex-start" : "center",

                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton
                            id="ListItemButton"
                            onClick={() => handleSubItemClick(item.title)}
                            sx={{
                                ...center,
                                borderRadius: (theme) => theme.shape.borderRadius,
                            }}
                        >
                            <ListItemIcon sx={{ ...center, flexDirection: "column" }}>
                                {item.icon}
                            </ListItemIcon>
                            {open && (
                                <Link to={item?.path}>
                                    <Typography
                                        id="ListItemText"
                                        sx={{
                                            color: (theme) => theme.palette.icon.primary,
                                            fontSize: "20px",
                                            fontWeight: "400 ",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Link>
                            )}
                            {open &&
                                (item.hasSubItem ? (
                                    openSubItems[item.title] ? (
                                        <ExpandLess
                                            sx={{ fill: (theme) => theme.palette.icon.primary }}
                                        />
                                    ) : (
                                        <ExpandMore
                                            sx={{ fill: (theme) => theme.palette.icon.primary }}
                                        />
                                    )
                                ) : (
                                    ""
                                ))}
                        </ListItemButton>
                        {open && (
                            <Collapse
                                in={openSubItems[item.title]}
                                timeout="auto"
                                unmountOnExit
                                sx={{ width: "100%" }}
                            >
                                {item?.subItems?.map((subitem, index) => (
                                    <List
                                        key={index}
                                        sx={{
                                            ...center,
                                            justifyContent: "flex-start",
                                            mr: 3,
                                            gap: "15px",
                                            my: 2,
                                            width: "100%",
                                        }}
                                        component="div"
                                        disablePadding
                                    >

                                        <Link to={subitem?.path}>
                                            <Typography
                                                sx={{
                                                    color: (theme) => theme.palette.text.secondary,
                                                    fontSize: "18px",
                                                    fontWeight: "normal ",
                                                    mr: 2,
                                                }}
                                            >
                                                {subitem.title}
                                            </Typography>
                                        </Link>

                                    </List>
                                ))}
                                <Divider component="li" variant="inset" />
                            </Collapse>
                        )}
                    </List>

                ))}

                <List
                    dir="rtl"
                    sx={{
                        ...center,
                        flexDirection: "column",
                        width: "100%",
                        mt: 4,
                        p: 1,
                        alignItems: open ? "flex-start" : "center",

                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton
                        id="ListItemButton"
                        // onClick={() => handleSubItemClick(item?.title)}
                        sx={{
                            ...center,
                            borderRadius: (theme) => theme.shape.borderRadius,
                        }}
                    >
                        <ListItemIcon sx={{ ...center, flexDirection: "column" }}>
                            <Avatar
                                alt="ARTA-POSE"
                                src={profile}
                                onClick={() => profilehandler()}
                                sx={{
                                    bgcolor: "#41669A",
                                    width: 50,
                                    height: 50,

                                    ...center,
                                    cursor: "pointer",
                                    "& .MuiAvatar-img": {
                                        width: "60%",
                                        height: "80%",
                                    },
                                }}
                            />
                        </ListItemIcon>
                        {open && (
                            <Typography
                                id="ListItemText"
                                sx={{
                                    color: (theme) => theme.palette.icon.primary,
                                    fontSize: "20px",
                                    fontWeight: "400 ",
                                    ...center,
                                }}
                            >
                                {UserInfo.fname}{UserInfo.lname}
                            </Typography>
                        )}
                    </ListItemButton>
                    <ListItemButton
                        id="ListItemButton"
                        // onClick={() => handleSubItemClick(item?.title)}
                        sx={{
                            ...center,
                            borderRadius: (theme) => theme.shape.borderRadius,
                        }}
                    >
                        <ListItemIcon sx={{ ...center, flexDirection: "column" }}>
                            <LogoutIcon
                                onClick={() => LogOutHandler()}
                                sx={{
                                    m: 2,

                                    fill: (theme) => theme.palette.warning.main,
                                }}
                            />
                        </ListItemIcon>
                        {open && (
                            <Typography
                                id="ListItemText"
                                sx={{
                                    color: (theme) => theme.palette.warning.main,
                                    fontSize: "20px",
                                    fontWeight: "400 ",
                                }}
                            >
                                خروج
                            </Typography>
                        )}
                    </ListItemButton>
                </List>
            </Drawer>
        </Box>
    );
}

//TOdo=>change scroll bar ui
