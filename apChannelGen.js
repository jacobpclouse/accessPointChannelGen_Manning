/* This program will assist in mapping AP channel settings on a building with 4 floors
It assumes:
- 4 floors
- 6 positions for APs per floor (2 width, 3 length)
- 3 possible non-overlapping channels 
- APs will be situated in the same spot on each floor 

There is a pattern here, add the one to the previous channel frequency (EXCEPT if it is 3, then add it again and go back to 1)
Elements 0, 1, 2 in each array will make up East side,
Elements 3, 4, 5 in each array will make up West side

IDEA: you can input how many floors there are. The basement and 4th floor should be the same, the 2nd and 5th, etc
    For larger patterns, you would have to use mathematics and couldn't use the starter arrays that I used*/


/* Setting up Variables */
basement = [];
floor1 = [];
floor2 = [];


/* Input from User */
currentChannel = window.prompt(`What channel do you want the 1st AP on the Basement to start at? (1, 2 or 3)`);

console.log(
    `The layout for each floor goes like this: 

    BASEMENT
    (East)
1 ----- 2 ----- 3
| ----- | ----- |
4 ----- 5 ----- 6
    (West)



    AP 1 in Basement will start at ${currentChannel}`
);


/* Basement */
if (currentChannel == 1) {
    basement = [1,2,3];
} else if (currentChannel == 2) {
    basement = [2,3,1];
} else if (currentChannel == 3) {
    basement = [3,1,2];
} else {
    console.log(`You need to enter a 1, 2, or 3 only.`)
};

basement.push(basement[2]);
basement.push(basement[0]);
basement.push(basement[1]);



/* Floor 1 */
if (basement[0] == 1) {
    floor1 = [2,3,1];
} else if (basement[0] == 2) {
    floor1 = [3,1,2];
} else if (basement[0] == 3) {
    floor1 = [1,2,3];
} else {
    console.log(`How did we get here?`)
};

floor1.push(floor1[2]);
floor1.push(floor1[0]);
floor1.push(floor1[1]);



/* Floor 2 */
if (basement[0] == 1) {
    floor2 = [3,1,2];
} else if (basement[0] == 2) {
    floor2 = [1,2,3];
} else if (basement[0] == 3) {
    floor2 = [2,3,1];
} else {
    console.log(`How did we get here?`)
};

floor2.push(floor2[2]);
floor2.push(floor2[0]);
floor2.push(floor2[1]);


/* Outputing Results to Console */
console.log(`
___________________________
THIS IS YOUR PATTERN OUTPUT:
~~~~~~~~~~~~~~~~~~~~~~~~~~~

    BASEMENT
    (East)
${basement[0]} ----- ${basement[1]} ----- ${basement[2]}
| ----- | ----- |
${basement[3]} ----- ${basement[4]} ----- ${basement[5]}
    (West)    
    
    
    
    FLOOR 1
    (East)
${floor1[0]} ----- ${floor1[1]} ----- ${floor1[2]}
| ----- | ----- |
${floor1[3]} ----- ${floor1[4]} ----- ${floor1[5]}
    (West)
    
    

    FLOOR 2
    (East)
${floor2[0]} ----- ${floor2[1]} ----- ${floor2[2]}
| ----- | ----- |
${floor2[3]} ----- ${floor2[4]} ----- ${floor2[5]}
    (West)
    
    
If more floors, use Basement Pattern for Floor 4, Floor 1 Pattern for Floor 5, etc`);