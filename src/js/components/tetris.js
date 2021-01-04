import React from 'react';
import PropTypes from 'prop-types';
// import PauseMenu from './pause-menu';
import Gameboard from './gameboard';
import ScoreStore from '../stores/score-store';
import HeldPiece from './held-piece';
import PieceQueue from './piece-queue';

//AA
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
    console.log("++++++++++++++++33++++++++++++++++++++++")

  }


  componentDidMount() {
    ScoreStore.addChangeListener(this._onChange);

    //
    BoardStore.addChangeListener(this._onBoardChange);

  }

  componentWillUnmount() {
    ScoreStore.removeChangeListener(this._onChange);
  }

  _onBoardChange = () => {

    console.log("OnBOARDCHANGE");

  };

  _onChange = () => {

    console.log("OnCHANGE"+ScoreStore.getScore());

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
