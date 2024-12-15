import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// import * as G2Plot from '@antv/g2plot'
import { Column } from '@ant-design/plots';

import { Table, Tag, Tooltip, Divider } from 'antd';
import { each, groupBy } from '@antv/util';

class Dataset extends React.PureComponent {

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;


    
    const annotations = [];
    // each(groupBy(chart_data, 'x'), (values, k) => {
    //   const value = values.reduce((a, b) => a + b.y, 0);
    //   annotations.push({
    //     type: 'text',
    //     position: [k, value],
    //     content: `${value}k`,
    //     style: {
    //       textAlign: 'center',
    //       fontSize: 14,
    //       fill: 'rgba(0,0,0,0.85)',
    //     },
    //     offsetY: -10,
    //   })
    // });
    const bar_number = [40, 0.5, 13, 12, 3, 11, 44, 100, 400, 393, 49, 10, 4, 8, 8, 7, 40, 35, 26, 54]
    const bar_fake = [60, 8, 30, 28, 10, 26, 65, 70, 90, 88, 60, 24, 12, 21, 21, 18, 60, 55, 40, 66]
    each(bar_number, (value, k) => {
      // const value = values.reduce((a, b) => a + b.y, 0);
      annotations.push({
        type: 'text',
        position: [k, bar_fake[k]],
        content: `${value}k`,
        style: {
          textAlign: 'center',
          fontSize: 14,
          fill: 'rgba(0,0,0,0.85)',
        },
        offsetY: -10,
      })
    });

