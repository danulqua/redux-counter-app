import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
};

const counter = document.querySelector('#counter');

const store = createStore(reducer);
counter.textContent = store.getState();

const inc = () => ({type: 'INC'}),
      dec = () => ({type: 'DEC'}),
      reset = () => ({type: 'RESET'});

const update = () => {
    counter.textContent = store.getState();
}

document.querySelector('#inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.querySelector('#dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.querySelector('#reset').addEventListener('click', () => {
    store.dispatch(reset());
});

store.subscribe(update);