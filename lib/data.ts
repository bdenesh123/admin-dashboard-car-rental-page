export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  ownerId: number;
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

export const users: User[] = [
  {
    id: 1,
    name: "Lee Chong Wei",
    role: "Customer",
    email: "lcw@example.com",
    dob: "1982-10-21",
  },
  {
    id: 2,
    name: "Goh V Shem",
    role: "Customer",
    email: "gvs@example.com",
    dob: "1989-05-06",
  },
  {
    id: 3,
    name: "Koo Kien Keat",
    role: "Customer",
    email: "kkk@example.com",
    dob: "1985-08-08",
  },
  {
    id: 4,
    name: "Tan Wee Kiong",
    role: "Customer",
    email: "twk@example.com",
    dob: "1989-04-21",
  },
  {
    id: 5,
    name: "Marcus Fernaldi",
    role: "Customer",
    email: "marcus@example.com",
    dob: "1991-05-19",
  },
  {
    id: 6,
    name: "Kevin Sanjaya",
    role: "Customer",
    email: "kevin@example.com",
    dob: "1995-08-02",
  },
  {
    id: 7,
    name: "Viktor Axelsen",
    role: "Customer",
    email: "viktor@example.com",
    dob: "1994-01-04",
  },
  {
    id: 8,
    name: "Carolina Marin",
    role: "Customer",
    email: "carolina@example.com",
    dob: "1993-06-15",
  },
  {
    id: 9,
    name: "P. V. Sindhu",
    role: "Customer",
    email: "pv@example.com",
    dob: "1995-07-05",
  },
  {
    id: 10,
    name: "Lee Zii Jia",
    role: "Customer",
    email: "lzz@example.com",
    dob: "1998-03-29",
  },
  {
    id: 11,
    name: "Ratchanok Intanon",
    role: "Customer",
    email: "ratchanok@example.com",
    dob: "1995-02-05",
  },
  {
    id: 12,
    name: "Chong Wei Feng",
    role: "Employee",
    email: "cwf@example.com",
    dob: "1987-11-12",
  },
  {
    id: 13,
    name: "Priya Ramesh",
    role: "Employee",
    email: "priya@example.com",
    dob: "1990-11-10",
  },
  {
    id: 14,
    name: "Tan Boon Heong",
    role: "Employee",
    email: "tbh@example.com",
    dob: "1987-07-18",
  },
];

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
  {
    id: 10,
    make: "BYD",
    model: "Seal",
    year: 2025,
    ownerId: 10,
    location: "Kuala Lumpur",
    dayPrice: 250,
    transmission: "Automatic",
    fuelType: "Electric",
    seats: 5,
    class: "electric",
    images: { main: "/cars/byd-seal/main.png" },
  },
  {
    id: 11,
    make: "Proton",
    model: "EMAS7",
    year: 2025,
    ownerId: 11,
    location: "Petaling Jaya",
    dayPrice: 220,
    transmission: "Automatic",
    fuelType: "Electric",
    seats: 7,
    class: "electric",
    images: { main: "/cars/proton-emas7/main.png" },
  },
];

export const availability: Availability[] = [
  { id: 1, carId: 1, start_at: "2025-12-07", end_at: "2025-12-10" },
  { id: 2, carId: 2, start_at: "2025-12-08", end_at: "2025-12-12" },
  { id: 3, carId: 3, start_at: "2025-12-09", end_at: "2025-12-11" },
  { id: 4, carId: 4, start_at: "2025-12-10", end_at: "2025-12-14" },
  { id: 5, carId: 10, start_at: "2025-12-15", end_at: "2025-12-20" },
  { id: 6, carId: 11, start_at: "2025-12-16", end_at: "2025-12-22" },
  { id: 7, carId: 5, start_at: "2025-12-05", end_at: "2025-12-09" },
  { id: 8, carId: 6, start_at: "2025-12-07", end_at: "2025-12-11" },
  { id: 9, carId: 7, start_at: "2025-12-08", end_at: "2025-12-12" },
  { id: 10, carId: 8, start_at: "2025-12-09", end_at: "2025-12-13" },
  { id: 11, carId: 9, start_at: "2025-12-10", end_at: "2025-12-14" },
];
