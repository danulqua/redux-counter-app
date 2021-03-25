import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, res}) => {
    return (
        <main>
            <div id="counter">{counter}</div>
            <div class="controlls">
                <button id="inc" onClick={inc}>
                    <img src="./icons/Plus.svg" alt=""></img>
                </button>
                <button id="dec" onClick={dec}>
                    <img src="./icons/Minus.svg" alt="Minus"></img>
                </button>
                <button id="reset" onClick={res}>
                    <img src="./icons/Reset.svg" alt="Reset"></img>
                </button>
            </div>
        </main>
    );
};

const mapStateToProps = state => ({counter: state});

export default connect(mapStateToProps, actions)(Counter);