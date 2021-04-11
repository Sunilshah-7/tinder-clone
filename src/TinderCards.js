import React,{ useEffect, useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';

function TinderCards() {
    const [people,setPeople] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get("/tinder/card");
            setPeople(req.data);
        }
        fetchData();
    },[]);
    console.log(people);

    const swiped = (direction,nameToBeDeleted) =>{
        console.log("Removing:"+nameToBeDeleted);
        //setLastDirection(direction);
    };
    const outOfFrame = (name)=>{
        console.log(name + "left the screen.");
    };
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person)=> (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventCard={['up','down']}
                    onSwipe={(dir)=> swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                <div style={{
                    backgroundImage:`url(${person.imgUrl})`
                }} className="cards">
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;
