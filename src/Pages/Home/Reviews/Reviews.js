import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Reviews.css'

const Reviews = () => {
    return (
        <div className='mt-3 p-3 container'>
            <h1>Reviews From Our Customer</h1>
            <div className="container-m">
            
    <div className="row">
        <div className="col-md-4">
            <div className="cardc"> <i className="fa fa-quote-left u-color"></i>
                <p>Had A Awesome Experience With Bd Tour Every Staf Were Amazing </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about"> <span className="font-weight-bold d-block">Alex Smith</span> <span className="u-color">Dubai</span>
                        <div className="d-flex flex-row mt-1"> <FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /></div>
                    </div>
                    <div className="user-image"> <img src="https://i.imgur.com/UUW3zLx.jpg" alt='' className="rounded-circle" width="70"/> </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="cardc"> <i className="fa fa-quote-left u-color"></i>
                <p>Very thrilled experience we got as traveller</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about"> <span className="font-weight-bold d-block">Sophia T.</span> <span className="u-color">UK</span>
                        <div className="d-flex flex-row mt-1"><FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /></div>
                    </div>
                    <div className="user-image"> <img src="https://i.imgur.com/o5uMfKo.jpg"  alt='' className="rounded-circle" width="70"/> </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="cardc"> <i className="fa fa-quote-left u-color"></i>
                <p>Breakfast was bad , rest are good</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about"> <span className="font-weight-bold d-block">Mike Vincent</span> <span className="u-color">US</span>
                        <div className="d-flex flex-row mt-1"> <FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /><FontAwesomeIcon className="u-color" icon={faStar} /></div>
                    </div>
                    <div className="user-image"> <img src="https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-charismatic-guy-cute-boy-q-version-boy-cute-little-boy-png-image_336972.jpg" alt='' className="rounded-circle" width="70"/> </div>
                </div>
            </div>
        </div>
    </div>
</div>
            
        </div>
    );
};

export default Reviews;