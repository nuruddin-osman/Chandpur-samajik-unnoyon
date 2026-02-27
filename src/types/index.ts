// types/index.ts
import { IconType } from "react-icons";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  icon: IconType;
  label: string;
  value: string;
  color: string;
}

export interface FeatureItem {
  icon: IconType;
  title: string;
  desc: string;
}
export interface ActivityItem {
  title: string;
  date: string;
  location: string;
  image: string | null;
  category: string;
}

export interface CommitteeMember {
  name: string;
  role: string;
  image: string | null;
}

export interface ExpenseCategory {
  cat: string;
  amount: string;
  color: string;
}