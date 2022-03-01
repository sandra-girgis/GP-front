import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const Footer = ()=> { 
     
        return (
            <>
                <div className="bg-dark text-white footer">
                    <div className="row col-12">
                        <div className="col-4"><h6 >Get In Touch</h6></div>
                        <div className="col-4 text-center"><button className="btn btn-outline-light" > Contact Me </button></div>
                        <div className="col-4 text-end">3</div>
                    </div>
                </div>
            </>
        );
    }



// export default Footer;