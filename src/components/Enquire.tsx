"use client";

import { useRef, useState, type FormEvent } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const projectTypes = [
  "Architectural Concrete",
  "Concrete Seating",
  "Pool & Spa Surrounds",
  "Concrete Stairs",
  "Driveways",
  "Retaining Walls",
  "Formwork",
  "Other",
] as const;

const whyChooseSalt = [
  "10+ Years Experience",
  "Architectural-quality finishes",
  "Residential & Commercial Projects",
  "Sydney-wide Service",
  "Fully Insured",
];

const inputClassName =
  "mt-4 w-full border-b border-white/10 bg-transparent py-3 text-warm-white outline-none transition-colors duration-500 placeholder:text-muted-light focus:border-gold";

const labelClassName = "label-luxury block text-[9px] text-warm-white-muted";

export default function Enquire() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    form.reset();
    setSelectedFiles([]);
  };

  const handleFileChange = () => {
    const files = fileInputRef.current?.files;
    if (!files?.length) {
      setSelectedFiles([]);
      return;
    }

    setSelectedFiles(Array.from(files).map((file) => file.name));
  };

  return (
    <section
      id="enquiry-form"
      className="relative bg-black pb-[clamp(3rem,8vw,5rem)] pt-32 sm:pt-36 lg:pt-44"
      aria-label="Enquire"
    >
      <div className="mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">
        <AnimateOnScroll>
          <div className="max-w-3xl">
            <p className="label-luxury text-[10px] text-gold sm:text-[11px]">
              Enquire
            </p>
            <h1 className="heading-section mt-10 text-[clamp(2.25rem,5vw,3.75rem)] text-warm-white">
              Let&apos;s discuss your project.
            </h1>
            <p className="mt-10 max-w-2xl text-sm font-light leading-[2] text-muted">
              Whether you&apos;re an architect, builder or homeowner, we&apos;d
              love to hear about your project. Complete the form below and
              we&apos;ll be in touch within 1–2 business days.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-20 grid gap-20 lg:mt-24 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <AnimateOnScroll direction="left" delay={100}>
            <div className="border border-white/[0.06] bg-black-soft p-8 sm:p-10 lg:p-12">
              {submitted ? (
                <div
                  className="flex min-h-[28rem] flex-col justify-center py-8"
                  role="status"
                  aria-live="polite"
                >
                  <p className="label-luxury text-[10px] text-gold">
                    Thank you
                  </p>
                  <h2 className="heading-section mt-8 text-[clamp(1.75rem,4vw,2.5rem)] text-warm-white">
                    Enquiry received
                  </h2>
                  <p className="mt-8 max-w-md text-sm font-light leading-[2] text-muted">
                    Thank you for reaching out. We&apos;ll review your project
                    details and be in touch within 1–2 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="link-underline mt-12 self-start text-xs font-light tracking-wide text-muted-light transition-colors duration-500 hover:text-warm-white"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  className="space-y-10"
                  onSubmit={handleSubmit}
                  noValidate={false}
                >
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label htmlFor="enquire-name" className={labelClassName}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="enquire-name"
                        name="name"
                        required
                        autoComplete="name"
                        className={inputClassName}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enquire-email"
                        className={labelClassName}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="enquire-email"
                        name="email"
                        required
                        autoComplete="email"
                        className={inputClassName}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="enquire-phone"
                        className={labelClassName}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="enquire-phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        className={inputClassName}
                        placeholder="0400 000 000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enquire-suburb"
                        className={labelClassName}
                      >
                        Suburb
                      </label>
                      <input
                        type="text"
                        id="enquire-suburb"
                        name="suburb"
                        required
                        autoComplete="address-level2"
                        className={inputClassName}
                        placeholder="Your suburb"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquire-project-type"
                      className={labelClassName}
                    >
                      Project Type
                    </label>
                    <select
                      id="enquire-project-type"
                      name="projectType"
                      required
                      defaultValue=""
                      className={`${inputClassName} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%23a8a4a0%22%20d%3D%22M1%201l5%205%205-5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_8px] bg-[right_0_center] bg-no-repeat pr-6 text-warm-white invalid:text-muted-light`}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      {projectTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-black text-warm-white"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="enquire-budget" className={labelClassName}>
                      Budget{" "}
                      <span className="normal-case tracking-normal text-muted-light">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      id="enquire-budget"
                      name="budget"
                      className={inputClassName}
                      placeholder="Approximate budget"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquire-message"
                      className={labelClassName}
                    >
                      Message
                    </label>
                    <textarea
                      id="enquire-message"
                      name="message"
                      rows={4}
                      required
                      className={`${inputClassName} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquire-photos"
                      className={labelClassName}
                    >
                      Project Photos
                    </label>
                    <div className="mt-4 border border-dashed border-white/10 px-6 py-8 transition-colors duration-500 hover:border-white/20">
                      <input
                        ref={fileInputRef}
                        type="file"
                        id="enquire-photos"
                        name="photos"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                      <label
                        htmlFor="enquire-photos"
                        className="flex cursor-pointer flex-col items-start gap-3"
                      >
                        <span className="inline-flex items-center justify-center border border-gold/40 px-6 py-3 font-body text-[10px] font-normal uppercase tracking-[0.25em] text-warm-white transition-all duration-500 hover:border-gold hover:bg-gold/5">
                          Choose files
                        </span>
                        <span className="text-xs font-light text-muted">
                          Upload reference images or site photos (optional)
                        </span>
                      </label>
                      {selectedFiles.length > 0 && (
                        <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5">
                          {selectedFiles.map((fileName) => (
                            <li
                              key={fileName}
                              className="text-xs font-light text-muted-light"
                            >
                              {fileName}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-none border border-gold bg-gold px-12 py-[1.125rem] font-body text-[11px] font-normal uppercase tracking-[0.25em] text-black transition-all duration-500 hover:border-gold-light hover:bg-gold-light hover:shadow-[0_8px_32px_rgba(196,163,90,0.15)] sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={200}>
            <div className="flex flex-col justify-center lg:py-8">
              <div className="gold-line mb-12 w-24" />
              <h2 className="heading-section text-[clamp(2rem,4vw,3rem)] text-warm-white">
                Why choose SALT
              </h2>
              <ul className="mt-12 space-y-8">
                {whyChooseSalt.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-5 border-b border-white/[0.06] pb-8 last:border-b-0 last:pb-0"
                  >
                    <span
                      className="mt-2 h-px w-6 shrink-0 bg-gold"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-light leading-[1.9] text-muted-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-16 space-y-4 border-t border-white/[0.06] pt-10">
                <a
                  href="mailto:saltconcretingandcarpentry@gmail.com"
                  className="link-underline block text-sm font-light text-muted-light transition-colors duration-500 hover:text-warm-white"
                >
                  saltconcretingandcarpentry@gmail.com
                </a>
                <a
                  href="tel:0451744893"
                  className="link-underline block text-sm font-light text-muted-light transition-colors duration-500 hover:text-warm-white"
                >
                  0451 744 893
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
