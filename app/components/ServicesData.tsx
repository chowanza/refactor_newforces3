import {
  LuBuilding,
  LuFactory,
  LuHouse,
  LuHammer,
  LuExpand,
  LuWrench,
  LuUtensils,
  LuBath,
  LuLayers,
  LuPackage,
  LuClipboardCheck,
  LuPenTool,
} from 'react-icons/lu';

interface CardProps {
  title: string;
  description: string;
  Icon: React.FC;
  list: string[];
}

export const ServicesData: Record<number, CardProps[]> = {
  1: [
    {
      title: 'Office Buildings & Retail Centers',
      description:
        'Modern, efficient spaces designed to maximize productivity and customer engagement.',
      Icon: LuBuilding,
      list: [
        'Custom office layouts tailored to your business workflow',
        'Sustainable design with energy-efficient systems',
        'Premium retail spaces with optimal customer flow',
        'Smart building technology integration',
      ],
    },
    {
      title: 'Industrial & Warehouse Facilities',
      description:
        'Durable and scalable industrial spaces designed for efficiency and safety.',
      Icon: LuFactory,
      list: [
        'Optimized layouts for logistics and manufacturing',
        'High-durability materials for long-term performance',
        'Advanced security and access control solutions',
        'Custom warehouse racking and storage systems',
      ],
    },
    {
      title: 'Multi-Family & Mixed-Use Developments',
      description:
        'Versatile developments blending residential and commercial spaces for modern living.',
      Icon: LuHouse,
      list: [
        'Efficient unit layouts for maximum space utilization',
        'Mixed-use zoning expertise for seamless integration',
        'Luxury amenities and community-focused design',
        'Smart home and security technology implementation',
      ],
    },
  ],
  2: [
    {
      title: 'Custom Home Builds',
      description:
        'Tailored home construction to fit your vision, lifestyle, and budget.',
      Icon: LuHammer,
      list: [
        'Fully customized floor plans and architectural styles',
        'High-quality materials and craftsmanship',
        'Energy-efficient and smart home integration',
        'Seamless project management from design to completion',
      ],
    },
    {
      title: 'Home Additions & Expansions',
      description:
        'Expand your living space with seamless additions that match your home’s style.',
      Icon: LuExpand,
      list: [
        'Room additions for growing families',
        'Second-story expansions for added space',
        'Garage conversions into livable areas',
        'Sunrooms and outdoor living extensions',
      ],
    },
    {
      title: 'Full Home Renovations',
      description:
        'Transform your home with modern upgrades and structural enhancements.',
      Icon: LuWrench,
      list: [
        'Comprehensive interior and exterior remodeling',
        'Structural modifications and open-concept designs',
        'High-end finishes and smart home technology',
        'Restorations that maintain architectural integrity',
      ],
    },
  ],
  3: [
    {
      title: 'Custom Kitchen Remodels',
      description:
        'Bespoke kitchen renovations tailored to functionality and aesthetics.',
      Icon: LuUtensils,
      list: [
        'Open-concept layouts for a spacious feel',
        'Premium cabinetry and storage solutions',
        'High-end appliances and smart kitchen tech',
        'Luxury countertops and backsplash designs',
      ],
    },
    {
      title: 'Luxury Bathroom Renovations',
      description:
        'Elegant and modern bathroom upgrades for comfort and style.',
      Icon: LuBath,
      list: [
        'Custom vanities and premium fixtures',
        'Spa-like features including rainfall showers',
        'Smart lighting and heated flooring',
        'High-end tile and surface materials',
      ],
    },
    {
      title: 'Cabinet, Flooring & Countertop Upgrades',
      description: 'Elevate your home with high-quality material upgrades.',
      Icon: LuLayers,
      list: [
        'Custom-built cabinetry with tailored storage',
        'Premium hardwood, tile, and vinyl flooring',
        'Durable and stylish countertop materials',
        'Seamless installation with expert craftsmanship',
      ],
    },
  ],
  4: [
    {
      title: 'Turnkey Home Construction Solutions',
      description: 'Complete home-building solutions from concept to move-in.',
      Icon: LuPackage,
      list: [
        'Start-to-finish project management',
        'High-quality materials and expert craftsmanship',
        'Streamlined construction timelines',
        'Comprehensive support for a hassle-free experience',
      ],
    },
    {
      title: 'Permit Handling & Code Compliance',
      description:
        'Navigating permits and building codes to ensure smooth construction.',
      Icon: LuClipboardCheck,
      list: [
        'Expert handling of local permit applications',
        'Compliance with zoning and building regulations',
        'Structural inspections and approvals',
        'Ensuring legal and safe construction practices',
      ],
    },
    {
      title: 'Custom Design Options',
      description:
        'Personalized home designs that reflect your vision and lifestyle.',
      Icon: LuPenTool,
      list: [
        'Tailored architectural styles and layouts',
        'Material and finish selections for personalization',
        'Eco-friendly and smart home design choices',
        'Integration of unique features and custom details',
      ],
    },
  ],
};
