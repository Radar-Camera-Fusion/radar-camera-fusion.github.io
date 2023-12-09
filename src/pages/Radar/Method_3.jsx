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
        name: 'Comparison of random forest and long short-term memory network performances in classification tasks using radar',
        short_name: '-',
        year: 2017,
        task: ['Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'SDF',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8126350',
        source_code: '-'
      },

      {
        key: '2',
        name: 'Radar-based Feature Design and Multiclass Classification for Road User Recognition',
        short_name: '-',
        year: 2018,
        task: ['Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8500607',
        source_code: '-'
      },
      {
        key: '3',
        name: 'Off-the-shelf sensor vs. experimental radar - How much resolution is necessary in automotive radar classification?',
        short_name: '-',
        year: 2020,
        task: ['Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'FUSION',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9190338',
        source_code: '-'
      },

      {
        key: '4',
        name: 'Radar-PointGNN: Graph Based Object Recognition for Unstructured Radar Point-cloud Data',
        short_name: '-',
        year: 2022,
        task: ['Classification'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RadarConf',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9455172',
        source_code: '-'
      },

      {
        key: '5',
        name: '2D Car Detection in Radar Data with PointNets',
        short_name: '-',
        year: 2019,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ITSC',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8917000',
        source_code: '-'
      },

      {
        key: '6',
        name: 'Detection and Tracking on Automotive Radar Data with Deep Learning',
        short_name: '-',
        year: 2020,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'FUSION',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9190261',
        source_code: '-'
      },

      {
        key: '7',
        name: 'Seeing Around Street Corners: Non-Line-of-Sight Detection and Tracking In-the-Wild Using Doppler Radar',
        short_name: '-',
        year: 2020,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'CVPR',
        paper_link: 'https://openaccess.thecvf.com/content_CVPR_2020/html/Scheiner_Seeing_Around_Street_Corners_Non-Line-of-Sight_Detection_and_Tracking_In-the-Wild_Using_CVPR_2020_paper.html',
        source_code: '-'
      },


      {
        key: '8',
        name: 'RPFA-Net: a 4D RaDAR Pillar Feature Attention Network for 3D Object Detection',
        short_name: '-',
        year: 2021,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ITSC',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9564754',
        source_code: 'https://github.com/adept-thu/RPFA-Net'
      },



      {
        key: '9',
        name: 'Comparison of Different Approaches for Identification of Radar Ghost Detections in Automotive Scenarios',
        short_name: '-',
        year: 2021,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RadarConf',
        paper_link: 'https://ieeexplore.ieee.org/document/9454980',
        source_code: '-'
      },

      {
        key: '10',
        name: 'Contrastive Learning for Automotive mmWave Radar Detection Points Based Instance Segmentation',
        short_name: '-',
        year: 2022,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ITSC',
        paper_link: 'https://ieeexplore.ieee.org/document/9922540',
        source_code: '-'
      },



      {
        key: '11',
        name: '3-D Object Detection for Multiframe 4-D Automotive Millimeter-Wave Radar Point Cloud',
        short_name: '-',
        year: 2023,
        task: ['Detection'],
        dataset: ['TJ4DRadSet'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IEEE Sensors',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9944629',
        source_code: '-'
      },


      {
        key: '12',
        name: 'SMURF: Spatial Multi-Representation Fusion for 3D Object Detection with 4D Imaging Radar',
        short_name: '-',
        year: 2023,
        task: ['Detection'],
        dataset: ['VoD', 'TJ4DRadSet'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TIV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10274127',
        source_code: '-'
      },


      {
        key: '13',
        name: 'MVFAN: Multi-View Feature Assisted Network for 4D Radar Object Detection',
        short_name: '-',
        year: 2023,
        task: ['Detection'],
        dataset: ['VoD', 'Astyx'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICONIP',
        paper_link: 'https://arxiv.org/abs/2310.16389',
        source_code: '-'
      },


      {
        key: '14',
        name: 'Semantic Segmentation on Radar Point Clouds',
        short_name: '-',
        year: 2018,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'FUSION',
        paper_link: 'https://ieeexplore.ieee.org/document/8455344',
        source_code: '-'
      },


      {
        key: '15',
        name: 'Supervised Clustering for Radar Applications: On the Way to Radar Instance Segmentation',
        short_name: '-',
        year: 2018,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ICMIM',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8917000',
        source_code: '-'
      },



      {
        key: '16',
        name: '2D Car Detection in Radar Data with PointNets',
        short_name: '-',
        year: 2019,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'ITSC',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8917000',
        source_code: '-'
      },


      {
        key: '17',
        name: 'RSS-Net: Weakly-Supervised Multi-Class Semantic Segmentation with FMCW Radar',
        short_name: '-',
        year: 2020,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'IV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9304674',
        source_code: '-'
      },


      {
        key: '18',
        name: 'Panoptic Segmentation for Automotive Radar Point Cloud',
        short_name: '-',
        year: 2022,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RadarConf',
        paper_link: 'https://ieeexplore.ieee.org/document/9764218',
        source_code: '-'
      },



      {
        key: '19',
        name: 'Deep Instance Segmentation With Automotive Radar Detection Points',
        short_name: '-',
        year: 2022,
        task: ['Segmentation'],
        dataset: ['RadarScenes'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TIV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9762032',
        source_code: '-'
      },



      {
        key: '20',
        name: 'Detection and Tracking on Automotive Radar Data with Deep Learning',
        short_name: '-',
        year: 2020,
        task: ['Tracking'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'FUSION',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9190261',
        source_code: '-'
      },



      {
        key: '21',
        name: 'Which Framework is Suitable for Online 3D Multi-Object Tracking for Autonomous Driving with Automotive 4D Imaging Radar?',
        short_name: '-',
        year: 2023,
        task: ['Tracking'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'arXiv',
        paper_link: 'https://arxiv.org/abs/2309.06036',
        source_code: '-'
      },


      {
        key: '22',
        name: 'Efficient Deep-Learning 4D Automotive Radar Odometry Method',
        short_name: '-',
        year: 2023,
        task: ['Odometry'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TIV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10237296',
        source_code: '-'
      },



      {
        key: '23',
        name: 'DRIO: Robust Radar-Inertial Odometry in Dynamic Environments',
        short_name: '-',
        year: 2023,
        task: ['Odometry'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAL',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10207713',
        source_code: '-'
      },



      {
        key: '24',
        name: 'Person Reidentification Based on Automotive Radar Point Clouds',
        short_name: '-',
        year: 2021,
        task: ['Gait Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'TGRS',
        paper_link: 'https://ieeexplore.ieee.org/document/9420713',
        source_code: '-'
      },



      {
        key: '25',
        name: 'Gait Recognition for Co-Existing Multiple People Using Millimeter Wave Sensing',
        short_name: '-',
        year: 2020,
        task: ['Gait Recognition'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'AAAI',
        paper_link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5430',
        source_code: '-'
      },
      

    ]

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="methods">
        <div className="title-wrapper">
        <h2 name="title" className="title-h1">Point Cloud Methods</h2>
          
        </div>
        <Table bordered scroll={{x: '200px'}} columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;