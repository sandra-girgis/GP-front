import React from "react";
import "./Footer.css"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends React.Component {
    constructor() {
        
        super();
    }

    render() {
        
        return (
            <>
                <div className="bg-dark text-white footer">
                    <div className="row col-12">
                        <div className="col-4"><h6 >CONTACT US</h6></div>
                                {/* <div className="col-4"><h7>19 st Ahmed Abd El-Aziz, kafr abdo , Alexandria Alexandria, Alexandria Governorate, Egypt</h7></div>
                                <div className="col-4"><h7>ensan.art@gmail.com</h7></div> */}
                        <div className="col-4 text-center"><button className="btn btn-outline-light" > Join Us </button></div>
                        <div className="col-4 text-end"><i class="fa-brands fa-facebook"></i></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;