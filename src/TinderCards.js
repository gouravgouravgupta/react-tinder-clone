import React ,{ useState ,useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './Firebase';

function TinderCards() {

    const [people ,setPeople] = useState([
    ]);

    //piece of code that run based on conditions
    useEffect(() => {
        // this is where code runs
        const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) => 
        setPeople(snapshot.docs.map((doc) => doc.data())));
        return () => {
            unsubscribe();
        };
        
    }, [])
    // BAD const people = [];
    //people.push("quzi" ,"can")

    //GOOD
    //push to an aray in react 
   // setPeople([...people ,"sony" , "quzi"])
    return (
        <div>
            <div className="tinderCards_cardContainer">
            {
                people.map((person) =>(
                        //always give keys in react
                        //allows react to efficiently rerender a list
                        //make app superfast
                        //automically refresh benefits
                        <TinderCard
                        className="swipe"
                        preventSwipe={["up", "down"]}
                        key={person.name}
                        >
                            <div 
                            style={{backgroundImage:`url(${person.url})`}}
                            className="card">
                                <h3>{person.name}</h3>
                            </div>

                        </TinderCard>
                    

                ))
            }
            
        </div>
        </div>
    )
}

export default TinderCards
