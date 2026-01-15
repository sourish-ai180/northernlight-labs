
export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
}


