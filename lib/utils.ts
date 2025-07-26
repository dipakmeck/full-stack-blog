import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const categories = [
  {
      "id": "686fe4548e6426dc4251e00b",
      "name": "Technology"
  },
  {
      "id": "686fe45c8e6426dc4251e00d",
      "name": "Education"
  },
  {
      "id": "6884e9310402c5e114b5ce3f",
      "name": "Healthcare"
  },
  {
      "id": "6884e94b0402c5e114b5ce41",
      "name": "Food"
  },
  {
      "id": "6884e9560402c5e114b5ce43",
      "name": "Politics"
  }
]