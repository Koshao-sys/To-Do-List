/* eslint-disable import/prefer-default-export */

export class Todobject {
  constructor(input, ind) {
    this.description = input;
    this.completed = false;
    this.index = ind;
  }
}