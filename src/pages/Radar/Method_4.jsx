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
                case 'Detection': color = '#1890ff'; break;
                case 'Segmentation': color = '#fa541c'; break;
                case 'Tracking': color = '#fa8c16'; break;
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
        title: 'Link',
        dataIndex: 'source_code',
        render: (text, record) => {
          console.log(record)
          // let content = text.toString().split(',');
          if (record.source_code != '' && record.source_code != '-') {
            return <div>
              <a target="_blank" href={record.paper_link}>Paper</a>&nbsp;&nbsp;
              <a target='_blank' href={record.source_code}>Code</a>
            </div>;
          } else {
            return <div>
              <a target="_blank" href={record.paper_link}>Paper</a>
            </div>;
          }

        },
      },


    ];
    const data = [
      // 以第一个的格式为准，复制第一个的进行修改
      {
        key: '1',
        name: 'Automotive Radar Gridmap Representations',
        short_name: '-',
        year: 2015,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICMIM',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/7117922',
        source_code: '-'
      },

      {
        key: '2',
        name: 'Detection of Arbitrarily Rotated Parked Cars Based on Radar Sensors',
        short_name: '-',
        year: 2015,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IRS',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/7226281',
        source_code: '-'
      },
      {
        key: '3',
        name: '3D Occupancy Grid Mapping Using Statistical Radar Models',
        short_name: '-',
        year: 2016,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/7535495',
        source_code: '-'
      },

      {
        key: '4',
        name: 'Semantic Radar Grids',
        short_name: '-',
        year: 2017,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/7995871',
        source_code: '-'
      },

      {
        key: '5',
        name: 'Adaptions for Automotive Radar Based Occupancy Gridmaps',
        short_name: '-',
        year: 2018,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICMIM',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8443484',
        source_code: '-'
      },

      {
        key: '6',
        name: 'High Resolution Radar-based Occupancy Grid Mapping and Free Space Detection',
        short_name: '-',
        year: 2018,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'VEHITS',
        paper_link: 'https://pdfs.semanticscholar.org/d888/6334e15acebe688f993f45da7ba7bde79eff.pdf',
        source_code: '-'
      },

      {
        key: '7',
        name: 'Semantic Segmentation on Automotive Radar Maps',
        short_name: '-',
        year: 2019,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8813808',
        source_code: '-'
      },


      {
        key: '8',
        name: 'Occupancy Grids Generation Using Deep Radar Network for Autonomous Driving',
        short_name: '-',
        year: 2019,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ITSC',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8916897',
        source_code: '-'
      },



      {
        key: '9',
        name: 'Semantic Segmentation on 3D Occupancy Grids for Automotive Radar',
        short_name: '-',
        year: 2020,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IEEE ACCESS',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9229096',
        source_code: '-'
      },


      {
        key: '10',
        name: 'NVRadarNet: Real-Time Radar Obstacle and Free Space Detection for Autonomous Driving',
        short_name: 'NVRadarNet',
        year: 2023,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICRA',
        paper_link: 'https://arxiv.org/abs/2209.14499',
        source_code: '-'
      },



      {
        key: '11',
        name: 'Road Scene Understanding by Occupancy Grid Learning from Sparse Radar Clusters using Semantic Segmentation',
        short_name: '-',
        year: 2019,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICCV',
        paper_link: 'https://openaccess.thecvf.com/content_ICCVW_2019/html/CVRSUAD/Sless_Road_Scene_Understanding_by_Occupancy_Grid_Learning_from_Sparse_Radar_ICCVW_2019_paper.html',
        source_code: '-'
      },



      {
        key: '12',
        name: 'CNN based road course estimation on automotive radar data with various gridmaps',
        short_name: '-',
        year: 2020,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICMIM',
        paper_link: 'https://ieeexplore.ieee.org/document/9299086',
        source_code: '-'
      },


      {
        key: '13',
        name: 'Scene Understanding With Automotive Radar',
        short_name: '-',
        year: 2020,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TIV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8911477',
        source_code: '-'
      },


      {
        key: '14',
        name: 'Semantic Segmentation-Based Occupancy Grid Map Learning With Automotive Radar Raw Data',
        short_name: '-',
        year: 2023,
        task: ['Segmentation'],
        dataset: ['RADIal'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TIV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10273590',
        source_code: '-'
      },


      
      

    ]

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="methods">
        <div className="title-wrapper">
        <h2 name="title" className="title-h1">Grid Map Methods</h2>
          
        </div>
        <Table bordered scroll={{x: '200px'}} columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;