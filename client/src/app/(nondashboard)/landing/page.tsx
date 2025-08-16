import CallToAction from './CallToAction';
import DiscoverSection from './DiscoverSection';
import FeaturesSection from './FeaturesSection';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';

const page = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToAction />
      <FooterSection />
    </div>
  );
};

export default page;
