import React from 'react';
import {
  Activity,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  Cpu,
  Crown,
  FileCheck2,
  FileSearch,
  Fingerprint,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Lock,
  MapPin,
  Network,
  Newspaper,
  Radar,
  Radio,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Sliders,
  Sparkles,
  TrendingUp,
  Truck,
  type LucideProps,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Fingerprint,
  GraduationCap,
  FileSearch,
  ShieldAlert,
  Landmark,
  HeartPulse,
  Globe2,
  Sparkles,
  Crown,
  Cpu,
  ShieldCheck,
  Briefcase,
  Radar,
  Sliders,
  TrendingUp,
  Lock,
  Leaf,
  Truck,
  Building2,
  Scale,
  MapPin,
  Newspaper,
  Activity,
  Shield,
  FileCheck2,
  Network,
  BadgeCheck,
  BarChart3,
  Radio,
  ShoppingBag,
};

interface ServiceIconProps extends LucideProps {
  name: string;
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const IconComponent = ICON_MAP[name] ?? ShieldCheck;
  return <IconComponent {...props} />;
}
