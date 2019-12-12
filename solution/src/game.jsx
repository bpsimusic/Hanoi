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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(tower) {
        if (!this.state.clicked) {
            this.setState({clicked: tower});
        } else {
            let firstClickedTower = this.state.clicked;
            this.moveDisk(firstClickedTower, tower);
            this.setState({clicked: null});
        }
    }

    moveDisk(fromTower, toTower) {
        let fromTowerClone = [...this.state[fromTower]]
        let toTowerClone = [...this.state[toTower]]
        let movingDisk = fromTowerClone.pop();
        let isTowerEmpty, topDisk;

        if (toTowerClone.length === 0) {
            isTowerEmpty = true;
        } else {
            topDisk = toTowerClone[toTowerClone.length - 1];
        }

        if (isTowerEmpty || (topDisk.val > movingDisk.val)) {
            toTowerClone.push(movingDisk);

            this.setState({
                ...this.state,
                [fromTower]: [...fromTowerClone],
                [toTower]: [...toTowerClone],
                clicked: null
            }, () => {
                if (this.isGameOver()) {
                    alert('you won!');
                }
            });
        }

    }

    isGameOver() {
        let originalValues = [3,2,1];
        const {middle, right} = this.state;

        let middleComplete = true, rightComplete = true;
        
        if (middle.length !== originalValues.length) {
            middleComplete = false;
        } else {
            let middleTowerValues = middle.map(disk => disk.val)

            for (let i=0; i<middle.length; i++) {
                if (middleTowerValues[i] !== originalValues[i]) {
                    middleComplete = false;
                    break;
                }
            }
        }
       
        if (right.length !== originalValues.length) {
            rightComplete = false;
        } else {
            let rightTowerValues = right.map(disk => disk.val);

            for (let j=0; j<right.length; j++) {
                if (rightTowerValues[j] !== originalValues[j]) {
                    rightComplete = false;
                    break;
                }
            }
        }

        return (middleComplete || rightComplete);
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
                    <div className={`tower ${this.checkIfSelected.call(this, 'left')}`} onClick={this.handleClick.bind(this, 'left')}>
                        {
                            left.map((disk)=>{
                                return <Disk key={disk.val} val={disk.val} className={disk.className}/>
                            })
                        }
                    </div>
                        
                    <div className={`tower ${this.checkIfSelected.call(this, 'middle')}`} onClick={this.handleClick.bind(this, 'middle')}>
                        {
                            middle.map((disk, idx)=>{
                                return <Disk key={disk.val} val={disk.val} className={disk.className}/> 
                            })
                        }
                    </div>
                    <div className={`tower ${this.checkIfSelected.call(this, 'right')}`} onClick={this.handleClick.bind(this, 'right')}>
                        {
                            right.map((disk, idx)=>{
                                return <Disk key={disk.val} val={disk.val} className={disk.className}/>  
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }       
}