import { useState,useEffect } from "react";

 

const usePackages = () => {
    const [packages,setPackages]=useState([]);
    useEffect(()=>{
        fetch('https://intense-refuge-09229.herokuapp.com/package')
        .then((res)=>res.json())
        .then((data)=>setPackages(data));
    },[])
    return {packages,setPackages};
};

export default usePackages;