/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector(".card").addEventListener(
    "click",
    () => {
      suit();
      value();
    },
    false
  );
};

function RandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function suit() {
  let matches = null;
  switch (RandomNum(1, 4)) {
    case 1:
      matches = document.querySelectorAll("#suit");
      matches.forEach(function(Item) {
        Item.className = "heart";
        Item.innerHTML = "&#9829";
      });
      break;
    case 2:
      matches = document.querySelectorAll("#suit");
      matches.forEach(function(Item) {
        Item.className = "spade";
        Item.innerHTML = "&#9824";
      });
      break;
    case 3:
      matches = document.querySelectorAll("#suit");
      matches.forEach(function(Item) {
        Item.className = "club";
        Item.innerHTML = "&#9827";
      });
      break;
    case 4:
      matches = document.querySelectorAll("#suit");
      matches.forEach(function(Item) {
        Item.className = "diamond";
        Item.innerHTML = "&#9830";
      });
      break;
  }
}
function value() {
  let val = RandomNum(2, 14);
  if (val < 11) {
    document.querySelector(".value").innerHTML = val;
  } else {
    switch (val) {
      case 11:
        document.querySelector(".value").innerHTML = "J";
        break;
      case 12:
        document.querySelector(".value").innerHTML = "Q";
        break;
      case 13:
        document.querySelector(".value").innerHTML = "K";
        break;
      case 14:
        document.querySelector(".value").innerHTML = "A";
        break;
    }
  }
}
