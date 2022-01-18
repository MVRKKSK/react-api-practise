import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Image.css"

import Carousel from "react-elastic-carousel";

const Image = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },

    ];

    function handleChange(){
        window.location.href = "/"
    }

    const [imagedata, setImagedata] = useState(null);

    const url = "https://jsonplaceholder.typicode.com/photos"

    useEffect(() => {
        axios.get(url, {
            params: {
                _limit: 10
            }
        })
            .then((res) => {
                /* console.log(data) */
                setImagedata(res.data);
            })
    }, [])


    return (
        <div>
            <div className='button-image'><button onClick={handleChange} className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Click here for User Api</button></div>
            
            {imagedata && (
                <div className='image-api'>
                    <Carousel breakPoints={breakPoints}>
                        {imagedata.map((image, index) => (
                            <div key={index} class="max-w-sm rounded overflow-hidden shadow-lg">
                                <img class="w-full" src={image.thumbnailUrl} alt={image.title} />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">ImageAPi</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#clubs</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#GDSC</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vitbhopal</span>
                                </div>
                                <div className="border-t border-gray-200"></div>
                            </div>
                        ))}
                    </Carousel>
                </div>


            )
            }
        </div >
    )
}

export default Image
