import React, { useEffect, useState } from "react";
import Header from "../config/header";
import Footer from "../config/footer";
import { useParams, useNavigate } from "react-router-dom";

const SolutionsPage = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", dark);
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const { tab } = useParams();
  const navigate = useNavigate();

  // ✅ Proper tabs
  const tabs = [
    "MHE",
    "Plastic Pallets, Bins and Crates",
    "Cold Chain",
    "Docks & Doors",
    "Industrial Storage",
    "Industrial Batteries and Chargers",
    "Automation Solutions",
    "Commercial Solutions",
  ];

  // ✅ Slug converter
  const tabSlug = (str) => str.trim().toLowerCase().replace(/\s+/g, "-");

  // ✅ Slug -> Label mapping
  const tabMapping = {};
  tabs.forEach((label) => {
    tabMapping[tabSlug(label)] = label;
  });

  // ✅ Initial active tab based on URL
  const initialTab = tabMapping[tabSlug(tab || "MHE")] || "MHE";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (tab) {
      const normalized = tabMapping[tabSlug(tab)];
      if (normalized) setActiveTab(normalized);
    }
  }, [tab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(`/solutions/${tabSlug(tabName)}`);
  }; // ✅ MATERIAL HANDLING EQUIPMENT (MHE)
  const mheSolutions = [
    {
      title: "Electric Forklift Truck",
      desc: "Efficient and reliable forklifts for various material handling needs.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_vw9NEPHJp7s3azmXzhzd00bTrCQGZ2c1ZAD5e2-aEyYniVjTCf9XAW-eiAQ_dCxgPl_PxIUA57KiDZ02WDjEhDcDoNsAa2N5Ehniin0vIkKB43SPG5uurQMmC_gi7ccKy--nbmRTXselEQklN5AESR-QxnEkCucuxrQh9YPVlJfzfhwdkTHm6UbrT3sbfSeC6nkaUl9KNFZ1VGthZS2m_1gQ9hOBbycXju-Wfcij5iWNSgg3Gac7D0OF2O0jfWh3TiZIQofBwCg",
      applications: [
        "Ideal for indoor warehousing with zero-emission operation.",
        "Used in manufacturing lines and logistics hubs.",
        "Efficient for palletized material handling.",
        "Low noise and reduced maintenance requirements.",
      ],
    },
    {
      title: "ICE Forklift Truck",
      desc: "Durable forklifts designed for outdoor and heavy-duty lifting operations.",
      img: "https://www.linde-mh.com/media/Global-Content/Landingpage-Forklift-Truck/LMH_Range_Portfolio_02_002_Small_16x9w1920.jpg",
      applications: [
        "Designed for rugged outdoor use and heavy loads.",
        "Used in ports, construction, and manufacturing sites.",
        "Handles uneven surfaces and long-duty cycles.",
        "Powered by LPG or diesel for high endurance.",
      ],
    },
    {
      title: "Reach Trucks",
      desc: "High-reaching trucks for maximizing vertical storage space.",
      img: "https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/reach_truck-loading-retail-3959_4046_16x9w1920.jpg",
      applications: [
        "Operates efficiently in narrow aisles and tall racks.",
        "Enables pallet retrieval at high elevations.",
        "Ideal for cold storage and dense warehouse systems.",
        "Provides advanced stability and load control.",
      ],
    },
    {
      title: "Order Pickers",
      desc: "Specialized order pickers for efficient and accurate order fulfillment.",
      img: "https://www.linde-mh.com/media/Global-Content/01-Products/07_Order-Pickers_Kommissionierer/Order_picker-stacking-warehouse_16x9w1920.jpg",
      applications: [
        "Ideal for e-commerce and distribution centers.",
        "Allows fast, ergonomic order picking operations.",
        "Handles individual SKU selection in racking.",
        "Integrated safety systems for operator protection.",
      ],
    },
    {
      title: "Pallet Trucks",
      desc: "Powerful trucks for safe and efficient movement of palletized goods.",
      img: "https://www.linde-mh.com/media/Global-Content/04-About-Linde/Press_Releases/2014/22_2014/pm_22-2014_4196_490_B_16x9w1920.jpg",
      applications: [
        "Used in short-distance horizontal transport.",
        "Ideal for loading docks and vehicle unloading.",
        "Lightweight and maneuverable in tight spaces.",
        "Low maintenance and high efficiency.",
      ],
    },
    {
      title: "Pallet Stackers",
      desc: "Versatile stackers for stacking and retrieving materials in tight spaces.",
      img: "https://kion.scene7.com/is/image/kiongroup/application-8907:XXLarge-16-9",
      applications: [
        "For compact warehouse and retail stockrooms.",
        "Efficient in low to medium height stacking.",
        "Used in assembly and light industrial areas.",
        "Battery-powered for indoor applications.",
      ],
    },
    {
      title: "VNA Trucks",
      desc: "Very Narrow Aisle trucks for high-density storage systems.",
      img: "https://www.linde-mh.com/media/Global-Content/03_Solutions_Loesungen/Applications/VNA-order_picking-retail-3795_286_1x1w960.jpg",
      applications: [
        "Ideal for maximizing warehouse space utilization.",
        "Operates in aisles under 2 meters wide.",
        "Supports wire or rail guidance systems.",
        "Designed for precise pallet handling at height.",
      ],
    },
  ];

  // ✅ RACKING SOLUTIONS
  const rackingSolutions = [
    {
      title: "Selective Pallet Racking",
      desc: "Versatile storage for easy access to every pallet.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      applications: [
        "General warehousing and retail storage.",
        "Quick access to any stored pallet.",
        "Supports FIFO inventory management.",
        "Adjustable beam levels for flexibility.",
      ],
    },
    {
      title: "Drive-In Racking",
      desc: "High-density storage for similar product types.",
      img: "https://images.unsplash.com/photo-1597095220418-84d540b264b4",
      applications: [
        "Cold storage and food warehousing.",
        "Ideal for LIFO storage systems.",
        "Minimizes aisle space, increases density.",
        "Used for bulk or homogeneous products.",
      ],
    },
    {
      title: "Cantilever Racking",
      desc: "Perfect for long, bulky, or irregularly shaped items.",
      img: "https://images.unsplash.com/photo-1597002979497-7a6c74cc5e64",
      applications: [
        "For pipes, timber, and steel beams.",
        "Supports both light and heavy-duty loads.",
        "Open front design for side-loading access.",
        "Used in manufacturing and construction yards.",
      ],
    },
  ];

  // ✅ AUTOMATION SOLUTIONS
  const automationSolutions = [
    {
      title: "Conveyor Systems",
      desc: "Automated conveyor lines to streamline material flow.",
      img: "https://static.wixstatic.com/media/f0d37b_5c09084196e7438ebf1af896b51892e3~mv2.jpg/v1/fill/w_948,h_775,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f0d37b_5c09084196e7438ebf1af896b51892e3~mv2.jpg",
      applications: [
        "Automates transport in warehouses and factories.",
        "Used for packaging, sorting, and inspection lines.",
        "Integrates with WMS or ERP systems.",
        "Reduces manual handling and cycle time.",
      ],
    },
    {
      title: "Automated Storage and Retrieval Systems (AS/RS)",
      desc: "Precision storage and retrieval with robotic automation.",
      img: "https://www.kardex.com/hubfs/Etra01_FeaturedImage.jpg",
      applications: [
        "High-bay automated warehousing systems.",
        "Increases storage density and picking speed.",
        "Used in cold, pharmaceutical, and e-commerce industries.",
        "Minimizes human error and operational cost.",
      ],
    },
    {
      title: "Multishuttle",
      desc: "Smart transport robots for efficient warehouse mobility.",
      img: "https://img.directindustry.com/images_di/photo-g/32730-18419940.webp",
      applications: [
        "Ideal for fast-moving goods and order picking.",
        "Scalable solution for high throughput operations.",
        "Works in ambient and cold storage environments.",
        "Supports dynamic storage and retrieval systems.",
      ],
    },
  ];

  // ✅ COLD CHAIN SOLUTIONS
  const coldChainSolutions = [
    {
      title: "Structural Insulated Panels",
      desc: "High-performance insulated panels for temperature-controlled environments.",
      img: "https://cdn.prod.website-files.com/65b78bf37d2c3fb937b48de0/666c05755512f939a027e001_structural-insulated-panels-sips.jpg",
      applications: [
        "Used for cold rooms, freezers, and chillers.",
        "Ensures consistent temperature control.",
        "Lightweight with superior insulation performance.",
        "Provides structural integrity and energy savings.",
      ],
    },
    {
      title: "Insulated Doors",
      desc: "Energy-efficient cooling systems for industrial cold rooms and warehouses.",
      img: "https://image.made-in-china.com/365f3j00qJScKvjdigou/Cold-Storage-Doors-Polyurethane-Insulation-Stainless-Steel-Sliding-Door-for-Cold-Room.webp",
      applications: [
        "Maintains temperature stability in cold facilities.",
        "Available in sliding, hinged, or automatic types.",
        "Reduces energy loss during frequent access.",
        "Corrosion-resistant and hygienic design.",
      ],
    },
    {
      title: "Panel and Door Accessories",
      desc: "Fast freezing technology for food preservation and product safety.",
      img: "https://image.made-in-china.com/365f3j00APycNQCbruoY/Vertical-Lifting-up-Industrial-Overhead-Panel-Door.webp",
      applications: [
        "Includes trims, gaskets, and sealants.",
        "Enhances insulation performance.",
        "Simplifies installation and maintenance.",
        "Ensures long-term thermal efficiency.",
      ],
    },
  ];

  // ✅ DOCKS & DOORS SOLUTIONS
  const plasticpallets = [
    {
      title: "Eco Pallets",
      desc: "Sustainable and lightweight pallets made from recycled or eco-friendly materials.",
      img: "https://www.connerindustries.com/wp-content/uploads/2021/03/recycled-plastic-pallets.jpg",
      applications: [
        "Environmentally friendly alternative to traditional pallets.",
        "Reusable and recyclable for cost efficiency.",
        "Resistant to moisture and pests.",
        "Used in export and light-duty logistics.",
      ],
    },
    {
      title: "Warehouse Pallets",
      desc: "Standard industrial pallets for general warehouse operations.",
      img: "https://www.exporthub.com/blog/wp-content/uploads/2020/03/Wooden-Pallets.jpg",
      applications: [
        "Used for material handling and product storage.",
        "Compatible with forklifts and pallet jacks.",
        "Available in wood, plastic, or metal materials.",
        "Supports uniform load distribution.",
      ],
    },
    {
      title: "Hygiene Pallets",
      desc: "Plastic pallets designed for environments with high hygiene standards.",
      img: "https://www.goplasticpallets.com/media/wysiwyg/Blog/hygiene-pallets.jpg",
      applications: [
        "Ideal for food, pharmaceutical, and cleanroom industries.",
        "Easy to wash and disinfect.",
        "Corrosion-free and durable.",
        "Complies with international hygiene regulations.",
      ],
    },
    {
      title: "Automatic Storage Retrieval System (AS/RS)",
      desc: "Computer-controlled system for automatic placement and retrieval of goods.",
      img: "https://www.daifuku.com/us/en/solution/warehouse/images/asrs_overview.jpg",
      applications: [
        "Used in smart warehouses and manufacturing plants.",
        "Increases storage density and accuracy.",
        "Reduces labor costs and handling time.",
        "Integrates with WMS and ERP systems.",
      ],
    },
    {
      title: "Metal Reinforced Pallets",
      desc: "Heavy-duty pallets strengthened with steel or metal reinforcements.",
      img: "https://www.mrstacker.com.au/wp-content/uploads/2020/03/metal-reinforced-plastic-pallet.jpg",
      applications: [
        "Used for heavy or high-load applications.",
        "Provides added durability and longevity.",
        "Ideal for automated handling systems.",
        "Resistant to impact and deformation.",
      ],
    },
    {
      title: "Spill Containment Pallets",
      desc: "Pallets with built-in sump to contain leaks or spills from drums and containers.",
      img: "https://cdn11.bigcommerce.com/s-hh7ybqv45m/images/stencil/original/products/2363/4934/BLPSPILLPALLET4__73893.1643272611.jpg",
      applications: [
        "Used for safe storage of hazardous materials.",
        "Prevents environmental contamination.",
        "Complies with safety and spill control standards.",
        "Ideal for chemical and industrial facilities.",
      ],
    },
  ];

  // ✅ DOCKS & DOORS SOLUTIONS
  const docksDoorsSolutions = [
    {
      title: "Dock Levelers",
      desc: "Hydraulic and mechanical dock levelers for safe loading and unloading.",
      img: "https://www.redsteelmh.com/wp-content/uploads/2023/04/Dock-Levelers-Red-Steel.jpg",
      applications: [
        "Bridges gap between dock and vehicle.",
        "Ensures safe cargo transfer.",
        "Supports heavy vehicle loading cycles.",
        "Reduces impact and equipment wear.",
      ],
    },
    {
      title: "Dock Shelters",
      desc: "Flexible dock shelters for efficient sealing and protection from the elements.",
      img: "https://gw-assets.assaabloy.com/is/image/assaabloy/TS_Series_Rigid_Frame_Dock_Shelter",
      applications: [
        "Provides weather sealing during loading.",
        "Reduces energy loss in temperature-controlled areas.",
        "Protects goods and personnel from rain and dust.",
        "Compatible with various vehicle sizes.",
      ],
    },

    {
      title: "Loading Houses",
      desc: "Pre-fabricated loading systems for efficient goods transfer.",
      img: "https://gw-assets.assaabloy.com/is/image/assaabloy/LH6081L_0001_16_9",
      applications: [
        "Integrated docking, shelter, and door in one module.",
        "Ideal for retrofit or space-limited sites.",
        "Reduces construction work and downtime.",
        "Energy-efficient and durable design.",
      ],
    },
    {
      title: "Control Systems",
      desc: "Smart controls for dock and door operations.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      applications: [
        "Integrates dock levelers, shelters, and doors.",
        "Ensures synchronized operation and safety.",
        "Can include sensors and interlocks.",
        "Supports automation and monitoring systems.",
      ],
    },
    {
      title: "Industrial Sectional Doors",
      desc: "Insulated, vertically opening doors for industrial and commercial facilities.",
      img: "https://www.hormann.com/fileadmin/_processed_/a/a/csm_Sectional-doors-SPU_F42-Double-skinned-insulated-door-leaves_02_65e0d7e234.jpg",
      applications: [
        "Provides thermal insulation and noise reduction.",
        "Operates vertically to save internal space.",
        "Ideal for warehouses, factories, and logistics hubs.",
        "Available in manual or automated operation.",
      ],
    },
    {
      title: "High-Speed Sectional Doors",
      desc: "Fast-operating sectional doors for high-traffic industrial environments.",
      img: "https://www.assaabloyentrance.com/globalassets/assa-abloy/entrance-systems/products/industrial-doors/high-speed-doors/assa-abloy-high-speed-section-door/assa-abloy-high-speed-sectional-door-2.jpg",
      applications: [
        "Enhances workflow efficiency in busy areas.",
        "Maintains temperature control in sensitive zones.",
        "Equipped with safety sensors and quick-reset features.",
        "Reduces downtime and energy loss.",
      ],
    },
    {
      title: "Industrial Rolling Shutters",
      desc: "Heavy-duty steel or aluminum shutters for secure and efficient closure.",
      img: "https://www.enviroblinds.co.uk/media/catalog/product/cache/ba0e4743d5d3e153f02f32656e2f28cc/s/e/security_roller_shutter_door_1_1.jpg",
      applications: [
        "Provides robust protection for loading docks and entrances.",
        "Compact design saves space above the doorway.",
        "Can be operated manually or with motorized systems.",
        "Ideal for industrial and commercial buildings.",
      ],
    },
    {
      title: "Industrial Rolling Grilles",
      desc: "Ventilated rolling grilles offering visibility and airflow while maintaining security.",
      img: "https://www.cornelliron.com/getmedia/5f2b24f9-5db9-43f5-9771-541e1f1bb958/Rolling-Grille-Storefront.jpg",
      applications: [
        "Used in parking areas, retail fronts, and warehouses.",
        "Provides security without blocking visibility.",
        "Durable and corrosion-resistant materials.",
        "Available in various grille patterns and finishes.",
      ],
    },
    {
      title: "Strip Curtains",
      desc: "Flexible PVC curtains providing separation while allowing easy passage.",
      img: "https://www.stripcurtainsdirect.co.uk/cdn/shop/articles/what-are-pvc-strip-curtains.jpg",
      applications: [
        "Maintains temperature zones and reduces dust entry.",
        "Used in cold storage, food processing, and cleanrooms.",
        "Allows passage of personnel and equipment without obstruction.",
        "Simple to install and replace.",
      ],
    },
    {
      title: "ISO Doors",
      desc: "Specialized doors designed for temperature-controlled and cleanroom environments.",
      img: "https://www.metaflexdoors.com/wp-content/uploads/2021/06/ISO-262_3-scaled.jpg",
      applications: [
        "Ensures airtight sealing and insulation.",
        "Used in pharmaceutical, food, and cold storage facilities.",
        "Supports hygiene standards and contamination control.",
        "Available in sliding or hinged configurations.",
      ],
    },
  ];

  // ✅ INDUSTRIAL STORAGE SOLUTIONS
  const industrialStorageSolutions = [
    {
      title: "Wide Aisle",
      desc: "Conventional pallet racking allowing easy access to all pallets.",
      img: "https://www.primeworkspacesolutions.co.uk/storage/products/April2020/ec3ZeakyLpAnyZNJlCAl-default.jpg",
      applications: [
        "Used in general warehousing operations.",
        "Compatible with standard forklifts.",
        "Easy to reconfigure and maintain.",
        "Ideal for low to medium storage density.",
      ],
    },
    {
      title: "Narrow Aisle",
      desc: "Maximizes storage capacity while maintaining access efficiency.",
      img: "https://cms.ar-racking.com/uploads/2022/12/estanterias-pasillo-estrecho-1.jpg",
      applications: [
        "Operates with VNA or turret trucks.",
        "Increases warehouse density by up to 40%.",
        "Used in logistics and distribution centers.",
        "Maintains 100% pallet accessibility.",
      ],
    },
    {
      title: "Mobile Pallet Racking",
      desc: "Motorized storage racks on mobile bases for compact warehousing.",
      img: "https://technometalegypt.com/wp-content/uploads/2020/09/mobile-pelletracking-euromag-ferretto1.jpg",
      applications: [
        "Used in cold stores and high-value storage areas.",
        "Eliminates unnecessary aisles for space efficiency.",
        "Controlled via remote or PLC system.",
        "Ensures operator safety with sensors and locks.",
      ],
    },
    {
      title: "Pallet Shuttle System",
      desc: "Semi-automated storage system using shuttles to move pallets within racks.",
      img: "https://www.dexion.com/globalassets/images/products/shuttle-systems/pallet-shuttle/dexion-pallet-shuttle-1.jpg",
      applications: [
        "Ideal for high-density storage.",
        "Reduces forklift travel time inside aisles.",
        "Perfect for cold storage and fast-moving goods.",
        "Improves warehouse efficiency and safety.",
      ],
    },
    {
      title: "Drive-In Racking",
      desc: "High-density storage system designed for last-in, first-out (LIFO) operations.",
      img: "https://www.aracking.com/uploads/2021/01/drive-in-racking-system-3.jpg",
      applications: [
        "Maximizes storage space for homogeneous products.",
        "Used in cold storage and bulk storage warehouses.",
        "Minimizes aisle space for increased capacity.",
        "Ideal for seasonal goods or batch storage.",
      ],
    },
    {
      title: "Pallet Flow Racking",
      desc: "Gravity-fed racking system for FIFO inventory management.",
      img: "https://www.mecalux.com.sg/wp-content/uploads/sites/16/2018/02/pallet-flow-racking-system.jpg",
      applications: [
        "Ensures automatic stock rotation.",
        "Perfect for perishable goods and high-turnover products.",
        "Uses rollers for smooth pallet movement.",
        "Improves loading and unloading efficiency.",
      ],
    },
    {
      title: "Multi-Tier Racking",
      desc: "Multi-level storage system for maximizing vertical warehouse space.",
      img: "https://www.linkmisr.com/wp-content/uploads/2020/08/multi-tier.jpg",
      applications: [
        "Ideal for manual picking and inventory operations.",
        "Maximizes cubic storage area.",
        "Can include walkways and stairs for upper levels.",
        "Used in e-commerce and parts storage.",
      ],
    },
  ];

  // ✅ BATTERIES & CHARGERS
  const batteriesChargersSolutions = [
    {
      title: "Industrial Batteries",
      desc: "High-performance traction batteries for electric forklifts and trucks.",
      img: "https://juicestoredenergy.co.uk/cdn/shop/files/Forklift_Battery_Components.jpg?v=1692805221",
      applications: [
        "Used in material handling and AGV systems.",
        "Long service life and deep-cycle performance.",
        "Available in lead-acid or lithium-ion variants.",
        "Provides consistent power for 24/7 operations.",
      ],
    },
    {
      title: "Battery Chargers",
      desc: "Smart charging systems for energy efficiency and battery longevity.",
      img: "https://micropower-group.com/storage/media/729/729-fit-844x731.webp",
      applications: [
        "Ensures efficient power management.",
        "Reduces charging time with optimized algorithms.",
        "Supports opportunity and fast charging.",
        "Protects battery health and temperature.",
      ],
    },
    {
      title: "Battery Management Systems",
      desc: "Monitoring and control solutions for optimized battery performance.",
      img: "https://ek-robotics.com/fileadmin/_processed_/d/1/csm_ek_robotics-agv-amr-x_move_1200-hubbalken-ladestation-rgb_971386577b.jpg",
      applications: [
        "Monitors charging status and cell health.",
        "Prevents overcharging and deep discharge.",
        "Integrates with fleet management software.",
        "Enhances energy usage and safety compliance.",
      ],
    },
  ];

  // ✅ COMMERCIAL SOLUTIONS
  const commercialSolutions = [
    {
      title: "Retail Shelving Systems",
      desc: "Stylish and modular display systems for modern retail environments.",
      img: "https://images.unsplash.com/photo-1593085512428-5cc0f42b3c95",
      applications: [
        "Used in supermarkets, pharmacies, and showrooms.",
        "Customizable configurations and finishes.",
        "Supports both light and heavy merchandise.",
        "Designed for aesthetic and durability.",
      ],
    },
    {
      title: "Parking Barriers",
      desc: "Automatic barriers and gates for secure and efficient parking control.",
      img: "https://images.unsplash.com/photo-1617687617038-f07f6d1f5149",
      applications: [
        "Deployed in parking lots and gated facilities.",
        "Supports RFID, ticketing, or sensor systems.",
        "Weatherproof and low maintenance.",
        "Improves security and access control.",
      ],
    },
    {
      title: "Rolling Shutters",
      desc: "Heavy-duty shutters for storefronts and industrial applications.",
      img: "https://images.unsplash.com/photo-1623394213591-1f4d0a6f7f29",
      applications: [
        "Provides security for warehouses and shops.",
        "Available in manual or motorized types.",
        "Made with galvanized or stainless steel slats.",
        "Resists impact, weather, and corrosion.",
      ],
    },
  ];

  const solutionsData = {
    MHE: mheSolutions,
    "Cold Chain": coldChainSolutions,
    "Docks & Doors": docksDoorsSolutions,
    "Plastic Pallets, Bins and Crates": plasticpallets,
    "Industrial Storage": industrialStorageSolutions,
    "Industrial Batteries and Chargers": batteriesChargersSolutions,
    "Automation Solutions": automationSolutions,
    "Commercial Solutions": commercialSolutions,
  };

  const currentSolutions = solutionsData[activeTab] || [];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <Header dark={dark} setDark={setDark} />

      <main className="flex-1 px-6 justify-center md:px-20 lg:px-16 py-20 w-full mx-auto transition-all duration-700 ease-out">
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-green-500">Solutions</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive suite of solutions designed to optimize
            your operations and drive efficiency.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex justify-start md:justify-center border-b border-primary/30 w-full mb-10 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-4 sm:px-6 pb-3 text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab
                    ? "text-green-500 border-b-[3px] border-green-500"
                    : "text-gray-500 hover:text-green-500 border-b-[3px] border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-12">
          {currentSolutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center rounded-2xl overflow-hidden border border-primary/20 dark:border-primary/30 
        bg-background-light dark:bg-background-dark shadow-md hover:shadow-lg 
        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image Section */}
              <div
                className="w-full md:w-1/2 h-56 sm:h-64 md:h-[32em] bg-center bg-cover"
                style={{ backgroundImage: `url(${solution.img})` }}
              ></div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
                  {solution.desc}
                </p>

                {/* Applications Section */}
                {solution.applications && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-green-500 mb-2">
                      Applications
                    </h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                      {solution.applications.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionsPage;
