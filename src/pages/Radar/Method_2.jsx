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
              case 'Multi-Task': color = '#13c2c2'; break;
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
            tags.push(<div><span>{tag}</span><br /></div>);
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
        name: 'Experiments with mmWave Automotive Radar Test-bed',
        short_name: '-',
        year: 2019,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RA ACSSC',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9048939',
        source_code: '-'
      },

      {
        key: '2',
        name: 'Vehicle Detection With Automotive Radar Using Deep Learning on Range-Azimuth-Doppler Tensors',
        short_name: '-',
        year: 2019,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD ICCVW',
        paper_link: 'https://ieeexplore.ieee.org/document/9022248',
        source_code: '-'
      },
      {
        key: '3',
        name: 'Probabilistic oriented object detection in automotive radar',
        short_name: '-',
        year: 2020,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RA CVPRW',
        paper_link: 'https://ieeexplore.ieee.org/document/9150751',
        source_code: '-'
      },

      {
        key: '4',
        name: 'RODNet: Radar Object Detection Using Cross-Modal Supervision',
        short_name: 'RODNet',
        year: 2020,
        task: ['Detection'],
        dataset: ['CRUW'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RA WACV',
        paper_link: 'https://openaccess.thecvf.com/content/WACV2021/papers/Wang_RODNet_Radar_Object_Detection_Using_Cross-Modal_Supervision_WACV_2021_paper.pdf',
        source_code: '-'
      },

      {
        key: '5',
        name: 'RODNet: A Real-Time Radar Object Detection Network Cross-Supervised by Camera-Radar Fused Object 3D Localization',
        short_name: 'RODNet',
        year: 2020,
        task: ['Detection'],
        dataset: ['CRUW'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RA JSTSP',
        paper_link: 'https://ieeexplore.ieee.org/document/9353210',
        source_code: '-'
      },

      {
        key: '6',
        name: 'Range-Doppler Detection in Automotive Radar with Deep Learning',
        short_name: '-',
        year: 2020,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RD IJCNN',
        paper_link: 'https://ieeexplore.ieee.org/document/9207080',
        source_code: '-'
      },

      {
        key: '7',
        name: 'RAMP-CNN: A Novel Neural Network for Enhanced Automotive Radar Object Recognition',
        short_name: 'RAMP-CNN',
        year: 2020,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD IEEE Sensors',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9249018',
        source_code: '-'
      },


      {
        key: '8',
        name: 'CNN Based Road User Detection Using the 3D Radar Cube',
        short_name: '-',
        year: 2020,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD RAL',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8962258',
        source_code: '-'
      },



      {
        key: '9',
        name: 'Graph Convolutional Networks for 3D Object Detection on Radar Data',
        short_name: 'GTR-Net',
        year: 2021,
        task: ['Detection'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD ICCV Workshop',
        paper_link: 'https://openaccess.thecvf.com/content/ICCV2021W/AVVision/html/Meyer_Graph_Convolutional_Networks_for_3D_Object_Detection_on_Radar_Data_ICCVW_2021_paper.html?ref=https://githubhelp.com',
        source_code: '-'
      },


      {
        key: '10',
        name: 'RADDet: Range-Azimuth-Doppler based Radar Object Detection for Dynamic Road Users',
        short_name: 'RADDet',
        year: 2021,
        task: ['Detection'],
        dataset: ['RADDet'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD CRV',
        paper_link: 'https://openaccess.thecvf.com/content/ICCV2021W/AVVision/html/Meyer_Graph_Convolutional_Networks_for_3D_Object_Detection_on_Radar_Data_ICCVW_2021_paper.html?ref=https://githubhelp.com',
        source_code: 'https://github.com/ZhangAoCanada/RADDet'
      },



      {
        key: '11',
        name: 'DAROD: A Deep Automotive Radar Object Detector on Range-Doppler maps',
        short_name: 'DAROD',
        year: 2022,
        task: ['Detection'],
        dataset: ['CARRADA RADDet'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RD IV',
        paper_link: 'https://ieeexplore.ieee.org/document/9827281',
        source_code: '-'
      },



      {
        key: '12',
        name: 'K-Radar: 4D Radar Object Detection for Autonomous Driving in Various Weather Conditions',
        short_name: 'K-Radar',
        year: 2022,
        task: ['Detection'],
        dataset: ['K-Radar'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RADE NeurIPS',
        paper_link: 'https://proceedings.neurips.cc/paper_files/paper/2022/hash/185fdf627eaae2abab36205dcd19b817-Abstract-Datasets_and_Benchmarks.html',
        source_code: 'https://github.com/kaist-avelab/k-radar'
      },


      {
        key: '13',
        name: 'Enhanced K-Radar: Optimal Density Reduction to Improve Detection Performance and Accessibility of 4D Radar Tensor-based Object Detection',
        short_name: 'Enhanced K-Radar',
        year: 2023,
        task: ['Detection'],
        dataset: ['K-Radar'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RADE arXiv',
        paper_link: 'https://arxiv.org/abs/2303.06342',
        source_code: '-'
      },


      {
        key: '14',
        name: 'RSS-Net: Weakly-supervised multi-class semantic segmentation with FMCW radar',
        short_name: 'RSS-Net',
        year: 2020,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD IV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9304674',
        source_code: '-'
      },


      {
        key: '15',
        name: 'Deep Open Space Segmentation using Automotive Radar',
        short_name: '-',
        year: 2020,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD ICMIM',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9299052',
        source_code: '-'
      },



      {
        key: '16',
        name: 'PolarNet: Accelerated Deep Open Space Segmentation using Automotive Radar in Polar Domain',
        short_name: 'PolarNet',
        year: 2021,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD VEHITS',
        paper_link: 'https://arxiv.org/abs/2103.03387',
        source_code: '-'
      },


      {
        key: '17',
        name: 'Multi-view Radar Semantic Segmentation',
        short_name: '-',
        year: 2021,
        task: ['Segmentation'],
        dataset: [],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RAD ICCV',
        paper_link: 'https://openaccess.thecvf.com/content/ICCV2021/html/Ouaknine_Multi-View_Radar_Semantic_Segmentation_ICCV_2021_paper.html',
        source_code: 'https://github.com/valeoai/MVRSS'
      },


      {
        key: '18',
        name: 'Raw High-Definition Radar for Multi-Task Learning',
        short_name: 'FFT-RadNet',
        year: 2022,
        task: ['Multi-Task'],
        dataset: ['RADIal'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'CVPR',
        paper_link: 'https://openaccess.thecvf.com/content/CVPR2022/html/Rebut_Raw_High-Definition_Radar_for_Multi-Task_Learning_CVPR_2022_paper.html',
        source_code: '-'
      },


      {
        key: '19',
        name: 'Cross-Modal Supervision-Based Multitask Learning With Automotive Radar Raw Data',
        short_name: '-',
        year: 2023,
        task: ['Multi-Task'],
        dataset: ['RADIal'],// 没用数据集则留空，有的话按数组格式
        conference_journal: 'RD TIV',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/10008067',
        source_code: '-'
      },






    ]

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="methods">
        <div className="title-wrapper">
          <h2 name="title" className="title-h1">Radar Tensor Methods</h2>

        </div>
        <Table bordered scroll={{ x: '200px' }} columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;