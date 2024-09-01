const restaurants = [
  {
    info: {
      id: "65797",
      name: "Leon's - Burgers & Wings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "5934",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "59627",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "ntjshqsv2k7vxtv7vmib",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹251 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "23678",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "671928",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
      locality: "7th Block",
      areaName: "Koramangla",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "656392",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/e0ab56c3-3d8e-4214-8705-240795d737c0_656392.jpg",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "10576",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
      locality: "6th Block",
      areaName: "Koramangala",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
    },
  },
  {
    info: {
      id: "272031",
      name: "Baskin Robbins",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹150 for two",
      cuisines: ["Desserts"],
      avgRating: 4.6,
      veg: true,
    },
  },
  {
    info: {
      id: "289266",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/24/a6a25370-d287-4ffd-a4b7-d5735e5ed007_289266.jpg",
      locality: "6TH BLOCK",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Home Food"],
      avgRating: 4.4,
    },
  },
  {
    info: {
      id: "272239",
      name: "EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/bf5211ad-bf62-43ed-a3f2-02985ca38b25_272239.JPG",
      locality: "BTM Layout",
      areaName: "Koramangala",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "50842",
      name: "CakeZone Patisserie",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/18/f06a7cae-28a6-48d5-b3a7-9f077175bc74_50842.jpg",
      locality: "KORAMANGLA",
      areaName: "6th Block KORAMANGLA",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "29350",
      name: "Frozen Bottle",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/42b05cae-75a7-41d6-8b1f-6a7b178583a5_29350.jpg",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "8244",
      name: "Polar Bear",
      cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
    },
  },
  {
    info: {
      id: "172335",
      name: "Mad Over Donuts",
      cloudinaryImageId: "0ae2b136fc38dc02491952c6bba2773b",
      locality: "5TH SECTOR",
      areaName: "HSR Layout",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Sweets", "Bakery"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "63381",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/76b4a16b-9c1a-4b51-84bb-6ae7e5b54d4e_63381.JPG",
      locality: "7th Block",
      areaName: "Koramangala",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.3,
      veg: true,
    },
  },
  {
    info: {
      id: "669",
      name: "Chai Point",
      cloudinaryImageId: "vldpinypn5ra0unkqga3",
      locality: "BTM Layout",
      areaName: "BTM Layout",
      costForTwo: "₹150 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "South Indian",
      ],
      avgRating: 4.4,
    },
  },
  {
    info: {
      id: "50467",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/470d804d-7718-4f74-8504-963c0cac1672_50467.jpg",
      locality: "1st Block",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "263485",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
      locality: "Kormangala 8th Block",
      areaName: "Kormangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
      ],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "10820",
      name: "California Burrito",
      cloudinaryImageId: "b58sysfvskincfwmgoqd",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹250 for two",
      cuisines: [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
      ],
      avgRating: 4.6,
    },
  },
  {
    info: {
      id: "11211",
      name: "Taco Bell",
      cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
      locality: "Koramangala",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.4,
    },
  },
];

export default restaurants;
