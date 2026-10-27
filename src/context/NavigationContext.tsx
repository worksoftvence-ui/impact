import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageRoute, ServiceId } from '../types';

interface NavigationContextType {
  currentRoute: PageRoute;
  navigate: (route: PageRoute, serviceId?: ServiceId) => void;
  activeServiceModal: ServiceId | null;
  openServiceModal: (id: ServiceId) => void;
  closeServiceModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const path = window.location.pathname as PageRoute;
    const validRoutes: PageRoute[] = [
      '/',
      '/about',
      '/services',
      '/careers',
      '/careers/bems-project-engineer',
      '/careers/bems-commissioning-engineer',
      '/careers/service-ppm-engineer',
      '/careers/graduate-bems-engineer',
      '/contact'
    ];
    return validRoutes.includes(path) ? path : '/';
  });

  const [activeServiceModal, setActiveServiceModal] = useState<ServiceId | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      setCurrentRoute(path || '/');
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service') as ServiceId;
      if (serviceParam) {
        setActiveServiceModal(serviceParam);
      } else {
        setActiveServiceModal(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: PageRoute, serviceId?: ServiceId) => {
    setCurrentRoute(route);
    const url = serviceId ? `${route}?service=${serviceId}` : route;
    window.history.pushState({}, '', url);
    if (serviceId) {
      setActiveServiceModal(serviceId);
    } else {
      setActiveServiceModal(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openServiceModal = (id: ServiceId) => {
    setActiveServiceModal(id);
    const url = new URL(window.location.href);
    url.searchParams.set('service', id);
    window.history.pushState({}, '', url.toString());
  };

  const closeServiceModal = () => {
    setActiveServiceModal(null);
    const url = new URL(window.location.href);
    url.searchParams.delete('service');
    window.history.pushState({}, '', url.toString());
  };

  return (
    <NavigationContext.Provider
      value={{
        currentRoute,
        navigate,
        activeServiceModal,
        openServiceModal,
        closeServiceModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
