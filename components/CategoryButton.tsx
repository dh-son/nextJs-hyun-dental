import { cn } from "@/lib/utils";

interface Props {
  text: string;
  scrollRef: React.RefObject<HTMLElement[]>;
  isActivity: boolean;
}

export function CategoryButton({ text, scrollRef, isActivity }: Props) {
  const scrollToItem = () => {
    if (text === "HOME") {
      scrollRef.current[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (text === "원장소개") {
      scrollRef.current[1].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (text === "진료안내") {
      scrollRef.current[2].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (text === "시설안내") {
      scrollRef.current[3].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }

    if (text === "오시는길") {
      scrollRef.current[4].scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  return (
    <button
      onClick={scrollToItem}
      type="button"
      className={cn("bg-white", isActivity && "bg-cyan-200")}
    >
      {text}
    </button>
  );
}
