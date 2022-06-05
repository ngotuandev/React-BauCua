import { dataGame, dataGameDefault } from "../../dataGame";
import {
  INCREASE_DECREASE,
  PLAY_AGAIN,
  PLAY_GAME,
} from "../constants/game.contants";

const initialState = {
  dataGame,
  dataGameDefault,
  total: 1000,
};

export const GameReducer = (
  state = initialState,
  { type, payload, number }
) => {
  switch (type) {
    case INCREASE_DECREASE: {
      let dataGameUpdate = [...state.dataGame];
      let totalUpdate = state.total;
      let index = dataGameUpdate.findIndex((item) => item.id === payload.id);
      if (index !== -1 && number === 100) {
        //* Nếu tổng điểm thưởng = 0 thì không tăng nữa
        if (totalUpdate === 0) {
          return { ...state };
        }
        dataGameUpdate[index].cuoc += number;
        totalUpdate -= number;
      } else if (index !== -1 && number === -100) {
        //* Nếu cược = 0 thì không giảm nữa
        if (dataGameUpdate[index].cuoc === 0) {
          return { ...state };
        }
        dataGameUpdate[index].cuoc += number;
        totalUpdate -= number;
      }

      return { ...state, dataGame: dataGameUpdate, total: totalUpdate };
    }

    case PLAY_GAME: {
      let totalUpdate = state.total;
      let dataGameUpdate = [...state.dataGame];
      const dataGameDefaultRandom = [];

      //* Duyệt vòng lặp, set giá trị ở vị trí random của mảng dataGame
      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6);
        const xucSacRandom = dataGameUpdate[random];
        dataGameDefaultRandom.push(xucSacRandom);
      }
      state.dataGameDefault = dataGameDefaultRandom;

      //* Dùng forEach để duyệt, tạo index, nếu set giá trị *2 thì không cần phải hoàn tiền
      dataGameDefaultRandom.forEach((data, index) => {
        let indexCheck = dataGameUpdate.findIndex(
          (item) => item.id === data.id
        );
        if (indexCheck !== -1) {
          totalUpdate += dataGameUpdate[indexCheck].cuoc * 2;
        }
      });

      //* Dùng forEach để duyệt dataGame, lấy vị trí mà findIndex trả về đầu tiên để set lại
      // dataGameUpdate.forEach((data, index) => {
      //   let indexCheck = dataGameDefaultRandom.findIndex(
      //     (item) => item.id === data.id
      //   );
      //   if (indexCheck !== -1) {
      //     totalUpdate += data.cuoc;
      //   }
      // });

      //* Dùng map để trả lại mảng về vị trí ban đầu
      state.dataGame = dataGameUpdate.map((item, index) => {
        return { ...item, cuoc: 0 };
      });

      state.total = totalUpdate;
      return { ...state };
    }

    case PLAY_AGAIN: {
      state.total = 1000;
      state.dataGame = state.dataGame.map((item) => {
        return { ...item, cuoc: 0 };
      });
      state.dataGameDefault = state.dataGameDefault.map((item) => {
        return { id: 1, img: "./img/bau.png", cuoc: 0 };
      });
      return { ...state };
    }

    default:
      return { ...state };
  }
};
