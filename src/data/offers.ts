export interface Offer {
  title: string;
  description: string;
  icon: string;
}

export const offers: Offer[] = [
  {
    title: "Technical Expertise",
    description: "World-class engineering capabilities to supplement your team and accelerate performance.",
    icon: "technical"
  },
  {
    title: "Sales & Go-To-Market",
    description: "Commercial excellence focused on pricing, pipeline, and customer retention to unlock durable growth.",
    icon: "sales"
  },
  {
    title: "Advisory Board",
    description: "Seasoned network of tech founders, investors, operators, and technologists at the ready to support.",
    icon: "advisory"
  },
  {
    title: "Transaction Flexibility",
    description: "Flexible transaction structures designed to meet the unique needs of each founder and business.",
    icon: "transaction"
  },
  {
    title: "Partnerships & Network",
    description: "Strategic partnerships and corporate networks that accelerate scale and strengthen market positioning.",
    icon: "partnerships"
  },
  {
    title: "Integrity & Transparency",
    description: "Long-term stewardship with open, transparent communication rooted in integrity.",
    icon: "integrity"
  }
];

