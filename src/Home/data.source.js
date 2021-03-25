import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://i.postimg.cc/SQYD6cxn/Group-3x.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item3',
        className: 'header0-item kmnivz7qz9f-editor_css',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0 kmniwde21cf-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title kmniwgt8su-editor_css',
    children: 'https://i.postimg.cc/gjMgMHQ5/USDG-logo.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <span>
          <span>
            <p>USDG, 由ETH2质押收益支撑的稳定币</p>
          </span>
        </span>
      </span>
    ),
  },
  button: {
    className: 'banner0-button kmniwk25wp-editor_css',
    children: 'Learn More',
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>USDG介绍</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>币值稳定</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>ETH2质押奖励支持币价</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>层级锁定</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>转账即可自动形成层级关系</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>持币生息</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>年收益率为：4.9%-21%</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>新一代稳定币</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>基于ETH2.0质押</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon kmp17yuotn9-editor_css',
            children:
              'https://www.flaticon.com/svg/vstatic/svg/3587/3587791.svg?token=exp=1616604543~hmac=b1401085ecae322ade144302a742958e',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>币值支撑</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    基于ETH2网络质押的ETH量和出币量，既可以确保USDG的币值稳定的有质押进V神合约地址的ETH支撑，又可以通过ETH的出币自动生产出更多USDG
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon kmp18269uxg-editor_css',
            children:
              'https://www.flaticon.com/svg/vstatic/svg/3587/3587823.svg?token=exp=1616604543~hmac=d3d2bb8ccd773fd3a6e597948f65f950',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>分布式货币基金池</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    0x地址即是“分布式货币基金池”，而不是把资金归集到一个“账户内”实现一种分布式的货币基金！每个0x以太坊地址都是一个货币理财基金
                  </p>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon kmp183k6ovf-editor_css',
            children:
              'https://www.flaticon.com/svg/vstatic/svg/3588/3588065.svg?token=exp=1616604543~hmac=7c93a924c9811022aecb6caf49cc3972',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>新型金融关系网络</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    无需打开Dapp，无需推荐码，无需注册账号，无需允许和自动授权，仅需“转账”且到以太坊钱包地址，即可自动的形成层级关系。
                  </p>
                  <p>
                    FTC
                    Dapp锁定，每次交易都将会有0.1%的手续费永久性的和推荐人挂钩（6层关系网络，永久锁定）
                  </p>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2021 USDG&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
