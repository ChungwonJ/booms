import Guide from "@/pages/Modal/Guide";
import  Router  from "next/router";
import React, { useState, useEffect } from "react";

function Header(props) {
const [modal , setModal] = useState(false)
  return (
    <>
      <header>
            <p 
                className="headerTxt" 
                onClick={()=>{Router.push('/')}}
            >
                CW BoomS
            </p>
            <p className="guide" onClick={()=>{setModal(true)}}>
                게임가이드
            </p>
      </header>
      {modal && <Guide setModal={setModal}/>}
    </>
  );
}

export default Header;
