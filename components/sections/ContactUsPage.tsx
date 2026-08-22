import ContactForm from "@/components/forms/ContactForm";

export default function ContactUsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050b21] px-6 pb-24 pt-36 text-white md:px-12">
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3F8BF9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#AB57F3]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[680px]">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3F8BF9]">
            Contact Ascendia Prime
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Start a Conversation</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-200">
            Tell us about your goals and our team will help identify the right next step.
          </p>
        </div>

        <div className="contact-form-shell relative rounded-[1.75rem] p-6 backdrop-blur-xl md:p-10">
          <ContactForm variant="homepage" />
        </div>
      </div>
    </section>
  );
}
