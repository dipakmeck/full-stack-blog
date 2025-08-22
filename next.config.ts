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
    {
      protocol: 'http',
      hostname: 'res.cloudinary.com'
    },
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com'
    },
    {
      protocol: 'https', // Can also be http
      hostname: 'avatars.githubusercontent.com',
      //port: '3000', // Example for local development server
    },
  ],}

};

export default nextConfig;

