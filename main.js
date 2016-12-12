// Copy this into browser

var data = "R3, L2, L2, R4, L1, R2, R3, R4, L2, R4, L2, L5, L1, R5, R2, R2, L1, R4, R1, L5, L3, R4, R3, R1, L1, L5, L4, L2, R5, L3, L4, R3, R1, L3, R1, L3, R3, L4, R2, R5, L190, R2, L3, R47, R4, L3, R78, L1, R3, R190, R4, L3, R4, R2, R5, R3, R4, R3, L1, L4, R3, L4, R1, L4, L5, R3, L3, L4, R1, R2, L4, L3, R3, R3, L2, L5, R1, L4, L1, R5, L5, R1, R5, L4, R2, L2, R1, L5, L4, R4, R4, R3, R2, R3, L1, R4, R5, L2, L5, L4, L1, R4, L4, R4, L4, R1, R5, L1, R1, L5, R5, R1, R1, L3, L1, R4, L1, L4, L4, L3, R1, R4, R1, R1, R2, L5, L2, R4, L1, R3, L5, L2, R5, L4, R5, L5, R3, R4, L3, L3, L2, R2, L5, L5, R3, R4, R3, R4, R3, R1"
var data = data.split(", ")

var x = 0
var y = 0
// Possible values: "North" "East" "South" "West"
var facing = "North"

for(var i = 0; i < data.length; i++) {
  var turn = data[i][0] // R or L
  var dist = Number(data[i].slice(1))
  adjustDirection(turn)
  adjustCoordinates(dist)


  // console.log("Datum is: ", data[i])
  // console.log("Current direction is: ", facing)
  // console.log("x is: ", x)
  // console.log("y is: ", y)
}

function adjustDirection(turn) {
  if(turn === "R") {
    switch(facing) {
      case "North":
        facing = "East";
        break;
      case "East":
        facing = "South";
        break;
      case "South":
        facing = "West";
        break;
      case "West":
        facing = "North";
        break;
    }
  }
  if(turn === "L") {
    switch(facing) {
      case "North":
        facing = "West";
        break;
      case "East":
        facing = "North";
        break;
      case "South":
        facing = "East";
        break;
      case "West":
        facing = "South";
        break;
    }
  }
}

function adjustCoordinates(dist) {
  switch(facing) {
    case "North":
      y += dist;
      break;
    case "East":
      x += dist;
      break;
    case "South":
      y -= dist;
      break;
    case "West":
      x -= dist;
      break;
  }
}

// Taxicab distance is x coord + y coord
console.log("Solution is: ", (x + y))
