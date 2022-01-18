import React, { useState, useEffect } from 'react'

import Carousel from "react-elastic-carousel";

const Image = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },

    ];

    const [imagedata, setImagedata] = useState(null);

    const url = "https://jsonplaceholder.typicode.com/photos"

    useEffect(() => {
        showData();
        async function showData() {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
           /*  console.log(data.id)

            if((data.id)<=30){
                setImagedata(data);
            } */

           
        }
    }, [])


    return (
        <div>
            {imagedata && (
                <div>
                    <Carousel itemsToShow={1} breakPoints={breakPoints}>
                        {imagedata.map((image, index) => (
                            <div key = {index}>
                                <img class="w-full" src={image.thumbnailUrl} alt={image.title}/>
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">Image Api</div>
                                    <p class="text-gray-700 text-base">
                                        {image.title}
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>

                            </div>
                        ))}
                    </Carousel>
                </div >
            )}
        </div >
    )
}

export default Image
