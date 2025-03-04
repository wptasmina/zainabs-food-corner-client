import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PoplurMenu from '../HomePage/PoplurMenu/PoplurMenu';

export default function Our_Menu() {
  return (
    <>
      <Helmet>
       <title> zainab's | Our Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"OUR MENU"} desc={"Would you like to try a dish?"} />
      <PoplurMenu/>
    </>
  )
}
