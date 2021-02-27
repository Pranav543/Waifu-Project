import React from "react";
import style from "./avatar.module.scss";

function Avatar(props){
    return(
        <>
        <div className={style.container}>
            <div className={style.icon}></div> 
            <p>Connected</p>
            <div className={style.address}><b>Welcome</b>, {props.address}</div>
        </div>
        </>
    )
}

export default Avatar;