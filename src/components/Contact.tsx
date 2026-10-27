"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-16 px-4 sm:px-6 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Contact Me"
          subtitle="Feel free to reach out for software engineering roles or project collaborations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Quick Links (No phone number) */}
          <div className="lg:col-span-5 space-y-3.5">
            <a
              href={`mailto:${profile.email}`}
              className="compact-card p-4 flex items-center gap-3.5 group hover:border-blue-300 block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail size={18} />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Email Address
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors truncate block">
                  {profile.email}
                </span>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="compact-card p-4 flex items-center gap-3.5 group hover:border-blue-400 block"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0">
                <LinkedInIcon size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  LinkedIn Profile
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors block">
                  sandesh-kenchugundi
                </span>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="compact-card p-4 flex items-center gap-3.5 group hover:border-slate-400 block"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:scale-110 transition-transform flex-shrink-0">
                <GitHubIcon size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  GitHub Profile
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors block">
                  github.com/sandesh9160
                </span>
              </div>
            </a>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 block">
                  {profile.location}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 compact-card p-5 sm:p-6">
            <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
              <MessageSquare size={16} className="text-blue-600" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-5 font-normal">
              Or reach out directly at: <a href={`mailto:${profile.email}`} className="text-blue-600 underline font-medium">{profile.email}</a>
            </p>

            {formState === "success" ? (
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out! Your message has been sent directly to {profile.email}. I will get back to you promptly.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-2xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:border-blue-600 focus:outline-none transition-colors"
                    placeholder="Your Email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    placeholder="Your Message..."
                  ></textarea>
                </div>

                {formState === "error" && (
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 text-xs flex items-center gap-2">
                    <AlertCircle size={14} />
                    <span>Failed to send. Please email me directly at {profile.email}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full py-2.5 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {formState === "submitting" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
