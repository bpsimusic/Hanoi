import React from 'react';
import Disk from './disk';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: [{val: 3, className: 'large'},{val: 2, className: 'medium'},{val: 1, className: 'small'}],
            middle: [],
            right: [],
            clicked: null
        }

        this.checkIfSelected = this.checkIfSelected.bind(this);
    }

    //implement this method
    handleClick() {
       
    }

    //implement this method
    moveDisk(fromTower, toTower) {
    
    }
    
    //implement this method
    isGameOver() {
        
    }

    checkIfSelected(tower) {
        if (this.state.clicked === tower) {
            return 'selected';
        } else {
            return '';
        }
    }

    render() {
        const {left, middle, right} = this.state;
        return (
            <div>
                <div className="title">Towers of Hanoi</div>
                <div className="game">
                    <div className={`tower ${this.checkIfSelected('left')}`}>
                        {
                            left.map(({val, className})=>{
                                return <Disk key={val} val={val} className={className}/> 
                            })
                        }
                    </div>
                        
                    <div className={`tower ${this.checkIfSelected('middle')}`}>
                        {
                            middle.map(({val, className})=>{
                                return <Disk key={val} val={val} className={className}/> 
                            })
                        }
                    </div>
                    <div className={`tower ${this.checkIfSelected('right')}`}>
                        {
                            right.map(({val, className})=>{
                                return <Disk key={val} val={val} className={className}/> 
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }       
}