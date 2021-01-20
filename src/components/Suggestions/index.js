import React from 'react';

import { Container, Option, Img, Label } from './styles';

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'
import img6 from '../../images/06.png'
import img7 from '../../images/07.png'
import img8 from '../../images/08.png'
import img9 from '../../images/09.png'
import img10 from '../../images/10.png'
import img11 from '../../images/11.png'
import img12 from '../../images/12.png'
import img13 from '../../images/13.png'

const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: 'Recarga'
    },
    {
        key: String(Math.random()),
        img: img2,
        label: 'Uber'
    },
    {
        key: String(Math.random()),
        img: img3,
        label: 'Vale'
    },
    {
        key: String(Math.random()),
        img: img4,
        label: 'SKY TV'
    },
    {
        key: String(Math.random()),
        img: img5,
        label: 'Doações'
    },
    {
        key: String(Math.random()),
        img: img6,
        label: 'Boleto'
    },
    {
        key: String(Math.random()),
        img: img7,
        label: 'Cobrar'
    },
    {
        key: String(Math.random()),
        img: img8,
        label: 'Amigo'
    },
    {
        key: String(Math.random()),
        img: img9,
        label: 'Doações'
    },
    {
        key: String(Math.random()),
        img: img10,
        label: 'Doações'
    },
    {
        key: String(Math.random()),
        img: img11,
        label: 'Doações'
    },
    {
        key: String(Math.random()),
        img: img12,
        label: 'Doações'
    },
    {
        key: String(Math.random()),
        img: img13,
        label: 'Parapa'
    }
    
]

export default function Suggestions(){
    return (
        <Container>
            {items.map((item) =>(
                <Option key={item.key}>
                    <Img source={item.img}/>
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    )
}