import React from 'react'
import { Helmet } from 'react-helmet-async';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import SectionTitle from '../../components/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from '../../components/Shared/menuCategory';
import CoverImg from '../../components/Shared/CoverImg';
import View_Button from '../../components/View Button/View_Button';

export default function Our_Menu() {
  const [menu] = useMenu()

  const desserts = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const offered = menu.filter(item => item.category === 'offered')

  return (
    <>
      <div>
        <Helmet>
          <title> zainab's | Our Menu</title>
        </Helmet>

        {/* menu cover /> */}
        <CoverImg img={menuImg} title={"OUR MENU"} desc={"Would you like to try a dish?"} />
        {/* Menu Items /> */}

        <SectionTitle
          subHeading="---Don't miss---"
          heading="TODAY'S OFFER"
        ></SectionTitle>

        {/* offered Menu Items /> */}
        <MenuCategory items={offered}></MenuCategory>
        <View_Button title={"ORDER YOUR FAVOURITE FOOD"} ></View_Button>

        {/* desserts Menu Items /> */}
        <MenuCategory items={desserts} title={"DESSERTS"} desc={"A warm and gooey chocolate cake with a molten center, served with a scoop of vanilla ice cream and a drizzle of chocolate sauce."} bgImg={dessertImg}></MenuCategory>
        <View_Button title={"ORDER YOUR FAVOURITE FOOD"} ></View_Button>

        {/* pizza Menu Items /> */}
        <MenuCategory items={pizza} title={"PIZZA"} desc={"A fan-favorite featuring a crispy crust, tangy tomato sauce, gooey mozzarella cheese, and spicy, crispy pepperoni slices."} bgImg={pizzaImg}></MenuCategory>
        <View_Button title={"ORDER YOUR FAVOURITE FOOD"} ></View_Button>

        {/* SALADS Menu Items /> */}
        <MenuCategory items={salad} title={"SALADS"} desc={"Crisp romaine lettuce tossed with creamy Caesar dressing, crunchy croutons, and grated Parmesan cheese, often topped with grilled chicken or shrimp."} bgImg={saladImg}></MenuCategory>
        <View_Button title={"ORDER YOUR FAVOURITE FOOD"} ></View_Button>

        {/* pizza Menu Items /> */}
        <MenuCategory items={pizza} title={"SALADS"} desc={"A wholesome and protein-packed soup made with lentils, carrots, and aromatic spices—warm, nutritious, and satisfying."} bgImg={soupImg}></MenuCategory>
        <View_Button title={"ORDER YOUR FAVOURITE FOOD"} ></View_Button>
        
      </div>
    </>
  )
}
