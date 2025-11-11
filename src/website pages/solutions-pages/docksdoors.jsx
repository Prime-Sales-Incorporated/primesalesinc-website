import React from "react";

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

const DocksDoors = () => (
  <div className="flex flex-col gap-12">
    {docksDoorsSolutions.map((solution, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center rounded-2xl overflow-hidden border border-primary/20 dark:border-primary/30 
        bg-background-light dark:bg-background-dark shadow-md hover:shadow-lg 
        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
      >
        <div
          className="w-full md:w-1/2 h-56 sm:h-64 md:h-[32em] bg-center bg-cover"
          style={{ backgroundImage: `url(${solution.img})` }}
        ></div>
        <div className="w-full md:w-1/2 p-6 sm:p-8 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {solution.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
            {solution.desc}
          </p>
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
        </div>
      </div>
    ))}
  </div>
);

export default DocksDoors;
