import React from 'react';
import { connect } from 'umi';
import { ConnectState } from '@/models/connect';


class DesignerLayout extends React.Component<{}> {
  
    componentDidMount() {
      this.setState({
        isReady: true,
      });
    }
  
    render() {
      const { children } = this.props;
      return children;
    }
  }

export default connect(({ user, loading }: ConnectState) => ({
    currentUser: user.currentUser,
    loading: loading.models.user,
  }))(DesignerLayout);
