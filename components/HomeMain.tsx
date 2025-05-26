import Image from "next/image";

export function HomeMain() {
  return (
    <div className="w-full h-full">
      <Image
        alt="main"
        src={"/hyunmain3.png"}
        width={1213}
        height={879}
        layout="responsive"
      />
    </div>
  );
}
