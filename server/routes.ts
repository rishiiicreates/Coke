import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for products
  app.get("/api/products", (_req, res) => {
    const products = {
      cans: [
        {
          id: "classic-can",
          name: "Classic",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615892898/coca-cola-classic-can_hn2jvs.png",
          description: "The iconic taste of Coca-Cola Classic has been refreshing the world since 1886. Crafted with our secret recipe, this timeless beverage delivers the perfect balance of sweetness and refreshment.",
          nutrition: {
            calories: "139",
            sugar: "39g",
            sodium: "45mg",
            caffeine: "34mg"
          }
        },
        {
          id: "zero-can",
          name: "Zero Sugar",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615892970/coca-cola-zero-can_ktnjnf.png",
          description: "Coca-Cola Zero Sugar offers the iconic taste of Coca-Cola with zero sugar. Enjoy the same refreshing flavor without the calories that has made Coca-Cola famous around the world.",
          nutrition: {
            calories: "0",
            sugar: "0g",
            sodium: "40mg",
            caffeine: "34mg"
          }
        },
        {
          id: "cherry-can",
          name: "Cherry",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615892980/coca-cola-cherry-can_vpkqe4.png",
          description: "Coca-Cola Cherry combines the refreshing taste of Coca-Cola with a burst of cherry flavor. This delicious fusion creates a uniquely satisfying taste experience that's perfect for any occasion.",
          nutrition: {
            calories: "140",
            sugar: "39g",
            sodium: "45mg",
            caffeine: "34mg"
          }
        },
        {
          id: "vanilla-can",
          name: "Vanilla",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615892990/coca-cola-vanilla-can_qdwd6v.png",
          description: "Coca-Cola Vanilla offers a smooth and creamy twist on the original Coca-Cola taste. The delightful hint of vanilla creates a uniquely smooth and refreshing experience.",
          nutrition: {
            calories: "140",
            sugar: "39g",
            sodium: "35mg",
            caffeine: "34mg"
          }
        },
        {
          id: "orange-vanilla-can",
          name: "Orange Vanilla",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893000/coca-cola-orange-vanilla-can_p9gmzr.png",
          description: "Coca-Cola Orange Vanilla combines the classic Coca-Cola taste with a twist of orange and vanilla flavors. This innovative combination delivers a refreshing citrus experience with creamy vanilla notes.",
          nutrition: {
            calories: "140",
            sugar: "39g",
            sodium: "35mg",
            caffeine: "34mg"
          }
        },
        {
          id: "energy-can",
          name: "Energy",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893010/coca-cola-energy-can_gfr1ph.png",
          description: "Coca-Cola Energy delivers the great Coca-Cola taste you know and love with a boost of caffeine. Designed to help you stay energized throughout your day with a refreshing, familiar taste.",
          nutrition: {
            calories: "140",
            sugar: "39g",
            sodium: "55mg",
            caffeine: "114mg"
          }
        }
      ],
      bottles: [
        {
          id: "classic-bottle",
          name: "Classic",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893030/coca-cola-classic-bottle_gfwzpp.png",
          description: "The iconic taste of Coca-Cola Classic has been refreshing the world since 1886. Our classic glass bottle design offers the perfect way to enjoy this timeless beverage.",
          nutrition: {
            calories: "139",
            sugar: "39g",
            sodium: "45mg",
            caffeine: "34mg"
          }
        },
        {
          id: "zero-bottle",
          name: "Zero Sugar",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893040/coca-cola-zero-bottle_yfqlev.png",
          description: "Coca-Cola Zero Sugar offers the iconic taste of Coca-Cola with zero sugar. Our sleek bottle design ensures maximum refreshment with every sip.",
          nutrition: {
            calories: "0",
            sugar: "0g",
            sodium: "40mg",
            caffeine: "34mg"
          }
        },
        {
          id: "cherry-bottle",
          name: "Cherry",
          image: "https://res.cloudinary.com/dhhfbpqbp/image/upload/v1615893050/coca-cola-cherry-bottle_xeujdq.png",
          description: "Coca-Cola Cherry combines the refreshing taste of Coca-Cola with a burst of cherry flavor. Our bottle design preserves the perfect flavor balance for an exceptional taste experience.",
          nutrition: {
            calories: "140",
            sugar: "39g",
            sodium: "45mg",
            caffeine: "34mg"
          }
        }
      ]
    };
    
    res.json(products);
  });

  // API route for store locations
  app.get("/api/store-locations", (_req, res) => {
    const locations = [
      {
        id: 1,
        name: "Walmart Supercenter",
        address: "123 Retail Plaza, New York, NY 10001",
        distance: "1.2 miles"
      },
      {
        id: 2,
        name: "Target",
        address: "456 Shopping Ave, New York, NY 10002",
        distance: "2.4 miles"
      },
      {
        id: 3,
        name: "Kroger",
        address: "789 Grocery Blvd, New York, NY 10003",
        distance: "3.5 miles"
      }
    ];
    
    res.json(locations);
  });

  app.post("/api/newsletter", (req, res) => {
    const { email } = req.body;
    
    // Simple validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: "Invalid email address" });
    }
    
    // In a real application, this would store the email in a database
    // For now, just return success
    res.json({ message: "Successfully subscribed to newsletter" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
