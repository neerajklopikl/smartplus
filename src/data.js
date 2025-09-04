// src/data.js

export const categoryData = [
  {
    id: 'grocery',
    image: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png',
    name: 'Grocery',
    arrow: false,
  },
  {
    id: 'mobiles',
    image: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png',
    name: 'Mobiles',
    arrow: false,
  },
  {
    id: 'fashion',
    image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png',
    name: 'Fashion',
    arrow: true,
    menu: {
      column1: [
        { name: "Men's Top Wear", subItems: ["All", "Men's T-Shirts", "Men's Casual Shirts", "Men's Formal Shirts", "Men's Kurtas", "Men's Ethnic Sets", "Men's Blazers"] },
        { name: "Men's Bottom Wear", subItems: ["All", "Men's Jeans", "Men's Trousers", "Men's Shorts & 3/4ths", "Men's Cargos"] },
        { name: "Women Ethnic", subItems: ["All", "Women Sarees", "Women Kurtas & Kurtis", "Ethnic Dresses", "Women Gowns", "Lehenga Cholis"] },
        { name: "Women Western", subItems: ["All", "Women Tops", "Women Dresses", "Women Jeans", "Women T-shirts & Polo T-shirts", "Women Trousers"] },
        { name: "Watches and Accessories", subItems: ["Men & Women Watches", "Men & Women Sunglasses", "Wallets", "Men & Women Belts"] },
      ],
      column2: [
        { name: "Men's Footwear", subItems: ["All", "Men's Sports Shoes", "Men's Casual Shoes", "Men's Formal Shoes", "Men's Sandals & Floaters", "Men's Slippers & Flip Flops"] },
        { name: "Women's Footwear", subItems: ["All", "Women Flats", "Women Heels", "Women Wedges", "Women Sports Shoes", "Women Casual Shoes"] },
        { name: "Bags, Suitcases & Luggage", subItems: ["All", "Backpacks", "Suitcases & Trolleys", "Duffle Bags", "Handbags"] },
        { name: 'Kids', subItems: ["All", "Girls Dresses", "Boys & Girls T-shirts", "Boys & Girls Combosets", "Infant Wear"] },
      ]
    }
  },
  {
    id: 'electronics',
    image: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png',
    name: 'Electronics',
    arrow: true,
    menu: {
      column1: [
        { name: 'Audio', subItems: ["All", "Bluetooth Headphones", "Wired Headphones", "Bluetooth Speakers", "Soundbars", "Home Theatres"] },
        { name: 'Cameras & Accessories', subItems: ["All", "DSLR & Mirrorless", "Sports & Action", "Instant Cameras", "Camera lenses", "Drones"] },
        { name: 'Computer Peripherals', subItems: ["All", "Printers", "Monitors", "Projectors", "Ink Cartridges", "Keyboards", "Mouse"] },
        { name: 'Gaming', subItems: ["All", "Gaming Consoles", "Gaming Keyboards", "Gaming Mousepads", "Controllers", "Membership Cards"] },
      ],
      column2: [
        { name: 'Health & Personal Care', subItems: ["All", "Trimmers", "Shavers", "Hair Straighteners", "Epilators", "Digital Thermometers"] },
        { name: 'Laptop and Desktop', subItems: ["All", "Laptops", "Desktops", "Gaming Laptops", "All In One PCs"] },
        { name: 'Mobile Accessory', subItems: ["All", "Plain Cases", "Designer Cases", "Screen Guards", "Mobile Cable", "Mobile Pouches"] },
        { name: 'Powerbank', subItems: ["All"] },
        { name: 'Smart Home Automation', subItems: ["All", "Smart Assistants", "Smart Lights", "Smart Cameras", "Smart Door Locks"] },
      ]
    }
  },
  {
    id: 'home',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/side-table/o/t/o/30-mdf-40-4-76543-bedside-table-future-generation-v-group-40-original-imah52fdgngzazmw.jpeg?q=70',
    name: 'Home & Furniture',
    arrow: true,
    menu: {
      column1: [
        { name: 'Living Room Furniture', subItems: ["All", "Sofas", "Sofa Beds", "TV Units", "Bookshelves", "Shoe Racks"] },
        { name: 'Kitchen & Dining', subItems: ["All", "Dining Tables", "Dinnerware", "Cookware", "Knives, Choppers & Cutters"] },
        { name: 'Bedroom Furniture', subItems: ["All", "Mattresses", "Beds", "Wardrobes", "Side Tables"] },
        { name: 'Home Decor', subItems: ["All", "Paintings", "Clocks", "Wall Shelves", "Stickers & Wallpapers"] },
      ],
      column2: [
        { name: 'Tools & Utility', subItems: ["All", "Hand tools", "Power Tools", "Measuring Tools", "Home Storage & Organizers"] },
        { name: 'Work Space Furniture', subItems: ["All", "Office Chairs", "Office Tables", "Bookcases"] },
        { name: 'Kids Furniture', subItems: ["All", "Kids' Beds", "Kids' Wardrobes", "Kids' Seating"] },
        { name: 'Furnishings', subItems: ["All", "Bed Linens", "Curtains & Accessories", "Cushions & Pillows"] },
      ]
    }
  },
  {
    id: 'appliances',
    image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg',
    name: 'Appliances',
    arrow: false,
  },
  {
    id: 'travel',
    image: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png',
    name: 'Flight Bookings',
    arrow: false,
  },
  {
    id: 'beauty',
    image: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png',
    name: 'Beauty, Toys & More',
    arrow: true,
    menu: {
      column1: [
        { name: 'Beauty & Personal Care', subItems: ["View All", "Bath & Oral Care", "Personal Hygiene", "Eye Makeup", "Face Makeup"] },
        { name: 'Men\'s Grooming', subItems: ["All", "Trimmers", "Shavers", "Grooming Kits", "Beard Care & Grooming"] },
        { name: 'Food & Drinks', subItems: ["All", "Nuts & Dry Fruits", "Chocolates", "Snacks Corner", "Ready to Cook & Eat"] },
        { name: 'Nutrition & Health Care', subItems: ["All", "Masks", "Ayurvedic Supplements", "Health Drinks", "Vitamin Supplements"] },
      ],
      column2: [
        { name: 'Baby Care', subItems: ["All", "Baby Diapers", "Baby Wipes", "Baby Skin Care", "Baby Bath Essentials"] },
        { name: 'Toys & School Supplies', subItems: ["All", "Remote Control Toys", "Soft Toys", "Puzzles", "Board Games"] },
        { name: 'Sports & Fitness', subItems: ["All", "Fitness Equipment", "Yoga Mats", "Dumbbells", "Shakers & Sippers"] },
        { name: 'Books', subItems: [] },
        { name: 'Music', subItems: [] },
        { name: 'Stationery & Office Supplies', subItems: [] },
      ]
    }
  },
  {
    id: 'two_wheelers',
    image: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png',
    name: 'Two Wheelers',
    arrow: true,
    menu: {
      column1: [
          { name: 'Petrol Vehicles', subItems: ["All", "Motorcycles", "Scooters"] },
          { name: 'Electric Vehicles', subItems: ["All", "Electric Scooters", "Electric Cycles"] },
      ],
      column2: [
          { name: 'Riding Gear', subItems: ["All", "Helmets", "Riding Jackets", "Riding Gloves"] },
          // UPDATED THIS LINE
          { name: 'Vehicle Parts & Accessories', subItems: ["All", "Spare Parts", "Lubricants & Oils"] },
      ]
    }
  },
];