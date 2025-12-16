const catalog = [
  {
    id: 1,
    title: "Ultimate Keyboard",
    category: "input",
    price: 120.00,
    image: "keyboard.jpg"
  },
  {
    id: 2,
    title: "Ergonomic Mouse",
    category: "input",
    price: 45.50,
    image: "mouse.jpg"
  },
  {
    id: 3,
    title: "4K Gaming Monitor",
    category: "display",
    price: 399.99,
    image: "monitor.jpg"
  },
  {
    id: 4,
    title: "HD Webcam Pro",
    category: "camera",
    price: 75.00,
    image: "webcam.png"
  },
  {
    id: 5,
    title: "Noise Cancelling Headphones",
    category: "audio",
    price: 199.00,
    image: "headset.png"
  },
  {
    id: 6,
    title: "High Performance Memory",
    category: "hardware",
    price: 89.99,
    image: "memory.png"
  }
];

class DataService {
  getProducts() {
    return catalog;
  }
}

// Export an instance of the service
const dataService = new DataService();
export default dataService;