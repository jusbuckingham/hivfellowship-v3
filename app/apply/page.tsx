'use client';

import Layout from '../../components/Layout';
import apply from '../../data/apply.json';
import Link from 'next/link';
import SmartImage from '../../components/SmartImage';
import { useState, useEffect, useCallback } from 'react';

const carouselImages = [
  { src: '/images/apply/grads-1.webp', alt: 'HIV Fellowship graduates photo 1' },
  { src: '/images/apply/grads-2.webp', alt: 'HIV Fellowship graduates photo 2' },
  { src: '/images/apply/grads-3.webp', alt: 'HIV Fellowship graduates photo 3' },
];

function Carousel({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full">
              <SmartImage
                src={img.src}
                alt={img.alt}
                width={1200}
                height={400}
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full px-3 py-2 shadow focus:outline-none focus:ring"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full px-3 py-2 shadow focus:outline-none focus:ring"
      >
        ›
      </button>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full ${i === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Layout>
      <article className="space-y-10 pb-12 px-4 sm:px-6 md:px-8">
        <header className="space-y-4 pt-8">
          <div className="mt-16 mb-8">
            <Carousel images={carouselImages} />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              {apply.intro.join(' ')}
            </p>
          </div>
        </header>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Application Process</h2>
          <p className="text-gray-700">{apply.applicationProcess.note}</p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            We are seeking passionate, mission-driven physicians who:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {apply.missionDriven.map((item, idx) => (
              <li key={idx} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            {apply.boardEligibility.description}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {apply.boardEligibility.roles.map((role, idx) => (
              <li key={idx} className="text-gray-700">{role}</li>
            ))}
          </ul>
        </section>

        {/* Call to Apply */}
        <section>
          <div className="text-center space-y-2 sm:text-left mt-8">
            <p className="text-lg text-gray-700">Apply today!</p>
            <p className="text-lg text-gray-700">
              Please{' '}
              <a
                href="https://docs.google.com/forms/d/1GMSQXZOlZGOeIpS9x5HphmJvW1ysE100_v8grsacItw/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                click here to access the application form
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Contact</h2>
          <div className="bg-gray-50 p-6 rounded-md max-w-lg mx-auto text-center space-y-2 mb-6">
            <p className="text-gray-700">To request additional information, please contact:</p>
            <p className="text-xl font-bold">{apply.contact.name}</p>
            {apply.contact.positions.map((pos, idx) => (
              <p key={idx} className="text-gray-700">{pos}</p>
            ))}
            <p className="text-gray-700 mt-2">
              Email:{' '}
              <Link href={`mailto:${apply.contact.email}`} className="text-blue-600 hover:underline">
                {apply.contact.email}
              </Link>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Application Form</h2>
          <form className="application-form space-y-6 max-w-md mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            {apply.form.fields.map((field, idx) => (
              <div key={idx}>
                <label htmlFor={`field-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                  {field}
                </label>
                {field === 'Message' ? (
                  <textarea
                    id={`field-${idx}`}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    rows={4}
                    placeholder={field}
                  />
                ) : (
                  <input
                    id={`field-${idx}`}
                    type={field === 'Email address' ? 'email' : 'text'}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                    placeholder={field}
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition duration-200 ease-in-out hover:scale-105 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-300 mt-4"
            >
              {apply.form.submitLabel}
            </button>
          </form>
        </section>
      </article>
    </Layout>
  );
}