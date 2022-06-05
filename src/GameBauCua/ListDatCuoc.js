import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCuoc } from "./redux/actions/game.actions";
import { inCrease, deCrease } from "./gameUtils";
import { useSpring, animated } from "react-spring";
import Quancuoc from "./Quancuoc";

export default function ListDatCuoc() {
  let { dataGame } = useSelector((state) => state.GameReducer);

  let renderQuanCuoc = () => {
    return dataGame.map((item, index) => {
      return (
        <div key={index}>
          <Quancuoc data={item} />
        </div>
      );
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      {renderQuanCuoc()}
    </div>
  );
}
