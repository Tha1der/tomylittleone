import React from "react";
import Particles from "react-particles-js";
import { Parallax } from "react-parallax";
import ReactTyped from "react-typed";

const image1 = 'img/slider/50yearsLarge_noBG.png';

const SliderDarkBubble = () => {
  return (
    <>
    <Parallax bgImage={image1} strength={500}>
    <div className="beny_tm_hero" id="home">
      <div className="frame-layout__particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </div>
      {/* <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/50yearsLarge_noBG.png"
            })`,
          }}
        ></div>
        <div className="overlay"></div>
      </div> */}
      <div className="go-to go-to-next">
            <a href="#about">
              <span></span>
            </a>
          </div>
          {/* End animated goto button */}
          <div className="container">
            <div className="content">
              <div className="content_inner">
              {/* <h1
                  className="job"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                  50 Years
                </h1>
                
                <h2
                  className="job"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                 From Now...
                </h2> */}
                <h2
                  className="typer"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <ReactTyped
                    loop
                    typeSpeed={40}
                    backSpeed={20}
                    strings={[
                      "If you knocked on my door and told me that you needed me, I would still drop everything I had to help you...",
                      "Fifty years from now, if you knocked on my door and told me you were ready to try again, I would be ready to try again.",
                      "Fifty years from now, if you knocked on my door and told me that you loved me, I would love you back.",
                    ]}
                    smartBackspace
                    shuffle={false}
                    backDelay={1}
                    fadeOut={false}
                    fadeOutDelay={100}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                  />
                </h2>

                <div
                  className="beny_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <a className="anchor" href="#about">
                    <span className="wrapper">
                      <span className="first">See Some Photos of Us</span>
                      <span className="second">See Some Photos of Us</span>
                    </span>
                  </a>
                </div>
                {/* End beny_tm_button */}
              </div>
            </div>
          </div>
      {/* End particle animation */}
      </div>
      </Parallax>
    </>
  );
};

export default SliderDarkBubble;
