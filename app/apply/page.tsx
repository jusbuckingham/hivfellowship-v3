'use client';

import Layout from '../../components/Layout';
import apply from '../../data/apply.json';
import Link from 'next/link';
import SmartImage from '../../components/SmartImage';
import { useState, useEffect, useCallback, useRef } from 'react';

const carouselImages = [
  { src: '/images/apply/grads-1.webp', alt: 'HIV Fellowship graduates photo 1' },
  { src: '/images/apply/grads-2.webp', alt: 'HIV Fellowship graduates photo 2' },
  { src: '/images/apply/grads-3.webp', alt: 'HIV Fellowship graduates photo 3' },
];

function Carousel({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length, paused]);

  return (
    <div
      className="relative full-bleed sm:w-11/12 md:w-4/5 lg:w-2/3 mx-auto"
      aria-roledescription="carousel"
      aria-label="Fellowship graduates"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200/70 bg-white">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="min-w-full">
              <SmartImage
                src={img.src}
                alt={img.alt}
                width={1600}
                height={550}
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
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-[#162363]/40"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-[#162363]/40"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3" role="tablist" aria-label="Carousel Slides">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-slate-900' : 'bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-5xl px-3 sm:px-4 md:px-6 py-6 sm:py-8 lg:py-10 space-y-10 sm:space-y-12">
        {/* HERO */}
        <header className="space-y-4">
          <div className="mt-2 sm:mt-4">
            <Carousel images={carouselImages} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {Array.isArray(apply.intro) ? apply.intro.join(' ') : String(apply.intro)}
            </p>
          </div>
        </header>

        {/* APPLICATION PROCESS */}
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Application Process</h2>
          <div className="mt-3 grid gap-3 sm:gap-4 md:grid-cols-2">
            <p className="text-slate-700 leading-relaxed">{apply.applicationProcess?.description || 'Application Process'}</p>
            <p className="text-slate-700 leading-relaxed">{apply.applicationProcess?.note}</p>
          </div>
        </section>

        {/* MISSION DRIVEN */}
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">We’re seeking physicians who are:</h2>
          <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 list-disc pl-6">
            {apply.missionDriven?.map((item: string, idx: number) => (
              <li key={idx} className="text-slate-800">{item}</li>
            ))}
          </ul>
        </section>

        {/* BOARD ELIGIBILITY */}
        <section className="rounded-xl border border-slate-200 bg-white shadow-sm p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">{apply.boardEligibility?.description}</h2>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 list-disc pl-6">
            {apply.boardEligibility?.roles?.map((role: string, idx: number) => (
              <li key={idx} className="text-slate-800">{role}</li>
            ))}
          </ul>
        </section>

        {/* ELIGIBILITY NOTES */}
        {Array.isArray(apply.eligibility) && apply.eligibility.length > 0 && (
          <section className="rounded-xl border border-amber-200 bg-amber-50 text-amber-900 shadow-sm p-5 sm:p-6">
            <h3 className="text-lg font-semibold">Eligibility Notes</h3>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              {apply.eligibility.map((el: string, idx: number) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA APPLY */}
        <section className="text-center">
          <p className="text-lg text-slate-700">Apply today!</p>
          <p className="text-lg text-slate-700 mt-1">
            Please{' '}
            <a
              href="https://docs.google.com/forms/d/1GMSQXZOlZGOeIpS9x5HphmJvW1ysE100_v8grsacItw/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#162363] px-4 py-2 text-[#162363] hover:bg-[#162363] hover:text-white transition"
            >
              <span>Access the application form</span>
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h9.586L10.293 5.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </a>
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 text-center sm:text-left">Contact</h2>
          <div className="bg-white border border-slate-200 p-6 rounded-xl max-w-xl mx-auto shadow-sm text-center space-y-2">
            <p className="text-slate-700">To request additional information, please contact:</p>
            <p className="text-lg font-bold text-slate-900">{apply.contact.name}</p>
            {apply.contact.positions.map((pos: string, idx: number) => (
              <p key={idx} className="text-slate-700">{pos}</p>
            ))}
            <p className="text-slate-700 mt-1">
              Email:{' '}
              <Link href={`mailto:${apply.contact.email}`} className="text-[#162363] hover:underline">
                {apply.contact.email}
              </Link>
            </p>
          </div>
        </section>

        {/* MINI FORM (courtesy form — not the Google Form) */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 text-center sm:text-left">Application Form</h2>
          <form className="application-form space-y-6 max-w-md mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200">
            {apply.form.fields.map((field: string, idx: number) => {
              const isEmail = /email/i.test(field);
              const id = `field-${idx}`;
              return (
                <div key={idx}>
                  <label htmlFor={id} className="block text-sm font-medium text-slate-800 mb-2">
                    {field}
                  </label>
                  {/message/i.test(field) ? (
                    <textarea
                      id={id}
                      className="w-full border border-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162363]/30 focus:border-[#162363]"
                      rows={4}
                      placeholder={field}
                    />
                  ) : (
                    <input
                      id={id}
                      type={isEmail ? 'email' : 'text'}
                      className="w-full border border-slate-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#162363]/30 focus:border-[#162363]"
                      placeholder={field}
                    />
                  )}
                </div>
              );
            })}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#162363] text-white font-semibold rounded-lg shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#162363]/40 mt-2"
            >
              {apply.form.submitLabel}
            </button>
          </form>
        </section>
      </article>
    </Layout>
  );
}