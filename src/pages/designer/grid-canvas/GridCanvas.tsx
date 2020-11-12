import React from "react";
import _ from "lodash";
import RGL, { WidthProvider, Layout } from "react-grid-layout";

import styles from './GridCanvas.less';

const ReactGridLayout = WidthProvider(RGL);

export interface GridCanvasProps {
  items: number;
  onLayoutChange: (layout: Layout[]) => void;
}

export class GridCanvas extends React.Component<GridCanvasProps> {
    static defaultProps = {
        className: "layout",
        items: 50,
        cols: 12,
        rowHeight: 30,
        // This turns off compaction so you can place items wherever.
        verticalCompact: false
      };

      state: {
        layout: Layout[]
      };
    
      constructor(props: GridCanvasProps) {
        super(props);
    
        const layout = this.generateLayout();
        this.state = { layout };
      }
    
      generateDOM() {
        return _.map(_.range(this.props.items), (i) => {
          return (
            <div key={i}>
              <span className="text">{i}</span>
            </div>
          );
        });
      }
    
      generateLayout() {
        const p = this.props;
        return _.map(new Array(p.items), (item, i) => {
          const y: number = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
          return {
            x: (i * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString()
          } as Layout;
        });
      }
    
      onLayoutChange(layout: Layout[]) {
        this.props.onLayoutChange(layout);
      }
    
      render() {
        return (
          <div className={styles.canvasContainer}>
            <ReactGridLayout
              layout={this.state.layout}
              {...this.props}
            >
              {this.generateDOM()}
            </ReactGridLayout>
          </div>
        );
      }
}

export default GridCanvas;
