import React from 'react';
 
 
import { Container } from 'react-bootstrap';
 
import usePackages from '../hooks/usePackages';
import Package from '../components/package/Package';
 
 

const Packages = () => {
    const {packages}= usePackages()
    return (
        <div class="img-fluid" >
            <div className="text-center">
        <h1>Our All Packages</h1>
          
        </div>

        <Container>
            <div>
            <div className="d-flex flex-wrap justify-content-between">
                
                {packages?.map((packages) => (
                            <Package package={packages}  key={packages.key}></Package>
                        ))}
                   
    
                </div>



          

            </div>
           
             




            </Container>




        </div>
        
    );
};

export default Packages;