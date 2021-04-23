import React, { useEffect } from 'react';
import '../App.css';



import Header from '../Components/Header/Header';


const Reviews = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="heder-content">
            <Header />
         
          
        </div>
    );
};

export default Reviews;