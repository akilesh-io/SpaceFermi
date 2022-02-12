import Phaser from 'phaser';
import './style.css';
import Counter from './scenes/counter';
import {calculator, householdObject, planets} from './calculator';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 550,
  transparent: true,
  scene: [
    Counter,
  ],
};


const game = new Phaser.Game(config);
