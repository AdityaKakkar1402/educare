import React from 'react'
import './Break.css'
import Mole from "./mole.png";
import Memory from "./memeory.png";
import Prime from "./prime.png";
import Netflix from "./netflix.png";
import Sudoku from "./sudoku.png";
import Hotstar from "./hotstar.png"

function Break() {
    const [counter, setCounter] = React.useState(3600);

    // Second Attempts
    React.useEffect(() => {
       counter>0 && setInterval(() => {
          setCounter((time)=>time-1);
        }, 1000);
    }, []);

    return (
        <div className="break">
            <div className="break1">
                <h1>Break Time Now!</h1>
                <div>Countdown: {counter} sec. Remaining to go back to studies</div>
            </div>
            <div className="break2">
               <div className="break3">
                   <img className="im" src={Sudoku} alt="xyz" />
                   <a href="https://belikeamitesh.github.io/Sudoku/">
                   Sudoku </a>
                </div>
               <div className="break3">
                   <img className="im" src={Mole} alt="xyz" />
                  <a href=" https://belikeamitesh.github.io/Whac-a-mole-Game/"> Whack a mole </a>
                </div>
               <div className="break3">
                   <img className="im" src={Memory} alt="xyz" />
                   <a href=" https://belikeamitesh.github.io/Memory-Game/">Memory Game </a>
                </div>
               <div className="break3">
                   <img className="im" src={Netflix} alt="xyz"/>
                   <a href="https://www.netflix.com/in/">Netflix</a>
                </div>
               <div className="break3">
                   <img className="im" src={Hotstar} alt="xyz"/>
                   <a href="https://www.hotstar.com/in">Hotstar</a>
                </div>
               <div className="break3">
                <img className="im" src={Prime} alt="xyz"/>
                   <a href="https://www.primevideo.com/">Prime</a>
                </div>
            </div>
        </div>
    )
}

export default Break
