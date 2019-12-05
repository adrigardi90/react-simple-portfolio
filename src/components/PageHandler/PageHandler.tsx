
import React, { Component } from 'react';
import { DataSource } from '../../services/DataSource';

export interface PageComponentState {
  content: any
}

export const PageHandler = (PageComponent: any, selectData: (...[]) => any) => {

  return class extends React.Component<any, PageComponentState> {
    constructor(props: any) {
      super(props);
      this.state = {
        content: null
      };
    }

    componentDidMount() {
      selectData(DataSource, this.props)
        .then(this.handleData)
        .catch(this.handleError)
    }

    handleData = (data: any) => {
      this.setState({content: data})
    }

    handleError = (err: any) => {

    }

    render() {
      return <PageComponent 
              data={this.state.content} 
              {...this.props} />;
    }
  }
}