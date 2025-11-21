export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Darren Cole",
    role: "Founder, Investing Partner",
    bio: "Darren oversees Tessellate Software's investment strategy, bringing more than ten years of experience across management consulting, private equity, and technology. He is a Partner and Managing Director at Boston Consulting Group. Before that, he spent time in private equity at Birch Hill Equity Partners and worked as an Engagement Manager at McKinsey & Company.",
    linkedin: "https://www.linkedin.com/in/darrenrcole/",
    image: "/images/team/darren-cole.jpeg"
  },
  {
    name: "Felix Li",
    role: "Founder, Operating Partner",
    bio: "Felix manages Tessellate Software's business operations, drawing on over thirteen years of experience as an operator, entrepreneur, and technology-sector investor. He leads product development, platform integration, and operational strategy for the firm. Felix also serves as Partner and COO at Bit Complete, where he builds AI-powered tools and products for vertical software businesses. Earlier in his career, he co-founded a venture-backed healthcare startup and headed operations at League, a digital health platform.",
    linkedin: "https://www.linkedin.com/in/li-felix/",
    image: "/images/team/felix-li.jpeg"
  },
  {
    name: "Aurélien Meyer",
    role: "Associate, Investing Team",
    bio: "Aurélien supports Tessellate Software's investment team through research, financial analysis, and diligence on vertical-market software opportunities. He has experience in private equity and early-stage strategy work, with a focus on evaluating business models and identifying key value drivers. A Commerce student at Queen's University involved in several investment-focused organizations, Aurélien assists with sourcing, assessing, and supporting software businesses throughout the deal process.",
    linkedin: "https://www.linkedin.com/in/aurelien-meyer/",
    image: "/images/team/aurelien-meyer.jpeg"
  }
];

