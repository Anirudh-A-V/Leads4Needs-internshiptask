import React, { useEffect } from 'react'
import { useStateContext } from "../context/ContextProvider";

const Task = () => {
    const { data } = useStateContext();

    return (
        <div className='w-full max-w-lg p-5 mt-5 bg-slate-100 rounded-md justify-center flex flex-col items-start'>
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