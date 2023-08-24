import React, {useEffect, useState} from "react";
import {MDBBtn, MDBInput} from "mdb-react-ui-kit";

const CompanyCouponsForm = ({ handleSubmit }) => {
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('Food'); // Default category
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [amount, setAmount] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            companyName,
            email,
            password,
            category,
            title,
            description,
            startDate,
            endDate,
            amount,
            price,
            imageUrl,
        };
        handleSubmit(formData, e);
    };

    return (
        <form onSubmit={handleFormSubmit} id="form2">
            <MDBInput className='mb-4' id='company-name'
                      label='Company name'
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
            />
            <MDBInput className='mb-4' type='email' id='company-email' label='Email address'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput className='mb-4' type='password' id='company-password' label='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
            />
            <select className='form-select mb-4' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Electricity">Electricity</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Vacation">Vacation</option>
            </select>
            <MDBInput className='mb-4' id='coupon-title' label='Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
            />
            {/* Add inputs for other fields (description, startDate, endDate, amount, price, imageUrl) */}
            <MDBBtn type="submit">Save</MDBBtn>
        </form>
    );
};

export default CompanyCouponsForm;
