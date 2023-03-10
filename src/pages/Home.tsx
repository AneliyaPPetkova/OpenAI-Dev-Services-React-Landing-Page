import {
  Header,
  Brands,
  Blog,
  Footer,
  AboutGPT3,
  Benefits,
} from "../containers";

export const Home = () => {
  return (
    <div className="bg__gradient--primary">
      <Header />
      <Brands />
      <AboutGPT3 />
      <Benefits />
      <Blog />
      <Footer />
    </div>
  );
};
