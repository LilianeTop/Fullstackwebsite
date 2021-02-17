import React from "react";
import './App.css';
import MainContent from "./components/MainContent";
import ToDoItem from "./components/ToDoItem";
import Joke from './components/Joke';
import ContactCard from "./components/ContactCard";
import JokesData from "./components/JokesData";



function App() {
    const jokeComponents = JokesData.map(joke => <Joke key={joke.id} joke={joke}/>)

    return (
        <div>
            <ContactCard
                contact={{
                    name:'Liliane',
                    imgUrl: '',
                    phone:'020 1224 2345',
                    email: 'liliane@gmail.com'
                }}
                />
            <ContactCard
                contact={{
                    name:'Maria',
                    imgUrl:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
                    phone: '06 2345 2345',
                    email: 'maria@gmail.com'
                }}
               />
            <ContactCard
                contact={{
                    name: 'Maureen',
                    imgUrl: '',
                    phone:'089 675 4563',
                    email: 'maureen@gmail.com'
                }}
            />
            <ContactCard
                contact={{
                    name: 'izzy',
                    imgUrl: '',
                    phone: '020 6785 4589',
                    email: 'izzy@gmail.com'
                }}
                />

            {jokeComponents}

        </div>
    )
}

export default App;