import './App2.css';
import './Slider.css';
import React from 'react';

function FirstContent(){
    const imagePath = '/Tarot-2.png';

    const imagePath2 = '/Who-We-Serve-Nav-400x400-c-default.webp';

  return(
    <div className="container my-5" >
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
         Do you want to check whether you have a certain disease or not?🤔
        </h1>
        <p className="lead" style= {{paddingTop: 10}}>
          Don't be unsure... We got you!!
        </p>
        <br />
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a href= "/about">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
          >
             About Mobius
          </button></a>

        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg" style={{ marginLeft: '10px', marginTop: '-45px' }}>
  <img
    className="rounded-lg-3"
    src={imagePath}
    alt=""
    style={{ width: 600 }}
  />
</div>


    </div>
  </div>
  )
}

class App2 extends React.Component{
  constructor(props){
    super(props);
    this.state= {apiResponse:""};
  }


  fetchData=  ()=> {
    setTimeout( ()=>{
    fetch('http://localhost:9000/testapi')
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  },);
  }

  dontfetchData=  ()=> {
    setTimeout( ()=>{
      fetch('http://localhost:9000/users')
      .then(res=>res.text())
      .then(res=>this.setState({apiResponse:res}));
    },);

  }

  handleButtonClick= ()=> {
    this.fetchData();
  }
  
  handleButtonOut= ()=> {
    this.dontfetchData();
  }
  
  

  
  render(){
    return (
      <>

      <FirstContent/>
      <br/>

      <section className="ftco-section ftc-no-pb">
    <div className="container">
      <div className="row no-gutters">
        <div
          className="col-md-5 p-md-5 img img-2"
          style={{
            backgroundImage:
              "url(/Who-We-Serve-Nav-400x400-c-default.webp)",
            height: 500
          }}
        ></div>
        <div className="col-md-7 wrap-about pb-md-5 ftco-animate" style= {{padding: 15}}>
          <div className="heading-section mb-5 pl-md-5" >
            <div className="pl-md-5 ml-md-5">
              <span className="subheading subheading-with-line">
                <small className="pr-2 bg-white">Introduction</small>
              </span>
              <h2 className="mb-4">
              Don't overthink. Use our support.</h2>
            </div>
          </div>
          <div className="pl-md-5 ml-md-5 mb-5">
          <div>
  <p>
    Welcome to Morbius, your ultimate tool for predicting diseases based on symptoms. Whether you're experiencing health concerns or simply curious, Morbius offers a seamless way to input multiple symptoms and receive potential disease predictions. Our platform leverages advanced algorithms to analyze your symptoms and provide you with valuable insights into various health conditions.
  </p>
  <br />
  <p>
    Explore our user-friendly interface where you can effortlessly add and manage symptoms. Morbius utilizes cutting-edge technology to generate customized disease predictions, helping you understand potential health outcomes better. Join our community and empower yourself with knowledge about possible diseases associated with your symptoms.
  </p>
</div>

            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
          <br/>
          <br/>
  <section className="ftco-services">
    <br/>
    <div className="container">
      <div className="row justify-content-start mb-5 pb-5">
        <div className="col-md-4 heading-section ftco-animate">
          <h2 style= {{fontSize: 50}}> Services-</h2>
        </div>
        <div className="col-md-8 pl-md-5 ftco-animate">
          <div className="pl-md-4 border-line"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/Screenshot 2023-12-27 at 23.28.12.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
              <b>Simple Disease Predictor </b>- here we predict the specific disease based on the symptoms provided by the user.
              </h3>

            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/Screenshot 2023-12-27 at 23.29.06.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
              <b>Disease Cluster Predictor</b>- Here you can get a bunch of possible diseases based on the symptoms provided by the user. <b>Don't worry</b> it will be sorted in the order of the most probable disease.
              </h3>
           
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services d-block">
            <div className="icon d-flex justify-content-center align-items-center">
              <img
                src="/Screenshot 2023-12-27 at 23.29.18.png"
                alt=""
                className="src"
              />
            </div>
            <div className="media-body p-2 mt-3">
              <h3 className="heading">
              <b> Future Scope </b>- These are all the left things which we can try in the future because this is a simple Model made exclusively using IBM's Watson Studio.
              </h3>

            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br /><br /><br />
      {/* <div className="row justify-content-start mt-5 py-5">
        <div className="col-md-4 heading-section ftco-animate">
          <h2 className="mb-4" style= {{fontSize: 50}}>Our Services</h2>
          <p>
           What can you expect from us...
          </p>
        </div>
        <div className="col-md-8 ftco-animate">
          <div className="row d-flex" >
            <div className="col-md-6 d-flex align-items-stretch" style= {{height: 350}}>
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                    style= {{height: 100}}
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">PathForge</h3>
                  <p>
                  Personalized learning platform analyzes students' styles, strengths, and weaknesses, crafting tailored pathways with specific topics, resources, and interactive activities to deepen subject understanding.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch" style= {{height: 350}}>
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                    style= {{height: 100}}
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">EduHub</h3>
                  <p>
                  AI-driven tool analyzes educational content, creating adaptive summaries for diverse audiences. Ensures accessibility with catered summaries at varying reading levels, fostering inclusive education.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch"  style= {{height: 350}}>
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                    style= {{height: 100}}
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">MultiLingo</h3>
                  <p>
                  Generative AI platform translates and adapts educational content into multiple languages. Breaks language barriers, enabling students worldwide to access quality materials in their native languages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-stretch"  style= {{height: 350}}>
              <div className="media block-6 services services-2 d-block bg-light p-4 mb-4">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="/Screenshot 2023-12-27 at 23.29.33.png"
                    alt=""
                    className="src"
                    style= {{height: 100}}
                  />
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">LabGuide</h3>
                  <p>
                    {" "}
                   This provides the guide to students about different lab sessions of different subjects like Physics, Chemistry or even mathematics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </section>
  <section className="ftco-section ftco-no-pb">
    <div className="container-wrap">
      <div className="row no-gutters">
        <div className="col-md-5 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/people-sorting-garbage-trying-reach-zero-waste-illustration_335657-257.jpg"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              
              <h3>
            
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/cleaning-mobile-smartphone_118813-3620.jpg"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/young-woman-holding-her-book-while-looking-out-window_23-2149029695.avif"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 ftco-animate">
          <div className="project">
            <img
              src="/recycle-eco-environment-icon-concept_53876-125110.jpg"
              className="img-fluid"
              alt="Colorlib Template"
            />
            <div className="text">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />



</>
  )
}
}


export default App2;
