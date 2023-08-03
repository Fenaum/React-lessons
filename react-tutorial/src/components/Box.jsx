import { useState } from "react";

export default function Box(prop) {
    const boxColor = {
        backgroundColor: prop.on ? "#222222" : "transparent",
        border: "solid 1px",
        margin: "2px"
    }
  
    return (
    <section className="box" style={boxColor} onClick={()=>prop.toggle(prop.id)} ></section>
)};