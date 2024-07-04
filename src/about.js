import React from 'react';
import YouTube from 'react-youtube';
import './about.css'; // Assuming you have CSS styles defined in this file

const About = () => {
  // YouTube video options
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  // YouTube video ID
  const videoId = 'Nj2YSLPn6OY?si=RrVue7FzYuIkEeay';

  return (
    <div id='about'>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Morbius
              <p>~Never be unsure...</p>
            </h2>
            <p>
              "Morbius" addresses the challenge of accurate disease diagnosis based on symptoms using machine learning and AI. Traditional diagnostic methods can be prone to error and inefficiencies, especially across diverse diseases and symptoms. Our project aims to improve diagnostic accuracy by developing a system that clusters diseases based on symptom similarity and predicts specific diseases within these clusters. This approach enhances early detection, treatment planning, and healthcare outcomes, contributing to global efforts for better health and well-being.
            </p>
            <br />
            <h1 style={{ fontSize: '30px' }}>Future Scopes-</h1>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p>
                1. <b>Enhanced Personalization and Precision Medicine:</b> Future advancements may integrate patient-specific data like genetics, lifestyle, and environmental factors into the prediction model. Leveraging IBM Watson's natural language processing and deep learning can refine diagnoses and treatment plans for better outcomes.
              </p>
              <br />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                2. <b>Real-time Monitoring and Predictive Analytics:</b> Implementing IoT for continuous health monitoring can detect early disease signs. AI on IBM Cloud can analyze streaming data to predict health risks, enabling proactive interventions and preventing acute episodes.
              </p>
            </div>
          </div>
          <div className="row content"> {/* Added this div to wrap the third content */}
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                3. <b>Integration with Telemedicine and Global Health Initiatives:</b> Expanding "Morbius" to support telemedicine boosts access to accurate diagnoses in remote areas. Partnering with global health databases and organizations enhances diagnostic sharing and healthcare equity, leveraging IBM Cloud and Watson Studio's capabilities.
              </p>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0"> {/* YouTube video column */}
              <YouTube videoId={videoId} opts={opts} />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Logo</h2>
          </div>
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="swiper-wrapper" style={{ flex: '0 0 50%' }}>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <center>
                    <img
                      src="/Tarot.png"
                      className="testimonial-img"
                      alt=""
                      style={{ height: '500px', width: '100%' }}
                    />
                  </center>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
