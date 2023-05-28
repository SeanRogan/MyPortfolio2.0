"use client"
import {useState} from 'react';

export default function ProjectCarousel({items}){
    const[index, setIndex] = useState(0);
    const next = () => {
        setIndex((index + 1)% items.length);
    }
    const prev = () => {
        setIndex((index - 1 + items.length) % items.length)
    }

    return(
        <div className="carousel">
            {items[index]}
            <button onClick={next}>Next</button>
            <button onClick={prev}>Prev</button>
        </div>
    )
}