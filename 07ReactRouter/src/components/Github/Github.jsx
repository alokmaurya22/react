import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
    /*
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://api.github.com/users/alokmaurya22')
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    */
    return (
        <>
            {data ? (
                <div className='bg-gray-600 text-center m-4 p-4 text-3xl text-white'>
                    Github Followers: {data.followers}
                    <img src={data.avatar_url} alt="Github Picture" width={300} />
                </div>
            ) : (
                <div className='bg-gray-600 text-center m-4 p-4 text-3xl text-white'>
                    Loading...
                </div >
            )
            }
        </>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const responce = fetch('https://api.github.com/users/alokmaurya22')
    return (await responce).json();

}