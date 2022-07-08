import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Swal from 'sweetalert2'

const Review = () => {
    const [user] = useAuthState(auth)
    const addReview = e => {
        e.preventDefault()

        const review = {
            name: e.target.name.value,
            company: e.target.company.value,
            des: e.target.des.value,
            //  photo: user.photoURL
        }
        fetch('https://protected-shore-34848.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // toast("Thank's for your review")
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Thanks for your review',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset()
            })



    }
    return (
        <div>
            <h1 className='text-xl font-semibold ml-8'>Please Sent Your review </h1>

            <form onSubmit={addReview} className='md:w-2/4 p-8'>
                <input className='w-full py-4 px-5 rounded-md' name='name' type="text" placeholder='Your name ' />
                {/* <input className='w-full py-4 px-5 rounded-md' name='photo'value={user?.photoURL || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACeCAMAAAD0W0NJAAAAMFBMVEXk5ueutLepr7PY29zn6eq8wcO0ubze4OLh4+TN0dPKztDq7O3CxsjV2NrGysy4vb8Uzc+UAAADmUlEQVR4nO2b27LqIAxAKQQKvf7/3x5Qt1atNoQSnDNZT/q2JkCAkColCIIgCIIgCIIgCIIgCAIDMILvIz79ai3zAow+THZ1idVOs/8hQ/Bm0lp3D+KfwaifMAQV1m7rdjPsbIDmglHuzexu6ObGfjCv74HbCNq+pSAsX9yuDO38vPsWur8A+jZy0LtDuYRrs0LMcehufr6Bn0HKJT/2FAg93i75MeNx8+4Py2sHU5Zdp1nzCwTssrj7GUY/nykXWfnslM3XYxzeOd8u+nHpjStFr1t4/AC9XTzjeh49wsxL6MCil7GbvYSPRe/z8fgofIZDj7YwEtNY387TFsYFhrU7F+jV39lG4rq9EOrr5Z2knqmfmQmngQf1r0XkrJdwtfWAdBy4U12PnJQv1N52y/Sq7xswiN7/q1c29357adRfuUV5r3paVlm1FX49VaI3Vbcj3iKv1D+xIMrJn6l/3sMXRXfguOnS7RzDVUhllvYesFSB6IlZ8zwhUG8bPBVcmIiLg2HdXiBWqJieh2Ch+Gmu4NH2XcdWvIWBED6W8tTNL9/Ocj5sZA8v39AmsoeX+dk+M/mxrdo7Fu+nmd4Mtnj0uVRPLZ7D4WsTxsZuaCAX8ajxbTGyV0ZMyaBhqw2Yg1aRxn026Wb0RdDxJ5RXv376IKi7oUWHyBt+2BN04SfkIgBmsU7f6Zwd+h9qMIyCqjfzsFg7LWE2/W+0Fm4AgPEGtG8r3BC1YujMHIYb4Rq/sfHwpiB5M09292bpVhuipWoTShi9CcvaPfe0vqQWreMimT27IaiQYobac2McB8a9A5QZ3JeY7TsuM0saHNVgUVF7E1yn2rkwBs5mxu1J0dUMIYwh4wS/L7gOlTI2qLnkIfzBUiOCYJBn90N0d/phAQq6V3Y4t1sdFKkm9YUzT9HnjeuWcFYdnFKPOkaf0m0NfWky+ew3FwcQihpDjgRLb0qFfSGHfmVvgGPZ4zLCr6QqSatx5/mt5AUy1rfr6P3WpAI3AdpjUWFTAx7S/IOeJ3YdrcSG/BDoHL/s/EftnSaS+dzGtSz+yHv2qLqV7ZI3vLxDm8jogoCS3mQiFn96KWr+JYL/mCj/Q6UzwG8e/DMvgX3wbTDzOvzTVu4ncqf5ISdfk+Bht7YWWeUK6uRS9MVDEahPsTK/HT0TTGnDNNPDTD62Q/IOiGsl91FqC+ZW1CjrXUDorbodiEOzaQgieoIgCIIgCL/GP9yQLW3pelrhAAAAAElFTkSuQmCC'} type="text" placeholder='photo ' /> */}
                <input className='w-full py-4 px-5 mt-4 rounded-md' name='company' type="text" placeholder='Company’s name, Designation' />
                <input className='w-full py-8 px-5 mt-4 rounded-md' name='des' type="text" placeholder='Description' />
                <button className='px-12 py-3 mt-6 bg-[#111430] text-white font-semibold rounded-md'>Submit</button>
            </form>
        </div>
    );
};

export default Review;