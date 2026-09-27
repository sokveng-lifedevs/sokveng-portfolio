"use client";
import { useState } from "react";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type FormState = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm]     = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // TODO: Connect to email provider (e.g. Resend, Nodemailer)
    // For now, simulate a delay
    await new Promise(r => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  const Field = ({ id, label, type = "text" }: { id: keyof FormState; label: string; type?: string }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">{label}</label>
      {id === "message" ? (
        <textarea
          id={id}
          rows={5}
          value={form[id]}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={cn(
            "w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition resize-none",
            errors[id] ? "border-red-500" : "border-gray-200 dark:border-gray-700"
          )}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={cn(
            "w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition",
            errors[id] ? "border-red-500" : "border-gray-200 dark:border-gray-700"
          )}
        />
      )}
      {errors[id] && <p className="mt-1 text-xs text-red-500">{errors[id]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-pad bg-white dark:bg-gray-950">
      <div className="container-max">
        <div className="text-center mb-14">
          <p className="text-brand-500 font-mono text-sm mb-2">contact.sendMessage()</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Let&apos;s Build Something Together</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Have a project in mind or just want to connect? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m always open to discussing new projects, freelance work, and collaboration opportunities.
              Feel free to reach out through any of the channels below.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail,   label: "Email",    href: `mailto:${profile.email}`,  value: profile.email },
                { icon: Github, label: "GitHub",   href: profile.githubUrl,           value: `github.com/${profile.github}` },
                ...(profile.linkedin ? [{ icon: Linkedin, label: "LinkedIn", href: profile.linkedin, value: "linkedin.com/in/..." }] : []),
              ].map(({ icon: Icon, label, href, value }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-brand-500/30 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <Field id="name"    label="Name" />
            <Field id="email"   label="Email" type="email" />
            <Field id="message" label="Message" />

            {status === "success" && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm flex items-center gap-2">
                <MessageSquare className="w-4 h-4 shrink-0" />
                Message received! I&apos;ll get back to you soon.
                <br />
                <span className="text-xs opacity-75">(To enable email sending, connect an email provider in <code>/api/contact</code>.)</span>
              </div>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/25"
            >
              <Send className="w-4 h-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
