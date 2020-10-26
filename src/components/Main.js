import React, {Component} from 'react';
import main from '../images/main.jpg';
import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';

class Main extends Component {
    render() {
        return (
            <div className='clearfix'>
                <section className="row float-left w-25 mr-2">
                    <img className="col hero" src={main} alt="Luke Skywalker"/>
                </section>
                <section className="float-right w-50 row no-gutters border ml-2">
                    <h2 className="col-12 text-center">Dream Team</h2>
                    <img className="col-4 p-1" src={friend1} alt="friend1"/>
                    <img className="col-4 p-1" src={friend2} alt="friend2"/>
                    <img className="col-4 p-1" src={friend3} alt="friend3"/>
                    <img className="col-4 p-1" src={friend4} alt="friend4"/>
                    <img className="col-4 p-1" src={friend5} alt="friend5"/>
                    <img className="col-4 p-1" src={friend6} alt="friend6"/>
                    <img className="col-4 p-1 bottomLeft" src={friend7} alt="friend7"/>
                    <img className="col-4 p-1" src={friend8} alt="friend8"/>
                    <img className="col-4 p-1 bottomRight" src={friend9} alt="friend9"/>
                </section>
                <p className="farGalaxy">It is a period of civil war. Rebel spaceships, striking from a hidden base, have won
                    their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret
                    plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power
                    to destroy an entire planet.
                    Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the
                    stolen plans that can save her people and restore freedom to the galaxy....
                    Return of the Jedi episode: 6
                    release_date: 1983-05-25
                    opening crawl: Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his
                    friend Han Solo from the clutches of the vile gangster Jabba the Hutt.
                    Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new
                    armored space station even more powerful than the first dreaded Death Star.
                    When completed, this ultimate weapon will spell certain doom for the small band of rebels
                    struggling to restore freedom to the galaxy...
                    title: The Phantom Menace
                    episode: 1
                    release_date: 1999-05-19
                    opening crawl: Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star
                    systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade
                    Federation has stopped all shipping to the small planet of Naboo.
                    While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has
                    secretly dispatched two Jedi Knights, the guardians of peace and justice in the
                    galaxy, to settle the conflict....
                </p>
            </div>
        );
    }
}

export default Main;