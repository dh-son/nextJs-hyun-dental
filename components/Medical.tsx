import Image from "next/image";

export function Medical() {
  return (
    <div className="flex flex-col justify-center">
      {/* <div className="text-xl font-bold text-center">진료 안내</div> */}
      <div className="relative h-[500px]">
        <Image
          alt="intro1"
          className="object-cover"
          fill
          src={"/Medical.jpg"}
        />
      </div>
    </div>
  );
}
