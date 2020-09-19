import React, { useState } from 'react';

export const SearchBar = ({ updateGifs, clearGif }) => {
    const [query, setQuery] = useState("")

    const listenInputValue = (e) => setQuery(e.target.value)
    const submit = async (e) => {
        e.preventDefault()
        const result = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=nSy3pd7LToX57MK3qcW4gfslzZzm4VC5`)
        .then(result => result.json())
        .then(res => res.data)

        updateGifs(result)    
    }

    const clearGifTrigger = (e) => {
        e.preventDefault();
        clearGif()
    }

    return (
        <div>
            <h3>Giphy party.</h3>
            <div className="row">
                <div className="col col-md-6">
                    <div onChange={e => listenInputValue(e)} className="search">
                        <input type="text" />
                        <button type="submit" className="btn btn-primary" onClick={e => submit(e)}>Search</button>
                    </div>

                </div>
                <div className="col col-md-6">
                    <button type="button" className="btn btn-danger" onClick={e => clearGifTrigger(e)}>Clear</button>
                </div>
            </div>

        </div>
    )
}