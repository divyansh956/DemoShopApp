import { useState } from 'react';
import './ProductForm.css'

function ProductForm(props) {

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    const [newAmount, setAmount] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        //console.log(event.target.value);
    }
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }
    function amountChangeHandler(event) {
        setAmount(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate,
            amount: newAmount
        };

        //console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
        setAmount('');
    }

    return (<form onSubmit={submitHandler}>
        <div className='new-product_controls'>
            <div className='new-product_control'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product_control'>
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateChangeHandler}></input>
            </div>
            <div className='new-product_control'>
                <label>Amount</label>
                <input type='text' value={newAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </div>

    </form>)
}

export default ProductForm;