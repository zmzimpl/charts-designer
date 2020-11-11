import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { MzSafeAny } from "@/models/basic/custom-type";

const ReactGridLayout = WidthProvider(RGL);

export class GridCanvas extends React.Component<{}> {
    static defaultProps = {
        className: "layout",
        items: 50,
        cols: 12,
        rowHeight: 30,
        onLayoutChange: function() {},
        // This turns off compaction so you can place items wherever.
        verticalCompact: false
      };
    
      constructor(props: MzSafeAny) {
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
        return _.map(new Array(p.items), function(item, i) {
          const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
          return {
            x: (i * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString()
          };
        });
      }
    
      onLayoutChange(layout: MzSafeAny) {
        this.props.onLayoutChange(layout);
      }
    
      render() {
        return (
          <ReactGridLayout
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}
            {...this.props}
          >
            {this.generateDOM()}
          </ReactGridLayout>
        );
      }
}

export default GridCanvas;
