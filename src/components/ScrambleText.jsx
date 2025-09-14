import React, { useRef, useEffect } from "react";

const ScrambleText = ({ text, href, speed = 30 }) => {
  const ref = useRef(null);
  const letters = "!@#$%^&*()_+{}[]<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // tạo span cho từng ký tự
    el.innerHTML = text
      .split("")
      .map((char) => `<span class="inline-block">${char}</span>`)
      .join("");

    const spans = el.querySelectorAll("span");

    const handleMouseOver = () => {
      let iteration = 0;

      const scrambleInterval = setInterval(() => {
        spans.forEach((span, index) => {
          if (index < iteration) {
            span.innerText = text[index];
          } else {
            span.innerText =
              letters[Math.floor(Math.random() * letters.length)];
          }
        });

        if (iteration >= text.length) {
          clearInterval(scrambleInterval);
        }

        iteration += 1 / 3;
      }, speed);
    };

    el.addEventListener("mouseover", handleMouseOver);
    return () => el.removeEventListener("mouseover", handleMouseOver);
  }, [text, speed]);

  return (
    <a
      ref={ref}
      href={href}
      className="text-white font-semibold hover:text-amber-200 transition-colors"
    >
      {text}
    </a>
  );
};

export default ScrambleText;
