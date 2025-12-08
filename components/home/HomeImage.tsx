import Image from "next/image";

export default function HomeImage() {
  return (
    <div className="md:w-1/2 relative flex items-center justify-center p-6">
      <Image
        src="/car.png"
        alt="Car Rental Illustration"
        width={800}
        height={600}
        className="object-contain"
      />
    </div>
  );
}
