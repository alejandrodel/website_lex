import React from "react";
import { Carousel } from 'react-carousel-minimal';
import i40 from "../images/Home/carousel/i40.jpg";
import tec from "../images/Home/carousel/tecnologia.jpg";
import industrial from "../images/Home/carousel/industrialautomation.png";
import packaging from "../images/Home/carousel/packaging2.jpg";
import products from "../images/Home/carousel/products.jpg";
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
          caption: "Industrial"
        },
        {
          image: products,
          caption: "products"
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

    return(
        <div>





            <div style={{
          padding: "0 0"
        }}>
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

        <div className="container py-5">
            <div className="row">

                <div className="col-lg-6 col-md-6 col-12">
                    <h2 className="mb-4 bt_bb_headline_content">Acerca de Nosotros</h2>

                    <p>Ben Resume HTML Template is brought to you by <a rel="nofollow" href="https://www.tooplate.com" target="_parent">Tooplate website</a>. You can feel free to edit and use this page for your small site. You are allowed to use this HTML template for any kind of purpose.</p>

                    <p>However, please do not re-distribute the downloadable template ZIP file on any template collection website. This is strongly prohibited. Please contact Tooplate for more information.</p>

                </div>

                <div className="col-lg-5 mx-auto col-md-6 col-12">
                    <img src={tec} className="about-image img-fluid" alt="Ben's Resume HTML Template" />
                </div>

            </div>
        </div>

      


        <div className="servicios">         
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
        <Footer />    
        </div>
    )
}

export default Home;