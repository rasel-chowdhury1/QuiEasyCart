import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
const AddReview = ({firstName, lastName, image}) => {
    const [showingReviewForm, setShowingReviewForm] = useState(false)
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const handleShowingReviewForm = () => {
        const id = document.getElementById('review-form');
        if (showingReviewForm === false) {
          setShowingReviewForm(true)
        } else {
          setShowingReviewForm(false)
        }
      }

      const onSubmit = (data) =>{
        const review = {
            userName: firstName+" "+lastName,
            image: image,
            content: data.review
        }
        fetch(`http://localhost:3000/addReview`, {
            method: "POST",
            headers: {
               "content-type": 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
        reset();
        handleShowingReviewForm()
      }
    return (
        <div>
        <button onClick={handleShowingReviewForm} className='font-semibold ml-16 border p-2 '>Provide Review</button>
    
        {
          showingReviewForm === true ? <div className='mt-6' id="review-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
               name="" id="" placeholder="write comment" cols="30" rows="3"
               {...register("review", {required: true})}
               ></textarea><br />
              <input type="submit" value="Submit" className='btn bg-blue-600 text-white btn-sm mt-4'/>
            </form>
          </div> : ''
        }
        </div>
    );
};

export default AddReview;