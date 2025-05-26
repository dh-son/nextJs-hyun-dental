import Image from "next/image";

export function Logo() {
  return (
    <div>
      <Image alt="logo" width={180} height={128} src={"/Logo.jpg"} />
    </div>
  );
}
