import React from 'react';


class DesignerLayout extends React.Component<{}> {
  
    componentDidMount() {
      this.setState({
        isReady: true,
      });
    }
  
    render() {
      const { children } = this.props;
      console.log(children);
      return (
        <div>
          {children}
        </div>
      );
    }
  }

export default DesignerLayout;