    const columns = [
      {
        title: 'Id',
        dataIndex: 'key',
        width: '10px',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: '10%',
        render: (text, record) => {
          return <div><a target='_blank' href={text[1]}>{text[0]}</a> [<a href='#references'>{text[2]}</a>]</div>;
        },
      },
      {
        title: 'Year',
        dataIndex: 'year',
        sorter: (a, b) => a.year - b.year,
      },
      {
        title: 'Radar Data Representation',
        dataIndex: 'radar_data_representation',
        filters: [
          {
            text: 'Point Cloud',
            value: 'Point Cloud',
          },
          {
            text: 'Radar Tensor',
            value: 'Radar Tensor',
          }
        ],
        onFilter: (value, record) => record.radar_data_representation.includes(value),
        filterSearch: true,
        // width: '20%',
        // render: (text, record) => {
        //   let content = text.toString().split('|');
        //   let html = '';
        //   for (let i = 0; i < content.length; i++) {
        //     if (i == 0) {
        //       html = content[i];
        //     } else {
        //       html = <span>{html}<br></br>{content[i]}</span>;
        //     }
        //   }
        //   return <div>{html}</div>;
        // },
        render: (text, record) => (
          <span>
            {text.map(tag => {
              let color = '';
              switch (tag) {
                case 'Point Cloud': color = '#108ee9'; break;
                case 'ADC Signal': color = '#f50'; break;
                case 'Radar Tensor': color = '#2db7f5'; 
                case 'Grid Map': color = '#87d068'; break;
                case 'Micro-Doppler Signature': color = '#2db7f5'; 
                default: color = '#108ee9';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
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
        render: (text, record) => (
          <span>
            {text.map(tag => {
              let color = '';
              switch (tag) {
                case 'Object Detection': color = '#1890ff'; break;
                case 'Semantic Segmentation': color = '#fa541c'; break;
                case 'Object Tracking': color = '#fa8c16'; break;
                case 'Localization': color = '#13c2c2'; break;
                case 'Planning': color = '#52c41a'; break;
                case 'Prediction': color = '#f5222d'; break;
                case '': color = '#722ed1'; break;
                case '': color = '#eb2f96'; break;
                case '': color = '#722ed1'; break;
                default: color = 'blue-inverse';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
      },
      
      {
        title: 'Sensors',
        dataIndex: 'sensors',
      },
      {
        title: 'Category Number',
        dataIndex: 'category_number',
      },
      {
        title: 'Categories',
        dataIndex: 'categories',
      },
      // {
      //   title: 'Size',
      //   dataIndex: 'size',
      // },
      // {
      //   title: 'Scenarios',
      //   dataIndex: 'scenarios',

        // ellipsis: true,
        // render: (address) => (
        //   <Tooltip placement="topLeft" title={address}>
        //     {address}
        //   </Tooltip>
        // )
        // render: (text, record) => (
        //   <span>
        //     {text.map(tag => {
        //       return (
        //         <div>
        //           {tag}
        //         </div>
        //       );
        //     })}
        //   </span>
        // )
      // },
      Table.EXPAND_COLUMN,
      {
        title: 'Record Area',
        dataIndex: 'record_area',
      },
      {
        title: 'Record Time',
        dataIndex: 'record_time',
      },
      {
        title: 'Affiliation',
        dataIndex: 'affiliation',
      },

    ];
    const data = [
      // 以第一个的格式为准，复制第一个的进行修改
      {
        key: '1',
        name: ['nuScenes', 'https://www.nuscenes.org/nuscenes', '1'],
        year: 2019,
        task: ['Object Detection', 'Object Tracking'],
        sensors: 'Radar (Continental ARS408), Camera,LiDAR',
        radar_data_representation: ['Point Cloud', 'Grid Map'],
        category_number: 23,
        categories: 'different vehicles, types of pedestrians, mobility devices and other objects',
        scenarios: 'Roads (intersection, crosswalk, roundabout, pedestrian crossing)',
        record_area: 'Boston, Singapore',
        record_time: 'September 2018',
        affiliation: 'nuTonomy',
        paper_link: 'https://openaccess.thecvf.com/content_CVPR_2020/papers/Caesar_nuScenes_A_Multimodal_Dataset_for_Autonomous_Driving_CVPR_2020_paper.pdf',
      },

      {
        key: '2',
        name: ['Astyx', 'http://www.astyx.net', '2'],
        year: 2019,
        task: ['Object Detection'],
        sensors: 'Radar (Astyx 6455 HiRes), Camera, Lidar',
        radar_data_representation: ['Point Cloud'],
        category_number: 7,
        categories: 'Bus, Car, Cyclist, Motorcyclist, Person, Trailer, Truck',
        scenarios: ' Roads (highway, urban, rural, parking, roundabout)',
        record_area: 'South of Germany',
        record_time: '-',
        affiliation: 'Technical University of Munich',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/8904734',
      },
      {
        key: '3',
        name: ['SeeingThroughFog', 'https://www.uni-ulm.de/en/in/driveu/projects/dense-datasets/', '3'],
        year: 2020,
        task: ['Object Detection'],
        sensors: 'Radar (77GHz), Stereo/Gated/FIRCamera, Lidar, Environmental Sensors',
        radar_data_representation: ['Point Cloud'],
        category_number: 4,
        categories: 'Passenger Car, Large Vehicle, Pedestrian, Ridable Vehicle',
        scenarios: ' Adverse road conditions (clear, rainy, snowy, foggy, nighttime, urban, highway, rural, traffic)',
        record_area: 'Germany, Sweden, Denmark, and Finland',
        record_time: 'February and December 2019',
        affiliation: 'Mercedes-Benz AG',
        paper_link: 'https://openaccess.thecvf.com/content_CVPR_2020/html/Bijelic_Seeing_Through_Fog_Without_Seeing_Fog_Deep_Multimodal_Sensor_Fusion_CVPR_2020_paper.html',
      },

      {
        key: '4',
        name: ['CARRADA', 'https://arthurouaknine.github.io/codeanddata/carrada', '4'],
        year: 2020,
        task: ['Detection', 'Semantic Segmentation',
          'Object Tracking'],
        sensors: 'Radar (TI AWR1843), RGB-DCamera, LiDAR',
        radar_data_representation: ['Radar Tensor'],
        category_number: 9,
        categories: 'car, pedestrian, cyclist, and motorbike,radar range, angle, and velocity,radar range, angle, and velocity',
        scenarios: 'Roads (urban, highway, intersection scenarios)',
        record_area: 'Canada',
        record_time: '-',
        affiliation: '-',
        paper_link: 'https://ieeexplore.ieee.org/document/9413181',
      },


      {
        key: '5',
        name: ['Zendar', 'http://zendar.io/dataset', '5'],
        year: 2020,
        task: ['Object Detection', 'Mapping', 'Localization'],
        sensors: 'Radar (synthetic aperture), Camera,LiDAR',
        radar_data_representation: ['Radar Tensor', 'Point Cloud'],
        category_number: 3,
        categories: 'vehicles, pedestrians, and cyclists',
        scenarios: 'Roads (diverse urban driving environments)',
        record_area: '-',
        record_time: '-',
        affiliation: 'Technical University of Munich',
        paper_link: 'https://openaccess.thecvf.com/content_CVPRW_2020/papers/w6/Mostajabi_High-Resolution_Radar_Dataset_for_Semi-Supervised_Learning_of_Dynamic_Objects_CVPRW_2020_paper.pdf',
      },

     

      {
        key: '6',
        name: ['RADIATE', 'http://pro.hw.ac.uk/radiate/', '6'],
        year: 2020,
        task: ['Object Detection'],
        sensors: 'Radar (Navtech CTS350-X), Camera',
        radar_data_representation: ['Radar Tensor'],
        category_number: 8,
        categories: 'car, van, bus, truck, motorbike, bicycle, pedestrian and a group of pedestria',
        scenarios: ' Roads (wet, snowy, foggy, rainy, nighttime, urban, highway)',
        record_area: 'Edinburgh',
        record_time: 'Between February 2019 and February 2020',
        affiliation: 'Heriot-Watt University',
        paper_link: 'https://arxiv.org/pdf/2010.09076.pdf',
      },

      {
        key: '7',
        name: ['AIODrive', 'http://www.aiodrive.org/', '7'],
        year: 2020,
        task: ['Object Detection', 'Object Tracking', 'Semantic Segmentation', 'Depth Estimation'],
        sensors: 'RGB, Stereo, Depth, LiDAR, SPAD-LiDAR, Radar, IMU, GPS',
        radar_data_representation: ['Point Cloud'],
        category_number: 11,
        categories: 'Vehicle, Pedestrian, Vegetation, Building, Road, Sidewalk, Wall, Traffic Sign, Pole and Fence',
        scenarios: ' Roads (highway, residential street, parking)',
        record_area: 'one of eight cities from Carla assets',
        record_time: '-',
        affiliation: 'Carnegie Mellon University',
        paper_link: 'https://www.xinshuoweng.com/papers/AIODrive/arXiv.pdf',
      },

      {
        key: '8',
        name: ['CRUW', 'https://www.cruwdataset.org/', '8'],
        year: 2021,
        task: ['Object Detection'],
        sensors: 'Radar (TI AWR1843, DCA1000), Cameras',
        radar_data_representation: ['Radar Tensor'],
        category_number: 3,
        categories: 'Pedestrian, Cyclist, Car',
        scenarios: 'Roads (parking, campus, city, highway)',
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Washington',
        paper_link: 'https://arxiv.org/pdf/2107.14599.pdf',
      },

      {
        key: '9',
        name: ['RaDICaL', 'https://publish.illinois.edu/radicaldata/', '9'],
        year: 2021,
        task: ['Object Detection'],
        sensors: 'Radar (TI IWR1443), RGB-D Camera',
        radar_data_representation: ['ADC Signal'],
        category_number: 2,
        categories: 'Pedestrian, Car',
        scenarios: ' Indoor (people, static clutter), Roads (urban, rural, highway, various traffic scenarios)',
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Illinois at Urbana-Champaign',
        paper_link: 'https://ieeexplore.ieee.org/document/9361086',
      },

      {
        key: '10',
        name: ['RadarScenes', 'https://radar-scenes.com/', '10'],
        year: 2021,
        task: ['Object Detection', 'Semantic Segmentation'],
        sensors: 'Radar (77GHz), Documentary Camera',
        radar_data_representation: ['Point Cloud'],
        category_number: 11,
        categories: 'Car, Large Vehicle, Truck, Bus, Train, Bicycle, Motorized Two-wheeler, Pedestrian, Pedestrian Group, Animal, and Other',
        scenarios: ' Roads (urban, suburban, rural, highway, tunnel, intersection, roundabout, parking)',
        record_area: 'Ulm, Germany',
        record_time: 'Between 2016 and 2018',
        affiliation: 'Mercedes-Benz AG, Stuttgart, Germany',
        paper_link: 'https://arxiv.org/pdf/2104.02493v1.pdf',
      },

      {
        key: '11',
        name: ['RADDet', 'https://github.com/ZhangAoCanada/RADDet', '11'],
        year: 2021,
        task: ['Object Detection'],
        sensors: 'Radar (TI AWR1843), Stereo Cameras',
        radar_data_representation: ['Radar Tensor'],
        category_number: 6,
        categories: 'Person, Bicycle, Car, Motorcycle, Bus, Truck',
        scenarios: ' Roads (urban, rural, highway, intersections, weather conditions)',
        record_area: '-',
        record_time: 'September to October 2020',
        affiliation: 'University of Ottawa',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9469418',
      },

      {
        key: '12',
        name: ['RADIal', 'https://github.com/valeoai/RADIal', '12'],
        year: 2021,
        task: ['Object Detection', 'Semantic Segmentation'],
        sensors: 'Radar (high-definition), Cameras, LiDAR',
        radar_data_representation: ['ADC Signal', 'Radar Tensor', 'Point Cloud'],
        category_number: 1,
        categories: 'Vehicle',
        scenarios: 'Roads (urban, highway, rural)',
        record_area: '-',
        record_time: '-',
        affiliation: 'Valeo.ai, Paris, France',
        paper_link: 'https://arxiv.org/abs/2112.10646',
      },

      {
        key: '13',
        name: ['VoD', 'https://tudelft-iv.github.io/view-of-delft-dataset/', '13'],
        year: 2022,
        task: ['Object Detection', 'Object Tracking'],
        sensors: 'Radar (ZF FRGen 21), Stereo Camera, LiDAR',
        radar_data_representation: ['Point Cloud'],
        category_number: 13,
        categories: 'Car, Pedestrian, Cyclist, Rider, Unused Bicycle, Bicycle Rack, Human Depiction, Moped or Scooter, Motor, Ride Other, Vehicle Other, Truck, Ride Uncertain',
        scenarios: 'Roads (highway, rural, urban)',
        record_area: 'City of Delft (The Netherlands)',
        record_time: '-',
        affiliation: 'TU Delft, The Netherlands',
        paper_link: 'https://pure.tudelft.nl/ws/portalfiles/portal/115464174/Multi_Class_Road_User_Detection_With_31D_Radar_in_the_View_of_Delft_Dataset.pdf',
      },

      {
        key: '14',
        name: ['Boreas', 'https://www.boreas.utias.utoronto.ca/', '14'],
        year: 2022,
        task: ['Object Detection', 'Localization', 'Odometry'],
        sensors: 'Radar (Navtech CIR304-H), Camera, LiDAR',
        radar_data_representation: ['Radar Tensor'],
        category_number: 4,
        categories: 'Car, Pedestrian, Cyclist, Misc',
        scenarios: 'Roads (highway, rural, urban)',
        record_area: 'University of Toronto Institute for Aerospace Studies (UTIAS)',
        record_time: 'November, 2020 and ﬁnishing in November, 2021',
        affiliation: 'University of Toronto',
        paper_link: 'https://arxiv.org/pdf/2203.10168.pdf',
      },

      {
        key: '15',
        name: ['TJ4DRadSet', 'https://github.com/TJRadarLab/TJ4DRadSet', '15'],
        year: 2022,
        task: ['Object Detection', 'Object Tracking'],
        sensors: 'Radar (Oculii Eagle), Camera, LiDAR',
        radar_data_representation: ['Point Cloud'],
        category_number: 8,
        categories: 'Car, Pedestrian, Cyclist, Bus, Motorcyclist, Truck, Engineering Vehicle, Tricyclist',
        scenarios: ' Roads (intersections, one-way streets)',
        record_area: 'Suzhou, China',
        record_time: 'Fourth quarter of 2021',
        affiliation: 'Tongji University',
        paper_link: 'https://arxiv.org/vc/arxiv/papers/2204/2204.13483v2.pdf',
      },

      {
        key: '16',
        name: ['K-Radar', 'https://github.com/kaist-avelab/k-radar', '16'],
        year: 2022,
        task: ['Object Detection', 'Object Tracking', 'SLAM'],
        sensors: 'Radar (RETINA-4ST), Stereo Cameras, LiDAR',
        radar_data_representation: ['Radar Tensor'],
        category_number: 5,
        categories: 'Pedestrian, Motobike, Bicycle, Sedan, Bus or Truck',
        scenarios: 'Roads (highway, intersection, urban)',
        record_area: 'Daejeon of the Republic of Korea',
        record_time: '-',
        affiliation: 'KAIST',
        paper_link: 'https://www.researchgate.net/publication/361359662_K-Radar_4D_Radar_Object_Detection_Dataset_and_Benchmark_for_Autonomous_Driving_in_Various_Weather_Conditions',
      },



       {
        key: '17',
        name: ['aiMotive', 'https://github.com/aimotive/aimotive_dataset', '17'],
        year: 2022,
        task: ['Object Detection'],
        sensors: 'Radar (77GHz), Camera, LiDAR',
        radar_data_representation: ['Point cloud'],
        category_number: 14,
        categories: 'Pedestrian, Car, Bus, Truck, Van, Motorcycle, Pickup, Rider, Bicycle, Trailer, Train, Shopping Cart, Other Object',
        scenarios: ' Roads (highway, urban, rural)',
        record_area: 'California, US; Austria; and Hungary',
        record_time: '-',
        affiliation: 'aimotive',
        paper_link: 'https://openreview.net/pdf?id=yl9aThYT9W',
      },
      {
        key: '18',
        name: ['WaterScenes', 'https://waterscenes.github.io', '18'],
        year: 2023,
        task: ['Object Detection', 'Segmentation'],
        sensors: 'Radar (Oculii Eagle), Camera, GPS, IMU',
        radar_data_representation: ['point cloud'],
        category_number: 7,
        categories: 'Pier, Buoy, Sailor, Ship, Boat, Vessel, Kayak',
        scenarios: 'Waterways (river, lake, canal, moat)',
        record_area: 'Suzhou, China',
        record_time: '2022/08-2022/12',
        affiliation: 'XJTLU',
        paper_link: 'https://arxiv.org/pdf/2307.06505v2.pdf',
      },

      {
        key: '19',
        name: ['MulRan', 'https://sites.google.com/view/mulran-pr', '19'],
        year: 2020,
        task: ['Place Recognition'],
        sensors: 'Radar (Navtech CIR204-H), Cameras, LiDAR',
        radar_data_representation: ['Radar Tensor'],
        category_number: 7,
        categories: 'buildings, road, tree, sign, car, pedestrain, bike',
        scenarios: 'Roads (city, highway, intersection, crosswalks, parks, recreational areas, tunnels, bridges)',
        record_area: '-',
        record_time: '2018-2019',
        affiliation: 'Politecnico di Milano',
        paper_link: 'https://gisbi-kim.github.io/publications/gkim-2020-icra.pdf',
      },

      {
        key: '20',
        name: ['Oxford Radar RobotCar', 'http://ori.ox.ac.uk/datasets/radar-robotcar-dataset', '20'],
        year: 2020,
        task: ['Object Detection', 'Odometer'],
        sensors: 'Radar (Navtech CTS350-X), camera, LiDAR, GPS, INS',
        radar_data_representation: ['Radar Tensor', 'Grid Map'],
        category_number: 7,
        categories: 'Vehicle,Pedestrian,Bicycle,Sign,Road,Lane,Road Marking',
        scenarios: 'Roads (urban, highway, rural, industrial area, residential area, roundabout, intersection)',
        record_area: '-',
        record_time: '2019-2020',
        affiliation: 'Department of Engineering Science, University of Oxford, UK',
        paper_link: 'https://arxiv.org/pdf/1909.01300.pdf',
      },

      {
        key: '21',
        name: ['SCORP', 'www.sensorcortek.ai/publications/', '21'],
        year: 2020,
        task: ['Semantic Segmentation'],
        sensors: 'Radar (76 GHz), Camera',
        radar_data_representation: ['Radar Tensor'],
        category_number: 0,
        categories: '-',
        scenarios: 'Roads (parking lot)',
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Ottawa, Ottawa, Canada',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9299052',
      },

      {
        key: '22',
        name: ['ColoRadar', 'https://arpg.github.io/coloradar/', '22'],
        year: 2022,
        task: ['Localization'],
        sensors: 'Radar (AWR1843), LiDAR, IMU',
        radar_data_representation: ['Radar Tensor', 'Point Cloud'],
        category_number: 0,
        categories: '-',
        scenarios: 'Indoor, outdoor environments',
        record_area: '-',
        record_time: '-',
        affiliation: 'Department of Computer Science, University of Colorado Boulder, USA',
        paper_link: 'https://journals.sagepub.com/doi/10.1177/02783649211068535',
      },

      {
        key: '23',
        name: ['Pixset', 'dataset.leddartech.com', '23'],
        year: 2021,
        task: ['Object Detection', 'Object Tracking'],
        sensors: 'Radar (TI AWR1843), Cameras, LiDARs',
        radar_data_representation: ['Point Cloud'],
        category_number: 0,
        categories: '-',
        scenarios: 'Roads (Car, Pedestrian, Cyclist)',
        record_area: '-',
        record_time: '2019',
        affiliation: '-',
        paper_link: 'https://arxiv.org/pdf/2102.12010v1.pdf',
      },

      {
        key: '24',
        name: ['NTU4DRadLM', 'https://github.com/junzhang2016/NTU4DRadLM', '24'],
        year: 2023,
        task: ['SLAM'],
        sensors: 'a 3D LiDAR, a visual camera, a 4D Radar, a thermal camera, an IMU and a RTK GPS',
        radar_data_representation: ['Point Cloud'],
        category_number: 0,
        categories: '-',
        scenarios: 'Roads (carpark, garden, campus)',
        record_area: '-',
        record_time: '-',
        affiliation: 'Nanyang Technological University',
        paper_link: 'https://arxiv.org/pdf/2309.00962.pdf',
      },

      {
        key: '25',
        name: ['Dual-Radar', 'https://github.com/adeptthu/Dual-Radar', '25'],
        year: 2023,
        task: ['Object Detection', 'Object Tracking'],
        sensors: 'Radar (ARS548 RDI, Arbe Phoenix), Camera, LiDAR',
        radar_data_representation: ['Point Cloud'],
        category_number: 6,
        categories: 'Car, Pedestrian, Cyclist, Bus, Truck, other',
        scenarios: 'Roads (carpark, garden, campus)',
        record_area: '-',
        record_time: '-',
        affiliation: 'Tsinghua University, Beijing',
        paper_link: 'http://export.arxiv.org/pdf/2310.07602',
      },

      {
        key: '26',
        name: ['Dop-NET', 'https://github.com/UCLRadarGroup/DopNet', '26'],
        year: 2020,
        task: ['Classification'],
        sensors: 'Radar (Ancortek 24GHz)',
        radar_data_representation: ['Micro-Doppler Signature'],
        category_number:0,
        categories: '-',
        scenarios: 'Gestures (wave, pinch, click, swipe)',
        record_area: '-',
        record_time: '-',
        affiliation: 'University College London',
        paper_link: 'https://ietresearch.onlinelibrary.wiley.com/doi/epdf/10.1049/el.2019.4153',
      },

      {
        key: '27',
        name: ['CI4R', '-', '27'],
        year: 2020,
        task: ['Classification'],
        sensors: 'Radar (77GHz, 24GHz, Xethru)',
        radar_data_representation: ['Micro-Doppler Signature'],
        category_number:0,
        categories: '-',
        scenarios: 'Activities (walking, picking, sitting, crawling, kneeling, limping)',
        record_area: '-',
        record_time: '-',
        affiliation: '-',
        paper_link: 'https://doi.org/10.1117/12.2559155',
      },

      {
        key: '28',
        name: ['Open Radar Datasets', '-', '28'],
        year: 2021,
        task: ['Classification'],
        sensors: 'Radar (TI AWR2243), Camera, GPS, IMU',
        radar_data_representation: ['Micro-Doppler Signature'],
        category_number:0,
        categories: '-',
        scenarios: 'Roads (urban, highway, rural)',
        record_area: '-',
        record_time: '-',
        affiliation: 'Norwegian Defence Research Establishment, Kjeller, Norway',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9455239',
      },

      {
        key: '29',
        name: ['MCD-Gesture', 'https://github.com/yadongcs/cross_domain_gesture_dataset', '29'],
        year: 2022,
        task: ['Classification'],
        sensors: 'Radar (TI AWR1843)',
        radar_data_representation: ['Micro-Doppler Signature'],
        category_number:0,
        categories: '-',
        scenarios: ' Gestures (push, pull, slide left, slide right, clockwise turning, counterclockwise turning)',
        record_area: '-',
        record_time: '-',
        affiliation: 'School of Cyber Science and Technology University of Science and Technology of China',
        paper_link: 'https://ieeexplore.ieee.org/abstract/document/9894724',
      },

      {
        key: '30',
        name: ['MiliPoint', 'https://github.com/yizzfz/MiliPoint', '30'],
        year: 2024,
        task: ['Activity Recognition'],
        sensors: 'Radar (TI AWR1843), Stereo Camera',
        radar_data_representation: ['Point Cloud'],
        category_number:0,
        categories: '-',
        scenarios: 'Activities (identification, action classification, keypoint estimation)',
        record_area: '-',
        record_time: '-',
        affiliation: '',
        paper_link: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/c60468eca9cd0b0083f0ff9d0aeb171a-Abstract-Datasets_and_Benchmarks.html',
      },
      {
        key: '31',
        name: ['OORD', 'https://github.com/mttgdd/oord-dataset', '31'],
        year: 2024,
        task: ['Classification'],
        sensors: 'Radar (Navtech CTS350-X), GPS/INS',
        radar_data_representation: ['Radar Tensor'],
        category_number:0,
        categories: '-',
        scenarios: 'off-road, difficult terrain, naturalistic environments',
        record_area: '-',
        record_time: '-',
        affiliation: '',
        paper_link: 'https://arxiv.org/abs/2403.02845',
      },
      
      {
        key: '32',
        name: ['V2X-Radar', 'http://openmpd.com/column/V2X-Radar', '32'],
        year: 2024,
        task: ['Object Detection'],
        sensors: 'Radar (Oculii Eagle, Arbe Phoenix), Camera, LiDAR',
        radar_data_representation: ['Point Cloud'],
        category_number:0,
        categories: '-',
        scenarios: 'Roads (various weather, time and intersection scenarios)',
        record_area: '-',
        record_time: '-',
        affiliation: '',
        paper_link: 'https://arxiv.org/abs/2411.10962',
      },



    ];

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="datasets">
        <div className="title-wrapper">

        {/* <div className="chart">
          <h2 name="title" className="title-h2">Radar Perception Datasets</h2>
          <Column {...config} style={{ textAlign: 'center' }} />
        </div> */}
        <Divider orientation="center"><h1 name="title" className="title-h1">Radar Perception Datasets</h1></Divider>
        <Table bordered scroll={{x: '200px'}}  pagination={{ pageSize: 10, hideOnSinglePage: true }} columns={columns} dataSource={data} onChange={onChange} 
        expandable={{
          columnTitle: 'Size / Scenarios',
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
            Size:  {record.size}<br></br>
            Scenarios:  {record.scenarios}
            </p>
            
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        />
      </div>
      </div>
    );
  }
}

export default Dataset;