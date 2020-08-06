import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Quote.css';

const Quote = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        axios.get('https://type.fit/api/quotes')
        .then((response) => {
            const num = Math.round(Math.random() * response.data.length);
            setQuote(response.data[num].text);
            setAuthor(response.data[num].author);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div id = "quote-box" className = "container">
            <h5 id = "quote">"{quote}"</h5>
            <h6 id = "author">- {author || "Unknown"}</h6>
            {/* <button className = "btn btn-sm btn-info" onClick = {() => getQuote()}>new quote</button> */}
        </div>
    )

}

export default Quote; 