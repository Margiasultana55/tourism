
import React, { useEffect, useState, } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './Book.css'
import useAuth from '../../hook/useAuth';
import { getStoredCart } from '../Shop/Shop';

const Book = () => {

    const [bookings, setBookings] = useState([]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const saveCart = getStoredCart();
        data.order = saveCart;

        fetch('http://localhost:5000/userss', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('order process successfull');
                    reset();
                }

            })
    };



    const { serviceId } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(bookings => {
                const service = bookings.find(data => data._id === serviceId);
                setBookings(service);
            });
    }, [serviceId])



    console.log(bookings);
    const { name, picture, description } = bookings;
    return (
        <div>



            <img className='w-100 pic' src={picture} alt="" height="300" width="300" />
            <h2 className=' text-center mt-5  text-primary '>Booking for {name} package..</h2>
            <p className='description container mt-4 mb-5 w-50 '>{description}.</p>




            <form className="booking-form mb-5" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="name" defaultValue={user.displayName} {...register("name")} />

                <input placeholder="email" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input className='submit-btn' type="submit" />
            </form>
        </div>
    );
};

export default Book;