import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring } from "react-spring";
import { playGame } from "./redux/actions/game.actions";
import XucSac from "./XucSac";

export default function DiaDatCuoc() {
  let { dataGameDefault } = useSelector((state) => state.GameReducer);
  const [anim, setAnim] = useState(true);

  const propsUseSping = useSpring({
    xyz: anim ? [0, 0, 0] : [360, 360, 360],
    from: {
      xyz: [0, 0, 0],
    },
    config: { duration: 3000 },
  });

  console.log(anim);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full plate-main">
      <div
        style={{ borderRadius: "50%" }}
        className="w-1/2 h-1/2 mx-auto bg-slate-100 relative plate-border "
      >
        <div
          style={{ borderRadius: "50%", top: "13%", left: "13%" }}
          className="w-3/4 h-3/4 m-auto bg-white absolute"
        >
          <div
            style={{ width: "65px", height: "65px", top: "12%", left: "32%" }}
            className="absolute z-0"
          >
            <XucSac
              arrXucSac={dataGameDefault[0]}
              propsUseSping={propsUseSping}
            />
          </div>
          <div
            style={{ width: "65px", height: "65px", top: "47%", left: "10%" }}
            className="absolute"
          >
            <XucSac
              arrXucSac={dataGameDefault[1]}
              propsUseSping={propsUseSping}
            />
          </div>
          <div
            className="absolute"
            style={{ width: "65px", height: "65px", top: "47%", left: "55%" }}
          >
            <XucSac
              arrXucSac={dataGameDefault[2]}
              propsUseSping={propsUseSping}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-1/2 mt-12 cursor-pointer img-playgame"
          src="./img/soc.png"
          alt=""
          onClick={() => {
            setAnim(!anim);
            setTimeout(() => {
              dispatch(playGame());
            }, 3000);
          }}
        />
      </div>
    </div>
  );
}
