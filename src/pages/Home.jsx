import React, { useRef } from 'react';
import { Carousel } from 'react-carousel-minimal';
import i40 from "../images/Home/carousel/i40.jpg";
import tec from "../images/Home/carousel/tecnologia.jpg";
import industrial from "../images/Home/carousel/industrialautomation.png";
import packaging from "../images/Home/carousel/packaging2.jpg";
import products from "../images/Home/carousel/Ignition.jpg";
import programming from "../images/Home/Services/programming.png";
import robot from "../images/Home/Services/robot.png";
import scada from "../images/Home/Services/scada.png";
import motor from "../images/Home/Services/motor.png";
import panel from "../images/Home/Services/panel.png";
import virtualizacion from "../images/Home/Services/server.png";
import ignition from "../images/Home/Certifications/ignition.svg";
import kepware from "../images/Home/Certifications/kepware.svg";
import siemens from "../images/Home/Certifications/siemens.png";
import kuka from "../images/Home/Certifications/kuka.svg";
import abb from "../images/Home/Certifications/abb.png";
import weintek from "../images/Home/Certifications/weintek.png";
import keyence from "../images/Home/Certifications/keyence.svg";
import cognex from "../images/Home/Certifications/cognex.png";
import rockwell from "../images/Home/Certifications/rockwell.svg";
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import styled from "styled-components";



function Home(){
    
    const data = [
        {
          image: i40,
          caption: "Soluciones i4.0"
        },
        {
          image: tec,
          caption: "Tecnologia de punta"
        },
        {
          image: industrial,
          caption: "Robotica Industrial"
        },
        {
          image: products,
          caption: "Expertos en Sistemas SCADA"
        },
        {
          image: packaging,
          caption: "Expertos en Packaging"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }

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
    



    return(
        <div>





            <div style={{
          padding: "0 0"
        }} id="home">
          <Carousel
            data={data}
            time={800}
            width="4000px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="black"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              textSize: "200px",
              maxWidth: "2000px",
              maxHeight: "500px",
              margin: "0px auto",
            }}
          />
        </div>

        <div className="container py-5" id="nosotros">
            <div className="row">

                <div className="col-lg-6 col-md-6 col-12">
                    <h2 className="mb-4 bt_bb_headline_content">Acerca de Nosotros</h2>

                    <p>Somos una casa de ingeniería establecida en la ciudad de Monterrey, México, con experiencia de más de 8 años en el mercado de la automatización.</p>

                    <p>Hemos desarrollado aplicaciones de automatización desde la más simple hasta la más compleja utilizando tecnología de última generación.</p>

                    <p>Trabajamos de la mano con SIEMENS para ofrecer a nuestros clientes proyectos y productos de la más alta calidad.</p>

                    <p>Tenemos amplia experiencia en Soluciones i4.0. Contando con múltiples projectos donde se combinan tecnologías tales como: PLCs, Robots, SCADAs, OPCs, Sistemas de Visión, Bases de datos, MES y Aplicaciones Especiales (Python, .NET , etc...) </p>

                    

                    

                </div>

                <div className="col-lg-5 mx-auto col-md-6 col-12">
                    <img src={tec} className="about-image img-fluid" alt="Ben's Resume HTML Template" />
                </div>

            </div>
        </div>

      


        <div className="servicios" id="servicios">         
            <div className="container px-4 py-5" id="icon-grid">
                    <h2><span className="bt_bb_headline_content"><span>Nuestros<br></br>
                    <em>Servicios de Automatizacion</em></span></span></h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 g-4 py-5 ">
                    <div className="col d-flex align-items-start">
                        <img className= "fw-bold mb-0 fs-4 text-body-emphasis px-3 py-3" src={programming} alt="" width="100px"  />
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">PLCs & HMIs</h3>
                        <p>Desarrollo de código, Troubleshooting y comisionamiento de equipos.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                    <img className= "fw-bold mb-0 fs-4 text-body-emphasis px-3 py-3" src={scada} alt="" width="120px"  />
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">SCADA & DCS</h3>
                        <p>Desarrollo de codigo, diseño UX/UI , analisis de datos.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                    <img className= "fw-bold mb-0 fs-4 text-body-emphasis px-3 py-3" src={robot} alt="" width="100px"  />
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Robots</h3>
                        <p>Desarrollo de codigo, Teaching y puesta en marcha.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                    <img className= "fw-bold mb-0 fs-4 text-body-emphasis px-3 py-3" src={motor} alt="" width="100px"  />
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Drives</h3>
                        <p>Controls de Motores de corriente Alterna, Configuración y puesta en marcha.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                    <img className= "fw-bold mb-0 fs-4 text-body-emphasis px-3 py-3" src={panel} alt="" width="100px"  />
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Tableros de Control</h3>
                        <p>Ingeniería en CAD, armado y Troubleshooting.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                    <img className= "fw-bold mb-0 fs-4 text-body-emphasis px-3 py-3" src={virtualizacion} alt="" width="100px"  />
                        <div>
                        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Virtualización</h3>
                        <p>Respaldo de Servidores, redundancia y fail-over mediante vmware.</p>
                        </div>
                    </div>

                </div>
            </div>

            </div>

            <div>
              <h2><span className="bt_bb_headline_content"><span>Nuestras <strong>Marcas</strong></span></span></h2>
              <div className="flexi">
                  <div className="certifications">
                      <img className= "grid-element" src={ignition}  alt="" />
                      <img className= "grid-element" src={siemens} alt="" />
                      <img className= "grid-element" src={kepware} alt="" />
                      <img className= "grid-element" src={rockwell} alt="" />
                      <img className= "grid-element" src={kuka} alt="" />
                      <img className= "grid-element" src={abb} alt="" />
                      <img className= "grid-element" src={weintek} alt="" />
                      <img className= "grid-element" src={keyence} alt="" />
                      <img className= "grid-element" src={cognex} alt="" />

                  </div>      
                </div>
            </div>



  
  
  <StyledContactForm id="contacto">
  
    
  
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
    
    




        <Footer />    
        </div>
    )
}

export default Home;




// Styles
const StyledContactForm = styled.div`

*, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


body {
  background:  linear-gradient(to right, #d94343 0%, #eb466b 100%); 
  font-size: 12px;
}

body, button, input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
  background: linear-gradient(to right, #d94343 0%, #eb466b 100%);
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
  color: #d94343;
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
  background: #d94343;
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
  color: #d94343;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #d94343;
  font-weight: 100;
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
