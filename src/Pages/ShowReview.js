import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';

const ShowReview = () => {

    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/review').then(res => res.json()));
   if(isLoading){
       return <Loading></Loading>
   }
    return (
         <div className='mx-12 mt-12'>
              <h1 className='text-2xl font-bold text-center mb-6'>Clients Reviews</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

            {
                reviews.map(review => <div key={review._id} review={review}>

                    <div class="card text-center shadow-xl">
                        <div class="card-header">
                            <div class="avatar">
                                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="text-center">{review.name}</h5>
                            <p class="card-text">{review.des}</p>

                        </div>
                        <hr />
                        <div class="card-footer text-muted">2 days ago</div>
                    </div>
                </div>)
            }

        </div>
        </div>
    );
};

export default ShowReview;