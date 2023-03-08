import {
  Header,
  Brands,
  Blog,
  Features,
  Footer,
  AboutGPT3,
} from "../containers";

export const Home = () => {
  return (
    <div className="gradient__bg">
      <Header />
      <Brands />
      <AboutGPT3 />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
};
