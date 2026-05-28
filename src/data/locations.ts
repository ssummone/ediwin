export interface LocationData {
  slug: string;
  city: string;
  region: string;
  heroImage: string;
  intro: string[];
  localContext: string;
  conservation?: string;
  nearbyAreas: string[];
  faqs: { q: string; a: string }[];
}

export const locations: LocationData[] = [
  {
    slug: 'glasgow',
    city: 'Glasgow',
    region: 'Scotland',
    heroImage: '/images/Fraser suites edinburgh sash window refurbishment.jpg',
    intro: [
      'Edinburgh Windows & Doors supplies and installs bespoke timber sash and case windows, Accoya doors, secondary glazing, and composite doors across Glasgow and the West of Scotland.',
      'Glasgow has one of Scotland\'s richest collections of period properties — from the Victorian terraces of the West End to the sandstone tenements of the Southside. Our sash and case windows are manufactured to exactly replicate the original profiles found across these neighbourhoods.',
    ],
    localContext: 'Glasgow City Council conservation officers regularly approve our slim-line heritage glazing and Fineo vacuum glass specifications for listed and conservation area properties across the city.',
    conservation: 'Glasgow has several significant conservation areas including the West End, Park, Pollokshields, and Woodlands. We have experience working within conservation area guidelines across all of these.',
    nearbyAreas: ['Bearsden', 'Milngavie', 'Paisley', 'Hamilton', 'Motherwell', 'Clydebank'],
    faqs: [
      { q: 'Do you install sash windows in Glasgow?', a: 'Yes. We supply and install bespoke timber sash and case windows across Glasgow and the wider West of Scotland. Our Edinburgh workshop manufactures all windows to your exact specification.' },
      { q: 'How long does delivery take to Glasgow?', a: 'Supply-only orders are typically delivered to Glasgow within our standard 8–10 week lead time. Installation projects are scheduled at the point of order. Contact us to discuss your timeline.' },
      { q: 'Can you work on listed buildings in Glasgow?', a: 'Yes. We have extensive experience working on listed and conservation area properties. We can provide full specifications and documentation to support Glasgow City Council planning applications.' },
    ],
  },
  {
    slug: 'east-lothian',
    city: 'East Lothian',
    region: 'Scotland',
    heroImage: '/images/Edinburgh property full sash and case refurbishment.JPG',
    intro: [
      'Edinburgh Windows & Doors serves homeowners and developers across East Lothian — from the coastal towns of North Berwick and Dunbar to the rural villages of Haddington and Gifford.',
      'East Lothian\'s historic towns and estate properties often feature original sash and case windows that are nearing the end of their serviceable life. We manufacture exact like-for-like replacements that maintain period character while delivering modern thermal performance.',
    ],
    localContext: 'East Lothian Council conservation officers are experienced with heritage glazing specifications. Our Fineo and slim-line units have been approved for properties across the county.',
    conservation: 'North Berwick, Haddington, and Dunbar all have conservation areas with restrictions on window materials and profiles. We understand the requirements and can guide you through the approval process.',
    nearbyAreas: ['North Berwick', 'Haddington', 'Dunbar', 'Musselburgh', 'Tranent', 'Longniddry'],
    faqs: [
      { q: 'Do you cover East Lothian?', a: 'Yes. We install sash windows, Accoya doors, and secondary glazing across all of East Lothian. We\'re based just outside Edinburgh and cover the full county.' },
      { q: 'Can you work on coastal properties in East Lothian?', a: 'Yes. For coastal locations like North Berwick and Dunbar, we recommend Accoya timber for its exceptional durability in exposed environments. It carries a 50-year above-ground guarantee against rot.' },
    ],
  },
  {
    slug: 'stirling',
    city: 'Stirling',
    region: 'Scotland',
    heroImage: '/images/stirling uni sash and case window repairs.JPG',
    intro: [
      'Edinburgh Windows & Doors has direct experience working in Stirling, having delivered large-scale heritage window repairs at Stirling University. We supply and install sash and case windows, Accoya doors, and secondary glazing across the Stirling area.',
      'Stirling\'s historic old town, conservation areas, and significant stock of listed buildings demand a high standard of heritage glazing expertise. We work closely with Stirling Council conservation officers on appropriate specifications.',
    ],
    localContext: 'Our Stirling University project — large-scale sash window repairs across the campus — demonstrates our ability to deliver complex heritage programmes in the Stirling area.',
    conservation: 'Stirling Old Town is a conservation area of national significance. We have experience working within conservation area requirements and can provide all documentation required for planning applications.',
    nearbyAreas: ['Falkirk', 'Alloa', 'Bridge of Allan', 'Dunblane', 'Clackmannan', 'Grangemouth'],
    faqs: [
      { q: 'Have you worked in Stirling before?', a: 'Yes. We delivered a major heritage window repair programme at Stirling University. We\'re experienced with Stirling\'s conservation area requirements and have strong relationships with local conservation officers.' },
      { q: 'Do you cover the Stirling area for installations?', a: 'Yes. We install sash windows, Accoya doors, and secondary glazing across Stirling and the surrounding area including Falkirk, Alloa, and Dunblane.' },
    ],
  },
  {
    slug: 'dundee',
    city: 'Dundee',
    region: 'Scotland',
    heroImage: '/images/EWD Aberdeen glass install.jpg',
    intro: [
      'Edinburgh Windows & Doors supplies and installs bespoke timber sash and case windows, Accoya timber doors, and secondary glazing across Dundee and the wider Tayside area.',
      'Dundee\'s Victorian and Edwardian housing stock includes a large number of properties with original sash and case windows in need of repair or replacement. We manufacture exact replicas of original profiles, ensuring period character is maintained.',
    ],
    localContext: 'Dundee City Council conservation officers work within the same national heritage framework as other Scottish councils. Our product specifications are designed to meet these requirements.',
    nearbyAreas: ['Perth', 'Arbroath', 'Montrose', 'Forfar', 'Blairgowrie', 'Kirriemuir'],
    faqs: [
      { q: 'Do you supply sash windows to Dundee?', a: 'Yes. We supply and install bespoke timber sash and case windows across Dundee and the Tayside area. Our Edinburgh workshop manufactures all windows to specification.' },
      { q: 'Can you do trade supply to Dundee?', a: 'Yes. We offer supply-only pricing to joiners, developers, and main contractors. We can arrange delivery to Dundee and across Tayside.' },
    ],
  },
  {
    slug: 'aberdeen',
    city: 'Aberdeen',
    region: 'Scotland',
    heroImage: '/images/EWD Aberdeen glass install.jpg',
    intro: [
      'Edinburgh Windows & Doors has direct project experience in Aberdeen, having completed commercial glazing installations in the city. We supply and install bespoke timber sash windows, Accoya doors, and secondary glazing across Aberdeen and Aberdeenshire.',
      'Aberdeen\'s granite architecture is distinctive and requires a high level of craftsmanship to replicate original window profiles accurately. Our Edinburgh workshop has the experience and equipment to manufacture to any specification.',
    ],
    localContext: 'Aberdeen\'s exposed coastal and northern setting makes Accoya timber the ideal specification for many projects — its 50-year guarantee against rot is particularly relevant for this climate.',
    conservation: 'Aberdeen has significant conservation areas in Old Aberdeen, the West End, and throughout the Victorian granite district. We can provide specifications that meet Aberdeen City Council conservation requirements.',
    nearbyAreas: ['Stonehaven', 'Inverurie', 'Banchory', 'Ellon', 'Peterhead', 'Fraserburgh'],
    faqs: [
      { q: 'Have you worked in Aberdeen?', a: 'Yes. We have completed commercial glazing installations in Aberdeen. We supply and install across the city and wider Aberdeenshire area.' },
      { q: 'Is Accoya a good choice for Aberdeen\'s climate?', a: 'Absolutely. Aberdeen\'s wet, exposed climate is exactly the environment where Accoya outperforms all other timber species. Its 50-year above-ground guarantee against rot makes it an excellent long-term investment.' },
    ],
  },
  {
    slug: 'fife',
    city: 'Fife',
    region: 'Scotland',
    heroImage: '/images/Edinburgh property full sash and case refurbishment.JPG',
    intro: [
      'Edinburgh Windows & Doors serves homeowners, developers, and conservation officers across Fife — from the East Neuk fishing villages to the historic Royal Burgh of Dunfermline.',
      'Fife has a rich concentration of historic properties, many of them Category B or A listed, requiring specialist heritage glazing expertise. We manufacture bespoke sash and case windows, Accoya timber doors, and secondary glazing to meet the most demanding conservation requirements.',
    ],
    localContext: 'Our Inverkeithing and Aberdour projects demonstrate our Fife experience. We have a strong track record of working within Fife Council conservation area requirements.',
    conservation: 'St Andrews, Dunfermline, Cupar, and the East Neuk villages all have significant conservation area designations. We are experienced in the specific requirements for these areas.',
    nearbyAreas: ['St Andrews', 'Dunfermline', 'Kirkcaldy', 'Cupar', 'Glenrothes', 'Inverkeithing'],
    faqs: [
      { q: 'Do you work in Fife?', a: 'Yes. We have completed projects in Inverkeithing and Aberdour and serve the full Fife area for supply and installation of sash windows, Accoya doors, and secondary glazing.' },
      { q: 'Are your windows suitable for East Neuk coastal properties?', a: 'Yes. For exposed coastal locations in the East Neuk and along the Fife coast, we recommend Accoya timber for its exceptional resistance to the elements. It carries a 50-year above-ground guarantee.' },
    ],
  },
  {
    slug: 'highlands',
    city: 'Highlands',
    region: 'Scotland',
    heroImage: '/images/craighouse sash and case project.jpg',
    intro: [
      'Edinburgh Windows & Doors supplies bespoke timber sash and case windows and Accoya timber doors to the Scottish Highlands — including trade supply to joiners and builders across the region.',
      'Highland properties often face the most demanding environmental conditions in Scotland — wind-driven rain, exposed coastal positions, and extreme temperature variation. Accoya timber is the ideal specification for Highland projects, with its 50-year guarantee against rot making it uniquely suited to this climate.',
    ],
    localContext: 'We offer trade supply-only to joiners across the Highlands, with delivery coordinated at the point of order. All windows and doors are manufactured in our Edinburgh workshop and shipped to site.',
    conservation: 'The Highland Council conservation area covers significant historic towns including Inverness, Dingwall, and many smaller burghs. We can provide full specification documentation for any Heritage Scotland or planning application.',
    nearbyAreas: ['Inverness', 'Fort William', 'Aviemore', 'Dingwall', 'Nairn', 'Forres'],
    faqs: [
      { q: 'Do you supply to the Highlands?', a: 'Yes. We offer supply-only to joiners and builders across the Highlands. All windows and doors are manufactured in our Edinburgh workshop and delivered to site.' },
      { q: 'What timber do you recommend for Highland properties?', a: 'We strongly recommend Accoya for Highland properties due to the exposed conditions. Its 50-year above-ground guarantee against rot makes it the most appropriate long-term specification for this climate.' },
    ],
  },
  {
    slug: 'england',
    city: 'England & UK-Wide',
    region: 'United Kingdom',
    heroImage: '/images/Edinburgh windows and doors trump turnberry.jpg',
    intro: [
      'Edinburgh Windows & Doors supplies bespoke timber sash and case windows and Accoya timber doors across England and the wider UK. We are a specialist trade supplier with a growing client base among joiners, main contractors, and heritage developers across England.',
      'Our Trump Turnberry and Grand Island Hotel commissions demonstrate our ability to deliver at any scale, anywhere in the UK. We work from drawings and specifications sent by post or email, and arrange direct delivery to site.',
    ],
    localContext: 'For English customers, we offer supply-only pricing with nationwide delivery. We can provide full product specifications for Historic England and local authority planning applications.',
    conservation: 'English Heritage and Historic England recognise the same categories of heritage glazing as Historic Environment Scotland. Our Fineo vacuum glass and slim-line units have been specified on projects across England.',
    nearbyAreas: ['London', 'Manchester', 'Birmingham', 'Newcastle', 'Leeds', 'Bristol'],
    faqs: [
      { q: 'Do you supply sash windows to England?', a: 'Yes. We supply bespoke timber sash and case windows and Accoya doors across England and the wider UK. Contact us with your drawings or specification and we\'ll provide a quote with delivery.' },
      { q: 'Can you provide specifications for English Heritage applications?', a: 'Yes. We can provide full product data sheets and compliance documentation for Historic England and local authority planning applications anywhere in England.' },
      { q: 'Do you install in England as well as supply?', a: 'We primarily offer supply-only for customers outside Scotland. For larger commercial programmes, installation may be available — please contact us to discuss your project.' },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find(l => l.slug === slug);
}
