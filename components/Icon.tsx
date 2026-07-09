import {
  Truck,
  Hammer,
  Trash2,
  Sparkles,
  Home,
  Zap,
  Coins,
  ShieldCheck,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageSquare,
  Info,
  Check,
  ChevronDown,
  ChevronUp,
  Star,
  Menu,
  X,
  Globe,
  ArrowRight,
  Package,
  Wrench,
  BadgeAlert,
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "w-6 h-6" }: IconProps) {
  switch (name) {
    case "Truck":
      return <Truck className={className} />;
    case "Container":
      return <Package className={className} />;
    case "Hammer":
      return <Hammer className={className} />;
    case "Trash2":
      return <Trash2 className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "Home":
      return <Home className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Coins":
      return <Coins className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Users":
      return <Users className={className} />;
    case "Clock":
      return <Clock className={className} />;
    case "Phone":
      return <Phone className={className} />;
    case "Mail":
      return <Mail className={className} />;
    case "MapPin":
      return <MapPin className={className} />;
    case "Calendar":
      return <Calendar className={className} />;
    case "MessageSquare":
      return <MessageSquare className={className} />;
    case "Info":
      return <Info className={className} />;
    case "Check":
      return <Check className={className} />;
    case "ChevronDown":
      return <ChevronDown className={className} />;
    case "ChevronUp":
      return <ChevronUp className={className} />;
    case "Star":
      return <Star className={className} />;
    case "Menu":
      return <Menu className={className} />;
    case "X":
      return <X className={className} />;
    case "Globe":
      return <Globe className={className} />;
    case "ArrowRight":
      return <ArrowRight className={className} />;
    case "Wrench":
      return <Wrench className={className} />;
    default:
      return <BadgeAlert className={className} />;
  }
}
