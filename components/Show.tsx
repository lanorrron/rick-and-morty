import axios from 'axios'
import {useEffect, useState} from "react";

export default function show() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.data.results)
                console.log(response.data.results)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {characters.map((item) => (
                <div className="flex flex-col items-center">
                    <h1 className="text-xl">{item.name}</h1>
                    <p className={'text-xl text-red-500'}>{item.species}</p>
                    <img className="mt-2" src={item.image} alt={'image' + item.name} />
                </div>
            ))}
        </div>

    )
}