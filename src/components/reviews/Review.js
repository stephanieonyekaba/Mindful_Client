import React from 'react'
import { useState, useEffect, setState } from 'react'
import { GoChevronLeft, GoChevronRight, ImQuotesLeft } from 'react-icons'
import {getAllReviews} from "../../api/reviews_api"
import { Card } from 'react-bootstrap'

function Review() {
const [reviews, setReviews] = useState(null);
// const [index, setIndex] = useState(0); 
// const {name, quote} = reviews[index]

useEffect(() => {
  getAllReviews()

  .then (res => {
    console.log('this is the object returned from reviews ', res.data.reviews)
    setReviews(res.data.reviews)
  })
  .catch(console.error)
}, [])

if (!reviews) {
  return <p>Loading</p>
}
else if (reviews.length === 0) {
  return <p>No reviews</p>
}
if (reviews.length > 0) {
  reviews.Jsx = reviews.map(reviews => (
<div class="card border-0">
      <div class="body" className='review_text_container' >
      <img className="review_img" src={reviews.img_url} alt="Card image"></img>
          <h1 className='review_name'>{reviews.name}</h1>
          <p class="review_quote">{reviews.quote}</p>
      </div>


</div>

))

} 


























  return (
    <div className='review'>
        <div className='review_img'>
      {reviews.Jsx[0]}
        </div>
    </div>
  )
}

export default Review