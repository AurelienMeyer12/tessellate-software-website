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
      description: "Tessellate has partnered with Bit Complete, a leading technical development agency, to help portfolio companies accelerate growth through world-class engineering and operational excellence."
    },
    {
      title: "Product & Software Development",
      description: "Modernize your tech stack and integrate AI-driven features tailored to your vertical: intelligent workflows, automation, and data analytics that drive customer value."
    },
    {
      title: "Operating Best Practices",
      description: "Jumpstart value creation across top- and bottom-line levers: pricing strategy, sales and go-to-market, and customer success frameworks."
    },
    {
      title: "Technical Expertise",
      description: "Bit Complete's team of 35+ seasoned software developers have worked with Fortune 500 companies and high growth start-ups to build products that matter."
    }
  ],
  logos: [
    "/images/logos/google-logo.webp",
    "/images/logos/slack-logo.png",
    "/images/logos/youtube-logo.svg",
    "/images/logos/octave-logo.png"
  ],
  note: "Bit Complete's team of 35+ seasoned software developers have worked with both Fortune 500 companies and high growth start-ups to build products that matter."
};

