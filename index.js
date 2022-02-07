var currRightAnswer = 1;
var timeSec=0;
var myInterval=0;
function init(quntity) {
  var arr = shuffle(quntity);
  renderTable(arr);
}

function renderTable(arr) {
  var sizeArr = arr.length;
  var numOfRow = Math.sqrt(arr.length);
  var numOfCol = numOfRow;
  var newArr = arr.slice("");
  var elBoard = document.querySelector(".table");
  var strHTML = "";
  for (var i = 0; i < numOfRow; i++) {
    strHTML += "<tr>";
    for (var j = 0; j < numOfCol; j++) {
      var num = chooseNum(newArr);
      strHTML += `<td data-${num} onclick="cellClicked(${num} , ${sizeArr})">${num}</td>`;
    }
    strHTML += "</tr>";
  }
  elBoard.innerHTML = strHTML;
}

function chooseNum(arr) {
  return arr.pop();
}

function cellClicked(clickedNum, arr) {
  var currNum = document.querySelector(`td[data-${clickedNum}]`);
  if (currRightAnswer > arr) {
    alert("you are the winner!!!");
  } else if (clickedNum === arr) {
    currNum.style.backgroundColor = "green";
    currRightAnswer++;
    stopTime();
    cellClicked(currRightAnswer, arr);
  }else if (clickedNum === 1){
 myInterval=setInterval(timer , 1000)
    currNum.style.backgroundColor = "green";
    currRightAnswer++;
  } else if (clickedNum === currRightAnswer) {
    currNum.style.backgroundColor = "green";
    currRightAnswer++;
  } else {
    alert("try again!!");
  }
}

function shuffle(quntity) {
  var arr = [];
  while (arr.length < quntity) {
    var num = getRandomInt(1, quntity + 1);
    if (arr.includes(num)) {
      continue;
    } else {
      arr.push(num);
    }
  }

  return arr;
}

function reset() {
  currRightAnswer = 1;
  init();
  stopTime()
}

function timer(){
  var time=document.querySelector('.timer')
  timeSec++
  time.innerHTML=timeSec
}

function stopTime(){
  clearInterval(myInterval)
  timeSec=0;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
