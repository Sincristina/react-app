import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import BlogListComponent from "../components/BlogListComponent";
import { Link } from "react-router-dom";

const contentBlog = [
  {
    image: (
      <img
        src="https://www.baboon.ro/wp-content/uploads/2024/05/Artboard-2-500x281.jpeg"
        alt="marketing"
      />
    ),
    title: "Cum să-ți promovezi start-upul: 6 strategii de marketing eficiente",
    TimpDeCitire: "Timp de citire: 5 min ",
    hrefTo: <Link to="/marketing">Citeste mai mult...</Link>,
  },

  {
    image: (
      <img
        src="https://www.baboon.ro/wp-content/uploads/2024/05/banner-nl-eva5-500x281.png"
        alt="marketing"
      />
    ),
    title: "Înțelege intenția de căutare a utilizatorilor pe Google",
    TimpDeCitire: "Timp de citire: 3 min",
    hrefTo: <Link to="/seo">Citeste mai mult...</Link>,
  },

  {
    image: (
      <img
        src="https://www.baboon.ro/wp-content/uploads/2024/04/3-500x281.png"
        alt="marketing"
      />
    ),
    title: "Verso Expetise: De la branding la o experiență online completă",
    TimpDeCitire: "Timp de citire: 4 min",
    hrefTo: <Link to="/branding">Citeste mai mult...</Link>,
  },

  {
    image: (
      <img
        src="https://www.baboon.ro/wp-content/uploads/2024/03/1-500x281.png"
        alt="marketing"
      />
    ),
    title: "Cum atragi clienți noi prin SEO Local",
    TimpDeCitire: "Timp de citire: 6 min",
    hrefTo: <Link to="/seoLocal">Citeste mai mult...</Link>,
  },

  {
    image: (
      <img
        src="https://www.baboon.ro/wp-content/uploads/2024/03/Artboard-2-500x219.jpeg"
        alt="marketing"
      />
    ),
    title: "5 trenduri de marketing care vor defini peisajul în 2024",
    TimpDeCitire: "Timp de citire: 5 min",
    hrefTo: <Link to="/trends">Citeste mai mult...</Link>,
  },
];

const Home = () => {
  return (
    <div>
      <Layout>
        <Header />
        <BlogListComponent contentBlog={contentBlog} />
      </Layout>
    </div>
  );
};

export default Home;
