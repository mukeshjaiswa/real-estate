import React from 'react'
import prop1 from '../assets/images/prop1.webp';
import prop2 from '../assets/images/prop2.webp';
import prop3 from '../assets/images/prop3.webp';
import prop4 from '../assets/images/prop4.webp';
import prop5 from '../assets/images/prop5.webp';
import prop6 from '../assets/images/prop6.webp';
import  prop7  from '../assets/images/prop7.jpg'
import  prop8  from '../assets/images/prop8.jpg'
import Client1 from '../assets/images/client1.png';
import Client2 from '../assets/images/client2.png';
import Client3 from '../assets/images/client3.png';
import Client4 from '../assets/images/client4.png';
import Client5 from '../assets/images/client5.png';
import Client6 from '../assets/images/client6.png';
import { MdSell } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaBuilding, FaYoutube, FaMobile, FaFax } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function PropertiesData() {

    return (
        <div>PropertiesData</div>

    )
}
export const property = [
    {

        image: prop1,
        address: '6Downtown, Las Vegasa',
        name: 'Villa With Amazing View',
        about: "Beautiful,updated,groundlevel co-op apartment in the desirable bay terrace",
        bed: 4,
        bath: 3,
        area: '250 sq ft',
        owner: "Alice adams",
        price:"$34.23"
    },
    {

        image: prop2,
        address: 'Meadows Village, Las Vegasa',
        name: 'Townhouse for sale',
        about: "Beautiful,updated,groundlevel co-op apartment in the desirable bay terrace",
        bed: 4,
        bath: 3,
        area: '250 sq ft',
        owner: "Fursi Bam",
        price:"$43.23"
    },
    {

        image: prop3,
        address: '6Downtown, Las Vegasa',
        name: 'Villa With Amazing View',
        about: "Beautiful,updated,groundlevel co-op apartment in the desirable bay terrace",
        bed: 4,
        bath: 3,
        area: '250 sq ft',
        owner: "Alice adams",
        price:"$23.93"
    },
    {

        image: prop4,
        address: 'Meadows Village, Las Vegasa',
        name: 'Townhouse for sale',
        about: "Beautiful,updated,groundlevel co-op apartment in the desirable bay terrace",
        bed: 4,
        bath: 3,
        area: '250 sq ft',
        owner: "Fursi Bam",
        price:"$43.03"
    },
    {

        image: prop5,
        address: '6Downtown, Las Vegasa',
        name: 'Villa With Amazing View',
        about: "Beautiful,updated,groundlevel co-op apartment in the desirable bay terrace",
        bed: 4,
        bath: 3,
        area: '250 sq ft',
        owner: "Alice adams",
        price:"$32.20"
    },
    {

        image: prop6,
        address: 'Meadows Village, Las Vegasa',
        name: 'Townhouse for sale',
        about: "Beautiful,updated,groundlevel co-op apartment in the desirable bay terrace",
        bed: 4,
        bath: 3,
        area: '250 sq ft',
        owner: "Fursi Bam",
        price:"$32.23"
    },
    
    
]

export const service=[
    {
    image:MdSell,
    title:"Sell your home",
    desc:'We sell your home at the best market price'
},
{
    image:IoHome,
    title:' Home loans',
    desc:'We offer you free consultancy to get a loan'
   

},
{
    image:GoLaw,
    title:' Legal services',
    desc:'Expert legal help for all related property items'
   

},
{
    image:FaSearch,
    title:' Home inspection',
    desc:' We make sure you get what you were promised'
   

},
{
    image:MdOutlineMedicalServices,
    title:' Evaluation',
    desc:' We offer you free evaluation to get a mortgage loan'
   

},
{
    image:MdAddAPhoto,
    title:' PhotoShoot',
    desc:'We prepare your home visual presentation'
   

},
]

export const client=[
    {
        image:Client1,
        name:" Dana Gilmore",
        para:"Excellent team!",
desc:'The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication',
       

    },
    {
        image:Client2,
        name:" Dana Gilmore",
        para:"Excellent team!",
desc:'The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication',
       

    },
    {
        image:Client3,
        name:" Dana Gilmore",
        para:"Excellent team!",
desc:'The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication',
       

    },
    {
        image:Client4,
        name:" Dana Gilmore",
        para:"Excellent team!",
desc:'The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication',
    },
    {
        image:Client5,
        name:" Dana Gilmore",
        para:"Excellent team!",
desc:'The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication',
       
    },
    {
        image:Client6,
        name:" Dana Gilmore",
        para:"Excellent team!",
desc:'The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication',
    },
]
export const abouticon=[
    {
        icon:FaFacebookSquare
    },
    {
        icon:FaInstagramSquare
    },
    {
        icon:FaTwitter
    },
    {
        icon:FaYoutube
    },
]
export const contacticon=[
    {
icon:FaBuilding,
},
{
    icon:FaMobile,
    },
    {
        icon:FaFax,
        },
        {
            icon:IoMail,
            },
]
export const latest=[
    {
image:prop7,
name:"Villa with amazing view",
price:"$32.23"
    },
    {
        image:prop8,
        name:"Sea View Villa",
        price:"$789.23"
            },
]