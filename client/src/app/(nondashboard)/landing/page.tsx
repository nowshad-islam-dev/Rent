import CallToAction from './CallToAction';
import DiscoverSection from './DiscoverSection';
import FeaturesSection from './FeaturesSection';
import HeroSection from './HeroSection';

const page = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToAction />
    </div>
  );
};

export default page;
