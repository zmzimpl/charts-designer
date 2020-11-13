import React from 'react';
import _ from 'lodash';
// import RGL, { WidthProvider, Layout } from 'react-grid-layout';
import { GridStack, GridHTMLElement } from 'gridstack';

import styles from './GridCanvas.less';

// const ReactGridLayout = WidthProvider(RGL);
// export interface GridCanvasProps {
//   items: number;
//   onLayoutChange: (layout: Layout[]) => void;
// }

export class GridCanvas extends React.Component {
  
  // static defaultProps = {
  //   className: 'layout',
  //   items: 10,
  //   cols: 12,
  //   rowHeight: 30,
  //   resizeHandles: ['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'],
  //   // This turns off compaction so you can place items wherever.
  //   verticalCompact: false,
  //   preventCollision: true
  // };
  constructor(props) {
    super(props);
    this.state = {
      gridster: null
    }
  }

  componentDidMount() {
    this.state.gridster = GridStack.init();
    this.state.gridster.addWidget({width: 2, content: 'item 1'});
  }

  // state: {
  //   layout: Layout[];
  // };

  // constructor(props: GridCanvasProps) {
  //   super(props);

  //   const layout = this.generateLayout();
  //   this.state = { layout };
  // }

  // generateDOM() {
  //   return _.map(_.range(this.props.items), (i) => {
  //     return (
  //       <div key={i}>
  //         <span className="text">{i}</span>
  //       </div>
  //     );
  //   });
  // }

  // generateLayout() {
  //   const p = this.props;
  //   return _.map(new Array(p.items), (item, i) => {
  //     const y: number = _.result(p, 'y') || Math.ceil(Math.random() * 4) + 1;
  //     return {
  //       x: (i * 2) % 12,
  //       y: Math.floor(i / 6) * y,
  //       w: 2,
  //       h: y,
  //       i: i.toString(),
  //     } as Layout;
  //   });
  // }

  // onLayoutChange(layout: Layout[]) {
  //   this.props.onLayoutChange(layout);
  // }

  render() {
    return (
      <div className={styles.canvasContainer}>
        <div className="grid-stack"></div>
      </div>
    );
  }
}

export default GridCanvas;
