export const getImageUrl = (path) => {
  if (!path) return '';
  const cleanPath = path.replace(/^\.\//, '').replace(/^\//, '');
  const baseUrl = import.meta.env.BASE_URL || '/';
  const formattedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${formattedBase}${cleanPath}`;
};

export const BUSINESS_INFO = {
  name: "SUN Mats Works",
  brandSubtitle: "SUN Wallpaper – CarMat – Floor Mat",
  categories: "Wallpaper Installer | Car Mats | Floor Mats | Interior Flooring | Artificial Grass | Carpets | Interior Surface Solutions",
  phone: "+91 90873 68191",
  secondaryPhone: "+91 97912 14530",
  whatsappNumber: "919087368191",
  instagram: "https://www.instagram.com/sun_mats_works/",
  location: "MPR9+P2W, Nethaji Rd, Engineers Colony, Raja Nagar, Melapalayam, Tirunelveli, Tamil Nadu 627005, India",
  shortLocation: "Melapalayam, Tirunelveli",
  googleRating: 4.9,
  reviewCount: 19,
  founderName: "Varudhan",
  founderRole: "Founder — SUN Mats Works",
  founderQuote: "Quality is not just what we sell. It's what we deliver.",
  whatsappMessage: "Hi SUN Mats Works, I'm interested in your products/services. I would like to know more about pricing and availability."
};

export const HERO_DATA = {
  eyebrow: "SUN MATS WORKS • MELAPALAYAM • TIRUNELVELI",
  headingMain: "Premium Surfaces. Beautiful Spaces.",
  headingSub: "Premium Wallpaper, Car Mats, Floor Mats & Interior Surface Solutions.",
  paragraph: "Transform your car and interiors with premium-quality mats, wallpapers, carpets, artificial grass and professional installation services in Tirunelveli.",
  bgImage: "./images/hero_luxury_interior.jpg"
};

export const STATS = [
  { value: "4.9★", label: "Google Rating", numericValue: 4.9, suffix: "★" },
  { value: "19+", label: "Customer Reviews", numericValue: 19, suffix: "+" },
  { value: "100+", label: "Projects / Installations", numericValue: 100, suffix: "+" },
  { value: "100%", label: "Professional Service", numericValue: 100, suffix: "%" }
];

export const SERVICES = [
  {
    id: "car-mats",
    title: "CAR MATS",
    description: "Premium custom-fit car mats designed for style, comfort, durability and luxury interior protection.",
    image: "./images/car_mats_luxury.jpg",
    features: ["Custom 7D/9D Leatherette", "Precision Vehicle Fit", "All-Weather Protection", "Easy Clean & Waterproof"]
  },
  {
    id: "floor-mats",
    title: "FLOOR MATS",
    description: "Stylish and durable floor mat solutions for residential homes, offices, and commercial establishments.",
    image: "./images/client_floormat_rolls.png",
    features: ["Heavy Duty Rubber & PVC", "Anti-Slip Safety Texture", "Custom Roll Cut Sizes", "Residential & Commercial"]
  },
  {
    id: "wallpaper",
    title: "WALLPAPER",
    description: "Modern wallpaper designs with professional seamless installation and flawless wall finishing.",
    image: "./images/client_wallpaper_rolls.png",
    features: ["3D Textured & Geometric", "Washable Vinyl Material", "Seamless Expert Fitting", "Hundreds of Modern Patterns"]
  },
  {
    id: "carpet",
    title: "CARPET",
    description: "Premium carpet solutions for plush homes, corporate offices, prayer halls and commercial interiors.",
    image: "./images/carpet_luxury_showcase.jpg",
    features: ["Mosque & Auditorium Carpets", "Luxury Wall-to-Wall Rolls", "Soft Foot Comfort", "Stain-Resistant Fiber"]
  },
  {
    id: "artificial-grass",
    title: "ARTIFICIAL GRASS",
    description: "Low-maintenance, evergreen artificial grass turf for lush indoor balconies, terraces and gardens.",
    image: "./images/artificial_grass_showcase.jpg",
    features: ["UV-Resistant Turf", "Drainage Backing", "Zero Watering Required", "Balcony & Vertical Garden"]
  },
  {
    id: "interior-flooring",
    title: "INTERIOR SURFACE SOLUTIONS",
    description: "Custom material and surface solutions tailored to your unique space and aesthetic requirements.",
    image: "./images/interior_surface_luxury.jpg",
    features: ["Vinyl & SPC Plank Flooring", "Modular Ceilings & Partitions", "Blinds & Mesh Screens", "Complete Surface Styling"]
  }
];

export const WHY_CHOOSE_US = [
  {
    num: "01",
    title: "Premium Materials",
    description: "We source only high-grade, durable wallpapers, mats, and carpets built to last."
  },
  {
    num: "02",
    title: "Professional Finish",
    description: "Impeccable fitting with clean edges, seamless wallpaper joints, and precision car mat tucking."
  },
  {
    num: "03",
    title: "Experienced Installation",
    description: "Skilled local technicians handling every project with care, speed, and craftsmanship."
  },
  {
    num: "04",
    title: "Stylish & Modern Designs",
    description: "Carefully curated catalog aligned with modern interior architecture and automotive luxury."
  },
  {
    num: "05",
    title: "Reasonable Pricing",
    description: "Transparent local pricing delivering maximum value without compromising on quality."
  },
  {
    num: "06",
    title: "Customer Satisfaction",
    description: "Proudly backed by a 4.9★ Google rating from happy homeowners and car enthusiasts."
  }
];

export const PROJECTS_GALLERY = [
  {
    id: "proj-1",
    title: "On-Site Geometric Wallpaper Accent Fitting",
    category: "Wallpaper",
    categorySlug: "wallpaper",
    image: "./images/real_wallpaper_install.png",
    isClientPhoto: true,
    location: "Tirunelveli Home Installation",
    details: "Authentic SUN Mats Works technician fitting precision geometric pattern wallpaper on upper living room accent walls."
  },
  {
    id: "proj-2",
    title: "Gold Damask Wallpaper & Wood Grain Plank Fitting",
    category: "Wall Design",
    categorySlug: "wall-design",
    image: "./images/real_gold_wallpaper.png",
    isClientPhoto: true,
    location: "Melapalayam Residence",
    details: "Elegantly finished gold damask wallpaper half-wall installation complemented by wood grain floor planking."
  },
  {
    id: "proj-3",
    title: "Mosque & Prayer Hall Royal Blue Runner Carpet",
    category: "Carpet",
    categorySlug: "carpet",
    image: "./images/real_mosque_carpet.png",
    isClientPhoto: true,
    location: "Melapalayam Mosque Project",
    details: "Plush royal blue patterned prayer carpet runner with red border installed across prayer hall."
  },
  {
    id: "proj-4",
    title: "Villa Courtyard Pavers with Artificial Grass Grid",
    category: "Artificial Grass",
    categorySlug: "artificial-grass",
    image: "./images/real_grass_pavers.png",
    isClientPhoto: true,
    location: "Engineers Colony Villa",
    details: "Evergreen artificial grass turf strips installed between red outdoor paver blocks in courtyard."
  },
  {
    id: "proj-5",
    title: "Commercial Salon Grey Wood Vinyl & Turf Wall",
    category: "Interior Flooring",
    categorySlug: "interior-flooring",
    image: "./images/real_salon_vinyl.png",
    isClientPhoto: true,
    location: "Raja Nagar Commercial Salon",
    details: "Waterproof grey oak vinyl plank flooring fitted alongside green artificial grass wall accents."
  },
  {
    id: "proj-6",
    title: "Showroom Floor Mat Rolls & Entrance Mats",
    category: "Floor Mats",
    categorySlug: "floor-mats",
    image: "./images/client_floormat_rolls.png",
    isClientPhoto: true,
    location: "Nethaji Road Showroom",
    details: "Authentic SUN Mats Works showroom inventory featuring rubber mats, entrance mats, and custom cut rolls."
  },
  {
    id: "proj-7",
    title: "Custom 7D Executive Leather Car Mat Installation",
    category: "Car Mats",
    categorySlug: "car-mats",
    image: "./images/car_mats_luxury.jpg",
    isClientPhoto: false,
    location: "Tirunelveli Auto Detailing",
    details: "Custom molded luxury 7D floor mat with gold contrast stitching for complete vehicle footwell coverage and protection."
  },
  {
    id: "proj-8",
    title: "On-Site Professional Adhesive & Surface Fitting",
    category: "Custom Installation",
    categorySlug: "custom-installation",
    image: "./images/client_interior_installation.png",
    isClientPhoto: true,
    location: "Melapalayam Commercial Site",
    details: "Skilled SUN Mats Works technicians applying custom adhesive and fitting vinyl surface mats and wallpapers."
  },
  {
    id: "proj-9",
    title: "Showroom Display & Sample Catalog Board Showcase",
    category: "Floor Mats",
    categorySlug: "floor-mats",
    image: "./images/client_catalog_board.png",
    isClientPhoto: true,
    location: "Melapalayam Showroom",
    details: "Authentic SUN Mats Works showroom display board showcasing vinyl patterns, rubber floor mats, and custom texture samples."
  }
];

export const FEATURED_PROJECT = {
  title: "Quality You Can See.",
  projectType: "Full Interior Surface & Flooring Fitting",
  service: "Wallpaper + Floor Mats + Carpet",
  location: "Melapalayam, Tirunelveli",
  installation: "SUN Mats Works Master Installer Team",
  description: "A complete interior transformation showcasing precision edge fitting, premium material selection, and flawless execution for a modern commercial facility in Melapalayam.",
  image: "./images/client_shopfront_night.png"
};

export const REVIEWS = [
  {
    quote: "Good quality in low price... Good service.",
    author: "Verified Customer",
    rating: 5,
    tag: "Google Review"
  },
  {
    quote: "Excellent customer service and very reasonable prices.",
    author: "Verified Homeowner",
    rating: 5,
    tag: "Google Review"
  },
  {
    quote: "Good work and time keeping.",
    author: "Satisfied Client",
    rating: 5,
    tag: "Google Review"
  },
  {
    quote: "One of the best shops in Melapalayam.",
    author: "Local Resident",
    rating: 5,
    tag: "Google Review"
  },
  {
    quote: "Best shop for wallpaper & floor mat.",
    author: "Car & Interior Enthusiast",
    rating: 5,
    tag: "Google Review"
  }
];
