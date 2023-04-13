import { NavBar } from "../components";
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
        <header>
          <div className="container--xl">
            <NavBar />
            <Header />
          </div>
        </header>
        <main>
          <div className="container--xl">
            <Brands />
            <AboutGPT3 />
            <Benefits />
            <Possibilities />
            <CTA />
            <Blog />
          </div>
        </main>
        <footer className="footer">
          <div className="container--xl">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  );
};
