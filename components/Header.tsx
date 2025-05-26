"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

interface Props {
  scrollRef: React.RefObject<HTMLDivElement[]>;
}

export function Header({ scrollRef }: Props) {
  const [tdIndex, setTdIndex] = useState<number>(0);

  const tdOnclick = (index: number) => {
    scrollRef.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTdIndex(index);
  };

  return (
    <div className="sticky top-0 left-0 z-10 w-full h-[92px] bg-neutral-100">
      <article>
        <section className="lg:hidden flex flex-col items-center">
          <div className="w-full mt-2 px-4">
            <Logo />
          </div>
        </section>
        <section className="lg:hidden mt-2">
          <table className="w-full mt-1 h-10">
            <tbody>
              <tr className="text-sm text-center text-black">
                <td
                  className={cn(
                    "border-r border-t border-b w-1/5",
                    tdIndex === 0 && "bg-cyan-100"
                  )}
                  onClick={() => tdOnclick(0)}
                >
                  HOME
                </td>
                <td
                  className={cn(
                    "border-r border-t border-b w-1/5",
                    tdIndex === 1 && "bg-cyan-100"
                  )}
                  onClick={() => tdOnclick(1)}
                >
                  원장소개
                </td>
                <td
                  className={cn(
                    "border-r border-t border-b w-1/5",
                    tdIndex === 2 && "bg-cyan-100"
                  )}
                  onClick={() => tdOnclick(2)}
                >
                  진료안내
                </td>
                <td
                  className={cn(
                    "border-r border-t border-b w-1/5",
                    tdIndex === 3 && "bg-cyan-100"
                  )}
                  onClick={() => tdOnclick(3)}
                >
                  시설안내
                </td>
                <td
                  className={cn(
                    "border-r border-t border-b w-1/5",
                    tdIndex === 4 && "bg-cyan-100"
                  )}
                  onClick={() => tdOnclick(4)}
                >
                  오시는길
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
  );
}
