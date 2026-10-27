import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CareersPage } from './pages/CareersPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentRoute } = useNavigation();

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/careers':
        return <CareersPage />;
      case '/careers/bems-project-engineer':
        return <JobDetailPage jobSlug="bems-project-engineer" />;
      case '/careers/bems-commissioning-engineer':
        return <JobDetailPage jobSlug="bems-commissioning-engineer" />;
      case '/careers/service-ppm-engineer':
        return <JobDetailPage jobSlug="service-ppm-engineer" />;
      case '/careers/graduate-bems-engineer':
        return <JobDetailPage jobSlug="graduate-bems-engineer" />;
      case '/contact':
        return <ContactPage />;
      default: {
        const routeStr = currentRoute as string;
        if (routeStr.startsWith('/careers/')) {
          const slug = routeStr.replace('/careers/', '');
          return <JobDetailPage jobSlug={slug} />;
        }
        return <HomePage />;
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EE] text-[#0B1F3A] font-body selection:bg-[#E4202C]/20 selection:text-[#0B1F3A]">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <ServiceModal />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
