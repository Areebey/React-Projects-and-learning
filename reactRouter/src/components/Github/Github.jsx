import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/areebey')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])

  return (
    <div className='flex flex-row justify-evenly  
    text-center text-3xl text-white
     bg-gray-500 p-4  m-4'>Github Followers: {data.followers} 
    <img className='' src={data.avatar_url} alt='Github profile' />
    </div>
  )
}

export default Github

// export const gitHubInfoLoader = async () =>{
//     const response = await fetch('https://api.github.com/users/areebey')
//     return response.json()
// }