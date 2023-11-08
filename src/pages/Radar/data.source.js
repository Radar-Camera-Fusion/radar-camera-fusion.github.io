import React from 'react';
import logo from './images/logo.png';

export const Nav00DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children:
      logo,
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: 'characteristics',
        children: 'Characteristics',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'datasets',
        children: 'Datasets',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'methods',
        children: 'Methods',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'citation',
        children: 'Citation',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'https://radar-camera-fusion.github.io',
        children: 'Radar Camera Fusion',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  Menu: {
    children: [
      {
        name: 'Banner3_0',
        to: 'Banner3_0',
        children: '首页',
        className: 'active menu-item',
      },
      {
        name: 'Content8_0',
        to: 'Content8_0',
        children: '特邀嘉宾',
        className: 'menu-item',
      },
      {
        name: 'Content9_0',
        to: 'Content9_0',
        children: '会议日程',
        className: 'menu-item',
      },
      {
        name: 'Content10_0',
        to: 'Content10_0',
        children: '大会地址',
        className: 'menu-item',
      },
      {
        name: 'Content11_0',
        to: 'Content11_0',
        children: '展台展示',
        className: 'menu-item',
      },
      {
        name: 'Content12_0',
        to: 'Content12_0',
        children: '特别鸣谢',
        className: 'menu-item',
      },
    ],
  },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children:
          'Radar Perception in Autonomous Driving: Exploring Different Data Representations',
        // texty: true,
      },
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Shanliang Yao, Runwei Guan, Zitian Peng, Chenhang Xu, Xiangyu Sha, ',
      },
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Yong Yue, Eng Gee Lim, Hyungjoon Seo, Ka Lok Man, Xiaohui Zhu, Yutao Yue',
      },
      
      // {
      //   name: 'name',
      //   className: 'banner3-name',
      //   children: '探索极致用户体验与最佳工程实践探索',
      // },
      // { name: 'button', className: 'banner3-button', children: '立即报名' },
      {
        name: 'time',
        className: 'banner3-time',
        children: 'University of Liverpool, Xi‘an Jiaotong-Liverpool University, Institute of Deep Perception Technology, JITRI',
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: 'GitHub: https://github.com/Radar-Camera-Fusion/Awesome-Radar-Perception',
        type: 'primary',
        href: 'https://github.com/Radar-Camera-Fusion/Awesome-Radar-Perception',
        target: '_blank',
      },
    ],
  },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
    //   {
    //     name: 'image',
    //     children:
    //       'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
    //     className: 'title-image',
    //   },
    //   { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.01 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2023 <a href="https://github.com/Radar-Camera-Fusion">Radar-Camera-Fusion</a> All Rights Reserved
      </span>
    ),
  },
};
