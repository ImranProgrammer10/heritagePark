import React from "react";
 
import bgImage from "../assests/images/home_bg.png";
import { Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Package from "../components/package/Package";
 
 
 
 
 
 

const Home = () => {
    const {packages}=useAuth();
   

  return (
    <div>
      <div
        style={{
          background: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              
                <h1 className="text-white">FUN FOR THE WHOLE FAMILY</h1>
             

               
                <p className="my-4 text-white fs-5">
                  DISCOVER OUR HERITAGE
                </p>
               

              
                <NavLink to='/packages'
                  
                  className="rounded-pill fs-5 py-2 px-4 btn btn-warning"
                   
                >
                  View Packages
                </NavLink>
             
            </div>
          </div>
          </Container>


          <div id="feature" class="img-fluid" >
            <div className=" text-white text-center">
        <h1>Our All Packages</h1>
          
        </div>

        <Container>
            <div>
            <div className="d-flex flex-wrap justify-content-between">
                
                {packages.slice(0,6)?.map((packages) => (
                            <Package package={packages}  key={packages.key}></Package>
                        ))};
                   
    
                </div>

            </div>
           
             




            </Container>




        </div>



       
       

     
     </div>
    </div>
  );
};

export default Home;