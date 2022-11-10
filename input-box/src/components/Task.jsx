import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import { useStateContext } from "../context/ContextProvider";
import './styles.css';

const Task = () => {
    const { data, setData } = useStateContext();

    // const fetchData = () => {
    //     return axios.get("http://avdev-todo-list-api.vercel.app/api/getAll")
    //         .then((response) => setData(response.data))
    //         .catch((error) => console.log(error.message));
    // }

    useEffect(() => {
        fetch("https://avdev-todo-list-api.vercel.app/api/getAll",
            {
                method: 'GET',
                headers: {
                    'Allow-Control-Allow-Origin': '*',
                    'Content-type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Credentials': true,
                },
            })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => {
                console.log(err.message);
            });
        // fetchData();
    }, []);

    return (
        <div className='list w-full max-w-2xl p-5 mt-5 bg-slate-100 rounded-md justify-center flex flex-col items-start'>
            {data.map((item, index) => {
                return (
                    <>
                        <div className='mt-3' index={index}>
                            <h3 className='text-lg font-bold text-gray-900 mr-2'>{item.task}</h3>
                        </div>
                        <div className='mb-3'>
                            <p className='text-sm font-normal text-gray-700 mr-2 text-justify'>{item.detail}</p>
                        </div>
                    </>
                )
            })}
            {/* <div className='m-3'>
                 <h3 className='text-lg font-bold text-gray-900 mr-2'>Task Name</h3>
             </div>
             <div className='m-3'>
                 <p className='text-sm font-bold text-gray-700 mr-2'>Task Details</p>
             </div> */}
        </div>
    )
}

export default Task