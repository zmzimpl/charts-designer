import React from 'react';
// import { fabric } from 'fabric';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';
import {GridStack} from 'gridstack';
// THEN to get HTML5 drag&drop
// OR to get legacy jquery-ui drag&drop
import 'gridstack/dist/jq/gridstack-dd-jqueryui';
import styles from './GridCanvas.less';

export class GridCanvas extends React.Component {
  grid!: GridStack;

  componentDidMount() {
    this.initCanvas();
    this.initListener();
    this.drawGrid();
    this.drawWidget();


    onresize = () => {
        this.resizeCanvas();
    }
  }

  initCanvas() {
    // const container: HTMLDivElement = document.getElementById('grid-container') as HTMLDivElement;
    // const canvas = new fabric.Canvas('grid-canvas', {
    //     selection: false,
    //     height: container.clientHeight,
    //     width: container.clientWidth,
    // });
    this.grid = GridStack.init({
      resizable: {
        handles: 'e, se, s, sw, w'
      },
      column: 84,
      cellHeightUnit: 'px',
      minWidth: 2,
      float: true,
      minRow: 42,
    });
    const item = {x: 2, y: 0, width: 12, height: 8 , content: 'item 1'};
    const item2 = {x: 14, y: 0, width: 12, height: 8 , content: 'item 2'};
    this.grid.addWidget(item);
    this.grid.addWidget(item2);
  }

  drawGrid() {
    // const container: HTMLDivElement = document.getElementById('grid-container') as HTMLDivElement;
    // const options = {
    //     distance: 10,
    //     width: container.clientWidth,
    //     height: container.clientHeight,
    //     param: {
    //       stroke: '#ebebeb',
    //       strokeWidth: 1,
    //       selectable: false,
    //     },
    //   };
    //   if (options) {
    //     const gridLen = options.width / options.distance;
  
    //     for (var i = 0; i < gridLen; i++) {
    //       const distance = i * options.distance,
    //         horizontal = new fabric.Line([distance, 0, distance, options.width], options.param),
    //         vertical = new fabric.Line([0, distance, options.width, distance], options.param);
    //       this.gridCanvas.add(horizontal);
    //       this.gridCanvas.add(vertical);
    //       if (i % 5 === 0) {
    //         horizontal.set({ stroke: '#cccccc' });
    //         vertical.set({ stroke: '#cccccc' });
    //       }
    //     }
    //   }
  }

  drawWidget() {
    // this.gridCanvas.add(new fabric.Rect({
    //     left: 100,
    //     top: 100,
    //     width: 50,
    //     height: 50,
    //     fill: '#faa',
    //     originX: 'left',
    //     originY: 'top',
    //     centeredRotation: true
    // }));
    // this.gridCanvas.add(new fabric.Circle({
    //     left: 300,
    //     top: 300,
    //     radius: 50,
    //     fill: '#9f9',
    //     originX: 'left',
    //     originY: 'top',
    //     centeredRotation: true
    // }));
  }

  initListener() {
    // this.gridCanvas.on('object:moving', (options) => {
    //     if (options?.target) {
    //         options.target.set({
    //             left: Math.round((options.target.left || 0) / 10) * 10,
    //             top: Math.round((options.target.top || 0) / 10) * 10
    //         });
    //     }
    // });
  }

  resizeCanvas() {
      setTimeout(() => {
        //   this.drawGrid();
      }, 66);
  }

  render() {
    return (
      <div className={styles.canvasContainer} id="grid-container">
        <div className={styles.gridStackWrapper + ' grid-stack'}></div>
      </div>
    );
  }
}

export default GridCanvas;
