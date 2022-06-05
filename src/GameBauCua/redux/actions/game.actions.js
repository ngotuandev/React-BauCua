import {
  INCREASE_DECREASE,
  PLAY_AGAIN,
  PLAY_GAME,
} from "../constants/game.contants";

export const handleCuoc = (payload, number) => ({
  type: INCREASE_DECREASE,
  payload,
  number,
});

export const playGame = () => ({
  type: PLAY_GAME,
});

export const playAgain = () => ({
  type: PLAY_AGAIN,
});
