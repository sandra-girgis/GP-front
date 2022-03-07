import React from "react";
import "./Piano.css";
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/01.jpg"
import img2 from "../images/12.jpg"
import img3 from "../images/17.jpg"
import img4 from "../images/18.jpg"
import img5 from "../images/15.jpg"

export const Piano = () => { 
  return (<>
  <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 " 
      src={img1} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}   alt="Second slide"/>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="fifth slide"
    />
  </Carousel.Item>
</Carousel>
        {/* <div className="boback">
        <div className="">
          <div className="card bg-dark text-white">
            <img
              className="card-img"
              src="https://media.istockphoto.com/photos/grand-piano-in-dark-background-3d-rendering-picture-id1331353069?b=1&k=20&m=1331353069&s=170667a&w=0&h=-PfN3Mkh2fC78wPw54ZuWozUKtjmf5Le3J061E-j-Ko="
              alt="piano-img"
            />
            <div className="card-img-overlay text-center col-3 ms-5 "> */}
              {/* <button className="btn btn-dark btn-lg card-text">
                Join Us
              </button> */}
            {/* </div>
          </div>
       </div> */}
       {/* <div class="card mb-3" style="max-width: 540px;"> */}

       <div className="container mt-5 mb-5">
              <h1 className="mb-5 fw-bold display-4"style={{color:"#ee4a8b"}}>About Our Classes</h1>
              <div className="container mb-5 flip-card">
                  <div className="row g-0 ">
                    <div className="col-md-4 rounded courses">
                      <img  src="https://media.istockphoto.com/photos/happy-girls-playing-piano-picture-id1050429232?k=20&m=1050429232&s=612x612&w=0&h=t7s2SBFV3MP9hrHxy1H5WLqqm_26S07qEuclyWeBQ0c="
                      className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8"style={{backgroundColor:"#fff2f7"}}>
                      <div className="card-body">
                        <h5 className="card-title"style={{color:"#168eca"}}>kids</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                  </div>
              </div>
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                <div className="col-md-6 offset-md-2"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>middle age</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                  </div>
                  <div className="col-md-4 border border-danger rounded">
                    <img  src="https://media.istockphoto.com/photos/piano-lesson-picture-id1285507317?k=20&m=1285507317&s=612x612&w=0&h=yl7ThegscO4Nv8pEumIz6qxYR-UkoNc4fWy_Z7Z1uEM="
                    className="img-fluid rounded-start" alt="middle age"/>
                  </div>
                </div>
              </div>        
              <div className="container mb-5 flip-card">
                <div className="row g-0 ">
                  <div className="col-md-4 border border-success rounded">
                    <img  src="https://media.istockphoto.com/photos/friends-playing-piano-all-together-picture-id991893172?k=20&m=991893172&s=612x612&w=0&h=L8ewogV3w1WnM6TYBmU5lanUBwjxdpW5gL8V6pfxmAI="
                    className="img-fluid rounded-start" alt="Elderly"/>
                  </div>
                  <div className="col-md-6"style={{backgroundColor:"#fff2f7"}}>
                    <div className="card-body">
                      <h5 className="card-title"style={{color:"#168eca"}}>Elderly</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                  </div>
                  </div>
                </div>
              </div>
        </div>
        

        <div className="container mb-5">
        <h1 className="mb-5 fw-bold display-4" style={{color:"#ee4a8b"}}>About Our Instructors</h1>
        <div className="card mb-5 instractor flip-card shadow">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Salma Wael</h5>
                <p className="card-text desc">Salma Wael is an architect who works as a part time TA at the Arab Academy 
                for science and Technology and works at Omran architects. 
                She started playing piano when she was 7 years old and graduated 
                from the “Academy of Arts” with a diploma in 2017 and was the top of
                 her year. Salma has also successfully taken part in the international music 
                 competition “Jugend Musiziert” several times. She plays piano solo but also 
                 has experience in four hands and has accompanied classic and modern vocals.
                  Furthermore Salma has teached piano for 4 months in 2018 at Tchikovsky
                   school for Preforming Arts. Salma finds passion in playing and teaching
                    piano and looks forward to teaching and shaping young pianists.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mb-5 flip-card shadow1">
            <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Yomna Magdy</h5>
                <p className="card-text desc">Born in Alexandria, she began studying the piano at the age 
                of 5 under the supervision of Ramy El-Telsi and Dr. Suhair Abu Shaisha She 
                joined the Academy of Arts when she was 6 years old and was taught by Dr.
                 Iman Nour El-Din. I got a piano diploma from the Academy of Arts 2005-2015. 
                 Worked as a music teacher at Al Reyada International School 2017-2018.
She worked as a piano trainer for children and adults at Sporting Club from 2014 to date.
 Participated in a number of art concerts at the Museum of Fine Arts, Creativity Center 
 and the Bibliotheca Alexandrina. I participated in a master class with a. Austrian Johanna 
 Horney December 2017 - April 2018.</p>
              </div>
            </div>
            <div className="col-md-4 im">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="img-fluid rounded-end rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
          </div>
        </div>
        <div className="card mb-5 instractor flip-card shadow">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Nada Magdy</h5>
                <p className="card-text desc">Music has been her passion from a young age.
                 She studied Piano at the Conservatoire until she got her diploma.
                  She has the Royal Grade 8 with a merit degree.
                   And it did not stop there, as she decided to also work in the same field.
                    She started working when she was only 15. Now, 
                    she works as a teacher at the Kawmeya Language School “American and IG Department”
                     alongside studying at the Faculty of Art, English Department. 
                     She managed to find melodies and tunes in every aspect of my life. 
                     When it comes to music, she will always be willing to learn and improve 
                     while helping others to find their passion within the musical notes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-5 flip-card shadow1">
            <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>May Adel</h5>
                <p className="card-text desc">since 2019 – Present: Piano Teacher at Bibliotheca 
                Alexandrina – Arts Center – Alexandria,2018 – 2021: Music Teacher at Antoniadis
                 International School – Alexandria,2018 – 2021: Music Teacher at Antoniadis 
                 International Nursery – Alexandria, since 2016 – Present: Piano Teacher at
                  Alexandria Opera House – Sayed Darwish – Alexandria, 2012 – 2015: Piano
                   Teacher at Arts Academy (Conservatoire of Music) – Tharwat St. – Alexandria,
                    2009 – Oct 2012: Piano Teacher at Art's World Center,Jun 2014: Piano
                     Accompaniment for Alexandria Opera House Children & Youth Orchestra, 
                     Jun 2013:  Piano Soloist at the Russian Cultural Center – Alexandria , 
                     Dec 2011: Piano Soloist at the Artistic Taste Palace – Sidi Gaber,
                      Jul 2010:   Piano Soloist at Alexandria Center of Arts, Jun 2008: Piano
                       Soloist at Conservatoire de Musique D'Alexandrie – Fouad St., Alexandria
                        and in Jul 2007: Piano Soloist at Conservatoire de Musique D'Alexandrie – 
                        Fouad St., Alexandria.</p>
              </div>
            </div>
            <div className="col-md-4 im">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              className="img-fluid rounded-end rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
          </div>
        </div>
        
        <div className="card mb-5 instractor flip-card shadow">
            <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
              className="img-fluid rounded-start rounded-circle" style={{width:"15rem"}} alt="instractors"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"style={{color:"#ee4a8b"}}>Youssef Sameh</h5>
                <p className="card-text desc">Born in 2001, graduated from Alexandria international 
                school, studying at the faculty of engineering of Alexandria- 
                started playing the piano at the age of 5 and proceeded academically
                 entering many exams with the help of many teachers till achieving merit in
                  royal schools grade 8 at the age 16 and distinction in trinity atcl diploma at 
                  the age of 18. Now he is still progressing by preparing higher
                   level pieces as he is not planning for the trinity atcl diploma to be his 
                   last certificate he gets.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 text-center"><button className="btn-outline-light btn-lg butt fs-2" style={{backgroundColor:"#168eca"}}>Join Us</button></div>

        





           {/* <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                 className="card-img-top  rounded-circle" style={{width:"15rem"}}  alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Born in Alexandria in 1998.
                                          Omar graduated from Riada International School (IGCSE) and then studied Computer and Communications Engineering at the Faculty of Engineering - Alexandria University.
                                          In 2006, Omar joined the Suzuki Violin Class and the Alexandria Opera House Youth Orchestra with Dr. Nevine ELMahmoudy.
                                          Later on , he joined the conservatoire ( Academy of Arts in Alexandria ) where he studied violin with Dr. Nevine ELMahmoudy and Dr. Hassan Sharara.
                                          Omar performed a lot of solo concerts in Alexandria and Cairo , in which they made a huge success.
                                          He now works as a violinist in Alexandria Opera House String Orchestra and participated with the Arab Youth Philharmonic Orchestra concerts in Germany , Jordan , Egypt and France.</p>
                </div>
            </div>
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                className="card-img-top  rounded-circle" style={{width:"15rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a short card.</p>
              </div>
            </div>
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                className="card-img-top  rounded-circle" style={{width:"15rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            <div className="col instractor">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="card-img-top rounded-circle" style={{width:"15rem"}} alt="instractor-img"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
           </div> */}
        </div>
       


        {/* </div> */}

      </>
    );
  }
// }
// export default Piano;
