import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';

import { useStateContext } from "../context/ContextProvider";
import './styles.css';

const Inputbox = () => {

    const form = useRef();

    const { visible, setVisible, setData, data } = useStateContext();
    const [task, setTask] = useState('');
    const [detail, setDetail] = useState('');

    // const { task_name, task_detail } = formData;

    const handleChangeTask = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setTask(value);
        // console.log(task);
    };

    const handleChangeDetail = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setDetail(value);
        // console.log(detail);
    };

    const sendList = (e) => {
        e.preventDefault();
        console.log(task, detail);

        // axios.post('https://avdev-todo-list-api.vercel.app/api/post', {
        //     task: task,
        //     detail: detail,
        // }).then((res) => {
        //     setData((taskData) => [res.data, ...taskData]);
        //     setTask('');
        //     setDetail('');
        //     setVisible(false);
        //     console.log('submit')
        // }).catch((err) => {
        //     console.log(err.message);
        // });

        fetch('http://avdev-todo-list-api.vercel.app/api/post', {
            method: 'POST',
            body: {
                task: task,
                detail: detail,
            },
            headers: {
                'Allow-Control-Allow-Origin': '*',
                'Content-type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Credentials': true,
            }
        })
            .then((res) => res.json())
            .then((post) => {
                setData((posts) => [post, ...posts]);
                setTask('');
                setDetail('');
                setVisible(false);
                console.log('submit')
            })
            .catch((err) => {
                console.log(err.message);
            });

    }

    return (
        <>
            {visible &&
                <div className='form w-full max-w-lg p-5 mt-5 bg-slate-200 rounded-md justify-center flex flex-col items-center'>
                    <form className='flex flex-col justify-center items-center'>
                        <div className='field m-3 justify-center flex'>
                            <label className='label text-base font-medium text-gray-700 mr-2'>Task Name</label>
                            <input type='text' className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' placeholder='Name' name='task' onChange={handleChangeTask} />
                        </div>
                        <div className='field m-3 justify-start flex '>
                            <label className='label text-base font-medium text-gray-700 mr-2'>Task Details</label>
                            <textarea type='text' className='border-2 text-justify border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' placeholder='Task' name='detail' onChange={handleChangeDetail} />
                        </div>

                        <div>
                            <input type="submit" className='bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={sendList} value="Submit" />
                        </div>

                    </form>
                </div>
            }
        </>
    )
}

export default Inputbox