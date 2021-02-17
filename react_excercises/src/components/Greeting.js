import React from 'react';


function Greeting() {

const firstName = 'Liliane';

const date = new Date(2021, 0, 5, 15);
const hours = date.getHours();
let timeOfDay;
const styles = {
    fontSize: '30px',
    margin: '100px',
}

if (hours < 12) {
    timeOfDay = 'morning';
    styles.color = "#FFFFFF";
} else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    styles.color = "#FF1"
} else {
    timeOfDay = 'evening';
    styles.color = "#FF0025";
    styles.fontSize = '200px';
}

return (
    <h1 style={styles}>Good {timeOfDay} {firstName} ! </h1>
);
}

export default Greeting;