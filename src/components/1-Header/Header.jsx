import React, { useState } from "react";
import './Header.css'

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex">
      <button onClick={()=>{
        setShowModal(true)
      } }className="menu icon-menu flex"></button>
      <div/>

      <nav>
        <ul className="flex ">
          <li><a href="">About</a></li>
          <li><a href="">Articales</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <button className="mode flex">
        <span className="icon-moon-o"></span>
      </button>


{/* pop up  */}
      {showModal &&(
              <div className=" fixed">
                <ul className="model ">
                  <li>
                  <button className="icon-cross" onClick={() => setShowModal(false)}></button>
                  </li>

                  <li><a href="">About</a></li>
                  <li><a href="">Articales</a></li>
                  <li><a href="">Projects</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
            </div>
      )}
    </header>
    );
};

export default Header;