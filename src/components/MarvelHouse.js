import axios from "axios"
import React, {useState, useEffect} from "react"
import HeroesCard from "./HeroesCard"
import Loader from "./Loader";
import imgDefault from '../assets/images/marvel-logo.jpeg'
import LayoutFront from "./LayoutFront";

import {api_key, api_hash} from "../config/config";

const MarvelHouse = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [ offset, setOffset ] = useState(100)
    const [ displayFav, setDisplayFav ] = useState(false)
    const hash = api_hash
    const key_api = api_key

    const baseURL = 'https://gateway.marvel.com:443/v1/public/characters?limit=20&offset='

    useEffect(() => {
        axios.get(baseURL + offset + '&apikey=0717f0737b1fff6970186375b776948d&hash={$hash}').then(function(res){
            console.log(res.data.data)
            setItems(res.data.data.results)
            setLoading(false)
        }).catch(function(e){
            console.log(e, 'hum hum ça marche pas!!')
        })
    },[offset])

    const prevPage = () => {
        if(offset === 0){
            return null
        } else {
            setOffset(offset - 20)
        }
    }
    const nextPage = () => {
        if(offset > 1562){
            return null
        }
        setOffset(offset + 20)
    }

    return (
        <LayoutFront>
            <div className="w-full pt-48 pb-100 px-32 bg-gradient-to-t from-black to-[#871A02] flex flex-col justify-center">
                {loading
                    ? (<div className="flex justify-center w-full"><Loader /></div>)
                    : (
                        <div>
                            <button>
                                <span className='underline text-black' >Mes favoris</span>
                            </button>

                            <div className='flex justify-center space-x-16 mb-24'>
                                <button
                                    className={'p-10 rounded-s border-2 border-black text-xl hover:bg-black hover:text-[#871A02] ' + (offset == 0 ? 'hidden' : 'block') }
                                    onClick={prevPage}
                                >
                                    Précédent
                                </button>
                                <button
                                    className={'py-10 px-24 rounded-s border-2 border-black text-xl hover:bg-black hover:text-[#871A02] ' + (offset > 1100 ? 'hidden' : 'block') }
                                    onClick={nextPage}
                                >
                                    Suivant
                                </button>
                            </div>
                            <div className="flex flex-wrap justify-between gap-x-24 gap-y-24 pr-0">
                                {items.map((v,i)=>(
                                    <HeroesCard
                                        key={'marvel_heroes_' + i + v.id}
                                        img={v.thumbnail.extension == 'gif' ? v.thumbnail.path + '/portrait_fantastic.gif' : v.thumbnail.path + '/portrait_fantastic.jpg'}
                                        name={v.name}
                                        description={v.description ? v.description : "Aucune description disponible pour ce Héro"}
                                        comics={v.comics.available}
                                        titleComics={v.stories.items.slice(0,3).map((v,i) => (
                                            <span className="flex flex-col" key={'titleComics_' + i}>- {v.name}</span>
                                        ))}
                                    />
                                ))}
                            </div>
                            <div className='flex justify-center space-x-16 mt-32'>
                                <button
                                    className={'p-10 rounded-s border-2 border-[#871A02] text-xl text-[#871A02] hover:bg-[#871A02] hover:text-black  ' + (offset == 0 ? 'hidden' : 'block') }
                                    onClick={prevPage}
                                >
                                    Précédent
                                </button>
                                <button
                                    className={'py-10 px-24 rounded-s border-2 border-[#871A02] text-xl text-[#871A02] hover:bg-[#871A02] hover:text-black ' + (offset > 1100 ? 'hidden' : 'block') }
                                    onClick={nextPage}
                                >
                                    Suivant
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </LayoutFront>
    )
}

export default MarvelHouse;