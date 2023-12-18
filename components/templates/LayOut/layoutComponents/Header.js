import  Router  from "next/router";
import React, { useState, useEffect } from "react";

function Header(props) {

  return (
    <>
      <header>
            <p className="headerTxt" onClick={()=>{Router.push('/')}}>CW BoomS</p>
      </header>
    </>
  );
}

export default Header;
