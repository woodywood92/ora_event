import React from "react";
import { useCountUp } from "../useReveal";

export default function Stat({ icon: Icon, target, suffix, sub }) {
  const [ref, value] = useCountUp(target);
  return (
    <div ref={ref} className="px-6 md:px-10 py-10 flex items-center gap-4">
      <Icon className="text-[#C47B3A]" size={22} />
      <div>
        <p className="font-display font-bold">
          {value.toLocaleString("fr-FR")}
          {suffix}
        </p>
        <p className="text-xs text-gray-500 dark:text-[#8a8a8a]">{sub}</p>
      </div>
    </div>
  );
}
