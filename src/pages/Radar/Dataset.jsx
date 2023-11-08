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


    const chart_data = [
      {
        "type": "Point Cloud",
        "x": "nuScenes",
        "y": 60
      },
      {
        "type": "Point Cloud",
        "x": "Astyx",
        "y": 3
      },
      {
        "type": "Point Cloud",
        "x": "SeeingThroughFog",
        "y": 30
      },
      {
        "type": "Radar Tensor",
        "x": "CARRADA",
        "y": 28
      },
      {
        "type": "Point Cloud",
        "x": "HawkEye",
        "y": 10
      },
      {
        "type": "Radar Tensor",
        "x": "Zender",
        "y": 13
      },
      {
        "type": "Point Cloud",
        "x": "Zender",
        "y": 13
      },
      {
        "type": "Radar Tensor",
        "x": "RADIATE",
        "y": 65
      },
      {
        "type": "Point Cloud",
        "x": "AIODrive",
        "y": 70
      },
      {
        "type": "Radar Tensor",
        "x": "CRUW",
        "y": 90
      },
      {
        "type": "ADC Signal",
        "x": "RaDICaL",
        "y": 88
      },
      {
        "type": "Point Cloud",
        "x": "RadarScenes",
        "y": 60
      },
      {
        "type": "Radar Tensor",
        "x": "RADDet",
        "y": 24
      },
      {
        "type": "Radar Tensor",
        "x": "FloW",
        "y": 6
      },
      {
        "type": "Point Cloud",
        "x": "FloW",
        "y": 6
      },
      {
        "type": "ADC Signal",
        "x": "RADIal",
        "y": 7
      },
      {
        "type": "Radar Tensor",
        "x": "RADIal",
        "y": 7
      },
      {
        "type": "Point Cloud",
        "x": "RADIal",
        "y": 7
      },
      {
        "type": "Point Cloud",
        "x": "VOD",
        "y": 21
      },
      {
        "type": "Point Cloud",
        "x": "Boreas",
        "y": 18
      },
      {
        "type": "Point Cloud",
        "x": "TJ4DRadSet",
        "y": 60
      },
      {
        "type": "Radar Tensor",
        "x": "K-Radar",
        "y": 55
      },
      {
        "type": "Radar Tensor",
        "x": "aiMotive",
        "y": 40
      },
      {
        "type": "Point Cloud",
        "x": "WaterScenes",
        "y": 66
      },
    ];
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

    const config = {
      data: chart_data,
      isStack: true,
      legend: {
        layout: 'horizontal',
        position: 'bottom'
      },
      xAxis: {
        label: {
          autoRotate: true,
          rotate: '100',
          offset: 20,
        },
      },
      columnWidthRatio: 0.5,
      // yAxis: false,
      autoFit: true,
      appendPadding: [0, 100, 10 , 100],
      "xField": "x",
      "yField": "y",
      seriesField: 'type',
      "columnSize": 10,
      "color": [
        "#9C6657",
        "#B2934A",
        "#5F9C6B",
        "#5b8ff9",
        "#5d7092",
        "#e8684a"
      ],
      label: {
        content: (originData) => {
          const val = parseFloat(originData.value);

          if (val < 0.05) {
            return (val * 100).toFixed(1) + '%';
          }
        },
        offset: 10,
      },
      tooltip: {
        // fields: ['x', 'y'],
        showContent: true,
        customItems: (originalItems) => {
          // process originalItems, 
          return originalItems;
        },
        formatter: (datum) => {
          console.log(datum)
          return { name: datum.type, value: '✅' };
        },
      },
      annotations,
  
      // annotations: [{
      //   type: 'text',
      //   position: [0, 1200],
      //   content: '12k',
      //   style: { textAlign: 'center' },
      // }, {
      //   type: 'text',
      //   position: [1, 2000],
      //   content: '12k',
      //   style: { textAlign: 'center' },
      // }, {
      //   type: 'text',
      //   position: [2, 1700],
      //   content: '12k',
      //   style: { textAlign: 'center' },
      // },
      // ],

    }



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
        title: 'Annotation',
        dataIndex: 'annotation',
        filters: [
          {
            text: '2D box-level',
            value: '2D box-level',
          },
          {
            text: '3D box-level',
            value: '3D box-level',
          },
          {
            text: '2D pixel-level',
            value: '2D pixel-level',
          },
          {
            text: '3D point-level',
            value: '3D point-level',
          },
        ],
        onFilter: (value, record) => record.annotation.includes(value),
        filterSearch: true,
        // width: '20%',
        render: (text, record) => (
          <span>
            {text.map(tag => {
              let color = '';
              switch (tag) {
                case '2D box-level': color = '#1890ff'; break;
                case '3D box-level': color = '#fa541c'; break;
                case '2D pixel-level': color = '#fa8c16'; break;
                case '2D point-level': color = '#13c2c2'; break;
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
        title: 'Radar Data Representation',
        dataIndex: 'radar_data_representation',
        filters: [
          {
            text: 'Point Cloud',
            value: 'Point Cloud',
          },
          {
            text: 'Range-Doppler Tensor',
            value: 'Range-Doppler Tensor',
          },
          {
            text: 'Range-Azimuth Tensor',
            value: 'Range-Azimuth Tensor',
          },
          {
            text: 'Range-Azimuth-Doppler Tensor',
            value: 'Range-Azimuth-Doppler Tensor',
          },
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
                case 'Range-Doppler Tensor': color = '#2db7f5'; 
                case 'Range-Azimuth Tensor': color = '#2db7f5'; 
                case 'Range-Azimuth-Doppler Tensor': color = '#2db7f5'; 
                // case 'Range-Doppler Tensor': color = '#2db7f5'; 
                break;
                case 'Grid Map': color = '#87d068'; break;
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
      {
        key: '1',
        name: ['nuScenes', 'https://www.nuscenes.org/nuscenes', '1'],
        year: 2019,
        task: ['Object Detection', 'Object Tracking', 'Localization', 'Planning', 'Prediction'],
        annotation: ['3D box-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 23,
        categories: 'Vehicle, Pedestrian, Bicycle, Movable Object, Static Object, etc.',
        size: '1000 scenes, 1.4M boxes, 40k frames, 5.5 hours',
        scenarios: ['A diverse set of locations (urban, residential, nature and industrial), times (day and night)', 'sun, rain and clouds'],
        record_area: 'Boston, Singapore',
        record_time: 'September 2018',
        affiliation: 'nuTonomy',
      },
      {
        key: '2',
        name: ['Astyx', 'http://www.astyx.net', '2'],
        year: 2019,
        task: ['Object Detection'],
        annotation: ['3D box-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 7,
        categories: 'Bus, Car, Cyclist, Motorcyclist, Person, Trailer, Truck',
        size: '500 frames, around 3000 labeled objects',
        scenarios: ['-'],
        record_area: 'South of Germany',
        record_time: '-',
        affiliation: 'Technical University of Munich',
      },
      {
        key: '3',
        name: ['SeeingThroughFog', 'https://www.uni-ulm.de/en/in/driveu/projects/dense-datasets/', '3'],
        year: 2020,
        task: ['Object Detection'],
        annotation: ['2D box-level', '3D box-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 4,
        categories: 'Passenger Car, Large Vehicle, Pedestrian, Ridable Vehicle',
        size: '12k samples in real-world driving scenes and 1.5k samples in controlled weather conditions within a fog chamber, 100k objects',
        scenarios: ['Pedestrian zone, residential area, construction area and highway, daytime and street condition',
          'under all weather conditions. Severe weather – such as snow, heavy rain or fog'],
        record_area: 'Germany, Sweden, Denmark, and Finland',
        record_time: 'February and December 2019',
        affiliation: 'Mercedes-Benz AG',
      },

      {
        key: '4',
        name: ['CARRADA', 'https://arthurouaknine.github.io/codeanddata/carrada', '4'],
        year: 2020,
        task: ['Object Detection', 'Semantic Segmentation',
          'Object Tracking', 'Trajectory Prediction'],
        annotation: ['2D box-level', '2D pixel-level'],
        radar_data_representation: ['Range-Doppler Tensor',
          'Range-Azimuth Tensor'],
        category_number: 3,
        categories: 'Pedestrian, Car, Cyclist',
        size: '12,666 frames, 78 instances, 7,139 annotated frames with instances, 23GB synchronized camera and radar views',
        scenarios: ['Urban driving scenarios', 'adverse weather conditions'],
        record_area: 'Canada',
        record_time: '-',
        affiliation: 'Télécom Paris',
      },


       {
        key: '5',
        name: ['HawkEye', 'https://jguan.page/HawkEye/', '5'],
        year: 2020,
        task: ['Semantic Segmentation'],
        annotation: ['3D point-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 9,
        categories: 'Sub-compact, Compact, Mid-sized, Full-sized, Sports, SUVs, Jeep, Vans, Trucks',
        size: '3k images, 4k scenes, 120 car models',
        scenarios: ['327 scenes of cars in 3 types of backgrounds: indoor parking garage, outdoor lot, and outdoor house drive-through.'],
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Illinois at Urbana-Champaign',
      },


      {
        key: '6',
        name: ['Zendar', 'http://zendar.io/dataset', '6'],
        year: 2020,
        task: ['Object Detection', 'Mapping', 'Localization'],
        annotation: ['2D box-level'],
        radar_data_representation: ['Range-Doppler Tensor',
          'Range-Azimuth Tensor', 'Point Cloud'],
        category_number: 1,
        categories: 'Car',
        size: 'Over 11k moving cars labeled in 27 diverse scenes with over 40k automatically generated labels',
        scenarios: ['Complex urban driving scenarios'],
        record_area: '-',
        record_time: '-',
        affiliation: 'Zendar',
      },

     

      {
        key: '7',
        name: ['RADIATE', 'http://pro.hw.ac.uk/radiate/', '7'],
        year: 2020,
        task: ['Object Detection', 'Object Tracking', 'SLAM', 'Scene Understanding'],
        annotation: ['2D box-level'],
        radar_data_representation: ['Range-Azimuth Tensor'],
        category_number: 8,
        categories: 'Car, Van, Bus, Truck, Motorbike, Bicycle, Pedestrian and a group of pedestrians',
        size: '200k bounding boxes over 44k radar frames',
        scenarios: ['driving scenarios (e.g., parked, urban, motorway and suburban)',
          'a variety of weather conditions (e.g., sun, night, rain, fog and snow)'],
        record_area: 'Edinburgh',
        record_time: 'Between February 2019 and February 2020',
        affiliation: 'Heriot-Watt University',
      },

      {
        key: '8',
        name: ['AIODrive', 'http://www.aiodrive.org/', '8'],
        year: 2020,
        task: ['Object Detection', 'Object Tracking', 'Semantic Segmentation', 'Trajectory Prediction', 'Depth Estimation'],
        annotation: ['2D box-level', '3D box-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 11,
        categories: 'Vehicle, Pedestrian, Vegetation, Building, Road, Sidewalk, Wall, Traffic Sign, Pole and Fence',
        size: '500k annotated images for 5 camera viewpoints, 100k annotated frames for radar sensor',
        scenarios: ['Crowded scenes, people running, high-speed driving, violations of the traffic rule, and car accidents.',
          'Adverse weather and lighting.'],
        record_area: 'one of eight cities from Carla assets',
        record_time: '-',
        affiliation: 'Carnegie Mellon University',
      },

      {
        key: '9',
        name: ['CRUW', 'https://www.cruwdataset.org/', '9'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D box-level'],
        radar_data_representation: ['Range-Azimuth Tensor'],
        category_number: 3,
        categories: 'Pedestrian, Cyclist, Car',
        size: '400K frames, 260K objects, 3.5 hours',
        scenarios: ['Area: parking lot, campus road, city street, and highway. Several vision-fail scenarios where the image qualities are pretty bad, i.e., dark, strong light, blur, etc.',
          'strong/weak lighting condition'],
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Washington',
      },

      {
        key: '10',
        name: ['RaDICaL', 'https://publish.illinois.edu/radicaldata/', '10'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D box-level'],
        radar_data_representation: ['ADC Signal'],
        category_number: 2,
        categories: 'Pedestrian, Car',
        size: '393k frames',
        scenarios: ['Indoor: people, static clutter; outdoor: neighborhood, suburban, highways and city roads.'],
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Illinois at Urbana-Champaign',
      },

      {
        key: '11',
        name: ['RadarScenes', 'https://radar-scenes.com/', '11'],
        year: 2021,
        task: ['Object Detection', 'Semantic Segmentation'],
        annotation: ['2D point-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 11,
        categories: 'Car, Large Vehicle, Truck, Bus, Train, Bicycle, Motorized Two-wheeler, Pedestrian, Pedestrian Group, Animal, and Other',
        size: '40.208 frames, 158 individual sequences, 118.9M radar points',
        scenarios: ['Inner city, T-junction, commercial area, urban area, country road, road works'],
        record_area: 'Ulm, Germany',
        record_time: 'Between 2016 and 2018',
        affiliation: 'Mercedes-Benz AG, Stuttgart, Germany',
      },

      {
        key: '12',
        name: ['RADDet', 'https://github.com/ZhangAoCanada/RADDet', '12'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D box-level', '3D box-level'],
        radar_data_representation: ['Range-Azimuth-Doppler Tensor'],
        category_number: 6,
        categories: 'Person, Bicycle, Car, Motorcycle, Bus, Truck',
        size: '10,158 frames',
        scenarios: ['Sidewalks', 'sunny weather conditions'],
        record_area: '-',
        record_time: 'September to October 2020',
        affiliation: 'University of Ottawa',
      },

      {
        key: '13',
        name: ['FloW', 'https://github.com/ORCA-Uboat/FloW-Dataset', '13'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D box-level'],
        radar_data_representation: ['Range-Doppler Tensor', 'Point Cloud'],
        category_number: 1,
        categories: 'Bottle',
        size: '4k frames',
        scenarios: ['Inland water surface'],
        record_area: '-',
        record_time: '-',
        affiliation: 'ORCA-Uboat',
      },

      {
        key: '14',
        name: ['RADIal', 'https://github.com/valeoai/RADIal', '14'],
        year: 2021,
        task: ['Object Detection', 'Semantic Segmentation'],
        annotation: ['2D box-level'],
        radar_data_representation: ['ADC Signal', 'Range-Azimuth-Doppler Tensor', 'Range-Azimuth Tensor', 
          'Range-Doppler Tensor', 'Point Cloud'],
        category_number: 1,
        categories: 'Vehicle',
        size: '8,252 frames are labelled with 9,550 vehicle',
        scenarios: ['City street, highway, countryside road'],
        record_area: '-',
        record_time: '-',
        affiliation: 'Valeo.ai, Paris, France',
      },

      {
        key: '15',
        name: ['VoD', 'https://tudelft-iv.github.io/view-of-delft-dataset/', '15'],
        year: 2022,
        task: ['Object Detection'],
        annotation: ['2D box-level', '3D box-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 13,
        categories: 'Car, Pedestrian, Cyclist, Rider, Unused Bicycle, Bicycle Rack, Human Depiction, Moped or Scooter, Motor, Ride Other, Vehicle Other, Truck, Ride Uncertain',
        size: '8693 frames, 123,106 annotations of both moving and static objects, including 26,587 pedestrian, 10,800 cyclist and 26,949 car labels',
        scenarios: ['Campus, suburb and old-town locations. With a preference for scenarios containing vulnerable road users'],
        record_area: 'City of Delft (The Netherlands)',
        record_time: '-',
        affiliation: 'TU Delft, The Netherlands',
      },

      {
        key: '16',
        name: ['Boreas', 'https://www.boreas.utias.utoronto.ca/', '16'],
        year: 2022,
        task: ['Object Detection', 'Localization', 'Odometry'],
        annotation: ['2D box-level'],
        radar_data_representation: ['Range-Azimuth Tensor'],
        category_number: 4,
        categories: 'Car, Pedestrian, Cyclist, Misc',
        size: '7.1k frames for detection, over 350km of driving data, 326,180 unique 3D box annotations',
        scenarios: ['a repeated route near the University of Toronto Institute for Aerospace Studies (UTIAS)', 'various weather conditions (sun, cloud, rain, night, snow) and seasons.'],
        record_area: 'University of Toronto Institute for Aerospace Studies (UTIAS)',
        record_time: 'November, 2020 and ﬁnishing in November, 2021',
        affiliation: 'University of Toronto',
      },

      {
        key: '17',
        name: ['TJ4DRadSet', 'https://github.com/TJRadarLab/TJ4DRadSet', '17'],
        year: 2022,
        task: ['Object Detection', 'Object Tracking'],
        annotation: ['3D box-level'],
        radar_data_representation: ['Point Cloud'],
        category_number: 8,
        categories: 'Car, Pedestrian, Cyclist, Bus, Motorcyclist, Truck, Engineering Vehicle, Tricyclist',
        size: '40K frames in total, 7757 frames within 44 consecutive sequences',
        scenarios: ['various driving scenarios, different road types, such as urban roads, elevated roads, industrial zones, etc.',
          'various lighting conditions, such as normal lighting, bright light and darkness, and different road types, such as urban roads, elevated roads, industrial zones, etc. Complex scenarios such as object-dense intersections, and simple scenarios such as one-way streets with a few objects.'],
        record_area: 'Suzhou, China',
        record_time: 'Fourth quarter of 2021',
        affiliation: 'Tongji University',
      },

      {
        key: '18',
        name: ['K-Radar', 'https://github.com/kaist-avelab/k-radar', '18'],
        year: 2022,
        task: ['Object Detection', 'Object Tracking', 'SLAM'],
        annotation: ['3D box-level'],
        radar_data_representation: ['Range-Azimuth-Doppler Tensor'],
        category_number: 5,
        categories: 'Pedestrian, Motobike, Bicycle, Sedan, Bus or Truck',
        size: '35K frames of 4D radar tensor',
        scenarios: ['adverse weathers (fog, rain, and snow)', 'various road structures (urban, suburban roads, alleyways, and highways).'],
        record_area: 'Daejeon of the Republic of Korea',
        record_time: '-',
        affiliation: 'KAIST',
      },



       {
        key: '19',
        name: ['aiMotive', 'https://github.com/aimotive/aimotive_dataset', '19'],
        year: 2022,
        task: ['Object Detection'],
        annotation: ['3D box-level'],
        radar_data_representation: ['Point cloud'],
        category_number: 14,
        categories: 'Pedestrian, Car, Bus, Truck, Van, Motorcycle, Pickup, Rider, Bicycle, Trailer, Train, Shopping Cart, Other Object',
        size: '26,583 frames, 425k objects',
        scenarios: ['a diverse set of locations(highway, suburban, urban), times(daytime, night), and weather conditions(sun, cloud, rain, glare).', 
          'highway, urban, and suburban areas'],
        record_area: 'California, US; Austria; and Hungary ',
        record_time: '-',
        affiliation: 'aimotive',
      },
      {
        key: '20',
        name: ['WaterScenes', 'https://waterscenes.github.io', '20'],
        year: 2023,
        task: ['Object Detection', 'Object Detection', 'Instance Segmentation', 'Semantic Segmentation', 'Free-space Segmentation', 'Waterline Segmentation', 'Panoptic Perception'],
        annotation: ['2D box-level', '2D pixel-level', '2D line-level', '3D point-level'],
        radar_data_representation: ['point cloud'],
        category_number: 7,
        categories: 'Pier, Buoy, Sailor, Ship, Boat, Vessel, Kayak',
        size: '54,120 frames, 200k objects',
        scenarios: ['diverse time conditions (daytime, nightfall, night), lighting conditions (normal, dim, strong), weather conditions (sunny, overcast, rainy, snowy) and waterway conditions (river, lake, canal, moat)'],
        record_area: 'Suzhou, China',
        record_time: '2022/08-2022/12',
        affiliation: 'XJTLU',
      },



    ];

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="datasets">
        <div className="title-wrapper">

        <div className="chart">
          <h2 name="title" className="title-h2">Radar Perception Datasets</h2>
          {/* <Column {...config} style={{ textAlign: 'center' }} /> */}
        </div>
        <br/><br/><br/>
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
