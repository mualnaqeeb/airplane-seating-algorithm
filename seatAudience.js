const seatsArray = [[3, 2], [4, 3], [2, 3], [3, 4]];
const passengerNumber = 30;

function fillWithMAandW(array) {
  const seats = [];
  for (let i = 0; i < array.length; i++) {
    seats.push(Array(array[i][0]).fill().map(() => Array(array[i][1]).fill("M")));
  }

  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      seats[i][j][0] = "A";
      seats[i][j][seats[i][j].length - 1] = "A";
    }
  }

  for (let i = 0; i < seats[0].length; i++) {
    seats[0][i][0] = "W";
  }
  for (let i = 0; i < seats[seats.length - 1].length; i++) {
    seats[seats.length - 1][i][seats[seats.length - 1][i].length - 1] = "W";
  }

  return seats;
}

function replaceWithNumber(val, counter, seats) {
  const newSeats = JSON.parse(JSON.stringify(seats));
  for (let i = 0; i < newSeats.length; i++) {
    for (let j = 0; j < newSeats[i].length; j++) {
      if (newSeats[i] == null || newSeats[i][j] == null) {
        continue;
      }
      for (let k = 0; k < newSeats[i][j].length; k++) {
        if (newSeats[i] != null && newSeats[i][j] != null && newSeats[i][j][k] === val) {
          newSeats[i][j][k] = counter;
          counter++;
        }
      }
    }
  }
  return { seats: newSeats, counter: counter };
}

function printValues(seats) {
  let stringJ = "";
  for (let i = 0; i < seats[0].length; i++) {
    for (let j = 0; j < seats.length; j++) {
      if (seats[j] == null || seats[j][i] == null) {
        stringJ += "- ";
        continue;
      }
      for (let k = 0; k < seats[j][i].length; k++) {
        stringJ += seats[j][i][k] + " ";
      }
      stringJ += ",";
    }
    stringJ += "\n";
  }
  console.log(stringJ);
}

const seats = fillWithMAandW(seatsArray);
const obj = replaceWithNumber("A", 1, seats);
const seatsWithNumbers = replaceWithNumber("W", obj.counter, obj.seats).seats;
printValues(seatsWithNumbers);
