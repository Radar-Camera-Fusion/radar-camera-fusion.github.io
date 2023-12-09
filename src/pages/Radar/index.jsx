/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';
// import { FloatButton } from 'antd';

import Nav0 from './Nav0';
import Banner3 from './Banner3';
import Comparison from './Comparison';
import RadarChart from './RadarChart';
import Dataset from './Dataset';
import Method_1 from './Method_1';
import Method_2 from './Method_2';
import Method_3 from './Method_3';
import Method_4 from './Method_4';
import Method_5 from './Method_5';
import Reference from './Reference';
import Content13 from './Content13';
import Footer0 from './Footer0';

import {
  Nav00DataSource,
  Banner30DataSource,
  Content130DataSource,
  Footer00DataSource,
} from './data.source';

import {
  DatasetDataSource,
} from './dataset.source';

import {
  FusionDataSource,
} from './fusion.source';

import {
  ReferenceDataSource,
} from './reference.source';
import {
  ComparisonDataSource,
} from './comparison.source';

import './less/antMotionStyle.less';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner3
        id="Banner3_0"
        key="Banner3_0"
        dataSource={Banner30DataSource}
        isMobile={this.state.isMobile}
      />,
      // <Comparison
      //   id="Comparison0_0"
      //   key="Comparison0_0"
      //   dataSource={ComparisonDataSource}
      //   isMobile={this.state.isMobile}
      // />,
       <RadarChart
         id="Dataset0_0"
         key="Dataset0_0"
         dataSource={DatasetDataSource}
         isMobile={this.state.isMobile}
      />,
      <Dataset
        id="Dataset0_0"
        key="Dataset0_0"
        dataSource={DatasetDataSource}
        isMobile={this.state.isMobile}
      />,
      <Method_1
        id="Fusion0_0"
        key="Fusion0_0"
        dataSource={FusionDataSource}
        isMobile={this.state.isMobile}
      />,
      <Method_2
        id="Fusion0_0"
        key="Fusion0_0"
        dataSource={FusionDataSource}
        isMobile={this.state.isMobile}
      />,
      <Method_3
        id="Fusion0_0"
        key="Fusion0_0"
        dataSource={FusionDataSource}
        isMobile={this.state.isMobile}
      />,
      <Method_4
        id="Fusion0_0"
        key="Fusion0_0"
        dataSource={FusionDataSource}
        isMobile={this.state.isMobile}
      />,
      <Method_5
        id="Fusion0_0"
        key="Fusion0_0"
        dataSource={FusionDataSource}
        isMobile={this.state.isMobile}
      />,
      <Reference
        id="Fusion0_0"
        key="Fusion0_0"
        dataSource={ReferenceDataSource}
        isMobile={this.state.isMobile}
      />,
      <Content13
        id="Content13_0"
        key="Content13_0"
        dataSource={Content130DataSource}
        isMobile={this.state.isMobile}
      />,
      <Footer0
        id="Footer0_0"
        key="Footer0_0"
        dataSource={Footer00DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
        {/* <FloatButton.BackTop visibilityHeight={0} /> */}
      </div>
    );
  }
}
