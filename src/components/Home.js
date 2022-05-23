import FeaturedList from "./home-sections/FeaturedList";
import FeaturedProperties from "./home-sections/FeaturedProperties";
import ExclusiveAgents from "./home-sections/ExclusiveAgents";
import WhoWeAre from "./home-sections/WhoWeAre";
import ApartmentsPlan from "./home-sections/ApartmentsPlan";
import Footer from "./home-sections/Footer";
import Main from "./home-sections/Main";

const Home = () => {
  return (
    <>
      <Main />
      <FeaturedList />
      <FeaturedProperties />
      <ExclusiveAgents />
      <WhoWeAre />
      <ApartmentsPlan />
      <Footer />
    </>
  );
};

export default Home;
