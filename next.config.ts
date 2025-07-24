import { LucideTruckElectric } from "lucide-react";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {

  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com'
    },
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com'
    },
    // {
    //   protocol: 'http', // Can also be http
    //   hostname: 'localhost',
    //   port: '3000', // Example for local development server
    // },
  ],}

};

export default nextConfig;

