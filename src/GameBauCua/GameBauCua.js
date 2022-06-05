import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/GameBauCua.css";
import DiaDatCuoc from "./DiaDatCuoc";
import ListDatCuoc from "./ListDatCuoc";
import { playAgain } from "./redux/actions/game.actions";

export default function GameBauCua() {
  let { total } = useSelector((state) => state.GameReducer);

  const dispatch = useDispatch();
  return (
    <div className="game-bc container  m-auto">
      <div className=" flex justify-center">
        <img className="w-1/2 logo-game" src="./img/Logo.png" alt="" />
      </div>
      <div
        className="mt-6 m-auto py-5 text-xl rounded-md total-game"
        style={{ backgroundColor: "red", color: "#FFF23B", width: "16%" }}
      >
        Tiền thưởng: <span className="text-white text-2xl">{total}$</span>
      </div>
      <button
        style={{ backgroundColor: "#E40DC6" }}
        className="mt-6 text-2xl text-white px-5 py-1 rounded btn-playagain "
        onClick={() => {
          dispatch(playAgain());
        }}
      >
        Chơi Lại
      </button>
      <div className="grid grid-cols-3 gap-4 grid-img">
        <div className="col-span-2 mt-16">
          <ListDatCuoc />
        </div>
        <div>
          <DiaDatCuoc />
        </div>
      </div>
    </div>
  );
}
