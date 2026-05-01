export interface FloorPlan {
  name: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  imgSeed: string;
}

export interface Community {
  slug: string;
  name: string;
  city: string;
  state: string;
  zip: string;
  priceFrom: string;
  priceTo: string;
  beds: string;
  baths: string;
  sqftMin: number;
  sqftMax: number;
  plans: number;
  badge?: string;
  badgeColor?: string;
  imgSeed: string;
  description: string;
  amenities: string[];
  floorPlans: FloorPlan[];
}

const COMMUNITIES: Community[] = [
  {
    slug: "riverlights",
    name: "Riverlights",
    city: "Wilmington", state: "NC", zip: "28412",
    priceFrom: "$289,990", priceTo: "$389,990",
    beds: "3–5", baths: "2–3", sqftMin: 1456, sqftMax: 2814, plans: 8,
    badge: "Now Selling", badgeColor: "#c8102e",
    imgSeed: "drh-house1",
    description: "Riverlights is a masterfully planned waterfront community set along the banks of the Cape Fear River. Residents enjoy a marina village atmosphere with world-class amenities, miles of walking trails, and sweeping river views — all within minutes of Wilmington's award-winning Historic Downtown.",
    amenities: ["Resort-Style Pool", "Marina & Kayak Launch", "Clubhouse", "Miles of Walking Trails", "Dog Park", "Community Garden", "Fire Pit Pavilion", "On-Site Retail"],
    floorPlans: [
      { name: "The Magnolia",  beds: 3, baths: 2, sqft: 1456, price: "$289,990", imgSeed: "drh-fp1a" },
      { name: "The Palmetto",  beds: 4, baths: 3, sqft: 2134, price: "$329,990", imgSeed: "drh-fp1b" },
      { name: "The Cypress",   beds: 5, baths: 3, sqft: 2814, price: "$379,990", imgSeed: "drh-fp1c" },
    ],
  },
  {
    slug: "compass-pointe",
    name: "Compass Pointe",
    city: "Leland", state: "NC", zip: "28451",
    priceFrom: "$314,990", priceTo: "$419,990",
    beds: "3–4", baths: "2–3", sqftMin: 1615, sqftMax: 2440, plans: 5,
    badge: "Move-in Ready", badgeColor: "#1f6b3a",
    imgSeed: "drh-house2",
    description: "Compass Pointe is a resort-style active adult community nestled among ancient live oaks on a private peninsula in Leland, NC. With one of the most celebrated amenity packages in the region, this vibrant 55+ community offers a lifestyle that rivals the finest private clubs.",
    amenities: ["Lazy River", "Zero-Entry Pool", "Pickleball Courts", "Fitness Center", "Golf Course Access", "Tennis Courts", "Arts & Crafts Studio", "Gated Entry"],
    floorPlans: [
      { name: "The Seagrass",  beds: 3, baths: 2, sqft: 1615, price: "$314,990", imgSeed: "drh-fp2a" },
      { name: "The Sycamore",  beds: 3, baths: 2, sqft: 1890, price: "$349,990", imgSeed: "drh-fp2b" },
      { name: "The Wisteria",  beds: 4, baths: 3, sqft: 2440, price: "$399,990", imgSeed: "drh-fp2c" },
    ],
  },
  {
    slug: "waterford-of-the-carolinas",
    name: "Waterford of the Carolinas",
    city: "Wilmington", state: "NC", zip: "28405",
    priceFrom: "$349,990", priceTo: "$479,990",
    beds: "3–5", baths: "2–4", sqftMin: 1820, sqftMax: 3100, plans: 11,
    imgSeed: "drh-house3",
    description: "Waterford of the Carolinas offers an extraordinary collection of single-family homes in one of Wilmington's most coveted neighborhoods. Each home is designed to complement the lush, wooded landscape while delivering the elevated finishes and open-concept living today's buyers demand.",
    amenities: ["Saltwater Pool", "Junior Olympic Pool", "Clubhouse & Event Space", "Fitness Center", "Playground", "Tennis & Pickleball", "Walking Trails", "Lake Views"],
    floorPlans: [
      { name: "The Willow",    beds: 3, baths: 2, sqft: 1820, price: "$349,990", imgSeed: "drh-fp3a" },
      { name: "The Oleander",  beds: 4, baths: 3, sqft: 2510, price: "$409,990", imgSeed: "drh-fp3b" },
      { name: "The Camellia",  beds: 5, baths: 4, sqft: 3100, price: "$459,990", imgSeed: "drh-fp3c" },
    ],
  },
  {
    slug: "sunset-reach",
    name: "Sunset Reach",
    city: "Wilmington", state: "NC", zip: "28409",
    priceFrom: "$379,990", priceTo: "$499,990",
    beds: "3–4", baths: "2–3", sqftMin: 1750, sqftMax: 2650, plans: 6,
    badge: "Coming Soon", badgeColor: "#8a5500",
    imgSeed: "drh-house4",
    description: "Perched along the Intracoastal Waterway, Sunset Reach represents the pinnacle of coastal luxury living. This intimate community of just 72 homesites offers breathtaking water views, a deep-water boat slip access, and an unparalleled sense of arrival that turns every homecoming into an occasion.",
    amenities: ["Deep-Water Boat Slips", "Waterway Views", "Private Pier", "Resort Pool", "Outdoor Kitchen & Bar", "Fire Pit Lounge", "Community Green", "Gated Entry"],
    floorPlans: [
      { name: "The Topsail",   beds: 3, baths: 2, sqft: 1750, price: "$379,990", imgSeed: "drh-fp4a" },
      { name: "The Bald Head", beds: 4, baths: 3, sqft: 2200, price: "$429,990", imgSeed: "drh-fp4b" },
      { name: "The Masonboro", beds: 4, baths: 3, sqft: 2650, price: "$479,990", imgSeed: "drh-fp4c" },
    ],
  },
  {
    slug: "mallory-creek-plantation",
    name: "Mallory Creek Plantation",
    city: "Leland", state: "NC", zip: "28451",
    priceFrom: "$267,990", priceTo: "$359,990",
    beds: "3–5", baths: "2–3", sqftMin: 1389, sqftMax: 2622, plans: 9,
    badge: "Now Selling", badgeColor: "#c8102e",
    imgSeed: "drh-house5",
    description: "Mallory Creek Plantation brings Southern charm and modern living together in a beautifully landscaped setting in Leland, NC. Thoughtfully priced for today's families, this community delivers outstanding value without compromise — featuring open-concept layouts, chef-inspired kitchens, and spacious owner's suites.",
    amenities: ["Community Pool", "Splash Pad", "Playground", "Picnic Pavilion", "Walking Paths", "Pocket Parks", "Street Lighting", "Sidewalks Throughout"],
    floorPlans: [
      { name: "The Brunswick",  beds: 3, baths: 2, sqft: 1389, price: "$267,990", imgSeed: "drh-fp5a" },
      { name: "The Magnolia",   beds: 4, baths: 2, sqft: 1980, price: "$309,990", imgSeed: "drh-fp5b" },
      { name: "The Plantation", beds: 5, baths: 3, sqft: 2622, price: "$349,990", imgSeed: "drh-fp5c" },
    ],
  },
  {
    slug: "aberdeen",
    name: "Aberdeen",
    city: "Leland", state: "NC", zip: "28451",
    priceFrom: "$299,990", priceTo: "$389,990",
    beds: "3–4", baths: "2–3", sqftMin: 1500, sqftMax: 2200, plans: 4,
    imgSeed: "drh-house6",
    description: "Aberdeen is a carefully curated neighborhood offering the ideal blend of convenience and community in the heart of Leland. Located minutes from shopping, dining, and the beaches of Brunswick County, Aberdeen gives residents everything they need right at their doorstep.",
    amenities: ["Pool & Sun Deck", "Clubhouse", "Playground", "Green Spaces", "Sidewalk Network", "Street Trees", "Guest Parking"],
    floorPlans: [
      { name: "The Wentworth", beds: 3, baths: 2, sqft: 1500, price: "$299,990", imgSeed: "drh-fp6a" },
      { name: "The Dunmore",   beds: 3, baths: 2, sqft: 1745, price: "$329,990", imgSeed: "drh-fp6b" },
      { name: "The Stirling",  beds: 4, baths: 3, sqft: 2200, price: "$369,990", imgSeed: "drh-fp6c" },
    ],
  },
  {
    slug: "the-landing-at-monkey-junction",
    name: "The Landing at Monkey Junction",
    city: "Wilmington", state: "NC", zip: "28412",
    priceFrom: "$319,990", priceTo: "$429,990",
    beds: "3–5", baths: "2–3", sqftMin: 1621, sqftMax: 2814, plans: 7,
    badge: "Move-in Ready", badgeColor: "#1f6b3a",
    imgSeed: "drh-house7",
    description: "Situated at one of Wilmington's best-known crossroads, The Landing at Monkey Junction puts you at the center of everything — minutes from Wrightsville Beach, Carolina Beach, Downtown Wilmington, and the region's top shopping and dining destinations. Move-in ready homes are available now.",
    amenities: ["Resort Pool", "Open-Air Cabana", "Fire Pit", "Walking Trails", "Dog Park", "Tot Lot", "Green Lawn Areas"],
    floorPlans: [
      { name: "The Hazel",     beds: 3, baths: 2, sqft: 1621, price: "$319,990", imgSeed: "drh-fp7a" },
      { name: "The Landing",   beds: 4, baths: 3, sqft: 2218, price: "$369,990", imgSeed: "drh-fp7b" },
      { name: "The Harbour",   beds: 5, baths: 3, sqft: 2814, price: "$419,990", imgSeed: "drh-fp7c" },
    ],
  },
  {
    slug: "tidewater-at-sunset-harbour",
    name: "Tidewater at Sunset Harbour",
    city: "Sunset Beach", state: "NC", zip: "28468",
    priceFrom: "$337,990", priceTo: "$449,990",
    beds: "3–4", baths: "2–3", sqftMin: 1700, sqftMax: 2500, plans: 5,
    imgSeed: "drh-house8",
    description: "Tidewater at Sunset Harbour embraces the laid-back elegance of Brunswick County's stunning coastline. Steps from the pristine shores of Sunset Beach — consistently ranked among the top beaches in the Carolinas — this community is your gateway to the ultimate coastal lifestyle.",
    amenities: ["Beach Access", "Oceanview Pool", "Outdoor Showers", "Boardwalk", "Bocce Court", "Fire Pit Circle", "Bicycle Storage"],
    floorPlans: [
      { name: "The Tideway",   beds: 3, baths: 2, sqft: 1700, price: "$337,990", imgSeed: "drh-fp8a" },
      { name: "The Shoreline", beds: 3, baths: 2, sqft: 1960, price: "$369,990", imgSeed: "drh-fp8b" },
      { name: "The Harbour",   beds: 4, baths: 3, sqft: 2500, price: "$419,990", imgSeed: "drh-fp8c" },
    ],
  },
  {
    slug: "the-reserve-at-pine-valley",
    name: "The Reserve at Pine Valley",
    city: "Wilmington", state: "NC", zip: "28412",
    priceFrom: "$359,990", priceTo: "$489,990",
    beds: "4–5", baths: "3–4", sqftMin: 2100, sqftMax: 3200, plans: 3,
    badge: "Now Selling", badgeColor: "#c8102e",
    imgSeed: "drh-house9",
    description: "The Reserve at Pine Valley is an exclusive enclave of estate-caliber single-family homes nestled within Wilmington's most sought-after corridor. With generous homesites, elevated architectural standards, and a suite of resort amenities, The Reserve sets a new benchmark for luxury living in the Cape Fear region.",
    amenities: ["Private Clubhouse", "Olympic Pool", "Tennis & Pickleball Courts", "Fitness Center", "Yoga Lawn", "Walking & Running Trails", "Gated Entry", "Estate Lots"],
    floorPlans: [
      { name: "The Longleaf",  beds: 4, baths: 3, sqft: 2100, price: "$359,990", imgSeed: "drh-fp9a" },
      { name: "The Sandpiper", beds: 4, baths: 4, sqft: 2660, price: "$419,990", imgSeed: "drh-fp9b" },
      { name: "The Reserve",   beds: 5, baths: 4, sqft: 3200, price: "$469,990", imgSeed: "drh-fp9c" },
    ],
  },
  {
    slug: "hanover-townhomes",
    name: "Hanover Townhomes",
    city: "Wilmington", state: "NC", zip: "28403",
    priceFrom: "$249,990", priceTo: "$319,990",
    beds: "2–3", baths: "2–3", sqftMin: 1250, sqftMax: 1850, plans: 2,
    imgSeed: "drh-house10",
    description: "Hanover Townhomes offers the perfect entry point into Wilmington homeownership without sacrificing style or location. These thoughtfully designed two- and three-story townhomes place you within walking distance of the Port City's finest restaurants, boutiques, and cultural attractions.",
    amenities: ["Landscaped Courtyard", "Covered Parking", "Roof Deck Access", "Bicycle Storage", "Pet-Friendly Green Space", "Walkable to Downtown"],
    floorPlans: [
      { name: "The Hanover",   beds: 2, baths: 2, sqft: 1250, price: "$249,990", imgSeed: "drh-fp10a" },
      { name: "The Bellamy",   beds: 3, baths: 3, sqft: 1850, price: "$299,990", imgSeed: "drh-fp10b" },
      { name: "The Latimer",   beds: 3, baths: 3, sqft: 1850, price: "$319,990", imgSeed: "drh-fp10c" },
    ],
  },
];

export const getCommunity = (slug: string): Community | undefined =>
  COMMUNITIES.find((c) => c.slug === slug);

export const getAllCommunities = (): Community[] => COMMUNITIES;

export default COMMUNITIES;
