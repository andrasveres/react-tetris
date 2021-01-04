import React from 'react';
import PropTypes from 'prop-types';
// import PauseMenu from './pause-menu';
import Gameboard from './gameboard';
import ScoreStore from '../stores/score-store';
import HeldPiece from './held-piece';
import PieceQueue from './piece-queue';

//AA
import BoardStore from '../stores/board-store';
import GameStore from '../stores/game-store';

function getScore() {
  return {
    points: ScoreStore.getPoints(),
    linesCleared: ScoreStore.getLinesCleared()
  };
}

export default class Tetris extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = getScore();

    console.log("--------------------------------------");
    console.log("--------------------------------------");
    console.log("--------------------------------------");
    console.log("--------------------------------------");
    console.log("--------------------------------------");
    console.log("--------------------------------------");
    console.log("++++++++++++++++66++++++++++++++++++++++")

  }


  componentDidMount() {
    ScoreStore.addChangeListener(this._onChange);

    //
    // BoardStore.addChangeListener(this._onBoardChange);
    GameStore.addChangeListener(this._onGameChange);

  }

  componentWillUnmount() {
    ScoreStore.removeChangeListener(this._onChange);
  }

  //AA
  _onBoardChange = () => {

    console.log("TETRIS OnBOARDCHANGE");

    this.props.onBoardChange(BoardStore.getBoard());

  };

  changeSpeed(speed) {
    GameStore.changeSpeed(speed);
  }

  //AA
  _onGameChange = () => {

    console.log("TETRIS OnGAMECHANGE");

    const ret = {
      board: GameStore.getGameBoard(),
      status: GameStore.getCurrentState()
    }

    this.props.onGameChange(ret);

  };

  _onChange = () => {

    console.log("OnCHANGE");

    this.setState(getScore());
  };

  render() {
    const { children } = this.props;
    const { points, linesCleared } = this.state;

    return children({
      HeldPiece,
      Gameboard,
      PieceQueue,
      points,
      linesCleared,
    });
  }
}
