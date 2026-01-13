"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterAnimationProps {
  children: string;
  className?: string;
}

export function CounterAnimation({ children, className }: CounterAnimationProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(children);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated.current) return;

    // Parse the text to find numbers
    const text = children;
    const match = text.match(/^([\$£€]?)(\d+(?:,\d{3})*(?:\.\d+)?)(.*)/);

    if (!match) {
      setDisplayValue(text);
      return;
    }

    const [, prefix, numberStr, suffix] = match;
    const targetNumber = parseFloat(numberStr.replace(/,/g, ""));
    const hasDecimals = numberStr.includes(".");
    const decimalPlaces = hasDecimals ? numberStr.split(".")[1].length : 0;

    // Start with 0
    setDisplayValue(`${prefix}0${suffix}`);

    // Create scroll trigger for animation
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { value: 0 };
        gsap.to(obj, {
          value: targetNumber,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            let formattedValue: string;
            if (hasDecimals) {
              formattedValue = obj.value.toFixed(decimalPlaces);
            } else {
              formattedValue = Math.round(obj.value).toLocaleString();
            }
            setDisplayValue(`${prefix}${formattedValue}${suffix}`);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [children]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
