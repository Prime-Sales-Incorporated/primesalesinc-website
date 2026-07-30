import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Meta / SEO
        meta_title:
          "Prime Sales Inc. | Forklifts, Racking, Storage, Cold Chain & Automation Solutions Philippines",
        meta_description:
          "Prime Sales Inc. is a leading Philippine supplier of industrial storage systems, pallet racking, forklifts, and cold chain solutions. Trusted since 1976 for efficient intralogistics solutions for dry and cold chain applications.",

        // Hero section
        hero_eyebrow: "Prime Sales Inc. Since 1976",
        hero_title:
          "A Leader in Intelligent Intralogistics Solution for Dry and Cold Chain Applications",
        hero_desc:
          "Prime Sales Inc. (PSI), founded in 1976, is a Philippine company providing intralogistics solutions for both the dry and cold chain industries. Partnering with global manufacturers, PSI offers services such as warehouse design, storage systems, and after-sales support. With over 50 years of industry experience, PSI has built a strong reputation and collaborates with proven global partners to deliver efficient intralogistics and supply chain solutions in the Philippines.",
        hero_cta: "Inquire Now",

        // Mission / Vision
        mission_title: "Our Mission",
        mission_desc:
          "At Prime Sales, Inc. we are dedicated to delivering innovative and cost-effective solutions while building lasting partnerships through exceptional customer satisfaction.",
        vision_title: "Our Vision",
        vision_desc:
          "As a forward-thinking industry leader, Prime Sales, Inc. is committed to navigating emerging supply chain challenges and shaping sustainable solutions for the future.",

        // Who We Are
        who_title_1: "Who We",
        who_title_2: "Are",
        who_desc:
          "Prime Sales Inc. (PSI) is a trusted intralogistics provider in the Philippines. Since 1976, we've helped companies improve their operations with reliable racking systems, smart storage solutions, and advanced supply chain services.",

        feature_1_title: "Founding Evolution",
        feature_1_desc:
          "Established in 1976, the company has evolved from basic supply operations to premium racking systems and intralogistics services.",
        feature_2_title: "Key Services",
        feature_2_desc:
          "PSI provides intelligent intralogistics solutions, including design and implementation of advanced storage systems.",
        feature_3_title: "Business Model",
        feature_3_desc:
          "The company collaborates with global partners to ensure reliable supply chain performance across the Philippines.",
        feature_4_title: "Company Philosophy",
        feature_4_desc:
          "PSI embraces change and innovation, continuously improving strategies and developing a competent salesforce.",

        story_eyebrow: "Our story",
        story_title_pre: "Pioneering",
        story_title_accent: "intralogistics",
        story_title_post: "since 1976.",
        story_desc:
          "Prime Sales Inc. (PSI) is a premier Philippine provider of intelligent intralogistics solutions, bridging global innovation and local industrial excellence in every warehouse we touch.",
        story_point1_year: "1976",
        story_point1_title: "The beginning",
        story_point1_desc:
          "A small team, a bold idea to reshape supply chains.",
        story_point2_year: "Today",
        story_point2_title: "50 years, 500+ projects",
        story_point2_desc:
          "Trusted across dry and cold chain facilities nationwide.",
        story_caption_title: "Excellence in every square foot.",
        story_caption_sub: "Manila logistics hub project",

        solutions_heading_pre: "Our",
        solutions_heading_accent: "Solutions",
        solutions_subtitle:
          "We provide a comprehensive range of intralogistics solutions tailored to meet your specific needs.",
        solutions_view_more: "View more",

        solutions_0_title: "Cold Chain",
        solutions_0_desc:
          "Comprehensive cold chain solutions designed for temperature control like structural insulated panels, insulated doors and panel and door accessories that ensure durability, energy efficiency, and reliable thermal performance.",

        solutions_1_title: "Industrial Storage",
        solutions_1_desc:
          "Storage solutions designed to maximize warehouse space through durable and versatile racking systems, like wide aisle, narrow aisle, mobile pallet, pallet shuttle systems, drive-in, pallet flow and multi-tier racking.",

        solutions_2_title: "Material Handling Equipment",
        solutions_2_desc:
          "A complete lineup of material handling equipment, including forklifts, reach trucks, order pickers, pallet movers, stackers, and very narrow aisle trucks, engineered to deliver efficient and reliable performance across all industries.",

        solutions_3_title: "Plastic Pallets, Bins & Crates",
        solutions_3_desc:
          "Comprehensive set of durable and hygienic handling products including eco pallets, warehouse pallets, metal reinforced pallets and spill containment pallets designed for efficient and compliant logistics operations.",

        solutions_4_title: "Automation Solutions",
        solutions_4_desc:
          "Comprehensive automation solutions including conveyor systems, automated storage and retrieval systems (AS/RS) and multishuttle robots to enhance productivity, precision and operational efficiency in warehouses and facilities.",

        solutions_5_title: "Docks and Doors",
        solutions_5_desc:
          "Comprehensive dock and door solutions including levelers, shelters, loading houses, control systems, sectional and high-speed doors, ISO cold doors and rolling shutters designed for safe and efficient warehouse operations.",

        solutions_6_title: "Warehouse Management System",
        solutions_6_desc:
          "Advanced warehouse management solutions providing real-time inventory visibility, efficient picking and putaway, and automation-ready workflows, designed to streamline operations and enhance productivity across warehouse and distribution environments.",

        solutions_7_title: "Industrial Batteries & Chargers",
        solutions_7_desc:
          "Complete battery and charging solutions, including industrial batteries, smart battery chargers, and battery management systems, designed to deliver reliable power, optimize performance, and support efficient operations for material handling equipment.",

        solutions_8_title: "Commercial Solutions",
        solutions_8_desc:
          "Comprehensive commercial solutions including retail shelving systems, parking barriers, and rolling shutters designed to enhance security, functionality, and aesthetics while providing efficient and reliable performance in commercial spaces.",

        why_heading_pre: "Why choose",
        why_heading_accent: "Prime",
        why_intro_title: "Unlocking Efficiency in Your Supply Chain",
        why_intro_desc:
          "We are dedicated to providing innovative and reliable intralogistics solutions. Our commitment to excellence ensures that we deliver tailored systems that meet your specific needs, enhancing productivity and driving growth.",

        why_0_title: "50+ Years of",
        why_0_highlight: "Experience",
        why_0_stat: "50+",
        why_0_unit: "years",
        why_0_body:
          "Leveraging decades of industry expertise to deliver proven and reliable solutions.",

        why_1_title: "After Sales",
        why_1_highlight: "Service",
        why_1_stat: "24/7",
        why_1_unit: "care",
        why_1_body:
          "We build long-term relationships through consistent, high-quality after-sales service and dedicated customer care.",

        why_2_title: "Trusted",
        why_2_highlight: "Global Partners",
        why_2_stat: "12+",
        why_2_unit: "partners",
        why_2_body:
          "Collaborating with world-renowned partners to bring you cutting-edge technology.",

        why_3_title: "Customized",
        why_3_highlight: "Solutions",
        why_3_stat: "100%",
        why_3_unit: "tailored",
        why_3_body:
          "Designing and implementing tailored intralogistics systems to fit your unique operational needs.",

        why_4_title: "End-to-End",
        why_4_highlight: "Support",
        why_4_stat: "1",
        why_4_unit: "partner, full lifecycle",
        why_4_body:
          "From consultation and design to installation and maintenance, we provide complete lifecycle support to ensure long-term performance.",
        journey_tab_rack: "Rack Timeline",
        journey_tab_conveyor: "Conveyor Line",
        journey_tab_route: "Shipping Route",
        journey_tab_dock: "Loading Dock",
        journey_tab_barcode: "Barcode Scan",

        journey_rack_eyebrow: "Level by level",
        journey_rack_title_pre: "Stacking Up Our",
        journey_rack_title_accent: "Journey",

        journey_conveyor_eyebrow: "On the line",
        journey_conveyor_title_pre: "The Prime",
        journey_conveyor_title_accent: "Conveyor Line",

        journey_route_eyebrow: "Manifest · Route 001",
        journey_route_title_pre: "Charting the",
        journey_route_title_accent: "Route",
        journey_route_waypoint: "WAYPOINT",

        journey_dock_eyebrow: "Bay by bay",
        journey_dock_title_pre: "Docking Our",
        journey_dock_title_accent: "Milestones",
        journey_dock_bay: "BAY",

        journey_barcode_eyebrow: "Scan the timeline",
        journey_barcode_title_pre: "Our History,",
        journey_barcode_title_accent: "Logged",
        journey_barcode_receipt_prefix: "*** SCAN RECEIPT — ENTRY",
        journey_barcode_receipt_suffix: "***",

        journey_story_0_year: "1976",
        journey_story_0_title: "The Beginning",
        journey_story_0_text:
          "It was a risky yet promising opportunity courageously taken. In 1976, Prime Sales Inc. began as a bold idea — a small team with big dreams to change the way supply chains worked.",

        journey_story_1_year: "1988",
        journey_story_1_title: "Built on Trust",
        journey_story_1_text:
          "Guided by excellent salesmanship and genuine understanding of customers' unique challenges, PSI grew into a trusted name in intralogistics and supply chain solutions.",

        journey_story_2_year: "2001",
        journey_story_2_title: "Global Partnerships",
        journey_story_2_text:
          "Our reputation for quality opened doors to partnerships with global leaders like DEXION and DEMATIC, enhancing our ability to deliver world-class storage and material handling systems.",

        journey_story_3_year: "2015",
        journey_story_3_title: "Innovation & Expertise",
        journey_story_3_text:
          "With over four decades of experience, our engineers and managers continually refine their craft — mastering the design of efficient, intelligent supply chain systems.",

        journey_story_4_year: "Today",
        journey_story_4_title: "Moving Forward",
        journey_story_4_text:
          "PSI continues to innovate with strong partners, modern technology, and unwavering commitment to helping clients lead their markets.",
        timeline_heading_pre: "Our",
        timeline_heading_accent: "Timeline",
        timeline_pause: "Pause",
        timeline_autoplay: "Auto-play",
        timeline_prev: "Prev",
        timeline_next: "Next",

        timeline_0_tag: "Origins",
        timeline_0_short: "Foil insulation",
        timeline_0_text:
          "Prime Sales Inc. was founded using aluminium foil insulation products — the very first stop on a five-decade journey.",

        timeline_1_tag: "Products",
        timeline_1_short: "Sandwich panels",
        timeline_1_text:
          "Transitioned to insulated sandwich panels, opening doors into cold storage and industrial construction across the Philippines.",

        timeline_2_tag: "Storage",
        timeline_2_short: "Racking systems",
        timeline_2_text:
          'Introduced the "Racking System" as a dedicated warehouse storage solution — a major step into logistics infrastructure.',

        timeline_3_tag: "Handling",
        timeline_3_short: "Battery lift trucks",
        timeline_3_text:
          "Added Battery Operated Lift Truck to the portfolio, marking PSI's entry into full-service materials handling.",

        timeline_4_tag: "Loading",
        timeline_4_short: "Loading tech & doors",
        timeline_4_text:
          "Strengthened the product portfolio with loading technology and doors for various industrial applications.",

        timeline_5_tag: "Handling",
        timeline_5_short: "IC engine forklifts",
        timeline_5_text:
          "Completed the materials handling line by adding Internal Combustion Engine Forklifts — a full fleet for any warehouse scale.",

        timeline_6_tag: "Automation",
        timeline_6_short: "Automation distributor",
        timeline_6_text:
          "PSI ventured as an exclusive distributor of warehouse automation technology in the country.",

        timeline_7_tag: "Software",
        timeline_7_short: "Warehouse mgmt. software",
        timeline_7_text:
          "Launched Warehouse Management Software for better supply chain visibility and performance.",

        timeline_8_tag: "Milestone",
        timeline_8_short: "New HQ, Parañaque",
        timeline_8_text:
          "Moved to our new headquarters at Prime Corporate Center, East Service Road, Parañaque.",

        timeline_9_tag: "Expansion",
        timeline_9_short: "Optichain Solutions Inc.",
        timeline_9_text:
          "Prime Sales Inc. established its sister company, Optichain Solutions Inc., to offer material handling and industrial storage solutions to the booming midrange market.",

        timeline_10_tag: "Scanning",
        timeline_10_short: "Printers, barcode scanners",
        timeline_10_text:
          "Comprehensive solutions for printers and barcode scanners to support operational accuracy.",

        timeline_11_tag: "AutoStorage",
        timeline_11_short: "VLM & carousel systems",
        timeline_11_text:
          "Automated storage solutions featuring Vertical Lift Modules (VLM) and Carousel Systems.",

        timeline_12_tag: "Services",
        timeline_12_short: "Rental solutions",
        timeline_12_text:
          "Business Solutions offering rental services for pallets, racking, and MHE.",
      },
    },
    de: {
      translation: {
        // Meta / SEO
        meta_title:
          "Prime Sales Inc. | Gabelstapler, Regale, Lagerung, Kühlkette & Automatisierungslösungen Philippinen",
        meta_description:
          "Prime Sales Inc. ist ein führender philippinischer Anbieter von industriellen Lagersystemen, Palettenregalen, Gabelstaplern und Kühlkettenlösungen. Seit 1976 vertrauenswürdig für effiziente Intralogistiklösungen für Trocken- und Kühlkettenanwendungen.",

        // Hero section
        hero_eyebrow: "Prime Sales Inc. Seit 1976",
        hero_title:
          "Ein führender Anbieter intelligenter Intralogistiklösungen für Trocken- und Kühlkettenanwendungen",
        hero_desc:
          "Prime Sales Inc. (PSI), gegründet 1976, ist ein philippinisches Unternehmen, das Intralogistiklösungen sowohl für die Trocken- als auch für die Kühlkettenindustrie anbietet. In Partnerschaft mit globalen Herstellern bietet PSI Dienstleistungen wie Lagerdesign, Lagersysteme und After-Sales-Support an. Mit über 50 Jahren Branchenerfahrung hat PSI einen starken Ruf aufgebaut und arbeitet mit bewährten globalen Partnern zusammen, um effiziente Intralogistik- und Lieferkettenlösungen auf den Philippinen anzubieten.",
        hero_cta: "Jetzt Anfragen",

        // Mission / Vision
        mission_title: "Unsere Mission",
        mission_desc:
          "Bei Prime Sales, Inc. sind wir bestrebt, innovative und kosteneffiziente Lösungen zu liefern und durch außergewöhnliche Kundenzufriedenheit dauerhafte Partnerschaften aufzubauen.",
        vision_title: "Unsere Vision",
        vision_desc:
          "Als zukunftsorientierter Branchenführer setzt sich Prime Sales, Inc. dafür ein, neue Herausforderungen in der Lieferkette zu meistern und nachhaltige Lösungen für die Zukunft zu gestalten.",

        // Who We Are
        who_title_1: "Wer Wir",
        who_title_2: "Sind",
        who_desc:
          "Prime Sales Inc. (PSI) ist ein vertrauenswürdiger Intralogistikanbieter auf den Philippinen. Seit 1976 haben wir Unternehmen geholfen, ihre Abläufe mit zuverlässigen Regalsystemen, intelligenten Lagerlösungen und fortschrittlichen Lieferkettendiensten zu verbessern.",

        feature_1_title: "Gründungsentwicklung",
        feature_1_desc:
          "Gegründet 1976, hat sich das Unternehmen von einfachen Lieferoperationen zu erstklassigen Regalsystemen und Intralogistikdienstleistungen entwickelt.",
        feature_2_title: "Kerndienstleistungen",
        feature_2_desc:
          "PSI bietet intelligente Intralogistiklösungen, einschließlich Design und Implementierung fortschrittlicher Lagersysteme.",
        feature_3_title: "Geschäftsmodell",
        feature_3_desc:
          "Das Unternehmen arbeitet mit globalen Partnern zusammen, um eine zuverlässige Lieferkettenleistung auf den Philippinen sicherzustellen.",
        feature_4_title: "Unternehmensphilosophie",
        feature_4_desc:
          "PSI setzt auf Wandel und Innovation und verbessert kontinuierlich Strategien sowie die Entwicklung eines kompetenten Vertriebsteams.",

        story_eyebrow: "Unsere Geschichte",
        story_title_pre: "Pionierarbeit in der",
        story_title_accent: "Intralogistik",
        story_title_post: "seit 1976.",
        story_desc:
          "Prime Sales Inc. (PSI) ist ein führender philippinischer Anbieter intelligenter Intralogistiklösungen, der globale Innovation und lokale industrielle Exzellenz in jedem Lager verbindet, das wir betreuen.",
        story_point1_year: "1976",
        story_point1_title: "Der Anfang",
        story_point1_desc:
          "Ein kleines Team, eine mutige Idee, Lieferketten neu zu gestalten.",
        story_point2_year: "Heute",
        story_point2_title: "50 Jahre, 500+ Projekte",
        story_point2_desc:
          "Landesweit vertrauenswürdig in Trocken- und Kühlketteneinrichtungen.",
        story_caption_title: "Exzellenz auf jedem Quadratmeter.",
        story_caption_sub: "Manila Logistikzentrum-Projekt",

        solutions_heading_pre: "Unsere",
        solutions_heading_accent: "Lösungen",
        solutions_subtitle:
          "Wir bieten ein umfassendes Spektrum an Intralogistiklösungen, zugeschnitten auf Ihre spezifischen Anforderungen.",
        solutions_view_more: "Mehr erfahren",

        solutions_0_title: "Kühlkette",
        solutions_0_desc:
          "Umfassende Kühlkettenlösungen für Temperaturkontrolle wie strukturelle Isolierpaneele, Isoliertüren und Paneel- und Türzubehör, die Langlebigkeit, Energieeffizienz und zuverlässige thermische Leistung gewährleisten.",

        solutions_1_title: "Industrielle Lagerung",
        solutions_1_desc:
          "Lagerlösungen zur maximalen Nutzung des Lagerraums durch langlebige und vielseitige Regalsysteme wie Breitgang-, Schmalgang-, mobile Palettenregale, Palettendurchlaufsysteme, Einfahrregale, Durchlaufregale und Mehretagenregale.",

        solutions_2_title: "Materialtransportgeräte",
        solutions_2_desc:
          "Ein komplettes Sortiment an Materialtransportgeräten, darunter Gabelstapler, Schubmaststapler, Kommissionierer, Palettenwagen, Hubwagen und Schmalgangstapler für effiziente und zuverlässige Leistung in allen Branchen.",

        solutions_3_title: "Kunststoffpaletten, Boxen & Kisten",
        solutions_3_desc:
          "Umfassendes Sortiment langlebiger und hygienischer Handhabungsprodukte, darunter Eco-Paletten, Lagerpaletten, metallverstärkte Paletten und Auffangpaletten für effiziente und konforme Logistikabläufe.",

        solutions_4_title: "Automatisierungslösungen",
        solutions_4_desc:
          "Umfassende Automatisierungslösungen einschließlich Fördersystemen, automatisierten Lager- und Kommissioniersystemen (AS/RS) und Multishuttle-Robotern zur Steigerung von Produktivität, Präzision und Betriebseffizienz.",

        solutions_5_title: "Tore und Türen",
        solutions_5_desc:
          "Umfassende Tor- und Türlösungen, einschließlich Rampenhebebühnen, Andockschutz, Ladehäusern, Steuerungssystemen, Sektional- und Schnelllauftoren, ISO-Kühltüren und Rolltoren für sichere und effiziente Lagerabläufe.",

        solutions_6_title: "Lagerverwaltungssystem",
        solutions_6_desc:
          "Fortschrittliche Lagerverwaltungslösungen mit Echtzeit-Bestandstransparenz, effizienter Kommissionierung und Einlagerung sowie automatisierungsbereiten Arbeitsabläufen zur Optimierung von Lager- und Vertriebsumgebungen.",

        solutions_7_title: "Industriebatterien & Ladegeräte",
        solutions_7_desc:
          "Komplette Batterie- und Ladelösungen, einschließlich Industriebatterien, intelligenter Ladegeräte und Batteriemanagementsysteme, für zuverlässige Leistung und effizienten Betrieb von Materialtransportgeräten.",

        solutions_8_title: "Gewerbliche Lösungen",
        solutions_8_desc:
          "Umfassende gewerbliche Lösungen einschließlich Regalsystemen für den Einzelhandel, Parksperren und Rolltoren zur Verbesserung von Sicherheit, Funktionalität und Ästhetik in Gewerbeflächen.",

        why_heading_pre: "Warum",
        why_heading_accent: "Prime wählen",
        why_intro_title: "Effizienz in Ihrer Lieferkette freisetzen",
        why_intro_desc:
          "Wir sind bestrebt, innovative und zuverlässige Intralogistiklösungen bereitzustellen. Unser Streben nach Exzellenz stellt sicher, dass wir maßgeschneiderte Systeme liefern, die Ihre spezifischen Anforderungen erfüllen, die Produktivität steigern und Wachstum fördern.",

        why_0_title: "50+ Jahre",
        why_0_highlight: "Erfahrung",
        why_0_stat: "50+",
        why_0_unit: "Jahre",
        why_0_body:
          "Wir nutzen jahrzehntelanges Branchenwissen, um bewährte und zuverlässige Lösungen zu liefern.",

        why_1_title: "After-Sales-",
        why_1_highlight: "Service",
        why_1_stat: "24/7",
        why_1_unit: "Betreuung",
        why_1_body:
          "Wir bauen langfristige Beziehungen durch konsistenten, qualitativ hochwertigen After-Sales-Service und engagierte Kundenbetreuung auf.",

        why_2_title: "Vertrauenswürdige",
        why_2_highlight: "globale Partner",
        why_2_stat: "12+",
        why_2_unit: "Partner",
        why_2_body:
          "Zusammenarbeit mit weltweit renommierten Partnern, um Ihnen modernste Technologie zu bieten.",

        why_3_title: "Maßgeschneiderte",
        why_3_highlight: "Lösungen",
        why_3_stat: "100%",
        why_3_unit: "individuell",
        why_3_body:
          "Entwicklung und Umsetzung maßgeschneiderter Intralogistiksysteme für Ihre individuellen betrieblichen Anforderungen.",

        why_4_title: "Umfassende",
        why_4_highlight: "Unterstützung",
        why_4_stat: "1",
        why_4_unit: "Partner, gesamter Lebenszyklus",
        why_4_body:
          "Von Beratung und Planung bis zu Installation und Wartung bieten wir vollständige Lebenszyklus-Unterstützung für langfristige Leistung.",
        journey_tab_rack: "Regal-Zeitlinie",
        journey_tab_conveyor: "Förderlinie",
        journey_tab_route: "Versandroute",
        journey_tab_dock: "Laderampe",
        journey_tab_barcode: "Barcode-Scan",

        journey_rack_eyebrow: "Ebene für Ebene",
        journey_rack_title_pre: "Unsere Reise, Ebene für",
        journey_rack_title_accent: "Ebene",

        journey_conveyor_eyebrow: "Auf dem Band",
        journey_conveyor_title_pre: "Die Prime",
        journey_conveyor_title_accent: "Förderlinie",

        journey_route_eyebrow: "Manifest · Route 001",
        journey_route_title_pre: "Kartierung der",
        journey_route_title_accent: "Route",
        journey_route_waypoint: "WEGPUNKT",

        journey_dock_eyebrow: "Bucht für Bucht",
        journey_dock_title_pre: "Unsere Meilensteine",
        journey_dock_title_accent: "im Überblick",
        journey_dock_bay: "BUCHT",

        journey_barcode_eyebrow: "Zeitlinie scannen",
        journey_barcode_title_pre: "Unsere Geschichte,",
        journey_barcode_title_accent: "protokolliert",
        journey_barcode_receipt_prefix: "*** SCAN-BELEG — EINTRAG",
        journey_barcode_receipt_suffix: "***",

        journey_story_0_year: "1976",
        journey_story_0_title: "Der Anfang",
        journey_story_0_text:
          "Es war eine riskante, aber vielversprechende Gelegenheit, die mutig ergriffen wurde. 1976 begann Prime Sales Inc. als kühne Idee — ein kleines Team mit großen Träumen, die Art und Weise zu verändern, wie Lieferketten funktionierten.",

        journey_story_1_year: "1988",
        journey_story_1_title: "Auf Vertrauen aufgebaut",
        journey_story_1_text:
          "Geleitet von exzellenter Vertriebskompetenz und echtem Verständnis für die individuellen Herausforderungen der Kunden, wuchs PSI zu einem vertrauenswürdigen Namen in der Intralogistik und Lieferkettenlösungen heran.",

        journey_story_2_year: "2001",
        journey_story_2_title: "Globale Partnerschaften",
        journey_story_2_text:
          "Unser Ruf für Qualität öffnete Türen zu Partnerschaften mit globalen Marktführern wie DEXION und DEMATIC und verbesserte unsere Fähigkeit, erstklassige Lager- und Materialtransportsysteme zu liefern.",

        journey_story_3_year: "2015",
        journey_story_3_title: "Innovation & Expertise",
        journey_story_3_text:
          "Mit über vier Jahrzehnten Erfahrung verfeinern unsere Ingenieure und Manager kontinuierlich ihr Handwerk — die Beherrschung der Gestaltung effizienter, intelligenter Lieferkettensysteme.",

        journey_story_4_year: "Heute",
        journey_story_4_title: "Vorwärts gehen",
        journey_story_4_text:
          "PSI innoviert weiterhin mit starken Partnern, moderner Technologie und unerschütterlichem Engagement, um Kunden zu helfen, ihre Märkte anzuführen.",

        timeline_heading_pre: "Unsere",
        timeline_heading_accent: "Zeitlinie",
        timeline_pause: "Pause",
        timeline_autoplay: "Auto-Wiedergabe",
        timeline_prev: "Zurück",
        timeline_next: "Weiter",

        timeline_0_tag: "Ursprünge",
        timeline_0_short: "Folienisolierung",
        timeline_0_text:
          "Prime Sales Inc. wurde mit Aluminiumfolien-Isolierprodukten gegründet — der allererste Schritt auf einer fünf Jahrzehnte langen Reise.",

        timeline_1_tag: "Produkte",
        timeline_1_short: "Sandwichpaneele",
        timeline_1_text:
          "Umstieg auf isolierte Sandwichpaneele, was Türen zu Kühllagerung und Industriebau auf den Philippinen öffnete.",

        timeline_2_tag: "Lagerung",
        timeline_2_short: "Regalsysteme",
        timeline_2_text:
          'Einführung des "Regalsystems" als eigenständige Lagerlösung — ein bedeutender Schritt in die Logistikinfrastruktur.',

        timeline_3_tag: "Handhabung",
        timeline_3_short: "Batterie-Hubwagen",
        timeline_3_text:
          "Aufnahme von batteriebetriebenen Hubwagen ins Portfolio — der Einstieg von PSI in die vollumfängliche Materialhandhabung.",

        timeline_4_tag: "Verladung",
        timeline_4_short: "Verladetechnik & Tore",
        timeline_4_text:
          "Stärkung des Produktportfolios mit Verladetechnik und Toren für verschiedene industrielle Anwendungen.",

        timeline_5_tag: "Handhabung",
        timeline_5_short: "Verbrennungsmotor-Stapler",
        timeline_5_text:
          "Vervollständigung der Materialhandhabungslinie durch Verbrennungsmotor-Gabelstapler — eine komplette Flotte für jede Lagergröße.",

        timeline_6_tag: "Automatisierung",
        timeline_6_short: "Automatisierungsvertrieb",
        timeline_6_text:
          "PSI wagte sich als exklusiver Vertriebspartner für Lagerautomatisierungstechnologie im Land.",

        timeline_7_tag: "Software",
        timeline_7_short: "Lagerverwaltungssoftware",
        timeline_7_text:
          "Einführung der Lagerverwaltungssoftware für bessere Transparenz und Leistung in der Lieferkette.",

        timeline_8_tag: "Meilenstein",
        timeline_8_short: "Neuer Hauptsitz, Parañaque",
        timeline_8_text:
          "Umzug in unseren neuen Hauptsitz im Prime Corporate Center, East Service Road, Parañaque.",

        timeline_9_tag: "Expansion",
        timeline_9_short: "Optichain Solutions Inc.",
        timeline_9_text:
          "Prime Sales Inc. gründete sein Schwesterunternehmen Optichain Solutions Inc., um Materialtransport- und Industrielagerlösungen für den boomenden Midrange-Markt anzubieten.",

        timeline_10_tag: "Scannen",
        timeline_10_short: "Drucker, Barcode-Scanner",
        timeline_10_text:
          "Umfassende Lösungen für Drucker und Barcode-Scanner zur Unterstützung betrieblicher Genauigkeit.",

        timeline_11_tag: "Auto-Lagerung",
        timeline_11_short: "VLM & Umlaufregalsysteme",
        timeline_11_text:
          "Automatisierte Lagerlösungen mit Vertikal-Liftmodulen (VLM) und Umlaufregalsystemen.",

        timeline_12_tag: "Dienstleistungen",
        timeline_12_short: "Mietlösungen",
        timeline_12_text:
          "Geschäftslösungen mit Mietservices für Paletten, Regale und Materialtransportgeräte.",
      },
    },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
