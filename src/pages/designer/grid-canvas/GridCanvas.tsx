import React from "react";
import { fabric } from 'fabric';

import styles from './GridCanvas.less';


export class GridCanvas extends React.Component {

    componentDidMount() {
        const canvas = new fabric.Canvas('grid-canvas', { selection: false });
        const grid = 50;

        // create grid

        for (var i = 0; i < (600 / grid); i++) {
            canvas.add(new fabric.Line([ i * grid, 0, i * grid, 600], { stroke: '#ccc', selectable: false }));
            canvas.add(new fabric.Line([ 0, i * grid, 600, i * grid], { stroke: '#ccc', selectable: false }))
        }

        // add objects

        canvas.add(new fabric.Rect({ 
            left: 100, 
            top: 100, 
            width: 50, 
            height: 50, 
            fill: '#faa', 
            originX: 'left', 
            originY: 'top',
            centeredRotation: true
        }));

        canvas.add(new fabric.Circle({ 
            left: 300, 
            top: 300, 
            radius: 50, 
            fill: '#9f9', 
            originX: 'left', 
            originY: 'top',
            centeredRotation: true
        }));

        // snap to grid

        canvas.on('object:moving', (options) => { 
            if (options?.target) {
                options.target.set({
                    left: Math.round((options.target.left || 0) / grid) * grid,
                    top: Math.round((options.target.top || 0) / grid) * grid
                });
            }
        });
    }

    render() {
        return (
            <canvas id="grid-canvas" className={styles.canvasWrapper} width="600" height="600"></canvas>
        )
    }
}

export default GridCanvas;