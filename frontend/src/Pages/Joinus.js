import React from "react";
import "./Piano.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init("2DgWwUj_l6OTusFnD");

export const Joinus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d8igfor', 'template_vgss0wj', form.current, '2DgWwUj_l6OTusFnD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
