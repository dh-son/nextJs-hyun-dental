import Image from "next/image";

export function Location() {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative h-[500px]">
        <Image
          alt="medicalTime"
          className="object-cover"
          fill
          src={"/MedicalTime.jpg"}
        />
      </div>
      <div className="relative h-[370px] mb-2">
        <Image
          alt="location1"
          className="object-cover"
          fill
          src={"/location1.png"}
        />
      </div>
      <div className="relative h-[60px]">
        <Image
          alt="location2"
          className="object-cover"
          fill
          src={"/location2.png"}
        />
      </div>
    </div>
  );
}
