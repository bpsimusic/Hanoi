import React from 'react';
import Game from './game';
import TestRenderer from 'react-test-renderer';

let testGame, instance;
beforeEach(() => {
    testGame = TestRenderer.create(
        <Game />
    );
    instance = testGame.getInstance();
});

describe('Game', () => {
    describe('check method moveDisk', () => {
        
        //moves the smallest disk from the left tower to the middle tower
        beforeEach(() => {
            instance.moveDisk('left', 'middle');
        });

        //checks that disk is moved from one tower to another tower
        it('should move one disk from 1 tower to another', () => {
            expect(instance.state.left).toHaveLength(2);
            expect(instance.state.middle).toHaveLength(1);
        });
        
        //checks if moving a big disk on top of a smaller disk is allowed.
        it('Disk should not be placed on a smaller disk', () => {
            instance.moveDisk('left', 'right');
            instance.moveDisk('right', 'middle');
            expect(instance.state.middle).toHaveLength(1);
            expect(instance.state.right).toHaveLength(1);
        });

        //if disk is moved to tower that contains disks, numbers must be ordered from biggest to smallest
        it('Disks should be ordered from biggest value to smallest value', () => {
            instance.moveDisk('left', 'right');
            instance.moveDisk('middle', 'right');
            expect(instance.state.right.map((disk)=>{
                return disk.val;
            })).toEqual([2,1]);
        });
    });

    xdescribe('check method isGameOver', () => {
        window.alert = jest.fn();

        //doesn't complete game
        it('Should return false if game is not over', () => {
            expect(instance.isGameOver()).toBe(false);
        });

        //completes Game
        it('Should return true if game is over', () => {
            instance.moveDisk('left', 'middle');
            instance.moveDisk('left', 'right');
            instance.moveDisk('middle', 'right');
            instance.moveDisk('left', 'middle');
            instance.moveDisk('right', 'left');
            instance.moveDisk('right', 'middle');
            instance.moveDisk('left', 'middle');
            expect(instance.isGameOver()).toBe(true);
        }); 
    });
});

