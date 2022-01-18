import React, { useState, useEffect } from 'react'
import Carousel from "react-elastic-carousel";
import "./user.css"

const User = () => {

  const [details, setDetails] = useState(null);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },

  ];
  function handleChange(){
    window.location.href = "/imagesapi"
  }


  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
    }
  }, [])

  return (
    <div className='user-main'>
 <div className='button-image'><button onClick={handleChange} className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Images Api</button></div>
      {details && (
        <div>
          <Carousel breakPoints={breakPoints}>

            {details.map((detail, index) => (
              <div key={index}>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="border-t border-gray-200"></div>
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Users Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                  </div>
                  <div className="border-t border-gray-200">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Full name</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.name}</dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Contact</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.phone}</dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.email}</dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Website</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.website}</dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {detail.address.street} ,{detail.address.suite},{detail.address.city},{detail.address.zipcode}
                        </dd>
                      </div><div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Company</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.company.name}</dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">CatchPhrase</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{detail.company.catchPhrase}</dd>
                      </div>
                      <div className="border-t border-gray-200"></div>


                    </dl>
                  </div></div>
              </div>
            ))}
          </Carousel>
        </div>

      )}


    </div>
  )
}

export default User
