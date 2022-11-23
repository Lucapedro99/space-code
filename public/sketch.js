let clientSocket = io ();

clientSocket.on("connect", newConnection)

function newConnection() {
  console.log(clientSocket.id)
}


clientSocket.on("mouseBroadcast", otherMouse)

function otherMouse(dataReceived){
 console.log(dataReceived)
  rect(dataReceived.x,dataReceived.y,50,50)
  fill("red")
}




function mouseMoved(){
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
  }

  clientSocket.emit("mouseInfo",message);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(20);
  fill("green")
  rect(mouseX,mouseY,30,30)
  
}

