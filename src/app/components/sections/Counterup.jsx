"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000 }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;

        started.current = true;
        let start = 0;
        const increment = end / (duration / 16); // 60 FPS approx

        const animate = () => {
          start += increment;
          if (start < end) {
            setValue(Math.floor(start));
            requestAnimationFrame(animate);
          } else {
            setValue(end);
          }
        };

        animate();
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{value}</span>;
}

export default function CounterUp() {
  return (
    <div id="edge" className="ptb">
      <div className="wrapper-edge container flex">

        <div className="single-edge align-center">
          <p>
            <Counter end={375} />+
          </p>
          <h3>Visas</h3>
        </div>

        <div className="single-edge align-center">
          <p>
            <Counter end={248} />+
          </p>
          <h3>Clients</h3>
        </div>

        <div className="single-edge align-center">
          <p>
            <Counter end={14} />+
          </p>
          <h3>Pays</h3>
        </div>

        <div className="single-edge align-center">
          <p>
            <Counter end={18} />+
          </p>
          <h3>Personels</h3>
        </div>

      </div>
    </div>
  );
}
