import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import { deCrease, inCrease } from "./gameUtils";
import { handleCuoc } from "./redux/actions/game.actions";

export default function Quancuoc(props) {
  const [resetAnim, setResetAnim] = useState(true);
  const [resetAnim2, setResetAnim2] = useState(true);

  const { img, cuoc, id } = props.data;

  const { scale } = useSpring({
    scale: resetAnim ? 1.2 : 1,
    from: { scale: 1 },
  });
  const { scale2 } = useSpring({
    scale2: resetAnim2 ? 1.2 : 1,
    from: { scale2: 1 },
  });

  const dispatch = useDispatch();

  return (
    <div>
      <img
        width={200}
        height={200}
        src={img}
        alt=""
        className="cursor-pointer img-list"
      />
      <div
        style={{
          backgroundColor: "#0C7604",
          color: "#CCF845",
          width: "190px",
          padding: "5px",
        }}
        className="m-auto mt-3 text-xl rounded text-center leading-6 bg-title-list"
      >
        Cược:
        <animated.button
          style={{
            scale: scale.to({
              range: [1, 1.2],
              output: [1, 1.2],
            }),
          }}
          onClick={() => {
            setResetAnim(!resetAnim);
            dispatch(handleCuoc(props.data, inCrease));
          }}
          className="mx-1 bg-blue-700 text-white leading-8 text-3xl w-6 btn-plus"
        >
          +
        </animated.button>
        {cuoc}
        <animated.button
          style={{
            scale: scale2.to({
              range: [1, 1.2],
              output: [1, 1.2],
            }),
          }}
          onClick={() => {
            setResetAnim2(!resetAnim2);
            dispatch(handleCuoc(props.data, deCrease));
          }}
          className="mx-1 bg-red-700 text-white leading-8 text-3xl w-6 btn-minus"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}
