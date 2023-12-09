import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { Table, Divider, Tag } from 'antd';

class Fusion extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;

    const columns = [
      {
        title: 'Id',
        dataIndex: 'key',
        width: '10px',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        // width: '10%',
        render: (text, record) => {
          // console.log(record)
          // let content = text.toString().split(',');
          return <div> <a target="_blank" href={record.paper_link}>{text}</a></div>;
        },
      },
      {
        title: 'Short Name',
        dataIndex: 'short_name',
      },
      {
        title: 'Year',
        dataIndex: 'year',
        sorter: (a, b) => a.year - b.year,
      },
      {
        title: 'Task',
        dataIndex: 'task',
        filters: [
          {
            text: 'Object Detection',
            value: 'Object Detection',
          },
          {
            text: 'Semantic Segmentation',
            value: 'Semantic Segmentation',
          },
        ],
        onFilter: (value, record) => record.task.includes(value),
        filterSearch: true,
        width: '10%',
        render: (text, record) => {
          let content = text.toString().split('|');
          console.log(content)
          let tags = []
          content.map(tag => {
              tag = tag.trim();
              let color = '';
              switch (tag) {
                case 'Object Detection': color = '#1890ff'; break;
                case 'Semantic Segmentation': color = '#fa541c'; break;
                case 'Object Tracking': color = '#fa8c16'; break;
                case 'Localization': color = '#13c2c2'; break;
                case 'Planning': color = '#52c41a'; break;
                case 'Prediction': color = '#f5222d'; break;
                case 'Object Classification': color = '#eb2f96'; break;
                // case '': color = '#eb2f96'; break;
                // case '': color = '#722ed1'; break;
                default: color = 'blue-inverse';
              }
              tags.push(<Tag color={color} key={tag}>
                {tag}
              </Tag>);
            })
          return tags
        }
      },
      {
        title: 'Dataset',
        dataIndex: 'dataset',
        filters: [
          {
            text: 'nuScenes',
            value: 'nuScenes',
          },
        ],
        onFilter: (value, record) => record.dataset.includes(value),
        filterSearch: true,
        render: (text, record) => {
          let content = text.toString().split('|');
          let tags = []
          content.map(tag => {
            tags.push(<div><span>{tag}</span><br/></div>);
            })
          return tags
        }
      },
      {
        title: 'Conference/Journal',
        dataIndex: 'conference_journal',
      },
      {
        title: 'Source Code',
        dataIndex: 'source_code',
        render: (text, record) => {
          console.log(text)
          if (text != '-') {
            return <a target='_blank' href={text}>{text}</a>;
          }
        },
      },


    ];
    const data = [
      // 以第一个的格式为准，复制第一个的进行修改
      {
        key: '1',
        name: 'Human Detection and Activity Classification Based on Micro-Doppler Signatures Using Deep Convolutional Neural Networks',
        short_name: '-',
        year: 2016,
        task: ['Motion (Gait/Gestures/Activity) Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IEEE Geoscience and Remote Sensing Letters',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/7314905',
        source_code: '-'
      },

      {
        key: '2',
        name: 'New Analysis of Radar Micro-Doppler Gait Signatures for Rehabilitation and Assisted Living',
        short_name: '-',
        year: 2017,
        task: ['Motion (Gait/Gestures/Activity) Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICASSP',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/7952908',
        source_code: '-'
      },
      {
        key: '3',
        name: 'Human Motion Classification with Micro-Doppler Radar and Bayesian-Optimized Convolutional Neural Networks',
        short_name: '-',
        year: 2018,
        task: ['Motion (Gait/Gestures/Activity) Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICASSP',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8461847',
        source_code: '-'
      },

      {
        key: '4',
        name: 'Radar-Based Human-Motion Recognition With Deep Learning: Promising Applications for Indoor Monitoring',
        short_name: '-',
        year: 2018,
        task: ['Motion (Gait/Gestures/Activity) Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IEEE Signal Processing Magazine',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8746862',
        source_code: '-'
      },

      {
        key: '5',
        name: 'Radar-Based Human Gait Recognition Using Dual-Channel Deep Convolutional Neural Network',
        short_name: '-',
        year: 2019,
        task: ['Motion (Gait/Gestures/Activity) Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TGRS',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8789686',
        source_code: '-'
      },

      {
        key: '6',
        name: 'Experiments with mmWave Automotive Radar Test-bed',
        short_name: '-',
        year: 2019,
        task: ['Motion (Gait/Gestures/Activity) Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ACSSC',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9048939',
        source_code: '-'
      },
      {
        key: '7',
        name: 'Attention-Based Dual-Stream Vision Transformer for Radar Gait Recognition',
        short_name: '-',
        year: 2022,
        task: ['Motion (Gait/Gestures/Activity) Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICASSP',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9746565',
        source_code: '-'
      },


      
      

    ]

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="methods">
        <div className="title-wrapper">
        <h2 name="title" className="title-h1">Micro-Doppler Signature Methods</h2>
          
        </div>
        <Table bordered scroll={{x: '200px'}} columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;