import React from "react";
import Props from "./components/Props";
import info from "./info";

const app = ()=>{
    const mapData = info.map(items=>{
        return (
            <Props 
            key={items.key}
            item={items}
        />
        )
    })

    return  (
        <div className=" flex flex-wrap justify-center align-middle">
            {mapData}
            {mapData}
        </div>
    )


}

export default app;