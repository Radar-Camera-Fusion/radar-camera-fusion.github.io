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
              case 'Object Detection': color = '#1890ff'; break;
              case 'Semantic Segmentation': color = '#fa541c'; break;
              case 'Object Tracking': color = '#fa8c16'; break;
              case 'Localization': color = '#13c2c2'; break;
              case 'Classification/Motion Recognition': color = '#52c41a'; break;
              // case '': color = '#f5222d'; break;
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
            tags.push(<div><span>{tag}</span><br /></div>);
          })
          return tags
        }
      },
      {
        title: 'Conference/Journal',
        dataIndex: 'conference_journal',
      },
      // {
      //   title: 'Paper',
      //   dataIndex: 'paper_link',
      //   render: (text, record) => {
      //     console.log(text)
      //     if (text != '-') {
      //       return <a target='_blank' href={text}>{text}</a>;
      //     }
      //   },
      // },
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
        name: 'Radar Image Reconstruction from Raw ADC Data using Parametric Variational Autoencoder with Domain Adaptation',
        short_name: '-',
        year: 2020,
        task: ['Classification/Motion Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICPR',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9412858',
        source_code: ''
      },

      {
        key: '2',
        name: 'Improved Target Detection and Feature Extraction using a Complex-Valued Adaptive Sine Filter on Radar Time Domain Data',
        short_name: '-',
        year: 2021,
        task: ['Classification/Motion Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'EUSIPCO',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9616250',
        source_code: ''
      },
      {
        key: '3',
        name: 'Data-Driven Radar Processing Using a Parametric Convolutional Neural Network for Human Activity Classification',
        short_name: '-',
        year: 2021,
        task: ['Classification/Motion Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IEEE Sensors',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9464267',
        source_code: ''
      },

      {
        key: '4',
        name: 'Spiking Neural Network-Based Radar Gesture Recognition System Using Raw ADC Data',
        short_name: '-',
        year: 2021,
        task: ['Classification/Motion Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IEEE Sensors Letters',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9772332',
        source_code: ''
      },

      {
        key: '5',
        name: 'Detection of Human Breathing in Non-Line-of-Sight Region by Using mmWave FMCW Radar',
        short_name: '-',
        year: 2022,
        task: ['Classification/Motion Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TIM',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9897091',
        source_code: ''
      },

      {
        key: '6',
        name: 'CubeLearn: End-to-End Learning for Human Motion Recognition From Raw mmWave Radar Signals',
        short_name: 'CubeLearn',
        year: 2023,
        task: ['Classification/Motion Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IEEE IOT',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10018429',
        source_code: ''
      },

      {
        key: '7',
        name: 'ADCNet: End-to-end perception with raw radar ADC data',
        short_name: 'ADCNet',
        year: 2023,
        task: ['Object Dection'],
        dataset: ['RADIal'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'arXiv',
        paper_link: 'https://arxiv.org/abs/2303.11420',
        source_code: ''
      },



      {
        key: '8',
        name: 'T-FFTRadNet: Object Detection with Swin Vision Transformers from Raw ADC Radar Signals',
        short_name: 'T-FFTRadNet',
        year: 2023,
        task: ['Object Dection'],
        dataset: ['RADIal'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'arXiv',
        paper_link: 'https://arxiv.org/abs/2303.16940',
        source_code: ''
      },



      {
        key: '9',
        name: 'Echoes Beyond Points: Unleashing the Power of Raw Radar Data in Multi-modality Fusion',
        short_name: 'Echoes Beyond Points',
        year: 2023,
        task: ['Object Dection'],
        dataset: ['RADIal'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'NeurIPS',
        paper_link: 'https://arxiv.org/abs/2307.16532',
        source_code: ''
      },


      {
        key: '10',
        name: 'Azimuth Super-Resolution for FMCW Radar in Autonomous Driving',
        short_name: '-',
        year: 2023,
        task: ['Object Dection'],
        dataset: ['RADIal'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'CVPR',
        paper_link: 'https://openaccess.thecvf.com/content/CVPR2023/html/Li_Azimuth_Super-Resolution_for_FMCW_Radar_in_Autonomous_Driving_CVPR_2023_paper.html',
        source_code: ''
      },



      {
        key: '11',
        name: 'RF-based child occupation detection in the vehicle interior',
        short_name: '-',
        year: 2016,
        task: ['Vital Sign'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IRS',
        paper_link: 'https://ieeexplore.ieee.org/document/7497352',
        source_code: ''
      },



      {
        key: '12',
        name: 'A Theoretical Investigation of the Detection of Vital Signs in Presence of Car Vibrations and RADAR-Based Passenger Classification',
        short_name: '-',
        year: 2019,
        task: ['Vital Sign'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TVT',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8638548',
        source_code: ''
      },


      {
        key: '13',
        name: 'Non-Contact Vital Signs Monitoring for Multiple Subjects Using a Millimeter Wave FMCW Automotive Radar',
        short_name: '-',
        year: 2020,
        task: ['Vital Sign'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IMS',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9223838',
        source_code: ''
      },


      {
        key: '14',
        name: 'Sparsity-Based Multi-Person Non-Contact Vital Signs Monitoring via FMCW Radar',
        short_name: '-',
        year: 2023,
        task: ['Vital Sign'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'JBHI',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10065434',
        source_code: ''
      },


      {
        key: '15',
        name: 'Radar-Based Monitoring of Vital Signs: A Tutorial Overview',
        short_name: '-',
        year: 2023,
        task: ['Vital Sign'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'JPROC',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10049295',
        source_code: ''
      },
    ]

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="methods">
        <Divider orientation="center"><h1 name="title" className="title-h1">Radar Perception Methods</h1></Divider>
        <div className="title-wrapper">
          <h2 name="title" className="title-h1">ADC Signal Methods</h2>

        </div>
        <Table bordered scroll={{ x: '200px' }} columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;