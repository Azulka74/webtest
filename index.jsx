import React from "react";
import ellipse1 from "./ellipse-1.png";
import ellipse2 from "./ellipse-2.png";
import ellipse3 from "./ellipse-3.png";
import ellipse4 from "./ellipse-4.png";
import ellipse5 from "./ellipse-5.png";
import ellipse6 from "./ellipse-6.png";
import ellipse7 from "./ellipse-7.png";
import ellipse8 from "./ellipse-8.png";
import group1 from "./group-1.png";
import group2 from "./group-2.png";
import j4zolk from "./j4zolk.png";
import narapidana from "./narapidana.png";
import rectangle1 from "./rectangle-1.png";
import rectangle5 from "./rectangle-5.png";
import rectangle7 from "./rectangle-7.png";
import rectangle9 from "./rectangle-9.png";
import rectangle10 from "./rectangle-10.png";
import rectangle11 from "./rectangle-11.png";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="group">
        <img className="rectangle" alt="Rectangle" src={rectangle1} />

        <img className="img" alt="Rectangle" src={rectangle5} />

        <img className="rectangle-2" alt="Rectangle" src={rectangle7} />

        <img className="rectangle-3" alt="Rectangle" src={rectangle9} />

        <img className="rectangle-4" alt="Rectangle" src={rectangle10} />

        <img className="group-2" alt="Group" src={group2} />

        <img className="rectangle-5" alt="Rectangle" src={rectangle11} />

        <img className="narapidana" alt="Narapidana" src={narapidana} />

        <img className="group-3" alt="Group" src={group1} />

        <img className="jzolk" alt="Jzolk" src={j4zolk} />

        <img className="ellipse" alt="Ellipse" src={ellipse1} />

        <img className="ellipse-2" alt="Ellipse" src={ellipse2} />

        <img className="ellipse-3" alt="Ellipse" src={ellipse3} />

        <img className="ellipse-4" alt="Ellipse" src={ellipse4} />

        <img className="ellipse-5" alt="Ellipse" src={ellipse5} />

        <img className="ellipse-6" alt="Ellipse" src={ellipse6} />

        <img className="ellipse-7" alt="Ellipse" src={ellipse7} />

        <img className="ellipse-8" alt="Ellipse" src={ellipse8} />
      </div>
    </div>
  );
};
