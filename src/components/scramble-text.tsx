"use client";

import { useEffect, useRef, useCallback } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "li";
  delay?: number;
  speed?: number;
}

export function ScrambleText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  speed = 30
}: ScrambleTextProps) {
  const textRef = useRef<HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement | HTMLLIElement>(null);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const setRef = useCallback((node: HTMLSpanElement | HTMLHeadingElement | HTMLParagraphElement | HTMLLIElement | null) => {
    (textRef as React.MutableRefObject<typeof node>).current = node;
  }, []);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const originalText = text;
    let iteration = 0;
    const totalIterations = originalText.length * 3;

    // Start with scrambled text
    element.innerText = originalText
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");

    // Delay before starting animation
    const timeout = setTimeout(() => {
      // Animate to reveal the real text
      const interval = setInterval(() => {
        element.innerText = originalText
          .split("")
          .map((char, index) => {
            if (index < iteration / 3) {
              return originalText[index];
            }
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        iteration += 1;

        if (iteration >= totalIterations) {
          clearInterval(interval);
          element.innerText = originalText;
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, chars, delay, speed]);

  return (
    <Tag ref={setRef} className={className}>
      {text}
    </Tag>
  );
}
