// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'
const randomNumber = Math.floor(Math.random() * 6) + 1  // returns a random integer from 1 to 6 into variable "randomNumber" 
/**
 * This function uses a selection component from https://github.com/CreativeIT/getmdl-select
 */

function myButtonClicked() {
  // input
  const numberGuessed = parseInt(document.getElementById('guessed-number').value)

  // process
  //pass

  // output
  document.getElementById('answer').innerHTML = numberGuessed
}
