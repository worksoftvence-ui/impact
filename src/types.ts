export type PageRoute = 
  | '/'
  | '/about'
  | '/services'
  | '/careers'
  | '/careers/bems-project-engineer'
  | '/careers/bems-commissioning-engineer'
  | '/careers/service-ppm-engineer'
  | '/careers/graduate-bems-engineer'
  | '/contact';

export type ServiceId = 
  | 'new-install'
  | 'upgrades-retrofit'
  | 'maintenance'
  | 'remote-graphics'
  | 'energy-management';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  tagline: string;
  shortDescription: string;
  fullIntro: string;
  features: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  image: string;
  iconName: string;
}

export interface JobVacancy {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  shortDescription: string;
  overview: string;
  responsibilities: {
    category: string;
    items: string[];
  }[];
  requirements: string[];
  benefits: string[];
  isPlaceholder?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio?: string;
}

export interface OfficeLocation {
  name: string;
  tag: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  isConfirmed: boolean;
}
