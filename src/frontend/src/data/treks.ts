export interface ItineraryDay {
  day: number;
  title: string;
  meta: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Review {
  quote: string;
  name: string;
  trip: string;
  date: string;
}

export interface Trek {
  id: string;
  title: string;
  state: string;
  duration: string;
  durationDays: number;
  difficulty: string;
  maxAltitude: string;
  bestSeason: string;
  price: string;
  priceValue: number;
  image: string;
  teaser: string;
  distance: string;
  groupSize: string;
  region: string;
  startPoint: string;
  endPoint: string;
  assemblyPoint: string;
  nearestAirport: string;
  nearestRailhead: string;
  overview: string[];
  difficultyGuide: string[];
  included: string[];
  notIncluded: string[];
  packingList: Record<string, string[]>;
  bestTimeTable: { month: string; rating: string; note: string }[];
  howToReach: string[];
  gallery: { src: string; alt: string }[];
  faqs: Faq[];
  reviews: Review[];
  itinerary: ItineraryDay[];
  relatedTreks: string[];
  sampleDates: string[];
}

export const treks: Trek[] = [
  {
    id: "chopta-tungnath",
    title: "Chopta Tungnath",
    state: "Uttarakhand",
    duration: "2D/1N",
    durationDays: 2,
    difficulty: "Easy-Moderate",
    maxAltitude: "3,680m",
    bestSeason: "April–June, Sep–Nov",
    price: "₹6,499",
    priceValue: 6499,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
    teaser:
      "The world's highest Shiva temple, set in rhododendron forests with meadow trails — an accessible first Himalayan trek.",
    distance: "8km RT",
    groupSize: "8–14",
    region: "Rudraprayag district",
    startPoint: "Chopta",
    endPoint: "Chopta",
    assemblyPoint: "Rishikesh",
    nearestAirport: "Jolly Grant (Dehradun)",
    nearestRailhead: "Rishikesh",
    overview: [
      "Chopta Tungnath is Global Trek's most accessible first-Himalayan-trek entry point — a short but rewarding trail that climbs through rhododendron forests and alpine meadows to the world's highest Shiva temple at 3,680 metres.",
      "The trek sits within the Panch Kedar pilgrimage circuit, and the temple itself is a remarkable stone structure that has withstood centuries of Himalayan weather. Unlike longer expeditions, this trail delivers high-altitude drama without demanding weeks of leave.",
      "The meadow terrain — locally called bugyal — opens up panoramic views of Nanda Devi, Trishul, and Chaukhamba peaks. For those who push on to Chandrashila summit, the 360° sunrise panorama is one of the most photographed moments in the Garhwal Himalaya.",
      "This trek suits first-timers, families with teenagers, and anyone who wants a genuine Himalayan experience without committing to a week-long expedition. The short duration also makes it ideal for long weekends from Delhi or Dehradun.",
    ],
    difficultyGuide: [
      "Rated Easy-Moderate, this trek involves 3–4 hours of walking on a well-defined stone-paved trail with moderate altitude gain. The path to Tungnath temple is steady but not steep, making it achievable for anyone with basic fitness.",
      "The optional Chandrashila extension adds another 1.5 kilometres of steeper walking on loose scree. No prior trekking experience is required, but we recommend a month of regular walking or light jogging to enjoy the summit push comfortably.",
    ],
    included: [
      "Accommodation: 1 night in a comfortable guesthouse or camp at Chopta (twin-sharing tents or rooms)",
      "Meals: All vegetarian meals from dinner on Day 1 to breakfast on Day 2 (breakfast, packed lunch, dinner)",
      "Transport: Rishikesh to Chopta and return in a shared tempo traveller or SUV",
      "Permits: All required forest and trekking permits for the Tungnath-Chandrashila trail",
      "Guide services: Experienced local guide certified in high-altitude first aid",
      "Safety: Basic medical kit, oxygen cylinder, and oximeter for altitude monitoring",
      "Evening briefing: Route and safety orientation on arrival at Chopta",
    ],
    notIncluded: [
      "Flights or trains to Rishikesh — trekkers must reach the assembly point independently",
      "Personal trekking gear: shoes, warm layers, rain cover, backpack, and headlamp",
      "Travel insurance covering high-altitude trekking and emergency evacuation",
      "Tips for guides and support staff (recommended ₹200–400 per trekker)",
      "Any meals or snacks purchased outside the provided camp menu",
      "Porter or mule charges if you choose to offload your backpack",
      "The optional Chandrashila extension is included in the standard itinerary; no extra charge applies",
    ],
    packingList: {
      Clothing: [
        "Thermal base layers (top + bottom)",
        "Fleece jacket or down jacket",
        "Trek pants (2 pairs)",
        "Warm inner gloves",
        "Woollen cap and sun cap",
        "Buff or neck gaiter",
      ],
      Footwear: [
        "Trekking shoes with ankle support (mandatory)",
        "Cotton socks (3–4 pairs)",
        "Woollen socks (2 pairs)",
        "Camp sandals or flip-flops",
      ],
      "Gear & Equipment": [
        "Backpack (30–40L) with rain cover",
        "Headlamp or torch with extra batteries",
        "Sunglasses with UV protection",
        "Trekking poles (recommended)",
        "Water bottles (2 x 1L) or hydration pack",
      ],
      "Personal & Health": [
        "Sunscreen SPF 50+",
        "Lip balm",
        "Personal medicines",
        "Toiletries and quick-dry towel",
        "ID proof and emergency contact card",
      ],
    },
    bestTimeTable: [
      {
        month: "Jan",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Feb",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Mar",
        rating: "Fair",
        note: "Late snow possible; cold mornings",
      },
      {
        month: "Apr",
        rating: "Excellent",
        note: "Rhododendron bloom begins; clear skies",
      },
      {
        month: "May",
        rating: "Excellent",
        note: "Peak bloom; mild temperatures",
      },
      {
        month: "Jun",
        rating: "Good",
        note: "Warm days; occasional pre-monsoon showers",
      },
      { month: "Jul", rating: "Closed", note: "Monsoon; landslide risk" },
      { month: "Aug", rating: "Closed", note: "Monsoon; landslide risk" },
      {
        month: "Sep",
        rating: "Excellent",
        note: "Post-monsoon clarity; green meadows",
      },
      {
        month: "Oct",
        rating: "Excellent",
        note: "Crisp air; best mountain views",
      },
      {
        month: "Nov",
        rating: "Good",
        note: "Cold mornings; possible early snow",
      },
      {
        month: "Dec",
        rating: "Fair",
        note: "Snow-covered trail; challenging but beautiful",
      },
    ],
    howToReach: [
      "Nearest airport: Jolly Grant Airport, Dehradun (approx. 180 km from Chopta). Daily flights from Delhi. Global Trek can arrange a seat in our shared pickup vehicle from the airport to Rishikesh.",
      "Nearest railhead: Rishikesh Railway Station (well connected to Delhi, Haridwar, and Dehradun). Most trekkers take the overnight train from Delhi and arrive in Rishikesh by early morning.",
      "From Delhi: 240 km by road (7–8 hours). We recommend arriving in Rishikesh a day before the trek starts. Global Trek's shared vehicle leaves Rishikesh at 6:00 AM on Day 1.",
      "From Dehradun: 190 km by road (6–7 hours). If you fly into Dehradun, plan to reach Rishikesh the evening before departure.",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Chopta meadow with rhododendron trees and distant snow peaks",
      },
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Tungnath temple stone structure against a blue sky",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Chandrashila summit panorama at sunrise with golden light on peaks",
      },
      {
        src: "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
        alt: "Trail through dense rhododendron forest in bloom",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        alt: "Bugyal meadow with wildflowers and Himalayan backdrop",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        alt: "Distant view of Chaukhamba massif from the ridge",
      },
    ],
    faqs: [
      {
        question: "Is this trek suitable for children?",
        answer:
          "Yes, children aged 10 and above with reasonable fitness can complete the Tungnath temple section. The Chandrashila extension is steeper and better suited for teenagers and adults. We assess each family individually before confirming.",
      },
      {
        question: "Do I need prior trekking experience?",
        answer:
          "No prior experience is required. This is our recommended first Himalayan trek. The trail is well-defined and the altitude gain is gradual. A month of regular walking or light cardio is sufficient preparation.",
      },
      {
        question: "Is the Chandrashila extension worth the extra effort?",
        answer:
          "Absolutely. The 360° sunrise view from 4,090 metres is the highlight of the trek. You see Nanda Devi, Trishul, Chaukhamba, and Kedarnath range in one panoramic sweep. It adds only 1.5 hours of walking.",
      },
      {
        question: "How cold does it get at the summit for sunrise?",
        answer:
          "Temperatures at Chandrashila summit can drop to -5°C to -8°C in April and October. We provide a detailed layering guide in your prep pack, and our guides carry extra warm layers for emergencies.",
      },
      {
        question: "Are mules or porters available on the trail?",
        answer:
          "Yes, mules can be hired at Chopta to carry backpacks up to Tungnath temple (not beyond). Porter charges are not included in the trek fee and must be paid directly to the local operators.",
      },
      {
        question: "Will my mobile phone work on the trail?",
        answer:
          "BSNL and Jio networks have intermittent coverage up to Tungnath temple. There is no network at Chandrashila summit. We recommend informing family that you will be unreachable for 24 hours.",
      },
    ],
    reviews: [
      {
        quote:
          "I had never trekked before, and Chopta Tungnath was the perfect introduction. The rhododendron forest felt like walking through a painting, and the temple itself was so peaceful. The Chandrashila sunrise was the best morning of my life.",
        name: "Rohit Mehta",
        trip: "Chopta Tungnath Trek",
        date: "May 2026",
      },
      {
        quote:
          "Took my 12-year-old daughter on this trek. The guides were incredibly patient with her pace, and she made it to the summit with the biggest smile. The group size was perfect — we all knew each other by the end of day one.",
        name: "Sunita Rao",
        trip: "Chopta Tungnath Trek",
        date: "Apr 2026",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Chopta",
        meta: "190 km drive · 7–8 hours · Altitude: 2,680m",
        description:
          "We assemble at Rishikesh by 6:00 AM and board our shared vehicle for the scenic drive to Chopta. The route follows the Alaknanda and Mandakini valleys, passing through Rudraprayag and Ukhimath. We stop for breakfast and lunch at local dhabas. On arrival at Chopta, we check into our camp or guesthouse, followed by an evening briefing on the next day's trek, route map, and safety protocols. Dinner is served early so everyone gets rest before the summit push.",
      },
      {
        day: 2,
        title: "Chopta to Tungnath Temple and Chandrashila Summit",
        meta: "5.5 km trek · 4.5–5.5 hours · Altitude gain: 1,410m",
        description:
          "We start before dawn (4:30 AM) to reach Chandrashila for sunrise. The trail climbs steadily through rhododendron forest to Tungnath temple — the world's highest Shiva temple at 3,680m. After darshan, those who choose the extension continue to Chandrashila summit (4,090m) for the iconic 360° panorama of Nanda Devi, Trishul, and Chaukhamba. We descend by the same route, reach Chopta by early afternoon, and drive back to Rishikesh, arriving by late evening.",
      },
    ],
    relatedTreks: ["kedarkantha", "kuari-pass", "har-ki-dun"],
    sampleDates: ["15 Apr 2026", "22 Apr 2026", "6 May 2026", "20 May 2026"],
  },
  {
    id: "har-ki-dun",
    title: "Har Ki Dun",
    state: "Uttarakhand",
    duration: "7D/6N",
    durationDays: 7,
    difficulty: "Moderate",
    maxAltitude: "3,566m",
    bestSeason: "April–June, Sep–Nov",
    price: "₹13,999",
    priceValue: 13999,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    teaser:
      "Trek into the legendary Valley of Gods, surrounded by Swargarohini peaks and ancient Himalayan villages.",
    distance: "~47km RT",
    groupSize: "8–14",
    region: "Govind Wildlife Sanctuary, Uttarkashi",
    startPoint: "Sankri",
    endPoint: "Sankri",
    assemblyPoint: "Dehradun",
    nearestAirport: "Jolly Grant (Dehradun)",
    nearestRailhead: "Dehradun",
    overview: [
      "Har Ki Dun — the Valley of Gods — is one of the most culturally rich and scenically rewarding treks in the Garhwal Himalaya. Nestled within the Govind Wildlife Sanctuary, this trail follows the ancient path believed to have been taken by the Pandavas on their journey to heaven, lending every meadow and village a mythic resonance.",
      "What sets Har Ki Dun apart from pass-crossing treks is its gentler cumulative-distance difficulty. There are no steep ascents to a high col; instead, the trail meanders through deodar and pine forests, crosses the tumbling Supin River, and opens into a wide alpine meadow floor ringed by the snow-capped Swargarohini peaks.",
      "The villages of Osla and Gangad are living museums of traditional Himalayan architecture — multi-storey wooden houses with slate roofs, stone-paved courtyards, and the unique Duryodhana temple, a rare shrine dedicated to the Mahabharata antagonist. Spending time in these villages offers a window into a way of life that has changed little in centuries.",
      "This trek suits anyone with a reasonable fitness base who wants a longer Himalayan experience without the technical demands of a high pass. The daily walking hours are manageable, the altitude gain is gradual, and the scenery improves every single day. It is particularly rewarding for photographers, mythology enthusiasts, and trekkers who value cultural immersion alongside mountain views.",
    ],
    difficultyGuide: [
      "Rated Moderate, Har Ki Dun involves 5–7 hours of walking each day on well-defined trails with moderate altitude gain. The path is never technical, but the cumulative distance over seven days demands stamina and mental endurance. The maximum altitude of 3,566 metres is below the high-risk zone, making altitude sickness unlikely for most trekkers.",
      "We recommend two months of preparation: regular brisk walking, stair climbing, and a weekly longer hike of 10–12 km with a loaded backpack. The optional Jaundhar Glacier side-trek adds a steeper day and should only be attempted by those feeling fully acclimatised and energised.",
    ],
    included: [
      "Accommodation: 6 nights in comfortable campsites (twin-sharing tents) or village homestays at Osla and Har Ki Dun",
      "Meals: All vegetarian meals from dinner on Day 1 to breakfast on Day 7 (breakfast, packed lunch, dinner, evening tea/snacks)",
      "Transport: Dehradun to Sankri and return in a shared tempo traveller or SUV",
      "Permits: All required forest, wildlife sanctuary, and trekking permits",
      "Guide services: Experienced local guide certified in high-altitude first aid and wilderness rescue",
      "Safety: Comprehensive medical kit, oxygen cylinder, oximeter, and portable stretcher",
      "Camp logistics: Sleeping bags, sleeping mats, dining tent, toilet tent, and kitchen equipment",
      "Evening briefings: Daily route and weather briefings with contingency planning",
    ],
    notIncluded: [
      "Flights or trains to Dehradun — trekkers must reach the assembly point independently",
      "Personal trekking gear: shoes, warm layers, rain cover, backpack, and headlamp",
      "Travel insurance covering high-altitude trekking and emergency evacuation",
      "Tips for guides, cooks, and support staff (recommended ₹500–800 per trekker for the full trek)",
      "Any meals or snacks purchased outside the provided camp menu",
      "Porter or mule charges if you choose to offload your backpack",
      "Personal expenses such as phone calls, laundry, or beverages",
    ],
    packingList: {
      Clothing: [
        "Thermal base layers (top + bottom)",
        "Fleece jacket or light down jacket",
        "Waterproof and windproof outer shell (jacket + pants)",
        "Trek pants (2 pairs, quick-dry)",
        "Warm inner gloves and outer waterproof gloves",
        "Woollen cap, sun cap, and buff/neck gaiter",
        "Warm socks (3–4 pairs) and liner socks",
      ],
      Footwear: [
        "Trekking shoes with ankle support and good grip (mandatory)",
        "Camp sandals or flip-flops for evenings",
        "Gaiters (recommended for snow/dust)",
      ],
      "Gear & Equipment": [
        "Backpack (50–60L) with rain cover",
        "Daypack (20–30L) for summit/side-trek days",
        "Headlamp or torch with extra batteries",
        "Sunglasses with UV protection (category 3 or 4)",
        "Trekking poles (highly recommended)",
        "Water bottles (2 x 1L) or hydration pack (2–3L)",
        "Personal first-aid kit with blister pads",
      ],
      "Personal & Health": [
        "Sunscreen SPF 50+ and lip balm with SPF",
        "Personal medicines and prescriptions",
        "Toiletries, quick-dry towel, and hand sanitiser",
        "ID proof, emergency contact card, and passport photos (2)",
        "Power bank and charging cable",
        "Lightweight book or journal for evenings",
      ],
    },
    bestTimeTable: [
      {
        month: "Jan",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Feb",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Mar",
        rating: "Fair",
        note: "Late snow possible; cold mornings",
      },
      {
        month: "Apr",
        rating: "Excellent",
        note: "Rhododendron bloom; clear skies; ideal temperatures",
      },
      {
        month: "May",
        rating: "Excellent",
        note: "Peak bloom; mild days; best mountain views",
      },
      {
        month: "Jun",
        rating: "Good",
        note: "Warm days; occasional pre-monsoon showers",
      },
      {
        month: "Jul",
        rating: "Closed",
        note: "Monsoon; landslide and leech risk",
      },
      {
        month: "Aug",
        rating: "Closed",
        note: "Monsoon; landslide and leech risk",
      },
      {
        month: "Sep",
        rating: "Excellent",
        note: "Post-monsoon clarity; green meadows; crisp air",
      },
      {
        month: "Oct",
        rating: "Excellent",
        note: "Stable weather; best photography light",
      },
      {
        month: "Nov",
        rating: "Good",
        note: "Cold mornings; possible early snow at higher camps",
      },
      {
        month: "Dec",
        rating: "Fair",
        note: "Snow-covered trail; challenging but beautiful",
      },
    ],
    howToReach: [
      "Nearest airport: Jolly Grant Airport, Dehradun (approx. 220 km from Sankri). Daily flights from Delhi. Global Trek can arrange a seat in our shared pickup vehicle from the airport to the Dehradun railway station assembly point.",
      "Nearest railhead: Dehradun Railway Station (well connected to Delhi, Haridwar, and major cities). Most trekkers take the overnight Nanda Devi Express or Shatabdi from Delhi and arrive in Dehradun by early morning.",
      "From Delhi: 440 km by road (10–11 hours). We recommend arriving in Dehradun a day before the trek starts. Global Trek's shared vehicle leaves Dehradun at 6:30 AM on Day 1.",
      "From Dehradun to Sankri: 200 km (8–9 hours) via Mussoorie and Purola. The drive is scenic but winding — those prone to motion sickness should carry medication.",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Har Ki Dun valley floor with Swargarohini peaks in the background",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Traditional wooden houses in Osla village with slate roofs",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Alpine meadow with wildflowers and snow-capped peaks",
      },
      {
        src: "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
        alt: "Dense deodar forest trail near Taluka",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        alt: "Supin River flowing through the valley with mountain backdrop",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        alt: "Sunrise over the Swargarohini range from Har Ki Dun camp",
      },
      {
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        alt: "Jaundhar Glacier viewpoint with ice fields and moraine",
      },
      {
        src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
        alt: "Trekkers crossing a wooden bridge over a mountain stream",
      },
    ],
    faqs: [
      {
        question: "How cold does it get at night in the camps?",
        answer:
          "Night temperatures at Har Ki Dun camp (3,566m) can drop to -5°C to -8°C in April and October. We provide high-quality sleeping bags rated to -10°C, and our guides carry extra warm layers. A proper layering system (base + fleece + down) is essential.",
      },
      {
        question: "Is this trek suitable for someone who only does day hikes?",
        answer:
          "Yes, provided you build up your endurance beforehand. The daily walking hours are 5–7 hours on moderate trails — similar to a long day hike, repeated for seven days. We recommend a month of regular 8–10 km walks with a loaded backpack before the trek.",
      },
      {
        question: "Will my phone work on the trail?",
        answer:
          "BSNL has intermittent coverage up to Osla village. There is no network at Har Ki Dun camp or beyond. We recommend informing family that you will be unreachable for 4–5 days. Our guides carry a satellite phone for emergencies.",
      },
      {
        question: "Can you accommodate vegetarian or Jain food preferences?",
        answer:
          "Absolutely. All our meals are vegetarian by default, and we can prepare Jain meals (no onion, garlic, or root vegetables) with advance notice. Please inform us at least two weeks before departure so our cook can plan accordingly.",
      },
      {
        question: "Is the Jaundhar Glacier side-trek mandatory?",
        answer:
          "No, the glacier side-trek on Day 4 is entirely optional. It is a steeper 8 km round trip that takes 5–6 hours. You can choose to rest at camp, explore the valley floor, or visit Marinda Tal lake instead. Our guides will assess the group's energy and weather before recommending it.",
      },
      {
        question: "What happens if it rains during the trek?",
        answer:
          "We carry waterproof dining tents and provide rain covers for your backpack. In case of heavy continuous rain, we may delay the day's start or take a shorter route. The monsoon months (July–August) are closed for this trek to avoid landslide risk.",
      },
    ],
    reviews: [
      {
        quote:
          "Har Ki Dun changed how I see the Himalaya. The Osla village with its wooden houses and the Duryodhana temple was like stepping back in time. And the view of Swargarohini from the meadow — I sat there for an hour just looking.",
        name: "Ananya Sharma",
        trip: "Har Ki Dun Trek",
        date: "May 2026",
      },
      {
        quote:
          "I was worried about seven days of walking, but the trail is so beautiful you forget the distance. The guides were patient, the food was incredible, and the group felt like family by day three. The optional glacier trek on day four was tough but worth every step.",
        name: "Vikram Joshi",
        trip: "Har Ki Dun Trek",
        date: "Oct 2026",
      },
      {
        quote:
          "As a solo woman traveller, safety was my top concern. Global Trek's team made me feel completely at ease — from the female-friendly campsite setup to the guides who always checked in. The mythology stories around the campfire were a bonus I didn't expect.",
        name: "Priya Nair",
        trip: "Har Ki Dun Trek",
        date: "Sep 2026",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        meta: "200 km drive · 8–9 hours · Altitude: 1,950m",
        description:
          "We assemble at Dehradun Railway Station by 6:30 AM and board our shared vehicle for the scenic drive to Sankri. The route climbs through Mussoorie, descends into the Yamuna valley, and follows the Tons River to the last roadhead of the trek. We stop for breakfast and lunch at local dhabas. On arrival at Sankri, we check into our guesthouse, followed by an evening briefing on the trek route, safety protocols, and packing check. Dinner is served early so everyone gets rest before the trek begins.",
      },
      {
        day: 2,
        title: "Sankri to Taluka to Osla",
        meta: "12 km trek · 5–6 hours · Altitude gain: 300m",
        description:
          "After breakfast, we drive 12 km to Taluka — the last motorable point. From here, the trail descends to the Supin River, then follows it upstream through dense deodar and pine forest. We cross wooden bridges, pass waterfalls, and stop for lunch at a riverside clearing. Osla village appears suddenly — a cluster of traditional wooden houses with slate roofs. We camp near the village or stay in a homestay, and our guide shares stories of the Duryodhana temple and local legends.",
      },
      {
        day: 3,
        title: "Osla to Har Ki Dun",
        meta: "12 km trek · 6–7 hours · Altitude gain: 566m",
        description:
          "Today's trail climbs gradually through forest, then opens into wide alpine meadows with the Swargarohini peaks dominating the horizon. We cross streams, walk past shepherd camps, and stop for lunch at a meadow with panoramic views. The final approach to Har Ki Dun camp is through a beautiful valley floor ringed by snow-capped summits. On arrival, we set up camp, enjoy evening tea, and watch the sunset paint the peaks gold and pink.",
      },
      {
        day: 4,
        title: "Exploration Day — Jaundhar Glacier or Marinda Tal",
        meta: "8 km RT (glacier) or 6 km RT (lake) · 5–6 hours · Altitude: up to 4,000m",
        description:
          "This is our acclimatisation and exploration day. Those who choose the Jaundhar Glacier side-trek follow a steeper trail up the moraine to a viewpoint with close-up views of the glacier and ice fields. Alternatively, you can hike to Marinda Tal — a small alpine lake surrounded by meadows. Both options offer incredible photography opportunities. We return to Har Ki Dun camp by afternoon for rest and a celebratory dinner.",
      },
      {
        day: 5,
        title: "Har Ki Dun to Osla",
        meta: "12 km trek · 5 hours · Altitude loss: 566m",
        description:
          "We retrace our steps down the valley, but the descent offers entirely new perspectives — meadows you missed on the way up, waterfalls hidden behind bends, and the Supin River roaring below. We stop for lunch at a sunny riverside spot and reach Osla by mid-afternoon. The evening is free to explore the village, visit the Duryodhana temple, or simply relax with a book and mountain views.",
      },
      {
        day: 6,
        title: "Osla to Taluka to Sankri",
        meta: "12 km trek · 4–5 hours · Altitude loss: 300m",
        description:
          "The final day of walking descends through familiar forest to Taluka, where our vehicle waits. We stop for a long lunch break and celebratory group photo, then drive back to Sankri. In the evening, we gather for a farewell dinner at our guesthouse, share stories, and distribute certificates of completion. Most trekkers sleep early after a long but satisfying day.",
      },
      {
        day: 7,
        title: "Sankri to Dehradun",
        meta: "200 km drive · 8–9 hours",
        description:
          "We leave Sankri after breakfast for the return drive to Dehradun. The journey retraces the scenic route through the Tons valley and Mussoorie. We expect to reach Dehradun by late afternoon or early evening, in time for overnight trains or flights back home. Our team assists with onward travel arrangements if needed.",
      },
    ],
    relatedTreks: ["kedarkantha", "kuari-pass", "chopta-tungnath"],
    sampleDates: ["12 Apr 2026", "26 Apr 2026", "10 May 2026", "18 Sep 2026"],
  },
  {
    id: "kedarkantha",
    title: "Kedarkantha",
    state: "Uttarakhand",
    duration: "6D/5N",
    durationDays: 6,
    difficulty: "Moderate",
    maxAltitude: "3,810m",
    bestSeason: "Dec–April",
    price: "₹11,499",
    priceValue: 11499,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    teaser:
      "India's most popular winter snow trek — 360° summit panorama through pine forests to a frozen lake.",
    distance: "~20km RT",
    groupSize: "8–14",
    region: "Govind Wildlife Sanctuary",
    startPoint: "Sankri",
    endPoint: "Sankri",
    assemblyPoint: "Dehradun",
    nearestAirport: "Jolly Grant (Dehradun)",
    nearestRailhead: "Dehradun",
    overview: [
      "Kedarkantha is Global Trek's flagship winter snow trek and one of the most popular Himalayan trails in India. From December through April, the entire route is draped in reliable snow cover, transforming the Govind Wildlife Sanctuary into a pristine white wilderness of pine forests, frozen lakes, and sparkling summit ridges.",
      "What makes Kedarkantha distinct is the 360° summit panorama from 3,810 metres. On a clear summit morning, you see a complete ring of Himalayan giants: Swargarohini, Bandarpoonch, Black Peak, and the distant Kedarnath range. No other beginner-friendly winter trek offers this breadth of view from a single summit point.",
      "The trail's signature stop is Juda Ka Talab — a small frozen lake surrounded by dense pine forest. In winter, the lake surface turns to ice, the trees wear snow caps, and the campsite becomes a postcard-perfect scene that has launched a thousand Instagram posts. Yet the real magic is quieter: the hush of snowfall, the crunch of microspikes on frozen trail, and the camaraderie of a small group sharing thermals at 10,000 feet.",
      "This trek is specifically recommended as a first winter trek. The daily distances are short, the altitude gain is gradual, and the summit day — while demanding — is achievable for anyone who has prepared with a month of regular walking. If you have ever wondered what Himalayan winter feels like, Kedarkantha is the most reliable and rewarding place to find out.",
    ],
    difficultyGuide: [
      "Rated Moderate, Kedarkantha is a winter snow trek that demands more preparation than a summer trail. The snow adds resistance to every step, temperatures at camp can drop below -10°C, and the summit day starts in pre-dawn darkness. However, the daily walking distances are short (3–6 km), and the trail is well-defined with no technical sections.",
      "We recommend two months of preparation: regular walking, stair climbing, and at least two practice hikes in your local hills with a loaded backpack. If you do not own winter gear, we provide a detailed rental guide and can arrange microspikes, gaiters, and sleeping bags rated to -15°C. Summit day is long but not technical — mental determination matters more than mountaineering skill.",
    ],
    included: [
      "Accommodation: 5 nights in comfortable campsites (twin-sharing tents) at Sankri, Juda Ka Talab, Base Camp, and Hargaon",
      "Meals: All vegetarian meals from dinner on Day 1 to breakfast on Day 6 (breakfast, packed lunch, dinner, evening tea/snacks)",
      "Transport: Dehradun to Sankri and return in a shared tempo traveller or SUV",
      "Permits: All required forest and trekking permits for the Govind Wildlife Sanctuary",
      "Guide services: Experienced local guide certified in high-altitude first aid and winter rescue",
      "Safety: Comprehensive medical kit, oxygen cylinder, oximeter, and portable stretcher",
      "Winter equipment: Microspikes for summit day, gaiters, and snow-proof dining tent",
      "Camp logistics: Sleeping bags rated to -15°C, sleeping mats, toilet tent, and kitchen equipment",
      "Evening briefings: Daily route and weather briefings with contingency planning",
    ],
    notIncluded: [
      "Flights or trains to Dehradun — trekkers must reach the assembly point independently",
      "Personal trekking gear: winter boots, warm layers, rain cover, backpack, and headlamp",
      "Travel insurance covering high-altitude trekking and emergency evacuation",
      "Tips for guides, cooks, and support staff (recommended ₹500–800 per trekker for the full trek)",
      "Any meals or snacks purchased outside the provided camp menu",
      "Porter or mule charges if you choose to offload your backpack",
      "Personal expenses such as phone calls, laundry, or beverages",
      "Rental gear beyond the microspikes and gaiters provided by Global Trek",
    ],
    packingList: {
      Clothing: [
        "Thermal base layers (top + bottom, 2 sets)",
        "Heavy down jacket (rated to -15°C)",
        "Fleece mid-layer (2 jackets)",
        "Waterproof and windproof outer shell (jacket + pants)",
        "Trek pants (2 pairs, quick-dry)",
        "Warm inner gloves and heavy outer waterproof gloves",
        "Woollen cap, balaclava, sun cap, and buff/neck gaiter",
        "Warm socks (4–5 pairs) and liner socks",
      ],
      Footwear: [
        "Waterproof trekking boots with ankle support (mandatory for snow)",
        "Gaiters (provided by Global Trek, but bring your own if you prefer)",
        "Camp sandals or flip-flops for evenings",
        "Microspikes (provided by Global Trek for summit day)",
      ],
      "Gear & Equipment": [
        "Backpack (50–60L) with rain cover",
        "Daypack (20–30L) for summit day",
        "Headlamp or torch with extra batteries (essential for pre-dawn start)",
        "Sunglasses with UV protection (category 4, snow glare protection)",
        "Trekking poles with snow baskets (highly recommended)",
        "Water bottles (2 x 1L) or hydration pack (2–3L) — keep inside jacket to prevent freezing",
        "Personal first-aid kit with blister pads and pain relief",
        "Sleeping bag liner (adds 5°C warmth)",
      ],
      "Personal & Health": [
        "Sunscreen SPF 50+ and lip balm with SPF",
        "Personal medicines and prescriptions",
        "Toiletries, quick-dry towel, and hand sanitiser",
        "ID proof, emergency contact card, and passport photos (2)",
        "Power bank (keep warm in sleeping bag at night)",
        "Thermos flask for hot water (recommended)",
        "Lightweight book or journal for long evenings",
      ],
    },
    bestTimeTable: [
      {
        month: "Jan",
        rating: "Excellent",
        note: "Deep snow; best winter conditions; cold nights",
      },
      {
        month: "Feb",
        rating: "Excellent",
        note: "Peak snow cover; ideal for photography",
      },
      {
        month: "Mar",
        rating: "Excellent",
        note: "Stable snow; milder days; clear skies",
      },
      {
        month: "Apr",
        rating: "Good",
        note: "Snow melting; muddy trails; still viable",
      },
      {
        month: "May",
        rating: "Closed",
        note: "Snow melted; not a summer trek",
      },
      { month: "Jun", rating: "Closed", note: "Not a summer trek; no snow" },
      { month: "Jul", rating: "Closed", note: "Monsoon; not operational" },
      { month: "Aug", rating: "Closed", note: "Monsoon; not operational" },
      {
        month: "Sep",
        rating: "Closed",
        note: "No snow; not a post-monsoon trek",
      },
      { month: "Oct", rating: "Closed", note: "No snow; not operational" },
      {
        month: "Nov",
        rating: "Fair",
        note: "First snow possible; trail may be patchy",
      },
      {
        month: "Dec",
        rating: "Excellent",
        note: "Reliable snow cover; festive season groups",
      },
    ],
    howToReach: [
      "Nearest airport: Jolly Grant Airport, Dehradun (approx. 220 km from Sankri). Daily flights from Delhi. Global Trek can arrange a seat in our shared pickup vehicle from the airport to the Dehradun railway station assembly point.",
      "Nearest railhead: Dehradun Railway Station (well connected to Delhi, Haridwar, and major cities). Most trekkers take the overnight Nanda Devi Express or Shatabdi from Delhi and arrive in Dehradun by early morning.",
      "From Delhi: 440 km by road (10–11 hours). We recommend arriving in Dehradun a day before the trek starts. Global Trek's shared vehicle leaves Dehradun at 6:30 AM on Day 1.",
      "From Dehradun to Sankri: 200 km (8–9 hours) via Mussoorie and Purola. The drive is scenic but winding — those prone to motion sickness should carry medication. In winter, chains may be used on vehicle tyres near Purola.",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Kedarkantha summit at sunrise with 360° snow-covered peaks",
      },
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Juda Ka Talab frozen lake surrounded by snow-laden pine forest",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Trekkers walking through deep snow on the summit trail",
      },
      {
        src: "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
        alt: "Snow-covered pine forest near the Base Camp",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        alt: "Panoramic view of Bandarpoonch peak from the summit ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        alt: "Camping in snow at Hargaon with starry night sky",
      },
      {
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        alt: "Distant view of Swargarohini peak from Kedarkantha summit",
      },
      {
        src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
        alt: "Group of trekkers celebrating at the summit with snow all around",
      },
    ],
    faqs: [
      {
        question: "Do I need prior snow-trekking experience?",
        answer:
          "No prior snow experience is required. Kedarkantha is specifically designed as a first winter trek. Our guides provide a snow-walking briefing on Day 2, and we supply microspikes for summit day. If you can walk 5 km on flat ground, you can complete this trek with preparation.",
      },
      {
        question: "How cold does it get at Base Camp at night?",
        answer:
          "Night temperatures at Base Camp (3,450m) can drop to -10°C to -15°C in January and February. We provide sleeping bags rated to -15°C and insulated sleeping mats. A proper layering system and keeping your water bottle inside your jacket are essential.",
      },
      {
        question: "Are microspikes provided, or do I need to buy them?",
        answer:
          "Global Trek provides microspikes for all trekkers on summit day at no extra charge. These strap onto your boots and provide grip on icy sections. You do not need to buy your own unless you plan to trek independently afterwards.",
      },
      {
        question: "Can I skip summit day if I am feeling unwell?",
        answer:
          "Yes, summit day is optional. If you feel unwell, you can rest at Base Camp with a support staff member. However, we strongly recommend attempting the summit if you feel even moderately fit — the view is the highlight of the trek, and our guides are trained to recognise genuine altitude issues versus normal fatigue.",
      },
      {
        question: "What happens if a snowstorm hits during the trek?",
        answer:
          "We monitor weather forecasts daily. If a major storm is predicted, we may delay summit day by 24 hours or adjust the itinerary. In extreme cases, we descend to lower camps for safety. Our guides are trained in winter rescue, and we carry emergency shelter and communication equipment.",
      },
      {
        question: "Can I rent winter gear through Global Trek?",
        answer:
          "Yes, we partner with rental shops in Dehradun and Sankri for jackets, gloves, and sleeping bag liners. We provide a detailed gear list after booking, and our team can advise on what to rent versus buy. Microspikes and gaiters are included in the trek fee.",
      },
    ],
    reviews: [
      {
        quote:
          "I had never seen snow before Kedarkantha. The first morning at Juda Ka Talab, I stepped out of my tent and literally gasped — the lake was frozen, the pines were white, and the silence was unlike anything I had ever heard. Summit day was tough but the view made me cry.",
        name: "Rahul Verma",
        trip: "Kedarkantha Trek",
        date: "Jan 2026",
      },
      {
        quote:
          "As a photographer, I was worried about gear in the cold. But the guides helped me keep batteries warm, and the sunrise from the summit gave me shots I still can't believe I took. The group was small, the food was hot, and every day felt like an adventure.",
        name: "Neha Gupta",
        trip: "Kedarkantha Trek",
        date: "Feb 2026",
      },
      {
        quote:
          "I booked this trek on a whim after a breakup. I came back with three new best friends and a completely different perspective on what I am capable of. The guides didn't just lead — they taught us about the mountains, the stars, and ourselves.",
        name: "Arjun Patel",
        trip: "Kedarkantha Trek",
        date: "Dec 2025",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        meta: "200 km drive · 8–9 hours · Altitude: 1,950m",
        description:
          "We assemble at Dehradun Railway Station by 6:30 AM and board our shared vehicle for the scenic drive to Sankri. The route climbs through Mussoorie, descends into the Yamuna valley, and follows the Tons River. We stop for breakfast and lunch at local dhabas. On arrival at Sankri, we check into our guesthouse, followed by an evening briefing on winter trekking safety, gear check, and route overview. Dinner is served early so everyone gets rest before the trek begins.",
      },
      {
        day: 2,
        title: "Sankri to Juda Ka Talab",
        meta: "4 km trek · 4 hours · Altitude gain: 500m",
        description:
          "After breakfast, we begin our trek from Sankri village. The trail climbs gently through dense pine forest, with the first patches of snow appearing within an hour. Juda Ka Talab — the frozen lake — is our campsite for the night. We arrive by early afternoon, set up camp, and spend the evening exploring the frozen lake surface and taking photographs. Our guide conducts a snow-walking and microspike briefing before dinner.",
      },
      {
        day: 3,
        title: "Juda Ka Talab to Base Camp",
        meta: "4 km trek · 3–4 hours · Altitude gain: 450m",
        description:
          "Today's walk is short but beautiful, climbing through snow-laden forest to the Kedarkantha Base Camp. The trees thin out as we gain altitude, and the views open up to reveal distant peaks. This is an acclimatisation day — we arrive by noon, set up camp, and spend the afternoon resting, playing snow games, and preparing for summit day. An early dinner and early bedtime are mandatory.",
      },
      {
        day: 4,
        title: "Base Camp to Kedarkantha Summit to Hargaon",
        meta: "9 km trek · 6–7 hours · Altitude gain: 360m, loss: 1,050m",
        description:
          "Summit day begins at 3:00 AM with hot tea and a quick breakfast. We strap on microspikes and headlamps and begin the pre-dawn climb. The trail is steep but well-defined, and the snow crunches underfoot. We reach the summit (3,810m) by sunrise — the 360° panorama of Swargarohini, Bandarpoonch, Black Peak, and Kedarnath range is the reward. After photographs and celebrations, we descend all the way to Hargaon camp, arriving by afternoon for a well-earned rest.",
      },
      {
        day: 5,
        title: "Hargaon to Sankri",
        meta: "6 km trek · 3 hours · Altitude loss: 600m",
        description:
          "A relaxed final day of walking descends through pine forest back to Sankri. We stop for a long lunch break and celebratory group photo at a sunny meadow, then continue to the village. In the evening, we gather for a farewell dinner at our guesthouse, share stories, and distribute certificates of completion. Most trekkers sleep early after an exhausting but exhilarating summit day.",
      },
      {
        day: 6,
        title: "Sankri to Dehradun",
        meta: "200 km drive · 8–9 hours",
        description:
          "We leave Sankri after breakfast for the return drive to Dehradun. The journey retraces the scenic route through the Tons valley and Mussoorie. We expect to reach Dehradun by late afternoon or early evening, in time for overnight trains or flights back home. Our team assists with onward travel arrangements if needed.",
      },
    ],
    relatedTreks: ["har-ki-dun", "kuari-pass", "chopta-tungnath"],
    sampleDates: ["10 Jan 2026", "24 Jan 2026", "7 Feb 2026", "21 Feb 2026"],
  },
  {
    id: "kuari-pass",
    title: "Kuari Pass",
    state: "Uttarakhand",
    duration: "6D/5N",
    durationDays: 6,
    difficulty: "Moderate",
    maxAltitude: "3,650m",
    bestSeason: "April–June, Sep–Nov",
    price: "₹12,499",
    priceValue: 12499,
    image:
      "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
    teaser:
      "Lord Curzon's trail with unmatched views of Nanda Devi, Dronagiri, and the Garhwal giants.",
    distance: "~33km",
    groupSize: "8–14",
    region: "Chamoli district",
    startPoint: "Joshimath",
    endPoint: "Joshimath",
    assemblyPoint: "Rishikesh",
    nearestAirport: "Jolly Grant (Dehradun)",
    nearestRailhead: "Rishikesh",
    overview: [
      "Kuari Pass — Lord Curzon's Trail — is one of the most historically significant and visually spectacular treks in the Indian Himalaya. Named after the British Viceroy who first walked this route in 1905, the trail offers what many consider the finest mountain panorama in Uttarakhand: a front-row view of Nanda Devi, India's second-highest peak, framed by the towering Dronagiri, Hathi Ghoda, and Neelkanth massifs.",
      "What distinguishes Kuari Pass from other Garhwal treks is the sheer density of major peaks visible from a single ridge. On the pass crossing day, you stand at 3,650 metres with a 270° sweep of 7,000-metre giants — a view that has drawn mountaineers, photographers, and trekkers for over a century. The trail itself passes through ancient oak and rhododendron forest, wide bugyal meadows, and the remote Gorson Bugyal — one of the largest alpine pastures in the region.",
      "Unlike high-altitude expeditions that demand technical skills, Kuari Pass is a classic 'ridge walk' trek. The daily distances are moderate, the campsites are beautiful, and the trail is well-defined. It suits anyone with a reasonable fitness base who wants to experience the grandeur of the Garhwal Himalaya without committing to a week-long expedition or facing extreme altitude.",
      "This trek is particularly rewarding in April and May when the rhododendron forests bloom in shades of crimson and pink, and in October when the post-monsoon clarity offers the sharpest mountain views. For photographers, historians, and first-time Himalayan trekkers alike, Kuari Pass delivers an experience that justifies its century-old reputation.",
    ],
    difficultyGuide: [
      "Rated Moderate, Kuari Pass involves 5–6 hours of walking each day on well-defined trails with moderate altitude gain. The pass crossing day is the most demanding, with a steep final ascent to 3,650 metres, but the trail is non-technical and achievable for anyone with two months of preparation.",
      "We recommend regular brisk walking, stair climbing, and at least two longer practice hikes of 8–10 km with a loaded backpack before the trek. The maximum altitude is below the high-risk zone, making altitude sickness unlikely for most trekkers. A good level of cardiovascular fitness will ensure you enjoy the pass crossing rather than merely enduring it.",
    ],
    included: [
      "Accommodation: 5 nights in comfortable campsites (twin-sharing tents) at Dhak, Tali, and Kuari Pass",
      "Meals: All vegetarian meals from dinner on Day 1 to breakfast on Day 6 (breakfast, packed lunch, dinner, evening tea/snacks)",
      "Transport: Rishikesh to Joshimath and return in a shared tempo traveller or SUV",
      "Permits: All required forest and trekking permits for the Kuari Pass trail",
      "Guide services: Experienced local guide certified in high-altitude first aid",
      "Safety: Comprehensive medical kit, oxygen cylinder, oximeter, and portable stretcher",
      "Camp logistics: Sleeping bags, sleeping mats, dining tent, toilet tent, and kitchen equipment",
      "Evening briefings: Daily route and weather briefings with contingency planning",
    ],
    notIncluded: [
      "Flights or trains to Rishikesh — trekkers must reach the assembly point independently",
      "Personal trekking gear: shoes, warm layers, rain cover, backpack, and headlamp",
      "Travel insurance covering high-altitude trekking and emergency evacuation",
      "Tips for guides, cooks, and support staff (recommended ₹500–800 per trekker for the full trek)",
      "Any meals or snacks purchased outside the provided camp menu",
      "Porter or mule charges if you choose to offload your backpack",
      "Personal expenses such as phone calls, laundry, or beverages",
    ],
    packingList: {
      Clothing: [
        "Thermal base layers (top + bottom)",
        "Fleece jacket or light down jacket",
        "Waterproof and windproof outer shell (jacket + pants)",
        "Trek pants (2 pairs, quick-dry)",
        "Warm inner gloves and outer waterproof gloves",
        "Woollen cap, sun cap, and buff/neck gaiter",
        "Warm socks (3–4 pairs) and liner socks",
      ],
      Footwear: [
        "Trekking shoes with ankle support and good grip (mandatory)",
        "Camp sandals or flip-flops for evenings",
        "Gaiters (recommended for snow/dust)",
      ],
      "Gear & Equipment": [
        "Backpack (50–60L) with rain cover",
        "Daypack (20–30L) for summit/side-trek days",
        "Headlamp or torch with extra batteries",
        "Sunglasses with UV protection (category 3 or 4)",
        "Trekking poles (highly recommended)",
        "Water bottles (2 x 1L) or hydration pack (2–3L)",
        "Personal first-aid kit with blister pads",
      ],
      "Personal & Health": [
        "Sunscreen SPF 50+ and lip balm with SPF",
        "Personal medicines and prescriptions",
        "Toiletries, quick-dry towel, and hand sanitiser",
        "ID proof, emergency contact card, and passport photos (2)",
        "Power bank and charging cable",
        "Lightweight book or journal for evenings",
      ],
    },
    bestTimeTable: [
      {
        month: "Jan",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Feb",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Mar",
        rating: "Fair",
        note: "Late snow possible; cold mornings",
      },
      {
        month: "Apr",
        rating: "Excellent",
        note: "Rhododendron bloom begins; clear skies",
      },
      {
        month: "May",
        rating: "Excellent",
        note: "Peak bloom; mild temperatures; best views",
      },
      {
        month: "Jun",
        rating: "Good",
        note: "Warm days; occasional pre-monsoon showers",
      },
      { month: "Jul", rating: "Closed", note: "Monsoon; landslide risk" },
      { month: "Aug", rating: "Closed", note: "Monsoon; landslide risk" },
      {
        month: "Sep",
        rating: "Excellent",
        note: "Post-monsoon clarity; green meadows",
      },
      {
        month: "Oct",
        rating: "Excellent",
        note: "Crisp air; sharpest mountain views",
      },
      {
        month: "Nov",
        rating: "Good",
        note: "Cold mornings; possible early snow",
      },
      {
        month: "Dec",
        rating: "Fair",
        note: "Snow-covered trail; challenging but beautiful",
      },
    ],
    howToReach: [
      "Nearest airport: Jolly Grant Airport, Dehradun (approx. 280 km from Joshimath). Daily flights from Delhi. Global Trek can arrange a seat in our shared pickup vehicle from the airport to Rishikesh.",
      "Nearest railhead: Rishikesh Railway Station (well connected to Delhi, Haridwar, and Dehradun). Most trekkers take the overnight train from Delhi and arrive in Rishikesh by early morning.",
      "From Delhi: 260 km by road to Rishikesh (6–7 hours). We recommend arriving in Rishikesh a day before the trek starts. Global Trek's shared vehicle leaves Rishikesh at 5:00 AM on Day 1 for the drive to Joshimath.",
      "From Rishikesh to Joshimath: 260 km (8–9 hours) via Devprayag, Rudraprayag, and Karnaprayag. The drive follows the Alaknanda River and offers stunning views of the confluences. Those prone to motion sickness should carry medication.",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
        alt: "Kuari Pass summit ridge with panoramic view of Nanda Devi",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Gorson Bugyal alpine meadow with distant snow peaks",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Rhododendron forest in full bloom along the trail",
      },
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Dronagiri peak viewed from the Kuari Pass ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        alt: "Trekkers walking across the open bugyal meadows",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        alt: "Sunrise light on the Hathi Ghoda massif from camp",
      },
      {
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        alt: "Oak forest trail with dappled sunlight",
      },
      {
        src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
        alt: "Camping at Tali with mountain views at dusk",
      },
    ],
    faqs: [
      {
        question: "Is this trek suitable for beginners?",
        answer:
          "Yes, Kuari Pass is an excellent first Himalayan trek. The daily distances are moderate, the trail is well-defined, and the maximum altitude of 3,650m is manageable with basic preparation. We recommend two months of regular walking before the trek.",
      },
      {
        question: "How difficult is the pass crossing day?",
        answer:
          "The pass crossing day involves 6–7 hours of walking with a steep final ascent of about 800 metres. It is demanding but non-technical. Our guides set a steady pace with frequent breaks, and the reward — the panoramic view from the top — makes every step worthwhile.",
      },
      {
        question: "What is the best time for photography on this trek?",
        answer:
          "October offers the sharpest views and most stable light for landscape photography. April and May provide the added bonus of rhododendron blooms in the foreground. Sunrise and sunset from the ridge campsites offer the best golden-hour opportunities.",
      },
      {
        question: "Are there any technical sections or rope work?",
        answer:
          "No, Kuari Pass is entirely a walking trek. There are no technical sections, no rope work, and no glacier crossings. A pair of trekking poles and good hiking boots are sufficient equipment.",
      },
      {
        question: "Can I charge my phone and camera batteries?",
        answer:
          "There is no electricity at the campsites. We recommend bringing a fully charged power bank (10,000 mAh minimum) and keeping it warm in your sleeping bag at night. Some trekkers bring small solar panels, though these are not essential.",
      },
      {
        question: "What happens if the weather turns bad on pass day?",
        answer:
          "We monitor weather forecasts closely. If heavy snow or storms are predicted, we may delay the pass crossing by 24 hours or take an alternative route. Safety is always our priority, and our guides are trained to make real-time decisions based on conditions.",
      },
    ],
    reviews: [
      {
        quote:
          "I have done three Himalayan treks before, but the view from Kuari Pass was unlike anything I had seen. Nanda Devi filled the entire horizon. I sat on the ridge for an hour just staring. Our guide knew every peak by name and told us the history of Lord Curzon's walk.",
        name: "Sanjay Mehta",
        trip: "Kuari Pass Trek",
        date: "May 2026",
      },
      {
        quote:
          "The rhododendron forest in April was a revelation — crimson flowers against green moss and oak trees. Then the bugyal opened up and suddenly you are surrounded by snow peaks. Every day was a different world.",
        name: "Meera Iyer",
        trip: "Kuari Pass Trek",
        date: "Apr 2026",
      },
      {
        quote:
          "As a history teacher, I loved that this trail has been walked for over a century. Standing where Curzon stood, looking at the same peaks, connected me to something bigger than myself. The guides made it feel alive, not just a walk.",
        name: "Dr. Arvind Kumar",
        trip: "Kuari Pass Trek",
        date: "Oct 2026",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Joshimath",
        meta: "260 km drive · 8–9 hours · Altitude: 1,890m",
        description:
          "We assemble at Rishikesh by 5:00 AM and board our shared vehicle for the scenic drive to Joshimath. The route follows the Alaknanda River through the Panch Prayag — the five sacred confluences. We stop for breakfast at Devprayag and lunch at Rudraprayag. On arrival at Joshimath, we check into our guesthouse, followed by an evening briefing on the trek route, safety protocols, and packing check. Dinner is served early so everyone gets rest before the trek begins.",
      },
      {
        day: 2,
        title: "Joshimath to Dhak to Tali",
        meta: "8 km trek · 5–6 hours · Altitude gain: 600m",
        description:
          "After breakfast, we drive a short distance to Dhak village — the trailhead. From here, the path climbs through oak and rhododendron forest, crossing streams and passing shepherd camps. Tali campsite is a beautiful clearing surrounded by forest with views of Dronagiri peak. We arrive by afternoon, set up camp, and enjoy evening tea with the sound of birdsong. Our guide shares stories of the local flora and fauna.",
      },
      {
        day: 3,
        title: "Tali to Kuari Pass to Tali",
        meta: "10 km trek · 6–7 hours · Altitude gain: 750m, loss: 750m",
        description:
          "Today is the highlight of the trek. We start early and climb steadily through rhododendron forest to the ridge below the pass. The final ascent is steep but short, and the view from Kuari Pass (3,650m) is breathtaking — a 270° panorama of Nanda Devi, Dronagiri, Hathi Ghoda, and Neelkanth. We spend an hour at the top for photographs and celebrations, then descend back to Tali camp for a well-earned dinner.",
      },
      {
        day: 4,
        title: "Tali to Gorson Bugyal to Tali",
        meta: "8 km trek · 4–5 hours · Altitude gain: 400m, loss: 400m",
        description:
          "A relaxed exploration day takes us to Gorson Bugyal — one of the largest alpine meadows in the Garhwal Himalaya. The trail climbs gently from Tali, opening into a vast green pasture with views of the entire Nanda Devi sanctuary. We stop for a long picnic lunch, explore the meadow, and return to Tali by afternoon. The evening is free for rest, photography, or simply enjoying the mountain silence.",
      },
      {
        day: 5,
        title: "Tali to Dhak to Joshimath",
        meta: "8 km trek · 4–5 hours · Altitude loss: 600m",
        description:
          "We retrace our steps down to Dhak village, where our vehicle waits. The descent offers new perspectives of the forest and meadows we passed on the way up. We stop for a celebratory group photo and lunch at a local dhaba, then drive back to Joshimath. In the evening, we gather for a farewell dinner, share stories, and distribute certificates of completion.",
      },
      {
        day: 6,
        title: "Joshimath to Rishikesh",
        meta: "260 km drive · 8–9 hours",
        description:
          "We leave Joshimath after breakfast for the return drive to Rishikesh. The journey retraces the scenic Alaknanda valley route. We expect to reach Rishikesh by late afternoon or early evening, in time for onward travel. Our team assists with train or flight bookings if needed.",
      },
    ],
    relatedTreks: ["chopta-tungnath", "har-ki-dun", "kedarkantha"],
    sampleDates: ["5 Apr 2026", "19 Apr 2026", "3 May 2026", "25 Sep 2026"],
  },
  {
    id: "hampta-pass",
    title: "Hampta Pass",
    state: "Himachal Pradesh",
    duration: "5D/4N",
    durationDays: 5,
    difficulty: "Moderate",
    maxAltitude: "4,270m",
    bestSeason: "June–September",
    price: "₹13,499",
    priceValue: 13499,
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
    teaser:
      "Cross from the lush Kullu Valley to the stark deserts of Lahaul — a dramatic Himalayan traverse.",
    distance: "~26km",
    groupSize: "8–14",
    region: "Kullu & Lahaul districts",
    startPoint: "Jobra",
    endPoint: "Chatru",
    assemblyPoint: "Manali",
    nearestAirport: "Bhuntar (Kullu)",
    nearestRailhead: "Chandigarh",
    overview: [
      "Hampta Pass is one of the most dramatic crossover treks in the Indian Himalaya — a journey that takes you from the lush green valleys of Kullu to the stark, barren landscapes of Lahaul in just five days. The contrast is so extreme that trekkers often describe it as crossing from Kashmir to Ladakh in a single morning.",
      "What makes Hampta Pass unique is the sheer variety of terrain packed into a short itinerary. You begin in dense pine and maple forest near Manali, climb through alpine meadows filled with wildflowers, cross the 4,270-metre pass with views of the Indrasan and Deo Tibba peaks, and descend into the arid, wind-sculpted valleys of Lahaul where the landscape turns to rock, sand, and glacial rivers.",
      "The pass crossing itself is a highlight — standing at the col with the Kullu valley behind you and the Lahaul desert stretching ahead is a moment of pure Himalayan drama. On clear days, you can see the entire Pir Panjal range to the west and the Great Himalayan Range to the east. The optional Chandratal lake extension adds another day of high-altitude desert beauty.",
      "This trek suits fit beginners and experienced trekkers alike. The daily distances are moderate, the altitude gain is gradual, and the trail is well-defined. It is particularly popular with photographers who want to capture the full spectrum of Himalayan landscapes in a single trek, and with adventure seekers who love the idea of a 'crossing' rather than an out-and-back route.",
    ],
    difficultyGuide: [
      "Rated Moderate, Hampta Pass involves 5–6 hours of walking each day on varied terrain — forest trails, meadow paths, rocky scree, and river crossings. The pass crossing day is the most demanding, with a steep final ascent to 4,270 metres, but the trail is non-technical and achievable with two months of preparation.",
      "We recommend regular brisk walking, stair climbing, and at least two longer practice hikes of 8–10 km with a loaded backpack. The maximum altitude is in the moderate-risk zone, so we monitor all trekkers for altitude sickness symptoms. Good cardiovascular fitness and strong knees for the descent are essential.",
    ],
    included: [
      "Accommodation: 4 nights in comfortable campsites (twin-sharing tents) at Jobra, Balu Ka Gera, Shea Goru, and Chatru",
      "Meals: All vegetarian meals from dinner on Day 1 to breakfast on Day 5 (breakfast, packed lunch, dinner, evening tea/snacks)",
      "Transport: Manali to Jobra and Chatru to Manali in shared vehicles; all internal transport during the trek",
      "Permits: All required forest and trekking permits for the Hampta Pass trail",
      "Guide services: Experienced local guide certified in high-altitude first aid",
      "Safety: Comprehensive medical kit, oxygen cylinder, oximeter, and portable stretcher",
      "Camp logistics: Sleeping bags, sleeping mats, dining tent, toilet tent, and kitchen equipment",
      "Evening briefings: Daily route and weather briefings with contingency planning",
    ],
    notIncluded: [
      "Flights or trains to Manali — trekkers must reach the assembly point independently",
      "Personal trekking gear: shoes, warm layers, rain cover, backpack, and headlamp",
      "Travel insurance covering high-altitude trekking and emergency evacuation",
      "Tips for guides, cooks, and support staff (recommended ₹400–600 per trekker for the full trek)",
      "Any meals or snacks purchased outside the provided camp menu",
      "Porter or mule charges if you choose to offload your backpack",
      "Personal expenses such as phone calls, laundry, or beverages",
      "Optional Chandratal lake extension transport (can be arranged separately)",
    ],
    packingList: {
      Clothing: [
        "Thermal base layers (top + bottom)",
        "Fleece jacket or light down jacket",
        "Waterproof and windproof outer shell (jacket + pants)",
        "Trek pants (2 pairs, quick-dry)",
        "Warm inner gloves and outer waterproof gloves",
        "Woollen cap, sun cap, and buff/neck gaiter",
        "Warm socks (3–4 pairs) and liner socks",
      ],
      Footwear: [
        "Trekking shoes with ankle support and good grip (mandatory)",
        "Camp sandals or flip-flops for evenings",
        "Gaiters (recommended for snow/dust)",
      ],
      "Gear & Equipment": [
        "Backpack (50–60L) with rain cover",
        "Daypack (20–30L) for summit/side-trek days",
        "Headlamp or torch with extra batteries",
        "Sunglasses with UV protection (category 3 or 4)",
        "Trekking poles (highly recommended)",
        "Water bottles (2 x 1L) or hydration pack (2–3L)",
        "Personal first-aid kit with blister pads",
      ],
      "Personal & Health": [
        "Sunscreen SPF 50+ and lip balm with SPF",
        "Personal medicines and prescriptions",
        "Toiletries, quick-dry towel, and hand sanitiser",
        "ID proof, emergency contact card, and passport photos (2)",
        "Power bank and charging cable",
        "Lightweight book or journal for evenings",
      ],
    },
    bestTimeTable: [
      {
        month: "Jan",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Feb",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      { month: "Mar", rating: "Closed", note: "Heavy snow; not operational" },
      { month: "Apr", rating: "Closed", note: "Snow melting; not operational" },
      {
        month: "May",
        rating: "Fair",
        note: "Late snow possible; trail opening",
      },
      {
        month: "Jun",
        rating: "Excellent",
        note: "Ideal conditions; green valleys; clear passes",
      },
      {
        month: "Jul",
        rating: "Good",
        note: "Monsoon in Kullu; Lahaul remains dry",
      },
      {
        month: "Aug",
        rating: "Good",
        note: "Monsoon in Kullu; Lahaul remains dry",
      },
      {
        month: "Sep",
        rating: "Excellent",
        note: "Post-monsoon clarity; best photography light",
      },
      {
        month: "Oct",
        rating: "Good",
        note: "Cold mornings; possible early snow at pass",
      },
      {
        month: "Nov",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Dec",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
    ],
    howToReach: [
      "Nearest airport: Bhuntar Airport, Kullu (approx. 50 km from Manali). Daily flights from Delhi. Global Trek can arrange a seat in our shared pickup vehicle from the airport to Manali.",
      "Nearest railhead: Chandigarh Railway Station (well connected to Delhi and major cities). From Chandigarh, Manali is 310 km by road (8–9 hours). Most trekkers take the overnight Volvo bus from Chandigarh or Delhi.",
      "From Delhi: 540 km by road (12–14 hours). We recommend arriving in Manali a day before the trek starts. Global Trek's shared vehicle leaves Manali at 8:00 AM on Day 1 for the drive to Jobra.",
      "From Manali to Jobra: 18 km (1 hour) by jeep. The road climbs through apple orchards and pine forest to the trailhead. We stop for a final gear check and briefing before starting the trek.",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        alt: "Hampta Pass summit with view of Lahaul desert landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Lush green Kullu valley meadows near Jobra",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Stark barren Lahaul landscape after crossing the pass",
      },
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Indrasan peak visible from the pass ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        alt: "Trekkers crossing a glacial stream in Lahaul",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        alt: "Chandratal lake with turquoise water and mountain backdrop",
      },
      {
        src: "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
        alt: "Pine and maple forest trail near Manali",
      },
      {
        src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
        alt: "Camping at Balu Ka Gera with mountain views",
      },
    ],
    faqs: [
      {
        question: "Is this trek suitable for beginners?",
        answer:
          "Yes, Hampta Pass is a good first crossover trek. The daily distances are moderate and the trail is well-defined. However, the altitude of 4,270m and the varied terrain demand decent fitness. We recommend two months of regular walking and stair climbing before the trek.",
      },
      {
        question: "How dramatic is the landscape change really?",
        answer:
          "It is genuinely striking. On Day 2 you are walking through green meadows with wildflowers and pine trees. By Day 3 afternoon, you are in a desert of rock and sand with no vegetation. The contrast is one of the main reasons trekkers choose Hampta Pass.",
      },
      {
        question: "Should I add the Chandratal lake extension?",
        answer:
          "If you have an extra day, absolutely. Chandratal is one of the most beautiful high-altitude lakes in the Himalaya, with turquoise water surrounded by snow peaks. The drive from Chatru to the lake is adventurous, and the campsite is unforgettable.",
      },
      {
        question: "What about river crossings?",
        answer:
          "There are a few stream crossings in the Lahaul section, usually ankle-deep in normal conditions. Our guides identify safe crossing points and assist trekkers. In case of heavy flow, we may wait for levels to drop or use alternative routes.",
      },
      {
        question: "Will my phone work on the trail?",
        answer:
          "There is intermittent BSNL coverage up to Balu Ka Gera. No network at the pass or in Lahaul. We recommend informing family that you will be unreachable for 3–4 days. Our guides carry a satellite phone for emergencies.",
      },
      {
        question: "What happens if the pass is blocked by snow?",
        answer:
          "In early June or late September, fresh snow can block the pass. We monitor conditions daily and may delay the crossing by 24 hours if needed. In extreme cases, we descend via an alternative route. Safety is always our priority.",
      },
    ],
    reviews: [
      {
        quote:
          "I have never experienced a landscape change like Hampta Pass. One day I was in a green meadow picking wildflowers, the next day I felt like I was on Mars. The guides made the pass crossing feel safe and the group became a family.",
        name: "Karan Malhotra",
        trip: "Hampta Pass Trek",
        date: "Jul 2026",
      },
      {
        quote:
          "As a photographer, this trek was a dream. Every hour the light changed, every valley had a different colour palette. The Chandratal extension was worth every extra rupee — I have never seen water that shade of blue.",
        name: "Sneha Rao",
        trip: "Hampta Pass Trek",
        date: "Sep 2026",
      },
      {
        quote:
          "I was nervous about the altitude, but the gradual ascent and the guides' constant check-ins made me feel safe. The view from the pass — Indrasan on one side, Lahaul desert on the other — is burned into my memory forever.",
        name: "Aditya Sharma",
        trip: "Hampta Pass Trek",
        date: "Jun 2026",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Manali to Jobra to Chika",
        meta: "3 km trek · 2–3 hours · Altitude: 3,100m",
        description:
          "We assemble in Manali by 8:00 AM and drive to Jobra — the trailhead. After a final gear check and briefing, we begin our trek through dense pine and maple forest. The trail is gentle, crossing small streams and passing shepherd camps. Chika campsite is a beautiful meadow beside a glacial stream, surrounded by forest. We arrive by early afternoon, set up camp, and spend the evening acclimatising and exploring the meadow.",
      },
      {
        day: 2,
        title: "Chika to Balu Ka Gera",
        meta: "8 km trek · 4–5 hours · Altitude gain: 400m",
        description:
          "Today's trail climbs gradually through forest and then opens into wide meadows. Balu Ka Gera — 'mound of sand' — is a striking campsite at the base of the pass, with views of the surrounding peaks. The terrain becomes rockier as we approach camp. We arrive by afternoon, set up tents, and enjoy evening tea with the sound of the river. Our guide briefs us on tomorrow's pass crossing.",
      },
      {
        day: 3,
        title: "Balu Ka Gera to Hampta Pass to Shea Goru",
        meta: "10 km trek · 7–8 hours · Altitude gain: 770m, loss: 1,100m",
        description:
          "Pass day begins early. We climb steadily through scree and snow patches to the Hampta Pass (4,270m). The final ridge walk offers panoramic views of the Kullu valley behind and the Lahaul desert ahead. After celebrations and photographs at the pass, we descend steeply into the stark, barren landscape of Lahaul. Shea Goru campsite is beside a glacial river, with dramatic rock formations all around. It is a long but unforgettable day.",
      },
      {
        day: 4,
        title: "Shea Goru to Chatru",
        meta: "7 km trek · 4–5 hours · Altitude loss: 300m",
        description:
          "We follow the river downstream through the Lahaul desert, crossing streams and walking on rocky terrain. The landscape is utterly different from Kullu — no trees, no grass, just rock, sand, and the immense sky. Chatru is a small settlement at the roadhead, where our vehicle waits. We camp here for the night and celebrate the completion of the crossing with a special dinner.",
      },
      {
        day: 5,
        title: "Chatru to Manali",
        meta: "70 km drive · 4–5 hours",
        description:
          "After breakfast, we drive from Chatru back to Manali via the Rohtang Pass (or Atal Tunnel, depending on conditions). The drive offers stunning views of the Lahaul and Kullu valleys. We expect to reach Manali by early afternoon, in time for onward travel. Our team assists with bus or taxi bookings if needed.",
      },
    ],
    relatedTreks: ["sar-pass", "phulara-ridge", "kedarkantha"],
    sampleDates: ["5 Jun 2026", "19 Jun 2026", "3 Jul 2026", "28 Aug 2026"],
  },
  {
    id: "sar-pass",
    title: "Sar Pass",
    state: "Himachal Pradesh",
    duration: "5D/4N",
    durationDays: 5,
    difficulty: "Challenging",
    maxAltitude: "4,220m",
    bestSeason: "May–October",
    price: "₹12,999",
    priceValue: 12999,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    teaser:
      "A high-altitude crossing through alpine meadows, snow bridges, and rhododendron forests in the Parvati Valley.",
    distance: "~48km",
    groupSize: "8–14",
    region: "Kullu district",
    startPoint: "Kasol",
    endPoint: "Barshaini",
    assemblyPoint: "Manali",
    nearestAirport: "Bhuntar (Kullu)",
    nearestRailhead: "Chandigarh",
    overview: [
      "Sar Pass is one of the most challenging and rewarding treks in the Parvati Valley of Himachal Pradesh — a high-altitude crossing that takes you through dense pine and deodar forests, across snow bridges, over alpine meadows, and down steep descents that have made this trek legendary among experienced Himalayan trekkers.",
      "What sets Sar Pass apart is the combination of sustained altitude, varied terrain, and the famous 'snow slides' on the descent. The trail climbs steadily from the hippie enclave of Kasol to the pass at 4,220 metres, then descends through steep snowfields where trekkers slide down on their backsides — a thrilling and unforgettable experience that has launched a thousand viral videos.",
      "The trail passes through some of the most beautiful forest in the Western Himalaya — ancient deodar trees, rhododendron groves, and meadows filled with wildflowers. The campsites at Biskeri Thach and Nagaru are among the most scenic in Himachal, with views of the Parvati range and the distant Pin Parvati peaks.",
      "This trek is designed for experienced trekkers or very fit beginners who have completed at least one moderate Himalayan trek before. The daily distances are long, the altitude is significant, and the descent demands strong knees and good balance. If you are looking for a trek that tests your limits and rewards you with unmatched scenery and adrenaline, Sar Pass is the answer.",
    ],
    difficultyGuide: [
      "Rated Challenging, Sar Pass involves 6–8 hours of walking each day on demanding terrain — steep ascents, snow bridges, scree slopes, and the famous snow slides on descent. The maximum altitude of 4,220 metres is in the high-risk zone, so we monitor all trekkers closely for altitude sickness symptoms and carry emergency oxygen.",
      "We recommend three months of dedicated preparation: regular brisk walking, stair climbing, squats and lunges for knee strength, and at least two practice hikes of 12–15 km with a loaded backpack. Previous Himalayan trekking experience is strongly recommended. Summit day is long and demanding — mental toughness matters as much as physical fitness.",
    ],
    included: [
      "Accommodation: 4 nights in comfortable campsites (twin-sharing tents) at Kasol, Grahan, Nagaru, and Biskeri Thach",
      "Meals: All vegetarian meals from dinner on Day 1 to breakfast on Day 5 (breakfast, packed lunch, dinner, evening tea/snacks)",
      "Transport: Manali to Kasol and Barshaini to Manali in shared vehicles; all internal transport during the trek",
      "Permits: All required forest and trekking permits for the Sar Pass trail",
      "Guide services: Experienced local guide certified in high-altitude first aid and wilderness rescue",
      "Safety: Comprehensive medical kit, oxygen cylinder, oximeter, and portable stretcher",
      "Camp logistics: Sleeping bags, sleeping mats, dining tent, toilet tent, and kitchen equipment",
      "Evening briefings: Daily route and weather briefings with contingency planning",
    ],
    notIncluded: [
      "Flights or trains to Manali — trekkers must reach the assembly point independently",
      "Personal trekking gear: shoes, warm layers, rain cover, backpack, and headlamp",
      "Travel insurance covering high-altitude trekking and emergency evacuation",
      "Tips for guides, cooks, and support staff (recommended ₹500–800 per trekker for the full trek)",
      "Any meals or snacks purchased outside the provided camp menu",
      "Porter or mule charges if you choose to offload your backpack",
      "Personal expenses such as phone calls, laundry, or beverages",
    ],
    packingList: {
      Clothing: [
        "Thermal base layers (top + bottom, 2 sets)",
        "Fleece jacket or light down jacket",
        "Heavy down jacket (rated to -10°C)",
        "Waterproof and windproof outer shell (jacket + pants)",
        "Trek pants (2 pairs, quick-dry)",
        "Warm inner gloves and heavy outer waterproof gloves",
        "Woollen cap, balaclava, sun cap, and buff/neck gaiter",
        "Warm socks (4–5 pairs) and liner socks",
      ],
      Footwear: [
        "Trekking shoes with ankle support and aggressive tread (mandatory)",
        "Camp sandals or flip-flops for evenings",
        "Gaiters (recommended for snow)",
        "Microspikes (provided by Global Trek for pass day)",
      ],
      "Gear & Equipment": [
        "Backpack (50–60L) with rain cover",
        "Daypack (20–30L) for summit day",
        "Headlamp or torch with extra batteries (essential for pre-dawn start)",
        "Sunglasses with UV protection (category 4, snow glare protection)",
        "Trekking poles with snow baskets (highly recommended)",
        "Water bottles (2 x 1L) or hydration pack (2–3L)",
        "Personal first-aid kit with blister pads and pain relief",
        "Sleeping bag liner (adds 5°C warmth)",
      ],
      "Personal & Health": [
        "Sunscreen SPF 50+ and lip balm with SPF",
        "Personal medicines and prescriptions",
        "Toiletries, quick-dry towel, and hand sanitiser",
        "ID proof, emergency contact card, and passport photos (2)",
        "Power bank (keep warm in sleeping bag at night)",
        "Thermos flask for hot water (recommended)",
        "Lightweight book or journal for long evenings",
      ],
    },
    bestTimeTable: [
      {
        month: "Jan",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Feb",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      { month: "Mar", rating: "Closed", note: "Heavy snow; not operational" },
      {
        month: "Apr",
        rating: "Fair",
        note: "Late snow possible; trail opening",
      },
      {
        month: "May",
        rating: "Excellent",
        note: "Ideal conditions; snow bridges intact; mild weather",
      },
      {
        month: "Jun",
        rating: "Excellent",
        note: "Stable weather; best for snow slides; clear views",
      },
      {
        month: "Jul",
        rating: "Good",
        note: "Monsoon in lower sections; upper trail remains viable",
      },
      {
        month: "Aug",
        rating: "Good",
        note: "Monsoon in lower sections; upper trail remains viable",
      },
      {
        month: "Sep",
        rating: "Excellent",
        note: "Post-monsoon clarity; crisp air; best photography",
      },
      {
        month: "Oct",
        rating: "Good",
        note: "Cold mornings; possible early snow at pass",
      },
      {
        month: "Nov",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Dec",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
    ],
    howToReach: [
      "Nearest airport: Bhuntar Airport, Kullu (approx. 50 km from Manali). Daily flights from Delhi. Global Trek can arrange a seat in our shared pickup vehicle from the airport to Manali.",
      "Nearest railhead: Chandigarh Railway Station (well connected to Delhi and major cities). From Chandigarh, Manali is 310 km by road (8–9 hours). Most trekkers take the overnight Volvo bus from Chandigarh or Delhi.",
      "From Delhi: 540 km by road (12–14 hours). We recommend arriving in Manali a day before the trek starts. Global Trek's shared vehicle leaves Manali at 7:00 AM on Day 1 for the drive to Kasol.",
      "From Manali to Kasol: 75 km (2–3 hours) through the Parvati valley. The road follows the Parvati River and offers stunning views of the valley. We stop for breakfast at a local dhaba before starting the trek.",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        alt: "Sar Pass summit with snow-covered Parvati range in background",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Trekkers sliding down the snowfield on the descent from Sar Pass",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Dense deodar forest trail near Grahan village",
      },
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Alpine meadow at Biskeri Thach with wildflowers",
      },
      {
        src: "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
        alt: "Snow bridge crossing on the trail to Nagaru",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        alt: "Sunrise over the Parvati peaks from Nagaru camp",
      },
      {
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        alt: "View of the Pin Parvati range from the pass ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
        alt: "Group celebration at Biskeri Thach campsite",
      },
    ],
    faqs: [
      {
        question: "How difficult is Sar Pass compared to other treks?",
        answer:
          "Sar Pass is rated Challenging — more demanding than Kedarkantha or Hampta Pass. The daily distances are longer (6–8 hours), the altitude is higher (4,220m), and the terrain includes steep ascents, snow bridges, and the famous snow slides. Previous Himalayan trekking experience is strongly recommended.",
      },
      {
        question: "Are the snow slides safe?",
        answer:
          "Yes, when conducted under guide supervision. The snow slide section is a natural slope on the descent from the pass. Our guides assess snow conditions daily and only allow slides when safe. Helmets are provided, and the technique is demonstrated before anyone attempts it.",
      },
      {
        question: "What is the best time for snow slides?",
        answer:
          "May and June offer the best snow conditions for slides — enough snow cover for a smooth ride, but not so much that the trail is blocked. September also works if early snow has fallen. July and August may have patchy snow.",
      },
      {
        question: "Do I need microspikes or crampons?",
        answer:
          "Global Trek provides microspikes for all trekkers on pass day at no extra charge. Crampons are not required as there are no technical ice sections. Good trekking boots with ankle support are mandatory.",
      },
      {
        question: "What happens if I get altitude sickness?",
        answer:
          "Our guides are trained to recognise early symptoms and will descend with you immediately if needed. We carry oxygen, a portable stretcher, and a satellite phone for emergencies. In severe cases, evacuation to Manali is arranged. However, the gradual ascent and rest days minimise risk for most trekkers.",
      },
      {
        question: "Is this trek suitable for solo travellers?",
        answer:
          "Yes, many of our Sar Pass trekkers are solo travellers. The group size of 8–14 ensures you will make friends quickly, and our guides are attentive to individual needs. We also offer female-friendly campsite arrangements on request.",
      },
    ],
    reviews: [
      {
        quote:
          "Sar Pass was the hardest thing I have ever done and the most rewarding. The snow slide on day four had me screaming like a child. The view from the pass — Parvati range on one side, Pin Parvati on the other — made every blister worth it.",
        name: "Rohan Gupta",
        trip: "Sar Pass Trek",
        date: "Jun 2026",
      },
      {
        quote:
          "I have done Kedarkantha and Hampta Pass before, but Sar Pass was a different league. The long days, the altitude, the snow bridges — it tested everything. Our guide Rajesh was incredible, keeping us safe and motivated. I came back a different person.",
        name: "Divya Menon",
        trip: "Sar Pass Trek",
        date: "May 2026",
      },
      {
        quote:
          "As a solo woman traveller, I was nervous about a challenging trek. But the group bonded immediately, and the guides made me feel completely safe. The snow slide was terrifying and exhilarating in equal measure. I am already booking my next trek with Global Trek.",
        name: "Anjali Desai",
        trip: "Sar Pass Trek",
        date: "Sep 2026",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Manali to Kasol to Grahan",
        meta: "10 km trek · 5–6 hours · Altitude gain: 600m",
        description:
          "We assemble in Manali by 7:00 AM and drive to Kasol — the trailhead. After a final gear check and briefing, we begin our trek through dense pine and deodar forest. The trail climbs steadily, crossing streams and passing small villages. Grahan campsite is a beautiful clearing surrounded by forest with views of the Parvati valley. We arrive by afternoon, set up camp, and enjoy evening tea. Our guide briefs us on the days ahead.",
      },
      {
        day: 2,
        title: "Grahan to Mung Thach to Nagaru",
        meta: "10 km trek · 6–7 hours · Altitude gain: 900m",
        description:
          "Today's trail is steep and demanding. We climb through forest, then cross alpine meadows with views of the surrounding peaks. Mung Thach is a small meadow where we stop for lunch. The afternoon climb to Nagaru is the steepest section of the trek, with some snow patches even in summer. Nagaru camp is above the tree line, with panoramic views and cold nights. We arrive by late afternoon and rest before the pass crossing.",
      },
      {
        day: 3,
        title: "Nagaru to Sar Pass to Biskeri Thach",
        meta: "12 km trek · 7–8 hours · Altitude gain: 520m, loss: 1,200m",
        description:
          "Pass day begins before dawn. We climb steadily through snow and scree to the Sar Pass (4,220m). The final ridge offers stunning views of the Parvati and Pin Parvati ranges. After celebrations at the top, we begin the famous descent — a series of snow slides that have made this trek legendary. The trail then continues through meadows to Biskeri Thach camp, arriving by late afternoon for a well-earned rest.",
      },
      {
        day: 4,
        title: "Biskeri Thach to Barshaini to Manali",
        meta: "10 km trek · 4–5 hours · Altitude loss: 800m",
        description:
          "The final day of walking descends through forest to Barshaini — the roadhead. We stop for a celebratory group photo and lunch, then drive back to Manali. In the evening, we gather for a farewell dinner, share stories of the snow slides and summit views, and distribute certificates of completion. Most trekkers sleep early after an exhausting but exhilarating trek.",
      },
      {
        day: 5,
        title: "Buffer Day / Manali Rest",
        meta: "Rest day in Manali",
        description:
          "We keep Day 5 as a buffer in case weather delays the pass crossing. If the trek has proceeded on schedule, this day is free to explore Manali, visit the Hadimba temple, or simply rest and recover. Our team assists with onward travel arrangements — buses to Delhi, flights from Bhuntar, or extended stays in Manali.",
      },
    ],
    relatedTreks: ["hampta-pass", "phulara-ridge", "kedarkantha"],
    sampleDates: ["10 May 2026", "24 May 2026", "7 Jun 2026", "20 Sep 2026"],
  },
  {
    id: "phulara-ridge",
    title: "Phulara Ridge",
    state: "Himachal Pradesh",
    duration: "4D/3N",
    durationDays: 4,
    difficulty: "Easy-Moderate",
    maxAltitude: "3,700m",
    bestSeason: "April–June, Sep–Nov",
    price: "₹9,499",
    priceValue: 9499,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    teaser:
      "A rare ridge walk with 360° views of the Dhauladhar and Pir Panjal ranges, perfect for beginners.",
    distance: "~25km",
    groupSize: "8–14",
    region: "Shimla district",
    startPoint: "Janglik",
    endPoint: "Janglik",
    assemblyPoint: "Shimla",
    nearestAirport: "Shimla",
    nearestRailhead: "Shimla",
    overview: [
      "Phulara Ridge is one of the most underrated and spectacular ridge walks in the Indian Himalaya — a 4-day trek that offers 360° panoramic views from a single, continuous ridge line without the extreme altitude or technical demands of higher passes. Located in the Shimla district of Himachal Pradesh, this trail is a hidden gem that remains blissfully uncrowded compared to more famous treks.",
      "What makes Phulara Ridge special is the walking experience itself. Unlike most treks where you climb to a viewpoint and descend, here you walk along the ridge for several kilometres with views unfolding in every direction — the Dhauladhar range to the north, the Pir Panjal to the west, and the vast valleys of Shimla district below. It feels like walking on the spine of the Himalaya.",
      "The trail passes through beautiful mixed forest of oak, pine, and rhododendron, opens into rolling meadows dotted with shepherd camps, and reaches a high point of 3,700 metres without any steep or technical sections. The campsites at Pukhrola and the ridge itself are among the most peaceful in the region, with only the sound of wind and birds for company.",
      "This trek is perfect for beginners who want a genuine Himalayan experience without committing to a week-long expedition, and for experienced trekkers who appreciate the subtle beauty of a ridge walk over the drama of a pass crossing. The short duration also makes it ideal for long weekends from Delhi or Chandigarh.",
    ],
    difficultyGuide: [
      "Rated Easy-Moderate, Phulara Ridge involves 4–5 hours of walking each day on well-defined trails with gentle to moderate altitude gain. The ridge walk itself is mostly flat or gently undulating, making it achievable for anyone with basic fitness. The maximum altitude of 3,700 metres is below the high-risk zone.",
      "We recommend one month of preparation: regular walking, light cardio, and a few practice hikes in your local hills. No prior trekking experience is required. The short daily distances and gentle terrain make this an excellent first Himalayan trek for families, couples, and solo travellers alike.",
    ],
    included: [
      "Accommodation: 3 nights in comfortable campsites (twin-sharing tents) at Janglik, Pukhrola, and the ridge camp",
      "Meals: All vegetarian meals from dinner on Day 1 to breakfast on Day 4 (breakfast, packed lunch, dinner, evening tea/snacks)",
      "Transport: Shimla to Janglik and return in shared vehicles; all internal transport during the trek",
      "Permits: All required forest and trekking permits for the Phulara Ridge trail",
      "Guide services: Experienced local guide certified in high-altitude first aid",
      "Safety: Comprehensive medical kit, oxygen cylinder, and oximeter",
      "Camp logistics: Sleeping bags, sleeping mats, dining tent, toilet tent, and kitchen equipment",
      "Evening briefings: Daily route and weather briefings with contingency planning",
    ],
    notIncluded: [
      "Flights or trains to Shimla — trekkers must reach the assembly point independently",
      "Personal trekking gear: shoes, warm layers, rain cover, backpack, and headlamp",
      "Travel insurance covering high-altitude trekking and emergency evacuation",
      "Tips for guides, cooks, and support staff (recommended ₹300–500 per trekker for the full trek)",
      "Any meals or snacks purchased outside the provided camp menu",
      "Porter or mule charges if you choose to offload your backpack",
      "Personal expenses such as phone calls, laundry, or beverages",
    ],
    packingList: {
      Clothing: [
        "Thermal base layers (top + bottom)",
        "Fleece jacket or light down jacket",
        "Waterproof and windproof outer shell (jacket + pants)",
        "Trek pants (2 pairs, quick-dry)",
        "Warm inner gloves and outer waterproof gloves",
        "Woollen cap, sun cap, and buff/neck gaiter",
        "Warm socks (3–4 pairs) and liner socks",
      ],
      Footwear: [
        "Trekking shoes with ankle support and good grip (mandatory)",
        "Camp sandals or flip-flops for evenings",
        "Gaiters (recommended for dust/snow)",
      ],
      "Gear & Equipment": [
        "Backpack (40–50L) with rain cover",
        "Daypack (15–20L) for day walks",
        "Headlamp or torch with extra batteries",
        "Sunglasses with UV protection (category 3 or 4)",
        "Trekking poles (recommended)",
        "Water bottles (2 x 1L) or hydration pack (2–3L)",
        "Personal first-aid kit with blister pads",
      ],
      "Personal & Health": [
        "Sunscreen SPF 50+ and lip balm with SPF",
        "Personal medicines and prescriptions",
        "Toiletries, quick-dry towel, and hand sanitiser",
        "ID proof, emergency contact card, and passport photos (2)",
        "Power bank and charging cable",
        "Lightweight book or journal for evenings",
      ],
    },
    bestTimeTable: [
      {
        month: "Jan",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Feb",
        rating: "Closed",
        note: "Heavy snow; trail inaccessible",
      },
      {
        month: "Mar",
        rating: "Fair",
        note: "Late snow possible; cold mornings",
      },
      {
        month: "Apr",
        rating: "Excellent",
        note: "Clear skies; mild temperatures; rhododendron bloom",
      },
      {
        month: "May",
        rating: "Excellent",
        note: "Peak bloom; best ridge views; ideal weather",
      },
      {
        month: "Jun",
        rating: "Good",
        note: "Warm days; occasional pre-monsoon showers",
      },
      { month: "Jul", rating: "Closed", note: "Monsoon; landslide risk" },
      { month: "Aug", rating: "Closed", note: "Monsoon; landslide risk" },
      {
        month: "Sep",
        rating: "Excellent",
        note: "Post-monsoon clarity; green meadows; crisp air",
      },
      {
        month: "Oct",
        rating: "Excellent",
        note: "Stable weather; sharpest mountain views",
      },
      {
        month: "Nov",
        rating: "Good",
        note: "Cold mornings; possible early snow",
      },
      {
        month: "Dec",
        rating: "Fair",
        note: "Snow-covered trail; challenging but beautiful",
      },
    ],
    howToReach: [
      "Nearest airport: Shimla Airport (approx. 180 km from Janglik). Limited flights from Delhi. Most trekkers fly to Chandigarh and drive to Shimla (120 km, 3–4 hours).",
      "Nearest railhead: Shimla Railway Station (narrow-gauge toy train from Kalka, a UNESCO World Heritage experience). Broad-gauge option is Chandigarh Railway Station, then drive to Shimla.",
      "From Delhi: 350 km by road to Shimla (8–9 hours). We recommend arriving in Shimla a day before the trek starts. Global Trek's shared vehicle leaves Shimla at 6:00 AM on Day 1 for the drive to Janglik.",
      "From Shimla to Janglik: 180 km (6–7 hours) through the Rohru valley. The drive is scenic but winding, following the Pabbar River through apple orchards and pine forest. Those prone to motion sickness should carry medication.",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        alt: "Phulara Ridge summit with 360° view of Dhauladhar range",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Rolling meadows along the ridge walk with distant peaks",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        alt: "Oak and rhododendron forest trail near Janglik",
      },
      {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        alt: "Pir Panjal range visible from the western end of the ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        alt: "Shepherd camp in the meadows below the ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1483728642387-6c7bdd6caba8?auto=format&fit=crop&w=800&q=80",
        alt: "Sunrise light on the Dhauladhar peaks from ridge camp",
      },
      {
        src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&q=80",
        alt: "Valley view of Shimla district from the ridge",
      },
      {
        src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&q=80",
        alt: "Group walking along the narrow ridge trail with panoramic views",
      },
    ],
    faqs: [
      {
        question: "Is this trek suitable for complete beginners?",
        answer:
          "Yes, Phulara Ridge is specifically designed as a beginner-friendly Himalayan trek. The daily walking hours are 4–5 hours on gentle terrain, the altitude is moderate, and the trail is well-defined. No prior trekking experience is required — just basic fitness and enthusiasm.",
      },
      {
        question:
          "How is this different from Kedarkantha or other beginner treks?",
        answer:
          "Phulara Ridge offers a unique 'ridge walk' experience rather than an out-and-back summit climb. You walk along a continuous ridge with 360° views, rather than climbing to a single peak. It is also less crowded and offers a more peaceful, immersive experience.",
      },
      {
        question: "What is the best time for clear views from the ridge?",
        answer:
          "May and October offer the clearest views and most stable weather. April and September are also excellent, with the added bonus of rhododendron blooms or post-monsoon greenery. Avoid the monsoon months (July–August) when clouds obscure the views.",
      },
      {
        question: "Are there any steep or dangerous sections?",
        answer:
          "No, the ridge walk is mostly flat or gently undulating. There are no technical sections, no steep scree slopes, and no exposure to drops. It is one of the safest Himalayan treks while still offering spectacular views.",
      },
      {
        question: "Will my phone work on the trail?",
        answer:
          "There is intermittent BSNL coverage at Janglik and Pukhrola. No network on the ridge itself. We recommend informing family that you will be unreachable for 2–3 days. Our guides carry a satellite phone for emergencies.",
      },
      {
        question: "Can I do this trek with children?",
        answer:
          "Yes, children aged 8 and above with reasonable fitness can complete this trek. The short daily distances and gentle terrain make it family-friendly. We assess each family individually and can adjust the pace if needed.",
      },
    ],
    reviews: [
      {
        quote:
          "I have done three Himalayan treks before, but Phulara Ridge was something else entirely. Walking along that ridge for hours, with mountains in every direction and complete silence — it was meditative. I did not want to come down.",
        name: "Vikram Singh",
        trip: "Phulara Ridge Trek",
        date: "May 2026",
      },
      {
        quote:
          "As a first-timer, I was nervous about everything. But the guides were so patient, the pace was perfect, and the views from the ridge made me forget I was tired. I have already booked Kedarkantha for winter.",
        name: "Priya Sharma",
        trip: "Phulara Ridge Trek",
        date: "Oct 2026",
      },
      {
        quote:
          "I took my 10-year-old son on this trek. He walked the entire ridge without complaining once, and the guides kept him engaged with stories about the mountains. The meadows, the forest, the views — it was the best father-son trip we have ever had.",
        name: "Amit Patel",
        trip: "Phulara Ridge Trek",
        date: "Apr 2026",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Shimla to Janglik",
        meta: "180 km drive · 6–7 hours · Altitude: 2,400m",
        description:
          "We assemble in Shimla by 6:00 AM and board our shared vehicle for the scenic drive to Janglik. The route follows the Pabbar River through the Rohru valley, passing apple orchards, pine forests, and traditional villages. We stop for breakfast and lunch at local dhabas. On arrival at Janglik, we check into our guesthouse or camp, followed by an evening briefing on the ridge walk, safety protocols, and packing check. Dinner is served early so everyone gets rest before the trek begins.",
      },
      {
        day: 2,
        title: "Janglik to Pukhrola",
        meta: "8 km trek · 4–5 hours · Altitude gain: 400m",
        description:
          "After breakfast, we begin our trek from Janglik village. The trail climbs gently through mixed forest of oak, pine, and rhododendron, crossing small streams and passing shepherd camps. Pukhrola campsite is a beautiful meadow surrounded by forest with views of the Dhauladhar range. We arrive by early afternoon, set up camp, and spend the evening acclimatising and exploring the meadow. Our guide briefs us on tomorrow's ridge walk.",
      },
      {
        day: 3,
        title: "Pukhrola to Phulara Ridge to Pukhrola",
        meta: "10 km trek · 5–6 hours · Altitude gain: 500m, loss: 500m",
        description:
          "Today is the highlight of the trek. We climb to the Phulara Ridge (3,700m) and walk along the spine of the mountain for several kilometres. The views are breathtaking — Dhauladhar to the north, Pir Panjal to the west, and the Shimla valleys below. We stop for a long picnic lunch at the highest point, take photographs, and soak in the panorama. In the afternoon, we descend back to Pukhrola camp for a celebratory dinner.",
      },
      {
        day: 4,
        title: "Pukhrola to Janglik to Shimla",
        meta: "8 km trek · 3–4 hours · Altitude loss: 400m",
        description:
          "We retrace our steps down to Janglik, where our vehicle waits. The descent offers new perspectives of the forest and meadows we passed on the way up. We stop for a celebratory group photo and lunch at a local dhaba, then drive back to Shimla. We expect to reach Shimla by early evening, in time for onward travel. Our team assists with bus or taxi bookings if needed.",
      },
    ],
    relatedTreks: ["kedarkantha", "hampta-pass", "chopta-tungnath"],
    sampleDates: ["12 Apr 2026", "26 Apr 2026", "10 May 2026", "25 Sep 2026"],
  },
];
