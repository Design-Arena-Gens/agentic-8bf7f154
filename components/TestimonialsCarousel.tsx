"use client";

import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
};

const TRANSITION_MS = 500;

export function TestimonialsCarousel({
  testimonials,
  autoPlayInterval = 6000
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = useMemo(() => testimonials.slice(0, 6), [testimonials]);

  useEffect(() => {
    if (items.length <= 1) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [items, autoPlayInterval]);

  useEffect(() => {
    const container = document.querySelector("[data-carousel-track]");
    if (!container) return;
    container.setAttribute(
      "style",
      `transform: translateX(-${activeIndex * 100}%); transition: transform ${TRANSITION_MS}ms ease-in-out;`
    );
  }, [activeIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          data-carousel-track
          className="flex"
          style={{
            width: `${items.length * 100}%`
          }}
          aria-live="polite"
          aria-roledescription="carousel"
        >
          {items.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="testimonial-card w-full shrink-0 px-4 sm:px-6"
              aria-hidden={index !== activeIndex}
            >
              <p className="testimonial-content">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Témoignages">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === activeIndex ? "carousel-indicator-active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Témoignage ${index + 1}`}
            aria-selected={index === activeIndex}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
