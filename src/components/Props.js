import React from "react";

const Props = property=>{
    return(
        <div className=" p-4 m-4 w-60  rounded-md shadow-md ">
            <img className=" w-full rounded-md" src={property.item.img} alt="image of a cat" />
            <h1 className=" font-bold my-2">{property.item.name}</h1>
            <div className=" flex items-center">
                <i class="fa-solid fa-phone"></i><p className=" ml-4">{property.item.tel}</p>
            </div>
            <div className=" flex items-center">
                <i class="fa-solid fa-envelope"></i> <p className=" ml-4">{property.item.email}</p> 
            </div>
        </div>
    )
}
export default Props;