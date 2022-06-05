import React, { useState } from "react";
import { animated } from "react-spring";

export default function XucSac(props) {
  const { xyz } = props.propsUseSping;

  console.log(xyz);
  return (
    <div className="scene">
      <animated.div
        className="cube"
        style={{
          translateZ: "-25px",
          transform: xyz.to(
            (x, y, z) => `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
          ),
        }}
      >
        <img className="cube__face front" src={props.arrXucSac.img} alt="" />
        <img className="cube__face right" src="./img/ca.png" alt="" />
        <img className="cube__face back" src="./img/cua.png" alt="" />
        <img className="cube__face left" src="./img/ga.png" alt="" />
        <img className="cube__face top" src="./img/nai.png" alt="" />
        <img className="cube__face bottom" src="./img/tom.png" alt="" />
      </animated.div>
    </div>
  );
}
