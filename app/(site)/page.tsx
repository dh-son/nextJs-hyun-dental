"use client";
import { Header } from "@/components/Header";
import { useRef } from "react";
import { HomeMain } from "@/components/HomeMain";
import { Intro } from "@/components/Intro";
import { Medical } from "@/components/Medical";
import { Facility } from "@/components/Facility";
import { Location } from "@/components/Location";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement[]>([]);

  const homeRef = (element: HTMLDivElement) => {
    if (element) {
      scrollRef.current[0] = element;
    }
  };

  const introRef = (element: HTMLDivElement) => {
    if (element) {
      scrollRef.current[1] = element;
    }
  };

  const medicalRef = (element: HTMLDivElement) => {
    if (element) {
      scrollRef.current[2] = element;
    }
  };

  const facilityRef = (element: HTMLDivElement) => {
    if (element) {
      scrollRef.current[3] = element;
    }
  };

  const locationRef = (element: HTMLDivElement) => {
    if (element) {
      scrollRef.current[4] = element;
    }
  };

  return (
    <div className="w-full">
      <Header scrollRef={scrollRef} />
      <div className="gird grid-cols-1 grid-rows-5 gap-4 bg-neutral-100">
        <div ref={homeRef} className="scroll-mt-[100px]">
          <HomeMain />
        </div>
        <div ref={introRef} className="scroll-mt-[100px]">
          <Intro />
        </div>
        <div ref={medicalRef} className="scroll-mt-[100px]">
          <Medical />
        </div>
        <div ref={facilityRef} className="h-[500px] scroll-mt-[100px]">
          <Facility />
        </div>
        <div ref={locationRef} className="h-[500px] scroll-mt-[100px]">
          <Location />
        </div>
      </div>
    </div>
  );
}
