import {
  Header,
  Brands,
  Blog,
  Footer,
  AboutGPT3,
  Benefits,
  Possibilities,
  CTA,
} from "../containers";

export const Home = () => {
  return (
    <div>
      <div className="bg__gradient--primary">
        <div className="container--xl">
          <Header />
          <Brands />
          <AboutGPT3 />
          <Benefits />
          <Possibilities />
          <CTA />
          <Blog />
        </div>
        <Footer />
      </div>
    </div>
  );
};
