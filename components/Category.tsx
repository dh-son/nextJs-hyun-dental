"use client";
import { useRef } from "react";

export default function Category() {
  const scrollRef = useRef([
    {
      label: "HOME",
      ref: "",
    },
    {
      label: "원장소개",
      ref: "",
    },
    {
      label: "진료안내",
      ref: "",
    },
    {
      label: "시설안내",
      ref: "",
    },
    {
      label: "오시는길",
      ref: "",
    },
  ]);

  return (
    <article>
      <section className="lg:hidden">
        <table className="w-full mt-1 h-10">
          <tbody>
            <tr className="text-sm text-center text-black">
              <td className="border-r border-t border-b w-1/5">
                <div>{scrollRef.current[0].label}</div>
              </td>
              <td className="border-r border-t border-b w-1/5">
                <div>{scrollRef.current[1].label}</div>
              </td>
              <td className="border-r border-t border-b w-1/5">
                <div>{scrollRef.current[2].label}</div>
              </td>
              <td className="border-r border-t border-b w-1/5">
                <div>{scrollRef.current[3].label}</div>
              </td>
              <td className="border-r border-t border-b w-1/5">
                <div>{scrollRef.current[4].label}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </article>
  );
}
