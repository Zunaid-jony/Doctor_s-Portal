import React, { useState } from 'react';
import Loader from '../../images/Preloader.gif';

const Preloader = () => {
	const [ message, setMessage ] = useState('d-none');

	setTimeout(() => {
        setMessage('d-block');
    }, 3000);

    function refreshPage() {
        window.location.reload();
      }

	return (
		<div className="text-center col-12 py-5 my-5">
			<img src={Loader} alt="loader" />

			<div className={message}>
				<button className="btn btn-primary" onClick={refreshPage}>
					Please Reload the Page
				</button>
			</div>
		</div>
	);
};

export default Preloader;
