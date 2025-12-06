// lib/data.ts

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  ownerId: number; // links to user
  location: string;
  dayPrice: number;
  transmission: string;
  fuelType: string;
  seats: number;
  class: "sedan" | "suv" | "hatchback" | "electric";
  images: { main: string };
}

export interface User {
  id: number;
  name: string;
  role: "Customer" | "Employee";
  email: string;
  dob: string;
}

export interface Availability {
  id: number;
  carId: number;
  start_at: string;
  end_at: string;
}

// Users data (9 owners)
export const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Customer",
    email: "john@example.com",
    dob: "1990-05-10",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Customer",
    email: "jane@example.com",
    dob: "1988-12-20",
  },
  {
    id: 3,
    name: "Ali Khan",
    role: "Customer",
    email: "ali@example.com",
    dob: "1992-07-15",
  },
  {
    id: 4,
    name: "Siti Rahman",
    role: "Customer",
    email: "siti@example.com",
    dob: "1995-03-30",
  },
  {
    id: 5,
    name: "Emily Tan",
    role: "Customer",
    email: "emily@example.com",
    dob: "1991-11-12",
  },
  {
    id: 6,
    name: "Michael Lim",
    role: "Customer",
    email: "michael@example.com",
    dob: "1989-09-05",
  },
  {
    id: 7,
    name: "David Wong",
    role: "Customer",
    email: "david@example.com",
    dob: "1993-02-21",
  },
  {
    id: 8,
    name: "Nur Aisyah",
    role: "Customer",
    email: "nur@example.com",
    dob: "1994-08-18",
  },
  {
    id: 9,
    name: "Farid Aziz",
    role: "Customer",
    email: "farid@example.com",
    dob: "1990-12-01",
  },
];

// Cars data (9 cars, one per owner)
export const cars: Car[] = [
  {
    id: 1,
    make: "Perodua",
    model: "Myvi",
    year: 2022,
    ownerId: 1,
    location: "Kuala Lumpur",
    dayPrice: 100,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "hatchback",
    images: { main: "/cars/perodua-myvi/main.png" },
  },
  {
    id: 2,
    make: "Perodua",
    model: "Axia",
    year: 2025,
    ownerId: 2,
    location: "Petaling Jaya",
    dayPrice: 90,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "hatchback",
    images: { main: "/cars/perodua-axia/main.png" },
  },
  {
    id: 3,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    ownerId: 3,
    location: "Kuala Lumpur",
    dayPrice: 150,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "sedan",
    images: { main: "/cars/toyota-corolla/main.png" },
  },
  {
    id: 4,
    make: "Honda",
    model: "Civic",
    year: 2022,
    ownerId: 4,
    location: "Shah Alam",
    dayPrice: 140,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "sedan",
    images: { main: "/cars/honda-civic/main.png" },
  },
  {
    id: 5,
    make: "BMW",
    model: "3 Series",
    year: 2023,
    ownerId: 5,
    location: "Kuala Lumpur",
    dayPrice: 300,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "sedan",
    images: { main: "/cars/bmw-3series/main.png" },
  },
  {
    id: 6,
    make: "Mazda",
    model: "3 Hatchback",
    year: 2023,
    ownerId: 6,
    location: "Petaling Jaya",
    dayPrice: 320,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "hatchback",
    images: { main: "/cars/mazda-3-hatchback/main.png" },
  },

  {
    id: 7,
    make: "Honda",
    model: "HR-V",
    year: 2022,
    ownerId: 7,
    location: "Kuala Lumpur",
    dayPrice: 180,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "suv",
    images: { main: "/cars/honda-hrv/main.png" },
  },
  {
    id: 8,
    make: "Mazda",
    model: "CX-5",
    year: 2023,
    ownerId: 8,
    location: "Shah Alam",
    dayPrice: 250,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "suv",
    images: { main: "/cars/mazda-cx5/main.png" },
  },
  {
    id: 9,
    make: "Toyota",
    model: "Vios",
    year: 2023,
    ownerId: 9,
    location: "Petaling Jaya",
    dayPrice: 130,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    class: "sedan",
    images: { main: "/cars/toyota-vios/main.png" },
  },
];

// Availability data
export const availability: Availability[] = [
  { id: 1, carId: 1, start_at: "2025-12-07", end_at: "2025-12-10" },
  { id: 2, carId: 2, start_at: "2025-12-08", end_at: "2025-12-12" },
  { id: 3, carId: 3, start_at: "2025-12-09", end_at: "2025-12-11" },
  { id: 4, carId: 4, start_at: "2025-12-10", end_at: "2025-12-14" },
];
