import React from 'react';
import { useRecoilValue } from 'recoil';
import { counterState, counterLabelSelector } from './states/counter';
import Counter from './components/Counter';

function App() {
    const counter = useRecoilValue(counterState);
    const counterLabel = useRecoilValue(counterLabelSelector);

    return (
        <div>
            <Counter/>
            <div>counter : {counter}</div>
            <div>counterLabel : {counterLabel}</div>
        </div>
    );
}

export default App;
