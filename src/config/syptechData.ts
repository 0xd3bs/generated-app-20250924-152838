import {
  BrainCircuit,
  Database,
  LineChart,
  Presentation,
  Search,
  Bot,
  Code,
  ShieldCheck,
  Fuel,
  GraduationCap,
  Briefcase,
  LucideIcon,
} from 'lucide-react';
export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}
export interface ServiceSection {
  title: string;
  description: string;
  services: Service[];
}
export const dataScienceServices: ServiceSection = {
  title: 'Data Science & AI/ML',
  description: 'Leveraging data-driven insights and advanced AI/ML techniques to solve complex business challenges.',
  services: [
    {
      icon: LineChart,
      title: 'Business Analytics',
      description: 'Comprehensive analytics and reporting to uncover key business trends and performance metrics.',
    },
    {
      icon: Presentation,
      title: 'Data Visualization',
      description: 'Interactive dashboards and visualizations that turn complex data into actionable insights.',
    },
    {
      icon: Search,
      title: 'Predictive Analytics',
      description: 'Utilizing data mining and predictive modeling to forecast future outcomes and guide strategy.',
    },
    {
      icon: BrainCircuit,
      title: 'Machine Learning',
      description: 'Developing and deploying ML/DL models for automation, prediction, and optimization tasks.',
    },
    {
      icon: Bot,
      title: 'Applied AI Solutions',
      description: 'Custom AI-powered applications designed to address specific operational and business needs.',
    },
    {
      icon: Database,
      title: 'Data Research',
      description: 'In-depth data research and analysis to support innovation and strategic decision-making.',
    },
  ],
};
export const blockchainServices: ServiceSection = {
  title: 'Blockchain Development',
  description: 'Building secure, transparent, and decentralized applications with cutting-edge blockchain technology.',
  services: [
    {
      icon: Code,
      title: 'Smart Contracts',
      description: 'Expert development of secure and efficient smart contracts on the Ethereum blockchain using Solidity.',
    },
    {
      icon: Fuel,
      title: 'Rust-Based Blockchains',
      description: 'Specializing in Cairo for Starknet, and other Rust-based smart contract languages.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Applications',
      description: 'Prototyping and developing blockchain applications with a primary focus on security and transparency.',
    },
  ],
};
export const trainingServices = {
  title: 'Professional Training Programs',
  description: 'Empowering teams with the knowledge and skills to leverage data science and AI in their daily work.',
  programs: [
    {
      icon: GraduationCap,
      title: 'For Quant Professionals',
      description: 'Advanced courses on AI/ML, deep learning, and predictive analytics for technical staff.',
    },
    {
      icon: Briefcase,
      title: 'For Business Teams',
      description: 'Practical, hands-on training for non-technical staff to optimize tasks using data-driven methods.',
    },
  ],
};