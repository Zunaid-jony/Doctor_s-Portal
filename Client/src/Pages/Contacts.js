import React, { useEffect } from 'react';
import '../App.css';

import Header from '../Components/Header/Header';
import Contact from '../Components/Contact/Contact';

const Contacts = () => {
    useEffect(() => {
		window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="heder-content">
        <Header />
      
        <Contact />

    </div>
    );
};

export default Contacts;