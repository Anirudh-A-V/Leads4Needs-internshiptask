import React, { useEffect, useState, useRef } from 'react'
import { useStateContext } from "../context/ContextProvider";
import axios from 'axios';

const Inputbox = () => {

    const form = useRef();

    const { formData, setFormData, data } = useStateContext();
    const [task, setTask] = useState('');
    const [detail, setDetail] = useState('');
    const [taskData, setTaskData] = useState([]);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const submit = () => {
        console.log('submit')
        setIsSubmitted(true);
    }
    const { task_name, task_detail } = formData;

    const handleChangeTask = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setTask(value);

        // data.push({ task: task_name, detail: task_detail });
    };

    const handleChangeDetail = (e) => {
        const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setDetail(value);

        // data.push({ task: task_name, detail: task_detail });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/api/post', {
                task: task,
                detail: detail,
            })
            .then((res) => {
                setTaskData((taskData) => [res.data, ...taskData]);
                setTask('');
                setDetail('');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <div className='w-full max-w-lg p-5 mt-5 bg-slate-200 rounded-md justify-center flex flex-col items-center'>
            {/* {data.map((item, index) => {
                return (
                    <div className='flex flex-col items-center' key={index}>
                        <label className='text-slate-100 font-bold text-xl'>{item.label}</label>
                        <input className='w-80 h-10 mt-2 rounded-md' type={item.type} placeholder={item.placeholder}/>
                    </div>
                )
            })} */}
            <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center'>
                <div className='m-3 justify-center'>
                    <label className='text-lg font-medium text-gray-700 mr-2'>Task Name</label>
                    <input type='text' className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' placeholder='Name' value={task_name} name='task' onChange={handleChangeTask} />
                </div>
                <div className='m-3 justify-start flex'>
                    <label className='text-lg font-medium text-gray-700 mr-2'>Task Details</label>
                    <textarea type='text' className='border-2 text-justify border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' placeholder='Task' value={task_detail} name='detail' onChange={handleChangeDetail} />
                </div>
                <div>
                    <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={submit} value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Inputbox