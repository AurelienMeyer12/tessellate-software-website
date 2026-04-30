export interface AllianceCard {
  title: string;
  description: string;
}

export interface AllianceData {
  title: string;
  subtitle: string;
  cards: AllianceCard[];
  logos: string[];
  note: string;
}

export const allianceData: AllianceData = {
  title: "Strategic Alliance",
  subtitle: "Tessellate × Bit Complete: creating operational value for entrepreneurs in vertical market software.",
  cards: [
    {
      title: "About the Partnership",
      description: "Tessellate has partnered with Bit Complete to help portfolio companies accelerate growth through world-class engineering and operational excellence — without losing the long-term stewardship that brought you here."
    },
    {
      title: "Product Development",
      description: "Modernize your stack and integrate AI-driven features tailored to your vertical: intelligent workflows, automation, and analytics that drive customer value and reduce churn."
    },
    {
      title: "Operating Best Practices",
      description: "Jumpstart value creation across both top- and bottom-line levers: pricing strategy, sales and go-to-market motion, and customer success frameworks."
    },
    {
      title: "Technical Bench",
      description: "35+ seasoned software developers who've built products with Fortune 500s and high-growth startups alike — available as the situation requires."
    }
  ],
  logos: [
    "/images/logos/google-logo.webp",
    "/images/logos/slack-logo.png",
    "/images/logos/youtube-logo.svg",
    "/images/logos/league_logo.png"
  ],
  note: ""
};
