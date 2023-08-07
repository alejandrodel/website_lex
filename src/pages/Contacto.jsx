import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

function Contacto(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j2z4lgj', 'template_993blzy', form.current, 'bWdIcmq5YktYOgfu8')
    .then((result) => {
        console.log(result.text);
        //CLEAR FIELDS.
        let username = document.getElementById("username"); 
        username.value = ""
        let email = document.getElementById("email"); 
        email.value = ""
        let mensaje = document.getElementById("mensaje"); 
        mensaje.value = ""

    }, (error) => {
        console.log(error.text);
    });

  };

  return (
  <StyledContactForm>
  
    
  
  <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body contact-wrapper">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACTANOS!</span>
            </div>
            <div className="screen-body-item">
              <form className="form-horizontal" ref={form} onSubmit={sendEmail}>
                <div className="app-form">
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NOMBRE" name="user_name" id="username" />
                    </div>
                    <div className="app-form-group">
                      <input type="email" className="app-form-control" placeholder="EMAIL" name="user_email" id="email" />
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control" placeholder="MENSAJE" name="message" id="mensaje" />
                    </div>
                  </div>
                  <div className="app-form-group buttons">
                    <button type="submit" className="app-form-button">ENVIAR</button>
                  </div> 
              </form>
            </div>
          </div>
          
    
  
        <div className="direct-contact-container">

          <ul className="contact-list">
            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place"><a href="https://goo.gl/maps/GsjDcfV2JwGjk21R9" target="_blank">Washington 423, Centro Monterrey, Nuevo León Centro, 64000 Monterrey, N.L.
            </a></span></i></li>
            
            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:52-818-257-4584" title="Give me a call">(818) 257-4584</a></span></i></li>
            
            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:alejandro.deleon@lexcontrols.com" title="Send me an email">alejandro.deleon@lexcontrols.com</a></span></i></li>
            
          </ul>

          
        </div>
  </div>
    </div>
      </div>
      </div>
      
  

  
  
    </StyledContactForm>

  );
};

export default Contacto;

// Styles
const StyledContactForm = styled.div`

*, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


body {
  background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%);
  font-size: 12px;
}

body, button, input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
  background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%);
  min-height: 100vh;
}

.container {
  flex: 0 1 900px;
  margin: auto;
  padding: 10px;
}






#contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px 'Oswald', sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

/* Left contact page */
.form-horizontal {
  /*float: left;*/
  max-width: 600px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control, 
textarea {
  max-width: 400px;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px 'Lato', sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 280px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 12px 'Lato', sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 30px;
}

.phone {
  margin-left: 20px;
}

.gmail {
  margin-left: 17px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}


/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative; 
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27,27,27);
  cursor: pointer; 
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all .2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff; 
}

.social-media-list li:hover:after {
  opacity: 1;  
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px 'Oswald', sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255,255,255,.6);
}






.screen {
  position: relative;
  background: #3e3e3e;
  border-radius: 15px;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-button.close {
  background: #ed1c6f;
}

.screen-header-button.maximize {
  background: #e8e925;
}

.screen-header-button.minimize {
  background: #74c54f;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
  padding-left:30px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #ea1d6f;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #ea1d6f;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #ea1d6f;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #b9134f;
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #ffa4bd;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  font-weight: normal;
}

.credits-link {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
}

.dribbble {
  width: 20px;
  height: 20px;
  margin: 0 5px;
}


/* Begin Media Queries*/
@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container, .form-horizontal {
    margin: 0 auto;
  }  
  
  .direct-contact-container {
    margin-top: 10px;
    max-width: 500px;
  }    
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {

  .direct-contact-container, .form-wrapper {
    float: none;
    margin: 0 auto;
  }  
  .form-control, textarea {
    
    margin: 0 auto;
  }
 
  
  .name, .email, textarea {
    width: 280px;
  } 
  
  .direct-contact-container {
    margin-top: 10px;
    max-width: 350px;
  }  
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }

  .screen-body-item {
    padding: 20px;
    padding-left:10px;
  }
  
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}




  
`;
