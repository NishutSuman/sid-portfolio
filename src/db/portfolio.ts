export interface GraphicWork {
  id: number;
  title: string;
  category: string;
  driveId: string;
}

export interface VideoWork {
  id: number;
  title: string;
  description: string;
  driveId: string;
}

export const graphicsWork: GraphicWork[] = [
  { id: 1, title: "Brand Identity Design",  category: "Branding",     driveId: "/portfolio/g1.jpg" },
  { id: 2, title: "Logo Design",            category: "Logo",         driveId: "/portfolio/g2.jpg" },
  { id: 3, title: "Social Media Campaign",  category: "Social Media", driveId: "/portfolio/g3.jpg" },
  { id: 4, title: "Event Poster",           category: "Print Design", driveId: "/portfolio/g4.jpg" },
  { id: 5, title: "Digital Ad Creative",    category: "Advertising",  driveId: "/portfolio/g5.jpg" },
  { id: 6, title: "Visual Identity",        category: "Branding",     driveId: "/portfolio/g6.jpg" },
];

export const videoWork: VideoWork[] = [
  { id: 1, title: "Event Highlights Reel",  description: "Cinematic event coverage with color grading",       driveId: "1ganfQCHger_SGap4E89EThRr-Hgk2E01" },
  { id: 2, title: "Brand Promo Video",      description: "Product showcase with motion graphics",             driveId: "1aQTJElv8tiGTcE14xTApMiyhXNv0mEt5" },
  { id: 3, title: "Social Media Reel",      description: "Short-form content with dynamic cuts",              driveId: "1HlxGwJ5IkGl7l8Uk_Rx6dZUqc43aaXSN" },
  { id: 4, title: "Cinematic Short Film",   description: "Narrative-driven storytelling with DSLR footage",   driveId: "1GhEFacDa_cWqDG7oP9kDrhWCOhixdd_n" },
];

export const portfolioLinks = {
  graphicsFolder: "https://drive.google.com/drive/folders/1uxeBHuz_nGhZIWJWncfjAoyZ-QgtuWta",
  videosFolder: "",
};
