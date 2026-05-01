const BASE = "https://www.drhorton.com";
const WILMINGTON = `${BASE}/north-carolina/wilmington`;
const LELAND = `${WILMINGTON}/leland`;

export const nav = {
  home:          BASE,
  findHome:      `${BASE}/globalmap`,
  whyDRHorton:   `${BASE}/our-story`,
  buyingProcess: `${BASE}/home-buying-guide`,
  myAccount:     "https://customerportal.drhorton.com/",
};

export const breadcrumb = {
  home:        BASE,
  northCarolina: `${BASE}/north-carolina`,
  wilmington:  WILMINGTON,
};

export const communities: Record<string, string> = {
  "Riverlights":                   WILMINGTON,
  "Compass Pointe":                LELAND,
  "Waterford of the Carolinas":    WILMINGTON,
  "Sunset Reach":                  WILMINGTON,
  "Mallory Creek Plantation":      `${LELAND}/mallory-creek-magnolia`,
  "Aberdeen":                      LELAND,
  "The Landing at Monkey Junction": WILMINGTON,
  "Tidewater at Sunset Harbour":   `${WILMINGTON}/sneads-ferry/the-preserve-at-tidewater`,
  "The Reserve at Pine Valley":    WILMINGTON,
  "Hanover Townhomes":             WILMINGTON,
};

export const search = {
  wilmington:   WILMINGTON,
  leland:       LELAND,
  hampstead:    `${WILMINGTON}/hampstead`,
  bolivia:      `${BASE}/north-carolina/wilmington`,
  castleHayne:  WILMINGTON,
  shallotte:    WILMINGTON,
  surfCity:     `${WILMINGTON}/surf-city`,
  singleFamily: WILMINGTON,
  townhomes:    WILMINGTON,
  moveInReady:  `${WILMINGTON}?homeType=quick-move-in`,
  active55Plus: `${WILMINGTON}?homeType=55plus`,
  express:      `${BASE}/express-homes`,
  under275:     `${WILMINGTON}?maxPrice=275000`,
  range275_350: `${WILMINGTON}?minPrice=275000&maxPrice=350000`,
  range350_450: `${WILMINGTON}?minPrice=350000&maxPrice=450000`,
  over450:      `${WILMINGTON}?minPrice=450000`,
  newHanover:   `${WILMINGTON}?county=new-hanover`,
  brunswick:    `${WILMINGTON}?county=brunswick`,
  pender:       `${WILMINGTON}?county=pender`,
};

export const footer = {
  aboutUs:      `${BASE}/who-we-are`,
  careers:      `${BASE}/careers`,
  investors:    "https://investor.drhorton.com/",
  news:         `${BASE}/who-we-are`,
  findHome:     `${BASE}/globalmap`,
  mortgage:     `${BASE}/new-dhi-mortgage`,
  warranty:     `${BASE}/warranty`,
  myAccount:    "https://customerportal.drhorton.com/",
  buyingGuide:  `${BASE}/home-buying-guide`,
  designCenter: WILMINGTON,
  faq:          `${BASE}/home-buying-guide`,
  contact:      `${BASE}/contact-us-page`,
  privacy:      `${BASE}/privacy-policy`,
  terms:        `${BASE}/terms-and-conditions`,
  accessibility:`${BASE}/accessibility`,
  doNotSell:    `${BASE}/california-privacy-rights`,
};
