import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
            <div className="tp-contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.8084976823106!2d-79.68023662462016!3d43.672952451154266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3ee6986aaaab%3A0x7260ced3d2c16e86!2s1315%20Derry%20Rd%20E%20Unit%20%23%201%2C%20Mississauga%2C%20ON%20L5T%201B6%2C%20Canada!5e0!3m2!1sen!2s!4v1700473807728!5m2!1sen!2s" width="600" height="450" style={{ border: "0px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </div>
        </>
    );
};

export default GoogleMap;