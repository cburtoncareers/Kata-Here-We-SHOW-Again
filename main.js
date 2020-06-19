const parentElement = document.querySelector('.katas-list')

const kata1Heading = document.createElement ('h3')
parentElement.append(kata1Heading)
kata1Heading.append ('KATA 1')

let counter = 1
while (counter <= 20) {
  console.log(counter)
  const kata1Heading = document.createElement ('div')
  parentElement.append (kata1Heading)
  kata1Heading.append ('KATA 1:' + counter)
  counter ++
}

/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

  console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

  let evenCounter = 2
  while (evenCounter <= 20) {
    console.log(evenCounter)
    const kata1Heading = document.createElement ('div')
    parentElement.append (kata1Heading)
    kata1Heading.append ('KATA 2:' + evenCounter)
    evenCounter += 2
  }

  /** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
 
let oddCounter = 1
while (oddCounter <= 20) {
  console.log(oddCounter)
  const kata1Heading = document.createElement ('div')
  parentElement.append (kata1Heading)
  kata1Heading.append ('KATA 3:' + oddCounter)
  oddCounter += 2
}


/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let fiveCounter = 5
while (fiveCounter <= 100) {
  console.log(fiveCounter)
  const kata1Heading = document.createElement ('div')
  parentElement.append (kata1Heading)
  kata1Heading.append ('KATA 4:' + fiveCounter)
  fiveCounter += 5
}

//KATA 5

let squareCounter = 1
while (squareCounter <= 100) {
    const perfectSquare = Number.isInteger(Math.sqrt(squareCounter))
    if (perfectSquare) {
      console.log(squareCounter)
      const kata1Heading = document.createElement ('div')
      parentElement.append (kata1Heading)
      kata1Heading.append ('KATA 5:' + squareCounter)

    }
  squareCounter += 1
}


/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let backCounter = 20
while (backCounter >= 1) {
  console.log(backCounter)
  const kata1Heading = document.createElement ('div')
      parentElement.append (kata1Heading)
      kata1Heading.append ('KATA 6:' + backCounter)
  backCounter -= 1
}



/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let evenBackcount = 20
while (evenBackcount >= 2) {

  console.log(evenBackcount)
  const kata1Heading = document.createElement ('div')
      parentElement.append (kata1Heading)
      kata1Heading.append ('KATA 7:' + evenBackcount)

  evenBackcount -= 2
}

/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let oddBackcount = 19
while (oddBackcount >= 1) {
  console.log(oddBackcount)
  const kata1Heading = document.createElement ('div')
      parentElement.append (kata1Heading)
      kata1Heading.append ('KATA 8:' + oddBackcount)

  oddBackcount -= 2
}

/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let fiveBackcount = 100
while (fiveBackcount >= 5) {
  console.log(fiveBackcount)
  const kata1Heading = document.createElement ('div')
      parentElement.append (kata1Heading)
      kata1Heading.append ('KATA 9:' + fiveBackcount)
  fiveBackcount -= 5
}


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let squareBackcount = 100
while (squareBackcount >= 1) {
  const intSquareBackCount = Number.isInteger(Math.sqrt(squareBackcount))
  if (intSquareBackCount) {
    console.log(squareBackcount)
    const kata1Heading = document.createElement ('div')
      parentElement.append (kata1Heading)
      kata1Heading.append ('KATA 10:' + squareBackcount)

  }
  squareBackcount -= 1
}



// 11. Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
console.log('%cKATA 11 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
456, 21, 398, 339, 882, 848, 179, 535, 940, 472,] 
for ( let counter = 0; counter < sampleArray.length; counter +=1) {
    let currentElement = sampleArray[counter];
    const kata1Heading = document.createElement ('div');
    parentElement.append (kata1Heading);
    kata1Heading.append ('KATA 11:' + currentElement);
    console.log ('looping');

}
// 12. Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
console.log('%cKATA 12 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

for (let counter = 0; counter < sampleArray.length; counter +=1) {
    let currentElement = sampleArray[counter];
    if (currentElement % 2 === 0) {
        const kata1Heading = document.createElement ('div');
        parentElement.append (kata1Heading);
        kata1Heading.append ('KATA 12:' + currentElement);  
    }
}
// 13. Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
console.log('%cKATA 13 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
for (let counter = 0; counter < sampleArray.length; counter +=1) {
    let currentElement = sampleArray[counter];
    if (currentElement % 2 !== 0) {
        const kata1Heading = document.createElement ('div');
        parentElement.append (kata1Heading);
        kata1Heading.append ('KATA 13:' + currentElement);  
    }
}


// 14. Display the square of each element in sampleArray. (219961, 570025, …, 222784)
console.log('%cKATA 14 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

for (let counter = 0; counter < sampleArray.length; counter += 1) {
    let currentElement = sampleArray[counter];
    const kata1Heading = document.createElement ('div');
    parentElement.append (kata1Heading);
    kata1Heading.append ('KATA 14:' + (currentElement * currentElement));
}



// 15. Display the sum of all the numbers from 1 to 20.
console.log('%cKATA 15 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let  variable = 0
for (let counter = 1; counter <= 20; counter += 1) {
   variable += counter;
}

    const kata1Heading2 = document.createElement ('div');
    parentElement.append (kata1Heading2);
    kata1Heading2.append ('KATA 15:' + variable);


// 16. Display the sum of all the elements in sampleArray.
console.log('%cKATA 16 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let variable2 = 0
for (let counter = 0; counter < sampleArray.length; counter +=1) {
  variable2 = variable2 + sampleArray[counter]
}

const kataHeading = document.createElement ('div');
parentElement.append (kataHeading);
kataHeading.append ('KATA 16:' + variable2);


// 17. Display the smallest element in sampleArray.
console.log('%cKATA 17 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let smallest = Math.min(...sampleArray)

const element = document.createElement ('div');
parentElement.append (element);
element.append ('KATA 17:' + smallest);

// 18. Display the largest element in sampleArray.
console.log('%cKATA 18 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')
let largest = Math.max(...sampleArray)
const element2 = document.createElement ('div')
parentElement.append (element2);
element2.append ('KATA 18:' + largest);



