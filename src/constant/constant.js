export const NavLinks = [
  { id: 1, name: "Home", path: "/", active: true },
  { id: 2, name: "About Us", path: "", active: true, submenu: [
    { id: 21, name: "Overview", path: "/about/overview", active: true },
    { id: 22, name: "COAE (Centre of Academic Excellence)", path: "/about/coae", active: true },
    { id: 23, name: " Education", path: "/about/holisticeducation", active: true },
    { id: 24, name: "Infrastructure", path: "/about/infrastructure", active: true },
  ] },
  { id: 3, name: "Gurukul World", path: "", active: true, submenu: [
    { id: 31, name: "School Information", path: "/gurukulworld/schoolinformation", active: true },
    { id: 32, name: "Academics & Assessments", path: "/gurukulworld/academicsandassessments", active: true },
    { id: 33, name: " Parent Engagement", path: "/gurukulworld/parentengagement", active: true },
    { id: 34, name: "Rewards & Recognitions", path: "/gurukulworld/rewardsandecognitions", active: true },
  ]  },
  { id: 4, name: "Schools", path: "/schools", active: true },
  // { id: 5, name: "Gallery", path: "/gallery", active: true },
  { id: 6, name: "Alumni Club", path: "/alumniclub", active: true },
  { id: 7, name: "Careers", path: "/careers", active: true },
  { id: 8, name: "Contact", path: "/contactus", active: true },
  // { id: 9, name: "List of Place", path: "/listofplace", active: true },
];
