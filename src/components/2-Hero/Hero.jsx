import React from "react";
import './Hero.css'

const Hero= () => {
  return (
    <section className="hero flex">
      <div className="left-section ">


          <div className="parent-avatar flex">
            <img src ="./profile.png" alt="profile" className="avatar" />
            <div className="icon-verified"></div>
          </div>

          <h1 className="title">Master's Student in Intelligent Computer Systems | Aspiring AI Engineer & Software Developer</h1>
          <p className="subtitle">I'm a Master's student in Intelligent Computer Systems at UMMTO, passionate about Artificial Intelligence, software development, and innovative technologies. I enjoy building projects that combine intelligent algorithms with practical applications, continuously expanding my skills, and turning ideas into useful digital solutions.</p>

          <div className="icons flex">
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin-square"></div>
          </div>

      </div>



      <div className="right-section animation border">
        ss
      </div>
    </section>
    );
};

export default Hero;