import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { height } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import { toast } from "react-toastify";
import { Avatar } from "@material-ui/core";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  })
)(Badge);

const useButton = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Navbar() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Logout efetuado com sucesso!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/login");
  }

  const classes = useStyles();
  const button = useButton();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <FormGroup></FormGroup>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#c19158", margin: "0%", width:'100%' }}
      >
        <Toolbar>
          
          {/*<IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>*/}
          
          <Typography className="logo">
            <img
              src="https://i.imgur.com/UDBIW93.png"
              alt="Logo tribo artesão"
              width="40%"
            />
          </Typography>
          <nav>
          <ul className="stileul">
            <li className="stileli">
              <a>
                <Link to="/home" className="tdn">
                  <Button
                    id="decorButton"
                    variant="outlined"
                    border-color="#fafafa"
                  >
                    Home
                  </Button>
                </Link>
              </a>
            </li>
            <li className="stileli">
              <a>
                <Link to="/produtos" className="tdn">
                  <Button
                    id="decorButton"
                    variant="outlined"
                    border-color="#fafafa"
                  >
                    Produtos
                  </Button>
                </Link>
              </a>
            </li>
            <li className="stileli">
              <a>
                <Link to="/sobre" className="tdn">
                  <Button
                    id="decorButton"
                    variant="outlined"
                    border-color="#fafafa"
                  >
                    Sobre nós
                  </Button>
                </Link>
              </a>
            </li>
            <li className="stileli">
              <a>
                <Link to="/contatos" className="tdn">
                  <Button
                    id="decorButton"
                    variant="outlined"
                    border-color="#fafafa"
                  >
                    Contato
                  </Button>
                </Link>
              </a>
            </li>
          </ul>
          </nav>
          {auth && (
            <section className="icons">
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
                <AccountCircle />
              </IconButton>{" "}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
                <MenuItem onClick={goLogout}>Logout</MenuItem>
              </Menu>
            </section>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
