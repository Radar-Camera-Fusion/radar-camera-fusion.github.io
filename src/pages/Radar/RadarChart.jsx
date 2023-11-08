import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// import * as G2Plot from '@antv/g2plot'
import { Radar } from '@ant-design/plots';

import { Table, Tag, Affix } from 'antd';
import { Col, Row } from 'antd';
import { each, groupBy } from '@antv/util';

class RadarChart extends React.PureComponent {

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;


    const radar_data = [
      {
        name: 'Color, Texture, Shape',
        star: 1,
      },
      {
        name: 'Range Measurement',
        star: 5,
      },
      {
        name: 'Velocity Measurement',
        star: 5,
      },
      {
        name: 'Lighting Robustness',
        star: 5,
      },
      {
        name: 'Weather Robustness',
        star: 5,
      },
      {
        name: 'Classification Ability',
        star: 2,
      },
      {
        name: '3D Perception',
        star: 1,
      },
      {
        name: 'Cost Advantage',
        star: 4,
      },
    ];
    const radar_config = {
      data: radar_data.map((d) => ({ ...d, star: d.star })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 20, 0, 20],
      color: '#B2934A',
      legend: true,
      meta: {
        star: {
          alias: 'Radar Ability',
          min: 0,
          nice: true,
          formatter: (v) => v,
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
      // padding: [20, 0, 0, 0]
    };

    const camera_data = [
      {
        name: 'Color, Texture, Shape',
        star: 5,
      },
      {
        name: 'Range Measurement',
        star: 2,
      },
      {
        name: 'Velocity Measurement',
        star: 2,
      },
      {
        name: 'Lighting Robustness',
        star: 3,
      },
      {
        name: 'Weather Robustness',
        star: 3,
      },
      {
        name: 'Classification Ability',
        star: 5,
      },
      {
        name: '3D Perception',
        star: 3,
      },
      {
        name: 'Cost Advantage',
        star: 5,
      },
    ];
    const camera_config = {
      data: camera_data.map((d) => ({ ...d, star: d.star })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 20, 0, 20],
      color: '#B66A6A',
      meta: {
        star: {
          alias: 'Camera Ability',
          min: 0,
          nice: true,
          formatter: (v) => v,
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
    };

    const fusion_data = [
      {
        name: 'Color, Texture, Shape',
        star: 5,
      },
      {
        name: 'Range Measurement',
        star: 5,
      },
      {
        name: 'Velocity Measurement',
        star: 5,
      },
      {
        name: 'Lighting Robustness',
        star: 5,
      },
      {
        name: 'Weather Robustness',
        star: 5,
      },
      {
        name: 'Classification Ability',
        star: 5,
      },
      {
        name: '3D Perception',
        star: 3,
      },
      {
        name: 'Cost Advantage',
        star: 4,
      },
    ];
    const fusion_config = {
      data: fusion_data.map((d) => ({ ...d, star: d.star })),
      xField: 'name',
      yField: 'star',
      // appendPadding: [0, 30, 0, 30],
      color: '#589D9D',
      meta: {
        star: {
          alias: 'Fusion Ability',
          min: 0,
          nice: true,
          formatter: (v) => v,
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      // 开启辅助点
      point: {
        size: 2,
      },
      area: {},
    };






    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="characteristics">
        <div className="title-wrapper">
          
          <div className="chart">
          <h2 name="title" className="title-h5">Radar-Camera Characteristics</h2>
            <Row justify="start" align="middle">

              <Col span={8} offset={4}>
                <Row>
                  <Col span={24} ><Radar {...radar_config} /></Col>
                  {/* </Row> */}
                  {/* <Row> */}
                  <Col span={24} ><Radar {...camera_config} /></Col>
                </Row>
              </Col>

              <Col span={12}>
                <Row align="start">
                  <Col span={18}>
                    <Radar {...fusion_config} />
                  </Col>

                </Row>
              </Col>
              {/* <Col span={2}>
              </Col> */}
            </Row>




            {/* <Radar {...fusion_config} /> */}
          </div>
          {/* <Table bordered pagination={{ pageSize: 30, hideOnSinglePage: true }} columns={columns} dataSource={data} onChange={onChange} />; */}
        </div>
      </div>
    );
  }
}

export default RadarChart;
