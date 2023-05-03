// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1;

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) { 
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

// process
if (valueFromSlider == randomNumber) {
  document.getElementById("answer").innerHTML =
  "The answer was, " + randomNumber + "!" + You; got it! Good job."
}

// block of code to be executed if condition1 is true
if (valueFromSlider != randomNumber) {
document.getElementById("answer").innerHTML =
"The answer was, " + randomNumber + "!" + "Nice guess, but try again."
}