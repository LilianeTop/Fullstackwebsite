import React from 'react';

function Joke (props) {
    return (
        <div>
            <h2 style={{display: !props.joke.question && 'none'}}>
                Question: {props.joke.question}
            </h2>
            <h3 style={{backgroundColor: !props.joke.question && 'red' }}>Answer: {props.joke.answer}</h3>
        </div>

    )
}

export default Joke;