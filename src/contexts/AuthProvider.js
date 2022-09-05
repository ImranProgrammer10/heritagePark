import { createContext } from "react";
import useCart from "../hooks/useCart";
 
import usePackages from "../hooks/usePackages";
 
 
 

 
export const AuthContext=createContext();


const AuthProvider = ({children}) => {
    // hooks 

    
    const {packages}=usePackages();
    const {addToCart,selectedPackage,remove,setSelectedPackage,totalPackages}=useCart();
    const data={packages,addToCart,selectedPackage,remove,setSelectedPackage,totalPackages};

    return(
        <AuthContext.Provider value={data}>
        {children}

    </AuthContext.Provider>

    );
    

};

export default AuthProvider;    