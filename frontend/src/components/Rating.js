import React from 'react'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

import { FaStarHalfAlt } from "react-icons/fa";

function Rating({ value, text, color }) {
   
    return (
        <div className="rating">
            <span>
                <i style={{ color }} className={
                    value >= 1
                        ? 'fas fa-star'
                        : value >= 0.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                     {
                        value >= 1
                            ? <AiFillStar />
                            : value >= 0.5
                                ? <FaStarHalfAlt />
                                : <AiOutlineStar />}

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 2
                        ? 'fas fa-star'
                        : value >= 1.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                     {
                        value >= 2
                            ? <AiFillStar />
                            : value >= 1.5
                                ? <FaStarHalfAlt />
                                : <AiOutlineStar />}


                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 3
                        ? <h1>hi</h1>
                        : value >= 2.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
                 {
                        value >= 3
                            ?<AiFillStar />
                            : value >= 2.5
                                ? <FaStarHalfAlt />
                                :<AiOutlineStar />}

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 4
                        ? 'fas fa-star'
                        : value >= 3.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>

                    {
                        value >= 4
                            ? <AiFillStar />
                            : value >= 3.5
                                ? <FaStarHalfAlt />
                                : <AiOutlineStar />}

                </i>
            </span>

            <span>
                <i style={{ color }} className={
                    value >= 5
                        ? 'fas fa-star'
                        : value >= 4.5
                            ? 'fas fa-star-half-alt'
                            : 'far fa-star'
                }>
 {
                        value >= 5
                            ? <AiFillStar />
                            : value >= 4.5
                                ? <FaStarHalfAlt />
                                : <AiOutlineStar />}

                </i>
            </span>

            <span>{text && text}</span>
        </div>
    )
}

export default Rating
