import React from 'react'

function Card({username, btnText="Visit here"}) {
    console.log(username);
  return (
    <div className="max-w-xs m-5 rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/28/17/34/girl-7883816_640.jpg"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default Card