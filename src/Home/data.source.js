import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://i.imgur.com/Zcg5WF6.png',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item knxaczebe1-editor_css',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title knxa1euigfo-editor_css',
    children: 'https://i.imgur.com/8oebPjS.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>A Stablecoin Backed by ETH2.0 Staking and Staking Rewards</p>
        <p> #imToken #7071 We are providing information of USDG token on imToken. After the submission, our logo and more detailed info will be displayed, now you can manage your USDG tokens on imToken. </p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button',
    children: (
      <span>
        <span>
          <p>
            USDG W<span>hitepaper</span>
          </p>
        </span>
      </span>
    ),
    href:
      'https://github.com/eth2pos/usdg-whitepaper/blob/main/USDG-whitepaper.pdf',
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
            <p>What is USDG</p>
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
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/money-bag_1f4b0.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>1:1 USD Geg</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    USDG is a stablecoin cryptocurrency 1:1 pegged to USD. You
                    can trade USDG just like USDT or USDC in any exchanges.
                  </p>
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
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/gem-stone_1f48e.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>ETH Collateralized</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Each USDG is minted from the same dollar worth
                    collateralized ETH. Users who deposit $1000 worth ETH can
                    mint the 1000 USDG.
                  </p>
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
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/openmoji/272/party-popper_1f389.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Mining While Holding</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>
                    Whenever a new USDG is minted, previous holders could get
                    rewards. Rewards come from the new ETH produced in ETH2.0
                    staking program.&nbsp;
                  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature80DataSource = {
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  page: { className: 'home-page feature8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'feature8-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'feature8-title-h1',
        children: (
          <span>
            <p>How to Get USDG</p>
          </span>
        ),
      },
      {
        name: 'content',
        className: 'feature8-title-content',
        children: (
          <span>
            <p>USDG Dapp is hosted on IPFS, which can never be shutdown</p>
            <p>contract address: 0xbd62253c8033f3907c0800780662eab7378a4b96</p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'feature8-button-wrapper',
    children: [
      {
        name: 'button',
        className: 'feature8-button',
        children: {
          href:
            'https://bafybeifsnmhtjifvls5x6f2kajzld457o2bjgcksn5z6s7olx7m72l7lke.ipfs.cf-ipfs.com/#/',
          children: (
            <span>
              <p>Go to USDG Dapp</p>
            </span>
          ),
        },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: 'feature8-carousel',
    wrapper: { className: 'feature8-block-wrapper' },
    children: {
      className: 'feature8-block knxa5wwfg4m-editor_css',
      titleWrapper: {
        className: 'feature8-carousel-title-wrapper',
        title: { className: 'feature8-carousel-title knxa5c274qk-editor_css' },
      },
      children: [
        {
          name: 'block0',
          className: 'feature8-block-row knxa5809qz-editor_css',
          gutter: 120,
          title: {
            className: 'feature8-carousel-title-block',
            children: '平台自主训练流程',
          },
          children: [
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child0',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>Visit USDG Dapp</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>
                                <br />
                              </p>
                            </span>
                          </span>
                        </span>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child1',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>Connect wallet</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          <br />
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child2',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>Exchange USDG with ETH</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content knxa5sukgta-editor_css',
                    children: (
                      <span>
                        <p>
                          <br />
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
            {
              className: 'feature8-block-col',
              md: 6,
              xs: 24,
              name: 'child3',
              arrow: {
                className: 'feature8-block-arrow',
                children:
                  'https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg',
              },
              children: {
                className: 'feature8-block-child',
                children: [
                  {
                    name: 'image',
                    className: 'feature8-block-image',
                    children:
                      'https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg',
                  },
                  {
                    name: 'title',
                    className: 'feature8-block-title',
                    children: (
                      <span>
                        <p>Start using USDG</p>
                      </span>
                    ),
                  },
                  {
                    name: 'content',
                    className: 'feature8-block-content',
                    children: (
                      <span>
                        <p>
                          <br />
                        </p>
                      </span>
                    ),
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://cdn.shopifycdn.net/s/files/1/1061/1924/products/Money_with_Wings_Emoji_large.png?v=1571606064',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>USDG Price Stability</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          Ethereum core developer team is upgrading ETH to make it more
          scalable, more secure and more sustainable. The Beacon Chain is the
          first addition to ETH2.0 network, transferring from PoW to PoS. The
          official ETH2.0 staking reward is 8.1%, and produces new ETH every 6
          minutes. The staked ETH and newly produced ETH become the value
          backing USDG.&nbsp;
        </p>
      </span>
    ),
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>Mining While Holding</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          In the traditional financial world, newly issued currencies create
          inflation, which results in the reduction of purchasing power per unit
          of money. Every holder of that currency suffers from a loss of real
          value.
        </p>
        <p>
          Instead of reducing purchasing power, whenever a new USDG is minted,
          previous holders could get reward. Again, the rewards are backed by
          new ETH generated from ETH2.0 staking program. USDG team also creates
          a model of FTC to further accomplish the goal.&nbsp;
        </p>
      </span>
    ),
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children:
      'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>First Transfer Contract (FTC)</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <span>
        <p>
          After the transfer is broadcasted, the mutual relationship between you
          and your recipient is forever locked on the blockchain by FTC, and the
          hierarchy is up to 6 levels.{' '}
        </p>
        <p>
          You will get bonus rewards from total USDG of the 6 levels below,
          currently at 1% APY.
        </p>
        <p>
          Through involving more people in USDG, you could take the bonus in
          miniting every additional USDG.
        </p>
      </span>
    ),
  },
};
export const Feature21DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 10, xs: 24 },
  img: {
    children:
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/currency-exchange_1f4b1.png',
  },
  textWrapper: { className: 'content2-text', md: 14, xs: 24 },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <p>Exchange of USDG</p>
      </span>
    ),
  },
  content: {
    className: 'content2-content',
    children: (
      <span>
        <p>
          As a stablecoin, USDG is designed as an USD peg. You can exchange USDG
          like any other stablecoins like USDT, USDC or DAI in all major
          exchanges.
        </p>
        <p>
          The official way to burn USDG is to exchange USDG to ETH through the
          official website. There are two exchange options.
        </p>
        <p>Option 1: exchange immediately, and there will be a 10% fee.</p>
        <p>Option 2: Be in the line, and there will be 0 fee.</p>
      </span>
    ),
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <p>USDG Team</p>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/joypixels/275/bear_1f43b.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>Martin Tesla</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <h3>CEO and founder</h3>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <span>
                    <p>Founder of USDG</p>
                    <p>
                      <span>
                        CEO of BEC(Blockchain Engineers Foundation of Canada)
                      </span>
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/281/koala_1f428.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <p>Joe</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <h3>CTO</h3>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                    <span>
                                      <span>
                                        <p>Solidity developer since 2017</p>
                                        <p>
                                          Serial entrepreneur at two blockchain
                                          startups
                                        </p>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/pig-face_1f437.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <p>Gorge</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <h3>Operations</h3>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>Previously @ AI unicorn</p>
                            <p>Leader of multiple operation teams</p>
                          </span>
                        </span>
                      </span>
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
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
