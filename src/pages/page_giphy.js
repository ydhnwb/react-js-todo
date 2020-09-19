import React, { useEffect, useState } from 'react';
import { SearchBar } from '../components/search_bar';

export function PageGiphy(){
    const [gifs, setGifs] = useState([])

    const clear = () => {
        if(gifs.length > 0){
            setGifs([gifs[0]])
        }
    }

    const updateGifs = (newGifs) => {
        setGifs(gifs.concat(newGifs[Math.floor(Math.random() * newGifs.length)]))
    }

    const init = async () => {
        const randomQuery = ["eat", "fun", "sad", "dog"]
        const i = Math.floor(Math.random() * randomQuery.length - 1);
        const result = await fetch(`https://api.giphy.com/v1/gifs/search?q=${randomQuery[i]}&api_key=nSy3pd7LToX57MK3qcW4gfslzZzm4VC5`)
          .then(result => result.json())
          .then(res => res.data)
        updateGifs(result)
    }

    useEffect(() => {
        init();
    }, [])

    return(
        <div>
            <SearchBar updateGifs={updateGifs} clearGif={clear}/>
            <div className="row">
            {
                gifs.map((data, index) => {
                return (
                    <div className="card col-md-4 p-4" key={index}>
                    <iframe src={data.embed_url} className="cover" alt="..." />
                    </div>
                )
                })
            }
            </div>

        </div>
    )
}