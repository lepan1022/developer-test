import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemfromList, addItemToList } from './redux/actions';


const App = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const wishList = useSelector(state => state.wishList);

    const handleAdd = () => {
        if (input.length == 0) {
            alert("Empty String!");
        } else if (wishList.includes(input)) {
            alert("Duplicate Items!");
            setInput("");
        } else {
            dispatch(addItemToList(input));
            setInput("");
        }      
    };

    const handleRemove = (index) => {
        dispatch(deleteItemfromList(index));
    };

    const handleSubmit = () => {
        if (wishList.length != 0) {
            alert('Wish list submitted to Santa!');
            wishList.map((item, index) => {
                return dispatch(deleteItemfromList(0));
            });
            setInput("");
        } else {
            alert('Your wish list is empty!');
        }
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    return (

        <div className="container">
            <div>
                <h1 className="title">MY WISHLIST</h1>
            </div>
            <div className="content">
                {wishList.map((item, index) => {
                    return <p key={index} className="item" onClick={() => handleRemove(index)}> {item} </p>
                })}
            </div>
            <div className="inputForm">               
                <input className="inputColumn" value={input} type="text" onChange={handleChange} />       
                <div>
                    <button className="addButton" value="Add" onClick={handleAdd}>Add</button>
                </div>
                <button className="submitButton" value="Submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );

}

export default App;


