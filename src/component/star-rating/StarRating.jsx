import React, { useState } from 'react'
import "./styles.css"
import { FaStar } from 'react-icons/fa'

export default function StarRating({noOfStars}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    const handleClick = (idx) => {
        // console.log("handleClick", idx)
        setRating(idx);
    }
    const handleMouseLeave = (idx) => {
        // console.log("handleMouseLeave", idx)
        setHover(rating)
    }
    const handleMouseMove = (idx) => {
        // console.log("handleMouseMove", idx)
        setHover(idx)

    }

  return (
    <div >
        {[...Array(noOfStars)].map((_, idx) => {
            idx += 1;
            return <FaStar className={idx <= (hover || rating) ? "active" : "not-active"}
                key = {idx}
                onClick={() => handleClick(idx)}
                onMouseLeave={() => handleMouseLeave(idx)}
                onMouseMove={() => handleMouseMove(idx)}
                size = {40}
            />
        })}
    </div>
  )
}
