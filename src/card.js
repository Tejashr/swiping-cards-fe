import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import TinderCard from 'react-tinder-card';
import { GetuserbyId, Posthistory } from "./api";
import './card.css'
import pic1 from './images/one.png';
import pic2 from './images/two.png';
import pic3 from './images/three.png';
import pic4 from './images/four.png';
import pic5 from './images/five.png';
import thankyou from './images/thankyou.jpg'

function Card(props) {
    const [number, setNumber] = useState([
        {
            name: "Steve Jobs",
            url: pic1
        },
        {
            name: "Elon Musk",
            url: pic2
        },
        {
            name: "Bill Gates",
            url: pic3
        },
        {
            name: "Jeff Bezos",
            url: pic4
        },
        {
            name: "Mark Zuckerberg",
            url: pic5
        }
    ])

    const alreadyRemoved = [];

    let charactersState = number;

    const [characters, setCharacters] = useState(number);
    const [lastDirection, setLastDirection] = useState();
    const [nameswiped, setNameswiped] = useState();
    const [name, setName] = useState();
    const [thank, setthank] = useState(false);


    useEffect(async () => {
        let data = await GetuserbyId(props.match.params.id)
        await setName(data.data.username)
        console.log("Mounted")
    }, [])


    const childRefs = useMemo(() => Array(number.length).fill(0).map(i => React.createRef()), [])

    const swiped = async (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        if (direction === "left") {
            setLastDirection("rejected")
        }
        else if (direction === "right") {
            setLastDirection("accepted")
        }
        else if (direction === "up") {
            setLastDirection("discarded")
        }
        else {
            setLastDirection("not swiped in correct direction")
        }

        setNameswiped(nameToDelete)
        alreadyRemoved.push(nameToDelete)

        console.log(alreadyRemoved[alreadyRemoved.length - 1])

        if (alreadyRemoved[alreadyRemoved.length - 1] === "Steve Jobs") {
            setthank(true)
        }

        if (direction === "left") {
            let data = await GetuserbyId(props.match.params.id)
            var currentDate = new Date();

            let current = currentDate.getHours() + ':' + currentDate.getMinutes() + ' ' + currentDate.getDate() + '/' + (currentDate.getMonth() + 1);

            let userData = { direction: "rejected", nameToDelete, username: data.data.username, phone: data.data.phone, date: current }
            await Posthistory(userData);
        }
        else if (direction === "right") {
            let data = await GetuserbyId(props.match.params.id)
            var currentDate = new Date();

            let current = currentDate.getHours() + ':' + currentDate.getMinutes() + ' ' + currentDate.getDate() + '/' + (currentDate.getMonth() + 1);

            let userData = { direction: "accepted", nameToDelete, username: data.data.username, phone: data.data.phone, date: current }
            await Posthistory(userData);
        }
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
        charactersState = charactersState.filter(character => character.name !== name)
        setCharacters(charactersState)
    }

    let history = useHistory();

    return (
        <>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="btn btn-dark mt-2" onClick={() => {
                        history.push(`/history/${props.match.params.id}`)
                    }}>history</button>
                </div>
                <div className="text-center">
                    {lastDirection ? <h2 key={lastDirection}>{name} you have selected {nameswiped} is {lastDirection} </h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
                </div>
                <div className="row">
                    <div className="tinderCards__cardContainer">
                        {
                            thank ? <div className="thankyouimg text-center"> <img src={thankyou} className="thank" alt="img"></img>
                                <h1>Thank you You have rated all the images</h1></div> :
                                number.map((num, index) => (
                                    <TinderCard className="swipe" key={num.name} preventSwipe={['down']} ref={childRefs[index]} onSwipe={(dir) => swiped(dir, num.name)} onCardLeftScreen={() => outOfFrame(num.name)}>
                                        <div className="card">
                                            <img src={`${num.url}`} alt="img"></img>
                                            <h4>{num.name}</h4>
                                        </div>
                                    </TinderCard>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;