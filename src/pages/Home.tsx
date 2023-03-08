import {
  Header,
  Brands,
  Blog,
  Features,
  Footer,
  Possibility,
  WhatGPT3,
} from "../containers";

export const Home = () => {
  return (
    <div className="gradient__bg">
      <Header />
      <Brands />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Blog />
      <Footer />
    </div>
  );
};
