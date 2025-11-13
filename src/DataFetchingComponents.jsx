
import React, { useState, useEffect } from 'react';
import CreateImage from './CreateImage';
import './mainBodyStyle.css';


function displayImage(result){
           result.map(fetchData)
            }
        function fetchData(result){
          const image = result.images
          console.log('image');           
        }


function DataFetchingComponent() {
      const [data, setData] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const result = await response.json();
            setData(result);
            //console.log(result);
             //displayImage(result);
             
            
          } catch (err) {
            setError(err);
          } finally {
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);

      if (isLoading) return (<div className='loader-screen'>Loading...</div>);
      if (error) return (<div>Error: {error.message}</div>);

      return (  
        <div className='grid'>   
            {data.map((Img) => {
            return <CreateImage  key={Img.id} title={Img.slug} content={Img.images} alt="Image not found" />
           })}  
        
        </div> 
      );
    }

    export default  DataFetchingComponent;