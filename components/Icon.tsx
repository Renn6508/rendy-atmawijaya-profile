import {
  Leaf,
  Users,
  Cpu,
  Building2,
  ClipboardList,
  Briefcase,
  Code,
  Cloud,
  TrendingUp,
  Globe,
  Truck,
  Package,
  Mail,
  Phone,
  MapPin,
  Check,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  const icons: Record<string, LucideIcon> = {
    leaf: Leaf,
    users: Users,
    cpu: Cpu,
    building: Building2,
    clipboard: ClipboardList,
    briefcase: Briefcase,
    code: Code,
    cloud: Cloud,
    'trending-up': TrendingUp,
    globe: Globe,
    truck: Truck,
    package: Package,
    mail: Mail,
    phone: Phone,
    'map-pin': MapPin,
    check: Check,
    arrow: ChevronRight,
    'arrow-right': ArrowRight,
    'chevron-down': ChevronDown,
    menu: Menu,
    close: X,
  };

  const IconComponent = icons[name] || Check;

  return <IconComponent className={className} />;
}
