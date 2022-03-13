import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
return (
    <>
    <footer className="text-center text-lg-start bg-light text-muted footer ">
        <section className="footer pb-5 pt-2 ">
        <div className="container ">
            <div className="row mt-4 ">
            <div className="col-md-3 col-lg-2 mx-auto text_color ">
                <h6 className="text-uppercase fw-bold mb-4 text_color ">
                Ensan Art
                </h6>
                <p>
                <Link className="text-reset text_color pink " exact to="/">
                    Home
                </Link>
                </p>
                <p>
                <Link className="text-reset text_color pink" exact to="/news">
                    Events
                </Link>
                </p>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/gallery"
                >
                    Gallery
                </Link>
                </p>
            </div>
            <div className="col-md-3 col-lg-2 mx-auto text_color">
                <h6 className="text-uppercase fw-bold mb-4 text_color">
                Music
                </h6>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/piano"
                >
                    Piano
                </Link>
                </p>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/violin"
                >
                    Violin
                </Link>
                </p>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/flute"
                >
                    Flute
                </Link>
                </p>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/guitar"
                >
                    Guitar
                </Link>
                </p>
            </div>

            <div className="col-md-3 col-lg-2 mx-auto text_color">
                <h6 className="text-uppercase fw-bold mb-4 text_color">
                Performance Art
                </h6>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/ballet"
                >
                    Ballet
                </Link>
                </p>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/theatre"
                >
                    Theatre
                </Link>
                </p>
            </div>

            <div className="col-md-3 col-lg-2 mx-auto text_color">
                <h6 className="text-uppercase fw-bold mb-4 text_color">
                Classical Art
                </h6>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/artCourses"
                >
                    Art Courses
                </Link>
                </p>
                <p>
                <Link
                    className="text-reset text_color pink"
                    exact
                    to="/workshop"
                >
                    Workshop
                </Link>
                </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text_color">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p className="px-2">
                <FontAwesomeIcon className="px-2 text_color" icon={faHome} />
                19 st Ahmed Abd El-Aziz,Kafr abdo,Alexandria,Egypt
                </p>
                <p className="px-2 text_color">
                <a
                    className="px-2 text_color"
                    href="mailto:totajo1999@gmail.com"
                >
                    <FontAwesomeIcon
                    className="px-2 text_color"
                    icon={faGoogle}
                    />
                    ensan.art@gmail.com
                </a>
                </p>
                <p className="px-2 text_color">
                <FontAwesomeIcon
                    className=" px-2 text_color"
                    icon={faPhoneAlt}
                />
                01149656688
                </p>

                <span className="px-2 text_color">
                <Link
                    className="px-2 text_color"
                    to={{ pathname: "https://www.facebook.com/EnsanArt/" }}
                    target="_facebook"
                >
                    <FontAwesomeIcon
                    className="px-2 text_color"
                    icon={faFacebook}
                    />
                </Link>
                </span>

                <span className="text_color">
                <Link
                    className=" text_color"
                    to={{
                    pathname:
                        "https://instagram.com/ensanart?utm_medium=copy_link",
                    }}
                    target="_instagram"
                >
                    <FontAwesomeIcon
                    className="text_color"
                    icon={faInstagram}
                    />
                </Link>
                </span>
            </div>
            </div>
        </div>
        </section>
    </footer>
    </>
);
};
