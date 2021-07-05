import React from "react";
import "./Header.css";
import { Link ,useHistory } from 'react-router-dom'

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function Header({ backButton}) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={ () => history.replace(backButton)}>
      <ArrowBackIosIcon fontSize="large" className="header_icon">

      </ArrowBackIosIcon>
      </IconButton>
      ):
              
      (
        <IconButton>
      <PersonIcon fontSize="large" className="header_icon">

      </PersonIcon>
      </IconButton>
      )}
      <Link to="/">
      <img
        src="https://pbs.twimg.com/profile_images/434578262275014656/DxU97Nxo_400x400.png"
        className="header_logo" alt="logo"
      ></img>
      </Link>
      <Link to="/chat">
      <IconButton>    
           <ForumIcon fontSize="large" className="header_icon">

      </ForumIcon>
      </IconButton>
      </Link>
 
    </div>
  );
}

export default Header;
