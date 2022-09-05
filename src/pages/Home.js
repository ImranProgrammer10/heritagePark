import React from "react";
 
 
import { Container} from "react-bootstrap";
 
import useAuth from "../hooks/useAuth";
import Package from "../components/package/Package";
 
 
 
 
 
 

const Home = () => {
    const {packages}=useAuth();
   

  return (
    <div>
      <div
         
      >
        


          <div id="feature" class="img-fluid" >
            <div className=" text-white text-center">
        <h1>Our All Producrs</h1>
          
        </div>

        <Container>
            <div>
            <div className="d-flex flex-wrap justify-content-between">
                
                {packages.map((packages) => (
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