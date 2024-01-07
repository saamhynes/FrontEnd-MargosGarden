/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // c1 - Live Flowers
  {
    id: "p1_c1",
    name: "Marigold",
    description: "Marigold Plant Yellow Flower in 4.5in growers pot",
    price: 737,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p2_c1",
    name: "Stargazer Lily",
    description: "Stargazer Lily Plant Deep Pink Flower in 5in pot",
    price: 1599,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p3_c1",
    name: "Hibiscus",
    description: "Hibiscus Assorted Colour Flower in 6in pot",
    price: 2999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p4_c1",
    name: "Carnation",
    description: "Carnation Pink Colour Flower in 2.5in pot",
    price: 299,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p5_c1",
    name: "Pansy",
    description: "Pansy Purple and Rellow Flower in 3in pot",
    price: 299,
    discontinued: false,
    categories: ["c1"],
  },
  // c2 - Indoor Plants
  {
    id: "p1_c2",
    name: "Figleaf",
    description: "Fiddle Leaf Fig Indoor Plant in 10in white planter",
    price: 7899,
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p2_c2",
    name: "Orchid",
    description: "Phalaenopsis Orchid in grower pot",
    price: 2599,
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p3_c2",
    name: "Staghorn Fern",
    description: "Staghorn Fern Plant in 4in grower pot",
    price: 1699,
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p4_c2",
    name: "Peace Lily",
    description: "Spathiphyllum Peace Lily Indoor Plant in 6in grower pot",
    price: 1899,
    discontinued: false,
    categories: ["c2"],
  },
  {
    id: "p5_c2",
    name: "String of Pearls",
    description: "String of Pearls Hanging in 6in grow pot with hanger",
    price: 1999,
    discontinued: false,
    categories: ["c2"],
  },
  // c3 - Trees
  {
    id: "p1_c3",
    name: "Dogwood",
    description: "Pink Flowering Dogwood Tree; 3 gallon",
    price: 5999,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p2_c3",
    name: "Magnolia",
    description: "Pink Japanese Magnolia Tree; 1 gallon",
    price: 5999,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p3_c3",
    name: "Birch",
    description: "Birch Shade Tree; 5 galon",
    price: 6099,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p4_c3",
    name: "Maple",
    description: "Autumn Blaze Maple Tree; bare root",
    price: 4099,
    discontinued: false,
    categories: ["c3"],
  },
  {
    id: "p5_c3",
    name: "Juniper",
    description: "Blue Star Juniper Tree; 2 gallon",
    price: 3899,
    discontinued: false,
    categories: ["c3"],
  },
  // c4 - Vegetable Seeds
  {
    id: "p1_c4",
    name: "Pumpkin Seeds",
    description: "Pumpkin Seeds Spookie, 9-12 seeds",
    price: 199,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p2_c4",
    name: "Potato Seeds",
    description: "Russet Potato Seeds, 15-25 seeds",
    price: 399,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p3_c4",
    name: "Turnip Seeds",
    description: "Turnip Seeds Purple Top White Globe, 15-20 seeds",
    price: 199,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p4_c4",
    name: "Carrot Seeds",
    description: "Carrot Seeds Giant, 1300-1400 seeds",
    price: 299,
    discontinued: false,
    categories: ["c4"],
  },
  {
    id: "p5_c4",
    name: "Tomato Seeds",
    description: "Tomato Seeds, 180-190 seeds",
    price: 199,
    discontinued: true,
    categories: ["c4"],
  },
  // c5 - Flower Seeds
  {
    id: "p1_c5",
    name: "Sunflower Seeds",
    description: "Sunflower Seeds Large Seeded Tall, 30-35 seeds",
    price: 200,
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p2_c5",
    name: "Lavendar Seeds",
    description: "Lavendar Seeds, 130-140 seeds",
    price: 220,
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p3_c5",
    name: "Wild Flower Seeds",
    description: "Wild Flower Seeds Perennial Mix, 7oz",
    price: 1099,
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p4_c5",
    name: "Hydragena Seeds",
    description: "Hydragena Seeds White Flower Hedge, 50 seeds",
    price: 499,
    discontinued: false,
    categories: ["c5"],
  },
  {
    id: "p5_c5",
    name: "Cosmo Seeds",
    description: "Cosmo Mix, Early Sensation Mix, 60-70 seeds",
    price: 199,
    discontinued: true,
    categories: ["c5"],
  },
];
