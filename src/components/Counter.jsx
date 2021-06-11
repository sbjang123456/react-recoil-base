import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../states/counter';

const Counter = () => {
    const [counter, setCounter] = useRecoilState(counterState);
    const [state, setState] = useState({});

    const handleChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: Number(evt.target.value)
        })
    };

    const handleClickPlus = () => {
        setCounter(counter + (state?.plus ?? 1));
    };
    const handleClickMinus = () => {
        setCounter(counter - (state?.minus ?? 1));
    };

    return (
        <div>
            <input type="text" name="plus" value={state?.plus} onChange={handleChange} />
            <button onClick={handleClickPlus}>+</button>
            <input type="text" name="minus" value={state?.minus} onChange={handleChange} />
            <button onClick={handleClickMinus}>-</button>
        </div>
    );
}

export default Counter;