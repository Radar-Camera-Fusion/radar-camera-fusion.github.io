import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { Table } from 'antd';


class Dataset extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;


    const data_dataset = [
      'S. Chadwick, W. Maddetn, and P. Newman, “Distant vehicle detection using radar and vision,” Proceedings - IEEE International Conference on Robotics and Automation, vol. 2019-May, pp. 8311—8317, 2019.',
      'M. Meyer and G. Kuschk, “Astyx: Automotive radar dataset for deep learning based 3D object detection,” EuRAD 2019 - 2019 16th European Radar Conference, pp. 129—132, 2019.',
      'M. Bijelic, T. Gruber, F. Mannan, F. Kraus, W. Ritter, K. Dietmayer, and F. Heide, “Seeing Through Fog Without Seeing Fog: Deep Multimodal Sensor Fusion in Unseen Adverse Weather,” 2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), vol. 00, pp. 11 679–11 689, 2020.',
      'A. Ouaknine, A. Newson, J. Rebut, F. Tupin, and P. Perez, “CARRADA dataset: Camera and automotive radar with range-Angle-doppler annotations,” arXiv, 2020.',
      'J. Guan, S. Madani, S. Jog, S. Gupta, and H. Hassanieh, “Through Fog High-Resolution Imaging Using Millimeter Wave Radar,” ser. Proceedings of the IEEE Computer Society Conference on Computer Vision and Pattern Recognition, 2020, pp. 11 461—11 470.',
      'M. Mostajabi, C. M. Wang, D. Ranjan, and G. Hsyu, “High resolution radar dataset for semi-supervised learning of dynamic objects,” IEEE Computer Society Conference on Computer Vision and Pattern Recognition Workshops, vol. 2020-June, pp. 450—457, 2020.',
      'M. Sheeny, E. D. Pellegrin, S. Mukherjee, A. Ahrabian, S. Wang, and A. Wallace, “RADIATE: A Radar Dataset for Automotive Perception in Bad Weather,” arXiv, 2020.',
      'X. Weng, Y. Man, D. Cheng, J. Park, M. O’Toole, and K. Kitani, “All-In-One Drive: A Large-Scale Comprehensive Perception Dataset with High-Density Long-Range Point Clouds.”',
      'Y. Wang, G. Wang, H.-M. Hsu, H. Liu, and J.-N. Hwang, “Rethinking of Radar’s Role: A Camera-Radar Dataset and Systematic Annotator via Coordinate Alignment,” in CVPRW, 2021.',
      'T.-Y. Lim, S. A. Markowitz, and M. N. Do, “RaDICaL: A Synchronized FMCW Radar, Depth, IMU and RGB Camera Data Dataset with Low-Level FMCW Radar Signals.”',
      'O. Schumann, M. Hahn, N. Scheiner, F. Weishaupt, J. F. Tilly, J. Dickmann, and C. Wohler, “RadarScenes: A Real-World Radar Point Cloud Data Set for Automotive Applications,” 2021. [Online]. Available: http://arxiv.org/abs/2104.02493',
      'A. Zhang, F. E. Nowruzi, and R. Laganiere, “RADDet: Range-Azimuth-Doppler based Radar Object Detection for Dynamic Road Users,” 2021 18th Conference on Robots and Vision (CRV), vol. 00, pp. 95–102, 2021.',
      'Y. Cheng, J. Zhu, M. Jiang, J. Fu, C. Pang1, P. Wang1, K. Sankaran3, O. Onabola3, Y. Liu2, D. Liu3, and Y. Bengio3, “FloW: A Dataset and Benchmark for Floating Waste Detection in Inland Waters,” ser. ICCV, 2021.',
      'J. Rebut, A. Ouaknine, W. Malik, and P. Pe ́rez, “Raw High-Definition Radar for Multi-Task Learning,” arXiv, 2021.',
      'A. Palffy, E. Pool, S. Baratam, J. Kooij, and D. Gavrila, “Multi-class Road User Detection with 3+1D Radar in the View-of-Delft Dataset,” IEEE Robotics and Automation Letters, vol. PP, no. 99, pp. 1–1, 2022.',
      'K. Burnett, D. J. Yoon, Y. Wu, A. Z. Li, H. Zhang, S. Lu, J. Qian, W.-K. Tseng, A. Lambert, K. Y. K. Leung, A. P. Schoellig, and T. D. Barfoot, “Boreas: A Multi-Season Autonomous Driving Dataset,” arXiv, 2022.',
      'A. Palffy, E. Pool, S. Baratam, J. Kooij, and D. Gavrila, “Multi-class Road User Detection with 3+1D Radar in the View-of-Delft Dataset,” IEEE Robotics and Automation Letters, vol. PP, no. 99, pp. 1–1, 2022.',
      'D.-H. Paek, S.-H. Kong, and K. T. Wijaya, “K-Radar: 4D Radar Object Detection Dataset and Benchmark for Autonomous Driving in Various Weather Conditions,” arXiv, 2022.',
      'T.Matuszka,I.Barton,A ́.Butykai,P.Hajas,D.Kiss,D.Kova ́cs, S. Kunsa ́gi-Ma ́te ́, P. Lengyel, G. Ne ́meth, L. Peto ̋ et al., “aimotive dataset: A multimodal dataset for robust autonomous driving with long-range perception,” arXiv preprint arXiv:2211.09445, 2022.'

    ];

    const data_fusion = [
      'S. Chadwick, W. Maddetn, and P. Newman, “Distant vehicle detection using radar and vision,” Proceedings - IEEE International Conference on Robotics and Automation, vol. 2019-May, pp. 8311—8317, 2019.',
      'R. Nabati and H. Qi, “RRPN: Radar Region Proposal Network for Object Detection in Autonomous Vehicles,” arXiv, pp. 3093—3097, 2019.',
      'H. Jha, V. Lodhi, and D. Chakravarty, “Object Detection and Identification Using Vision and Radar Data Fusion System for Ground-Based Navigation,” 2019 6th International Conference on Signal Processing and Integrated Networks (SPIN), vol. 00, pp. 590–593, 2019.',
      'V. Lekic and Z. Babic, “Automotive radar and camera fusion using Generative Adversarial Networks,” Computer Vision and Image Understanding, vol. 184, no. July 2018, pp. 1—8, 2019. [Online]. Available: https://doi.org/10.1016/j.cviu.2019.04.002',
      'M. Meyer and G. Kuschk, “Deep Learning Based 3D Object Detection for Automotive Radar and Camera,” 1 2019.',
      'V. John and S. Mita, “RVNet: Deep Sensor Fusion of Monocular Camera and Radar for Image-Based Obstacle Detection in Challenging Environments,” Lecture Notes in Computer Science, pp. 351–364, 2019.',
      'T.-Y. Lim, A. Ansari, B. Major, and D. Fontijne, “Radar and Camera Early Fusion for Vehicle Detection in Advanced Driver Assistance Systems.”',
      'V. John, M. K. Nithilan, S. Mita, H. Tehrani, R. S. Sudheesh, and P. P. Lalu, “SO-Net: Joint Semantic Segmentation and Obstacle Detection Using Deep Fusion of Monocular Camera and Radar,” Lecture Notes in Computer Science, pp. 138–148, 2020.',
      'S. Chang, Y. Zhang, F. Zhang, X. Zhao, S. Huang, Z. Feng, and Z. Wei, “Spatial Attention Fusion for Obstacle Detection Using MmWave Radar and Vision Sensor,” Sensors, vol. 20, no. 4, p. 956, 2020.',
      'F. Nobis, M. Geisslinger, M. Weber, J. Betz, and M. Lienkamp, “A Deep learning-based radar and camera sensor fusion architecture for object detection,” arXiv, 2020.',
      'M. Bijelic, T. Gruber, F. Mannan, F. Kraus, W. Ritter, K. Dietmayer, and F. Heide, “Seeing Through Fog Without Seeing Fog: Deep Multimodal Sensor Fusion in Unseen Adverse Weather,” 2020 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), vol. 00, pp. 11 679–11 689, 2020.',
      'R. Yadav, A. Vierling, and K. Berns, “Radar+RGB Attentive Fusion for Robust Object Detection in Autonomous Vehicles,” arXiv, 2020.',
      'R. Nabati and H. Qi, “Radar-camera sensor fusion for joint object detection and distance estimation in autonomous vehicles,” arXiv, 2020.',
      'K. Kowol, M. Rottmann, S. Bracke, and H. Gottschalk, “YOdar: Uncertainty-based Sensor Fusion for Vehicle Detection with Camera and Radar Sensors,” arXiv, 2020.',
      'R. Nabati and H. Qi, “Radar-camera sensor fusion for joint object detection and distance estimation in autonomous vehicles,” arXiv, 2020.',
      'Y. Wang, Z. Jiang, X. Gao, J.-N. Hwang, G. Xing, and H. Liu, “RODNet: Radar Object Detection using Cross-Modal Supervision,” 2021 IEEE Winter Conference on Applications of Computer Vision(WACV), vol. 00, pp. 504–513, 2021.',
      'X. Gao, G. Xing, S. Roy, and H. Liu, “RAMP-CNN: A Novel Neural Network for Enhanced Automotive Radar Object Recognition,” IEEE Sensors Journal, vol. 21, no. 4, pp. 5119—5132, 2021.',
      'L.-q. Li and Y.-l. Xie, “A Feature Pyramid Fusion Detection Algorithm Based on Radar and Camera Sensor,” 2020 15th IEEE International Conference on Signal Processing (ICSP), vol. 1, pp. 366–370, 2020.',
      'J. Kim, Y. Kim, and D. Kum, “Low-level Sensor Fusion for 3D Vehicle Detection using Radar Range-Azimuth Heatmap and Monocular Image,” Lecture Notes in Computer Science, pp. 388–402, 2021.',
      'X. Dong, B. Zhuang, Y. Mao, and L. Liu, “Radar Camera Fusion via Representation Learning in Autonomous Driving,” 2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), vol. 00, pp. 1672–1681, 2021.',
      'F. Nobis, E. Shafiei, P. Karle, J. Betz, and M. Lienkamp, “Radar Voxel Fusion for 3D Object Detection,” Applied Sciences, vol. 11, no. 12, p. 5598, 2021.',
      'H. Cui, J. Wu, J. Zhang, G. Chowdhary, and W. R. Norris, “3D Detection and Tracking for On-road Vehicles with a Monovision Camera and Dual Low-cost 4D mmWave Radars,” 2021 IEEE International Intelligent Transportation Systems Conference (ITSC), vol. 00, pp. 2931–2937, 2021.',
      'Y. Cheng, H. Xu, and Y. Liu, “Robust Small Object Detection on the Water Surface through Fusion of Camera and Millimeter Wave Radar,” ser. ICCV, 2021.',
      'Y. Kim, J. W. Choi, and D. Kum, “GRIF Net: Gated Region of Interest Fusion Network for Robust 3D Object Detection from Radar Point Cloud and Monocular Image,” 2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), vol. 00, pp. 10 857–10 864, 2021.',
      'L. Sta ̈cker, P. Heidenreich, J. Rambach, and D. Stricker, “Fusion Point Pruning for Optimized 2D Object Detection with Radar-Camera Fusion,” 2022 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), vol. 00, pp. 1275–1282, 2022.',
      'A. W. Harley, Z. Fang, J. Li, R. Ambrus, and K. Fragkiadaki, “A Simple Baseline for BEV Perception Without LiDAR,” arXiv, 2022.',
      'K. Bansal, K. Rungta, and D. Bharadia, “RadSegNet: A Reliable Approach to Radar Camera Fusion,” arXiv, 2022.',
      'T. Zhou, Y. Shi, J. Chen, K. Jiang, M. Yang, and D. Yang, “Bridging the View Disparity of Radar and Camera Features for Multi-modal Fusion 3D Object Detection,” arXiv, 2022.',
      'Y. Kim, S. Kim, J. W. Choi, and D. Kum, “CRAFT: Camera-Radar 3D Object Detection with Spatio-Contextual Fusion Transformer,” arXiv, 2022.',
      'F. Drews, D. Feng, F. Faion, L. Rosenbaum, M. Ulrich, and C. Gla ̈ser, “DeepFusion: A Robust and Modular 3D Object Detector for Lidars, Cameras and Radars,” arXiv, 2022.',
      'J.-J. Hwang, H. Kretzschmar, J. Manela, S. Rafferty, N. ArmstrongCrews, T. Chen, and D. Anguelov, “CramNet: Camera-Radar Fusion with Ray-Constrained Cross-Attention for Robust 3D Object Detection,” arXiv, 2022.',
      'Z. Wu, G. Chen, Y. Gan, L. Wang, and J. Pu, Mvfusion: Multi-view 3d object detection with semantic-aligned radar and camera fusion, arXiv preprint arXiv:2302.10511, 2023.',
      'Y. Kim, S. Kim, J. Shin, J. W. Choi, and D. Kum, Crn: Camera radar net for accurate, robust, efAcient 3d perception, arXiv preprint arXiv:2304.00670, 2023.'
    ];

    const references_dataset = data_dataset.map((item, key) => {
      return (
        <p>
          [{key + 1}] {item}
        </p>
      );
    });
    const references_fusion = data_fusion.map((item, key) => {
      return (
        <p>
          [{key + 1 + data_dataset.length}] {item}
        </p>
      );
    });

    return (
      <div className="home-page-wrapper content12-wrapper" id="references">
        {/* <div className="content12 citation"> */}
          {/* <h1 name="title" className="title-h1">Citation</h1>
          <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
            <pre><code>
              111
            </code>
            </pre>
          </div> */}

          {/* </div> */}
        {/* </div> */}
        {/* <div style={{ backgroundColor: '#e6f7ff', height: '40px' }}>11</div> */}
        <div className="content12" style={{ height: '400px', overflowY: 'scroll' }}>
          <h1  name="title" class="title-h1">References</h1>
          <span>
            {references_dataset}
            {references_fusion}
          </span>
        </div>
        <div className="content12" id="citation">
          <h1  name="title" class="title-h1">Citation</h1>
          <div style={{backgroundColor: '#f3f6fa', padding: '10px'}}>
          <code>
          {"@misc{yao2023radarcamera,"}<br></br> 
          &nbsp;&nbsp;&nbsp;&nbsp;{"title={Radar-Camera Fusion for Object Detection and Semantic Segmentation in Autonomous Driving: A Comprehensive Review}, " }<br></br> 
          &nbsp;&nbsp;&nbsp;&nbsp;{"author={Shanliang Yao and Runwei Guan and Xiaoyu Huang and Zhuoxiao Li and Xiangyu Sha and Yong Yue and Eng Gee Lim and Hyungjoon Seo and Ka Lok Man and Xiaohui Zhu and Yutao Yue}," }<br></br> 
          &nbsp;&nbsp;&nbsp;&nbsp;{"year={2023},"}<br></br> 
          &nbsp;&nbsp;&nbsp;&nbsp;{"eprint={2304.10410},"}<br></br> 
          &nbsp;&nbsp;&nbsp;&nbsp;{"archivePrefix={arXiv},"}<br></br> 
          &nbsp;&nbsp;&nbsp;&nbsp;{"primaryClass={cs.CV}"}<br></br> 
          {"}"}
          </code>
          </div>
          <h3  name="title" class="title-h1" style={{ margin: '10px 0 0 0'}}>Awesome Radar-Camera Fusion: <a target='_blank' href='https://github.com/XJTLU-VEC/Radar-Camera-Fusion/blob/gh-pages/README.md'>https://github.com/XJTLU-VEC/Radar-Camera-Fusion</a></h3>
        </div>
      </div>
    )
  }
}

export default Dataset;
