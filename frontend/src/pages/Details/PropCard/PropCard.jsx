import React from "react";
import style from "./props-card.module.scss";

export function PropCard(props){
    return(
        <>
        <div className={style.card}>
            <p className={style.type}>{props.type}</p>
            <p className={style.value}>{props.value}</p>
        </div>
        </>
    )
}