import React from 'react';
import PictureViewer from '../../../common/PictureViewer';
import testImg from '../../../../bg_intro.jpg';
import testImg2 from '../portfolio_images/fledge_launchscreen_portfolio.png';
import testImg3 from '../portfolio_images/rps_portfolio.png';
import testImg4 from '../portfolio_images/tictactoe_portfolio.png';


const images = [
    {
        src: testImg,
        alt: 'test alt',
        title: 'testTitle',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg2,
        alt: 'test alt2',
        title: 'testTitle2',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg3,
        alt: 'test alt3',
        title: 'testTitle3',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg4,
        alt: 'test alt4',
        title: 'testTitle4',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
    {
        src: testImg,
        alt: 'test alt5',
        title: 'testTitle5',
        description: 'Lorem ipsum orem ipsumorem ipsumorem ipsumorem ipsumorem ipsum',
    },
];

const Flexer = () => <PictureViewer images={images} />;

export default Flexer;
