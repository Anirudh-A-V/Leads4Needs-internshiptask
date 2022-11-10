import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// Initial States
const initialState = {
    
}

// State Provider
export const ContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        task: "",
        detail: "",
    });

    const Data = [
        {
            id: 1,
            task: 'John',
            detail: 'Quis ipsum adipisicing fugiat nisi. Dolore sunt deserunt aute aliqua culpa ex consectetur laborum anim irure cupidatat do dolor. Cupidatat commodo tempor consequat labore est est ex elit. Duis exercitation est nulla cillum consequat aliqua esse do occaecat. Exercitation fugiat ea minim et excepteur aliquip aliqua aliqua irure aliqua eiusmod. Velit irure quis dolor do veniam eu consectetur veniam proident. Velit sint commodo cillum sint fugiat exercitation ut do do eiusmod ea et exercitation.'
        },
        {
            id: 2,
            task: 'Doe',
            detail: 'Laboris nulla elit elit minim occaecat in id quis. Ad incididunt dolor cupidatat ea enim deserunt eu duis reprehenderit occaecat anim consequat. Nostrud in nulla id commodo velit velit. Enim mollit id voluptate nulla esse anim occaecat. In dolor cupidatat duis et ut tempor occaecat ullamco irure. Ullamco tempor proident tempor amet proident veniam esse ex sint fugiat qui tempor veniam laborum. Nulla dolore excepteur incididunt et.'
        },
        {
            id: 3,
            task: 'Smith',
            detail: 'Proident dolore anim cupidatat eu id sit fugiat esse est ad deserunt consequat. Non anim officia ex aliqua cillum ipsum ipsum in nostrud quis ullamco Lorem anim. Enim enim pariatur mollit est ut do dolore ex sunt voluptate. Amet irure labore elit nisi id.'
        }
    ];

    const [data, setData] = useState([]);

    const [visible, setVisible] = useState(false);

    return (
        <StateContext.Provider
            value={{
                data,
                setData,
                visible,
                setVisible
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);