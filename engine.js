const Generation = require("./generation");

class GenerationEngine {
  constructor() {
    this.generation = null;
    // used to stop the fucntion
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }
  stop() {
    clearTimeout(this.timer);
  }

  buildNewGeneration() {
    this.generation = new Generation();

    console.log("new generation", this.generation);

    // call itself again once teh current generation has expired
    // timer is used if need to stop the generation
    this.timer = setTimeout(
      () => this.buildNewGeneration(),
      // nr of miliseconds that make it to the exp time
      // the miliseconds within that exp field - miliseconds
      this.generation.expiration.getTime() - Date.now()
    );
  }
}

module.exports = GenerationEngine;
