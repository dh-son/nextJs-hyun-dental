import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Facility() {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[500px]">
              <Image
                alt="facility1"
                className="object-cover"
                fill
                src={"/facilities/1.jpg"}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px]">
              <Image
                alt="facility2"
                className="object-cover"
                fill
                src={"/facilities/2.jpg"}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px]">
              <Image
                alt="facility3"
                className="object-cover"
                fill
                src={"/facilities/3.jpg"}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px]">
              <Image
                alt="facility4"
                className="object-cover"
                fill
                src={"/facilities/4.jpg"}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px]">
              <Image
                alt="facility5"
                className="object-cover"
                fill
                src={"/facilities/5.jpg"}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </div>
  );
}
