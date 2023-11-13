import Hero from "../components/Hero";
import Marquebrand from "../components/Marquebrand";
import Explore from "../components/Explore";
import SubscribeSection from "../components/SubscribeSection";
import ZaraSection from "../components/ZaraSection";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Marquebrand />
      <Explore />
      <SubscribeSection />
      <ZaraSection />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default Home;
