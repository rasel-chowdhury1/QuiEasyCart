import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
const AddReview = ({firstName, lastName, userProfile, product}) => {
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
            product: product,
            userProfile: userProfile,
            content: data.review
        }
        console.log(review)
        fetch(`https://quieasycarts.onrender.com/addReview`, {
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
        <button onClick={handleShowingReviewForm} className='font-semibold border p-2 '>Provide Review</button>
    
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