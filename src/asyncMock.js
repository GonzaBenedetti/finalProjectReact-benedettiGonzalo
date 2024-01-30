const products = [
    {
      id: "1",
      name: "Galaxy S21 Smartphone",
      price: 899.99,
      brand: "Samsung",
      category: "Smartphones",
      image: "/public/img/samsung-galaxy-s21.png",
      description: "Powerful smartphone with latest generation camera and AMOLED display.",
      stock: 50
    },
    {
      id: "2",
      name: "XPS 13 Laptop",
      price: 1299.99,
      brand: "Dell",
      category: "Laptops",
      image: "/public/img/xps-13-laptop.png",
      description: "Ultrathin laptop with InfinityEdge display and high-performance processor.",
      stock: 30
    },
    {
      id: "3",
      name: "AirPods Pro Earphones",
      price: 249.99,
      brand: "Apple",
      category: "Earphones",
      image: "/public/img/airpods-pro-earphones.png",
      description: "Wireless earphones with noise cancellation and superior sound quality.",
      stock: 40
    },
    {
      id: "4",
      name: "QLED 65-inch 4K Smart TV",
      price: 1599.99,
      brand: "Samsung",
      category: "Televisions",
      image: "/public/img/qled-65-inch-4k-smart-tv.png",
      description: `QLED TV with 8K resolution, HDR, and smart features.`,
      stock: 15
    },
    {
      id: "5",
      name: "iPad Pro Tablet",
      price: 1099.99,
      brand: "Apple",
      category: "Tablets",
      image: "/public/img/ipad-pro-tablet.png",
      description: "Tablet with Liquid Retina display, powerful A14 Bionic chip, and Apple Pencil support.",
      stock: 25
    },
    {
      id: "6",
      name: "EOS R5 Mirrorless Camera",
      price: 3499.99,
      brand: "Canon",
      category: "Cameras",
      image: "/public/img/eos-r5-mirrorless-camera.png",
      description: "Mirrorless camera with high-resolution sensor and 8K recording capability.",
      stock: 10
    },
    {
      id: "7",
      name: "Charge 4 Bluetooth Speaker",
      price: 129.99,
      brand: "JBL",
      category: "Speakers",
      image: "/public/img/charge-4-bluetooth-speaker.png",
      description: "Portable speaker with long-lasting battery and water resistance.",
      stock: 35
    },
    {
      id: "8",
      name: "Predator X34 Gaming Monitor",
      price: 999.99,
      brand: "Acer",
      category: "Monitors",
      image: "/public/img/predator-x34-gaming-monitor.png",
      description: "Curved ultrawide monitor with 144Hz refresh rate.",
      stock: 20
    },
    {
      id: "9",
      name: "LaserJet Pro Printer",
      price: 299.99,
      brand: "HP",
      category: "Printers",
      image: "/public/img/laserjet-pro-printer.png",
      description: "Laser printer with wireless connectivity and fast printing speed.",
      stock: 18
    },
    {
      id: "10",
      name: "RGB K95 Mechanical Keyboard",
      price: 159.99,
      brand: "Corsair",
      category: "Peripherals",
      image: "/public/img/rgb-k95-mechanical-keyboard.png",
      description: "Mechanical keyboard with customizable RGB backlighting and Cherry MX switches.",
      stock: 22
    },
    {
      id: "11",
      name: "Archer AX6000 Wi-Fi 6 Router",
      price: 299.99,
      brand: "TP-Link",
      category: "Networks",
      image: "/public/img/archer-ax6000-wi-fi-6-router.png",
      description: "High-speed router compatible with Wi-Fi 6 for faster connectivity.",
      stock: 12
    },
    {
      id: "12",
      name: "G Pro X Gaming Mouse",
      price: 89.99,
      brand: "Logitech",
      category: "Peripherals",
      image: "/public/img/g-pro-x-gaming-mouse.png",
      description: "Lightweight gaming mouse with HERO sensor and customizable design.",
      stock: 30
    },
    {
      id: "13",
      name: "Smart Air Conditioner",
      price: 799.99,
      brand: "Ecobee",
      category: "Appliances",
      image: "/public/img/smart-air-conditioner.png",
      description: "Smart air conditioner with voice control and personalized scheduling.",
      stock: 15
    },
    {
      id: "14",
      name: "PowerCore 26800 External Battery",
      price: 49.99,
      brand: "Anker",
      category: "Accessories",
      image: "/public/img/powercore-26800-external-battery.png",
      description: "High-capacity external battery with fast charging for mobile devices.",
      stock: 40
    },
    {
      id: "15",
      name: "4K UBP-X800M2 Blu-ray Player",
      price: 249.99,
      brand: "Sony",
      category: "Players",
      image: "/public/img/4k-ubp-x800m2-blu-ray-player.png",
      description: "Blu-ray player with 4K playback capability and high-resolution audio.",
      stock: 25
    },
    {
      id: "16",
      name: "Roomba i7+ Robot Vacuum",
      price: 699.99,
      brand: "iRobot",
      category: "Appliances",
      image: "/public/img/roomba-i7-robot-vacuum.png",
      description: "Robot vacuum with advanced cleaning system and automatic emptying station.",
      stock: 8
    },
    {
      id: "17",
      name: "Home Cinema 5050UB Projector",
      price: 1999.99,
      brand: "Epson",
      category: "Projectors",
      image: "/public/img/home-cinema-5050ub-projector.png",
      description: "Projector with 4K PRO-UHD technology and HDR playback capability.",
      stock: 10
    },
    {
      id: "18",
      name: "C920 HD Webcam",
      price: 79.99,
      brand: "Logitech",
      category: "Accessories",
      image: "/public/img/c920-hd-webcam.png",
      description: "Webcam with Full HD resolution and automatic light correction.",
      stock: 28
    },
    {
      id: "19",
      name: "Wireless Charging Station",
      price: 39.99,
      brand: "Belkin",
      category: "Accessories",
      image: "/public/img/wireless-charging-station.png",
      description: "Wireless charging station for Qi-compatible devices.",
      stock: 45
    },
    {
      id: "20",
      name: "7.1 Surround Sound System",
      price: 299.99,
      brand: "Razer",
      category: "Speakers",
      image: "/public/img/7.1-surround-sound-system.png",
      description: "7.1 surround sound system with customizable LED lights.",
      stock: 15
    }
];

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId))
    }, 2000)
  })
}

export const getProductByCategory = (idCategory) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productByCategory = products.filter(prod => prod.category === idCategory)
      resolve(productByCategory)
    }, 2000);
  })
}