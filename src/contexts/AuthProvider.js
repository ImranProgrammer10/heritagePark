import { createContext } from "react";
import useCart from "../hooks/useCart";
 
import usePackages from "../hooks/usePackages";
import useFirebase from './../hooks/useFirebase';
 
 

 
export const AuthContext=createContext();


const AuthProvider = ({children}) => {
    // hooks 

    const AllContexts=useFirebase();
    const {packages}=usePackages();
    const {addToCart,selectedPackage,remove,setSelectedPackage,totalPackages}=useCart();
    const data={AllContexts,packages,addToCart,selectedPackage,remove,setSelectedPackage,totalPackages};

    return(
        <AuthContext.Provider value={data}>
        {children}

    </AuthContext.Provider>

    );
    

};

export default AuthProvider;    