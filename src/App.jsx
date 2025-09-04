// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CategoryNav from './CategoryNav';
import Carousel from './Carousel';
import ProductRow from './ProductRow';
import ProductListing from './ProductListing';
import Footer from './Footer';
import './App.css';
import ProductDetail from './ProductDetail'; // 1. Import ProductDetail

// Data for the first product row
const bestOfElectronicsData = [
    { id: 1, category: 'earbuds', image: 'https://rukminim2.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60', title: 'Earbuds', price: 'From ₹1,099' },
    { id: 1, category: 'projectors', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/projector/f/j/p/android-11-0-smart-projector-1080p-4k-support-2x-brighter-2-4g-original-imah95p49zupkq2g.jpeg?q=70', title: 'Projector', price: 'From ₹6,990' },
    { id: 1, category: 'monitors', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/6/o/k/-original-imah9hc5md7furca.jpeg?q=70', title: 'Monitors', price: 'From ₹6,599' },
    { id: 1, category: 'cameras', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70', title: 'Top Mirrorless Cameras', price: 'Shop Now' },
    { id: 1, category: 'printers', image: 'https://rukminim2.flixcart.com/image/612/612/k4a7c7k0/printer/y/j/z/canon-e3370-original-imafn2wyyxjjvzd6.jpeg?q=70', title: 'Printers', price: 'From ₹2,339' },
    { id: 1, category: 'speakers', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/mobile-tablet-speaker/o/o/n/wireless-rechargeable-brand-f-ferons-original-imahb9dgbys9syyz.jpeg?q=70', title: 'Best Selling Speakers', price: 'From ₹499' },
    { id: 2, category: 'monitors', image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/y/6/c/-original-imahbeq4vaahxt85.jpeg?q=70', title: 'Gaming Monitors', price: 'From ₹14,999' },
    { id: 1, category: 'powerbanks', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/j/u/w/10000-mah-25-w-mini-pocket-size-power-bank-light-blue-lithium-original-imahaf6fgqffvj23.jpeg?q=70', title: 'Power Banks', price: 'From ₹699' }
];
// Data for the second product row
const beautyFoodToysData = [
  {
    id: 1,
    category: 'electric_cycles',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/electric-cycle/w/a/a/udaanblue-led-white-13-23-5-green-single-speed-original-imah9x8xu743hkqv.jpeg?q=70',
    title: 'Electric Cycle',
    price: 'Up to 40% OFF'
  },
  {
    id: 1,
    category: 'stationery',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/scrapbook-kit/v/8/t/346pcs-journal-supplies-kit-vintage-scrapbook-stickers-pack-for-original-imahbfdbbwjym3ga.jpeg?q=70',
    title: 'Top Selling Stationery',
    price: 'From ₹49'
  },
  {
    id: 1,
    category: 'remote_control_toys',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/o/b/f/remote-control-super-high-speed-racing-car-with-stylish-looks-original-imahd797xfadzheg.jpeg?q=70',
    title: 'Remote Control Toys',
    price: 'Up to 80% OFF'
  },
  {
    id: 1,
    category: 'gym_essentials',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kit/q/l/n/gym-duffle-polyester-bag-no-excuses-with-wrist-band-gloves-original-imah6ptgq7ezcvh5.jpeg?q=70',
    title: 'Gym Essentials',
    price: 'From ₹139'
  },
  {
    id: 1,
    category: 'kitchen_appliances',
    image: 'https://rukminim2.flixcart.com/image/612/612/kza68i80/chopper/o/g/h/gg-500-gopi-original-imagbbgntg89yj6w.jpeg?q=70',
    title: 'Modern Kitchen Appliances',
    price: 'Up to 60% OFF'
  },
  {
    id: 1,
    category: 'books',
    image: 'https://rukminim2.flixcart.com/image/612/612/kynb6vk0/regionalbooks/i/u/j/mindset-deep-work-set-of-two-original-imagatbmangddjzm.jpeg?q=70',
    title: 'Bestselling Books',
    price: 'From ₹99'
  },
  {
    id: 1,
    category: 'mobile_accessories',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/c/u/c/-original-imah3afneszgnrt6.jpeg?q=70',
    title: 'Mobile Accessories',
    price: 'Up to 70% OFF'
  },
  {
    id: 1,
    category: 'fashion',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/d/b/u/34-aj-n-jaar-fashion-original-imah7n7shgghdxhh.jpeg?q=70',
    title: 'Trendy Fashion',
    price: 'Up to 50% OFF'
  },
  {
    id: 1,
    category: 'home_decor',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wall-decoration/h/6/3/wooden-wall-decor-hangings-living-room-bedroom-kitchen-office-6-original-imah7myvb6xbvbcy.jpeg?q=70',
    title: 'Stylish Home Decor',
    price: 'From ₹199'
  },
  {
    id: 1,
    category: 'personal_care',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/v/z/d/200-ocean-for-men-fights-acne-pimple-brighten-skin-all-skin-original-imah5gh63zgy8ph3.jpeg?q=70',
    title: 'Personal Care Essentials',
    price: 'Up to 30% OFF'
  }
];
const furnitureDealsData = [
  {
    id: 1,
    category: 'office_chairs',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/0/r/w/1-teak-sagun-58-42-xford-ergonomic-leatherette-executive-high-original-imaha2pdgjaz2hju.jpeg?q=70',
    title: 'Office Study Chairs',
    price: 'From ₹1,890'
  },
  {
    id: 1,
    category: 'beds',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bed/1/v/w/-original-imagrxnkh6mauq7n.jpeg?q=70',
    title: 'Beds',
    price: 'From ₹1,790'
  },
  {
    id: 1,
    category: 'sofa_beds',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-bed/q/3/s/double-56-3-seater-maroon-cotton-178-no-10-fa5023-moshi-maroon-original-imahcbyuyuznzk78.jpeg?q=70',
    title: 'Sofa Beds',
    price: 'From ₹6,099'
  },
  {
    id: 2,
    category: 'office_chairs',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/office-study-chair/8/l/6/1-teak-sagun-58-42-ox-t-beaatho-121-92-original-imaha2pd5bnvfrdh.jpeg?q=70',
    title: 'Executive Chairs',
    price: 'From ₹3,899'
  },
  {
    id: 1,
    category: 'wardrobes',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wardrobe-closet/m/2/r/no-45-7-121-9-particle-board-103-ws-4-kydn-cwf-rl-brown-wooden-original-imahdzz7rtgnth9f.jpeg?q=70',
    title: 'Wardrobes',
    price: 'From ₹8,500'
  },
  {
    id: 1,
    category: 'dining_sets',
    image: 'https://rukminim2.flixcart.com/image/612/612/kxjav0w0/dining-set/f/i/a/114-3-white-0-114-3-rosewood-sheesham-20-rectangle-44-45-86-36-original-imag9yzrfqg7hcbj.jpeg?q=70',
    title: 'Dining Sets',
    price: 'From ₹12,000'
  },
  {
    id: 1,
    category: 'shoe_racks',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe-rack/8/p/d/28-58-1-2-shoerack-03-tajcollections-blue-whiet-75-original-imah3gybmzc5rruc.jpeg?q=70',
    title: 'Shoe Racks',
    price: 'From ₹1,200'
  },
  {
    id: 1,
    category: 'book_shelves',
    image: 'https://rukminim2.flixcart.com/image/612/612/kzvlua80/book-shelf/h/q/g/carbon-steel-pb-fphs-cover-bookshelf-2-flipkart-perfect-homes-original-imagbsfmvzjhwzvz.jpeg?q=70',
    title: 'Book Shelves',
    price: 'From ₹2,500'
  },
  {
    id: 1,
    category: 'coffee_tables',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/coffee-table/j/y/k/55-particle-board-90-14-lgct0006wew-flipkart-perfect-homes-35-original-imahaartkehrvwsa.jpeg?q=70',
    title: 'Coffee Tables',
    price: 'From ₹1,500'
  },
  {
    id: 1,
    category: 'dressing_tables',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dressing-table/o/1/m/40-30-particle-board-120-kosmo-value-dressing-table-walnut-original-imah492fp4d7qydf.jpeg?q=70',
    title: 'Dressing Tables',
    price: 'From ₹3,000'
  }
];
const topDealsData = [
  {
    id: 1,
    category: 'camera_bags',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/camera-bag/backpack/c/l/8/dslr-slr-camera-lens-shoulder-backpack-case-for-canon-nikon-original-imah3haqaezgr6pr.jpeg?q=70',
    title: 'Camera Bags',
    price: 'Min 50% Off'
  },
  {
    id: 1,
    category: 'womens_footwear',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/0/f/u/9-wl7573-ladies-prl-9-walkaroo-purple-original-imah9fzxgfmsnmmt.jpeg?q=70',
    title: 'Allen Solly & Van He...',
    price: 'Min. 40% Off'
  },
  {
    id: 1,
    category: 'cables',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bp-monitor/a/4/1/-original-imah6tzmqw9ubszx.jpeg?q=70',
    title: 'Grab Now',
    price: 'From ₹49'
  },
  {
    id: 1,
    category: 'instant_cameras',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/instant-camera/t/3/q/na-na-4856465-sst-original-imagzjcqkq6mczsg.jpeg?q=70',
    title: 'Instax Cameras',
    price: 'From ₹3,999'
  },
  {
    id: 1,
    category: 'laptops',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/h/s/-original-imahcd9hfhrgeen6.jpeg?q=70',
    title: 'Laptops & Accessories',
    price: 'Up to 60% Off'
  },
  {
    id: 1,
    category: 'headphones',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/b/y/9/nb121-pods-upto-40-hours-playtime-type-c-fast-charging-dual-original-imahd8bgcdwr3pgf.jpeg?q=70',
    title: 'Premium Headphones',
    price: 'Min 30% Off'
  },
  {
    id: 2,
    category: 'earbuds',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/d/l/-original-imahd2rhttvvwugh.jpeg?q=70',
    title: 'Earbuds',
    price: 'Up to 50% Off'
  },
  {
    id: 2,
    category: 'powerbanks',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/power-bank/x/y/f/-original-imah2h6hvtzqjzaq.jpeg?q=70',
    title: 'High Capacity Power Banks',
    price: 'From ₹499'
  },
  {
    id: 2,
    category: 'printers',
    image: 'https://rukminim2.flixcart.com/image/612/612/k4a7c7k0/printer/y/j/z/canon-e3370-original-imafn2wyyxjjvzd6.jpeg?q=70',
    title: 'Printers & Scanners',
    price: 'Min 25% Off'
  },
  {
    id: 2,
    category: 'speakers',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/mobile-tablet-speaker/f/v/m/ws-065-f-ferons-original-imah6cp7nzfyhruj.jpeg?q=70',
    title: 'Bluetooth Speakers',
    price: 'Up to 70% Off'
  }
];
const pickYourStylesData = [
  {
    id: 1,
    category: 'sweatshirts',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/z/b/i/m-togrhnfulsweat-st144-tripr-original-imah77r6v4qvh2gx.jpeg?q=70',
    title: 'Sweatshirts, Hoodies...',
    price: 'From ₹249'
  },
  {
    id: 1,
    category: 'track_pants',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/k/c/l/32-ptp-05-005-poplens-original-imah4c5zrutbykdh.jpeg?q=70',
    title: 'Nivia, Van Heusen Fl...',
    price: 'Up to 60% Off'
  },
  {
    id: 1,
    category: 'tshirts',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/k/l/m-tmr-gy-ogrrnplaind164-tripr-original-imah7usgu45zyd5f.jpeg?q=70',
    title: 'Being Human, Ruf & ...',
    price: 'Min. 50% Off'
  },
  {
    id: 2,
    category: 'sweatshirts',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/a/p/5/m-hoodi-greenflair-original-imah4hn5ghb8euyc.jpeg?q=70',
    title: 'Top Brands',
    price: 'Min. 40% Off'
  },
  {
    id: 1,
    category: 'jeans',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/8/k/x/32-afl-baggy-light-blue-aflash-original-imah53fsvkjyuzhk.jpeg?q=70',
    title: 'Denim Jeans',
    price: 'From ₹499'
  },
  {
    id: 1,
    category: 'shirts',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/p/z/o/l-jypt-dhaduk-original-imah7u6amafqgbwx.jpeg?q=70',
    title: 'Formal & Casual Shirts',
    price: 'Up to 70% Off'
  },
  {
    id: 1,
    category: 'dresses',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/d/m/j/xl-31242821-here-now-original-imahbba8sjcyzaww.jpeg?q=70',
    title: 'Trendy Dresses',
    price: 'Min. 40% Off'
  },
  {
    id: 1,
    category: 'jackets',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/c/c/t/xl-1-no-jkt1-vebnor-original-imahcv4sdhyb4vxj.jpeg?q=70',
    title: 'Winter Jackets',
    price: 'Up to 60% Off'
  },
  {
    id: 1,
    category: 'skirts',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/skirt/h/i/9/7-8-years-1-rb-45-r-cube-original-imah69dxunbk4fdf.jpeg?q=70',
    title: 'Stylish Skirts',
    price: 'From ₹399'
  },
  {
    id: 1,
    category: 'footwear',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/2/a/h/10-strap-5o53-10-rising-wolf-brown-original-imahd7yts8gxkhc7.jpeg?q=70',
    title: 'Footwear Collection',
    price: 'Min. 50% Off'
  }
];

const HomePage = () => (
  <>
    <CategoryNav />
    <Carousel />
    {/* Render the reusable component with different props */}
    <ProductRow title="Best of Electronics" data={bestOfElectronicsData} />
    <ProductRow title="Beauty, Food, Toys & More" data={beautyFoodToysData} />
    <ProductRow title="Furniture Deals" data={furnitureDealsData} />
    <ProductRow title="Top Deals" data={topDealsData} />
    <ProductRow title="Pick Your Styles" data={pickYourStylesData} />
  </>
);

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:categoryName" element={<ProductListing />} />
        {/* 2. Add the new route for the product detail page */}
        <Route path="/product/:categoryName/:productId" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;