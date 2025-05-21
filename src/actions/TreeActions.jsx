import { useState } from "react";

export function changeForestHeight(px){
    const forest = document.getElementById("forest");
    if (!forest.style.marginTop){
        forest.style.marginTop = "0px";
    }
    forest.style.marginTop = Number(forest.style.marginTop.slice(0,-2))-px+"px";
}