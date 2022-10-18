import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./Navbar.css";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AccountCircle } from "@material-ui/icons";

const pages = ["Home", "Produtos", "Sobre nos", "Contato"];
const settings = ["Meu Perfil", "Logout", "Cadastrar Produtos"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  return (
    <AppBar position="sticky">
      <Box style={{backgroundColor:'#c19158'}} >
        <Toolbar disableGutters>
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" }
            }}
          >
            <img
              src="https://i.imgur.com/UDBIW93.png"
              alt="Logo tribo artesão"
              width="35%"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography id="decorButton"  textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography 
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" }
            }}
          >
            <img
              src="https://i.imgur.com/UDBIW93.png"
              alt="Logo tribo artesão"
              width="40%"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            <IconButton>
                <FavoriteOutlinedIcon />
              </IconButton>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              </IconButton>{" "}
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
           


            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} style={{display:'block'}}>
                  <Typography textAlign="center" >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import React from "react";
// import {
//   createStyles,
//   makeStyles,
//   Theme,
//   withStyles,
// } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import Button from "@material-ui/core/Button";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Badge from "@material-ui/core/Badge";
// import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
// import { Link, useNavigate } from "react-router-dom";
// import { height } from "@mui/system";
// import { useDispatch, useSelector } from "react-redux";
// import { TokenState } from "../../../store/tokens/TokensReducer";
// import { addToken } from "../../../store/tokens/Actions";
// import { toast } from "react-toastify";
// import { Avatar } from "@material-ui/core";

// ANTTIGOS IMPORTS

// const da antiga navbar
// const StyledBadge = withStyles((theme: Theme) =>
//   createStyles({
//     badge: {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: "0 4px",
//     },
//   })
// )(Badge);

// const useButton = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& > *": {
//         margin: theme.spacing(1),
//       },
//     },
//   })
// );

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   })
// );

// export default function Navbar() {

// FUNCOES ANTIGA NAVBAR
// let navigate = useNavigate();
// const token = useSelector<TokenState, TokenState["tokens"]>(
//   (state) => state.tokens
// );

// const dispatch = useDispatch();

// function goLogout() {
//   dispatch(addToken(""));
//   toast.info("Logout efetuado com sucesso!!", {
//     position: "top-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: false,
//     theme: "colored",
//     progress: undefined,
//   });
//   navigate("/login");
// }

// const classes = useStyles();
// const button = useButton();
// const [auth, setAuth] = React.useState(true);
// const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// const open = Boolean(anchorEl);

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setAuth(event.target.checked);
// };

// const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleClose = () => {
//   setAnchorEl(null);
// };

// return (

// NAVBAR ANTIGA
// <div className={classes.root}>
//   <FormGroup></FormGroup>
//   <AppBar
//     position="sticky"
//     style={{ backgroundColor: "#c19158", margin: "0%", width:'100%' }}
//   >
//     <Toolbar>

//       {/*<IconButton
//         edge="start"
//         className={classes.menuButton}
//         color="inherit"
//         aria-label="menu"
//       ></IconButton>*/}

//       <Typography className="logo">
//         <img
//           src="https://i.imgur.com/UDBIW93.png"
//           alt="Logo tribo artesão"
//           width="40%"
//         />
//       </Typography>
//       <nav>
//       <ul className="stileul">
//         <li className="stileli">
//           <a>
//             <Link to="/home" className="tdn">
//               <Button
//                 id="decorButton"
//                 variant="outlined"
//                 border-color="#fafafa"
//               >
//                 Home
//               </Button>
//             </Link>
//           </a>
//         </li>
//         <li className="stileli">
//           <a>
//             <Link to="/produtos" className="tdn">
//               <Button
//                 id="decorButton"
//                 variant="outlined"
//                 border-color="#fafafa"
//               >
//                 Produtos
//               </Button>
//             </Link>
//           </a>
//         </li>
//         <li className="stileli">
//           <a>
//             <Link to="/sobre" className="tdn">
//               <Button
//                 id="decorButton"
//                 variant="outlined"
//                 border-color="#fafafa"
//               >
//                 Sobre nós
//               </Button>
//             </Link>
//           </a>
//         </li>
//         <li className="stileli">
//           <a>
//             <Link to="/contato" className="tdn">
//               <Button
//                 id="decorButton"
//                 variant="outlined"
//                 border-color="#fafafa"
//               >
//                 Contato
//               </Button>
//             </Link>
//           </a>
//         </li>
//       </ul>
//       </nav>
//       {auth && (
        // <section className="icons">
        //   <IconButton>
        //     <FavoriteOutlinedIcon />
        //   </IconButton>
        //   <IconButton>
        //     <ShoppingCartIcon />
        //   </IconButton>
        //   <IconButton
        //     aria-label="account of current user"
        //     aria-controls="menu-appbar"
        //     aria-haspopup="true"
        //     onClick={handleMenu}
        //     color="inherit"
        //   >
        //     <AccountCircle />
        //   </IconButton>{" "}
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorEl}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={open}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
//             <MenuItem onClick={goLogout}>Logout</MenuItem>
//             <Link to="/atualizarProduto" className="tdn">
//             <MenuItem>Cadastrar Produtos</MenuItem>
//             </Link>
//           </Menu>
//         </section>
//       )}
//     </Toolbar>
//   </AppBar>
// </div>
//   );
// }
