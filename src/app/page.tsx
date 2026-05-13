import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PopularCoursesSection } from '@/components/sections/PopularCoursesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { LeaderboardPreview } from '@/components/sections/LeaderboardPreview';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 overflow-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <TestimonialsSection />
      <LeaderboardPreview />
      <AchievementsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
