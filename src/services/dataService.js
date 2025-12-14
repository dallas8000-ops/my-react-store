const catalog = [
  {
    title: "webcam",
    category: "camera",
    price: 20.00,
    image: "webcam.png",
    id: "1" // unique
  },
  {
    title: "headphone",
    category: "audio",
    price: 50.00,
    image: "headphone.png",
    id: "2" // unique
  },
  {
    title: "smartwatch",
    category: "wearable",
    price: 80.00,
    image: "smartwatch.png",
    id: "3" // unique
  }
];

class DataService {
  getProducts() {
    return catalog;
  }
}