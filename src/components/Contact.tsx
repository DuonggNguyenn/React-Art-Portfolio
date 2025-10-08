import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card.tsx";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Copy } from "lucide-react";
import emailjs from 'emailjs-com';
import React, { useRef } from "react";
import { Toaster } from "./ui/sonner.tsx";
import { toast } from "sonner"

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        const name = ((form.current.elements.namedItem("name") as HTMLInputElement) || { value: "" }).value.trim();
        const phone = ((form.current.elements.namedItem("phone") as HTMLInputElement) || { value: "" }).value.trim();
        const email = ((form.current.elements.namedItem("email") as HTMLInputElement) || { value: "" }).value.trim();
        const message = ((form.current.elements.namedItem("message") as HTMLTextAreaElement) || { value: "" }).value.trim();

        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/.test(name)) {
            toast.error("Invalid name", {
                description: "Please enter a valid name (at least 2 characters, letters, spaces, apostrophes, and hyphens only).",
            });
            return;
        }

        if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
            toast.error("Invalid phone number", {
                description: "Please enter a valid phone number.",
            });
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Invalid email address", {
                description: "Please enter a valid email address.",
            });
            return;
        }

        if (message.length < 10) {
            toast.error("Message too short", {
                description: "Please enter a message of at least 10 characters.",
            });
            return;
        }

        emailjs.
            sendForm(
                "service_2gniuy9", // service ID
                "template_ing8vkx", // template ID
                form.current,
                "-1aL7VDjLQyKmm8MC" // public key
            ).then(
                (result: any) => {
                    console.log("✅ EmailJS response:", result);
                    toast.success("✅ Message sent successfully!", {
                        description: "Thanks for reaching out — I’ll reply as soon as possible.",
                        style: {
                            backgroundColor: "#221B10",
                            color: "#C6A664",
                            border: "1px solid #C6A664",
                            borderRadius: "16px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                        },
                    });
                    form.current?.reset();
                },
                (error: any) => {
                    console.error("Failed to send the message:", error);
                    toast.error("Failed to send the message", {
                        description: "Please try again later.",
                        style: {
                            backgroundColor: "#C0392B",
                            color: "#fff",
                            border: "1px solid #7B241C",
                            borderRadius: "16px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                        },
                    });
                }
            );
    }

    return (
        <section
            id="contact"
            className="min-h-screen w-full flex flex-col justify-center 
            bg-[rgb(20,14,2)] text-[#C6A664]
            bg-[url('/textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay"
        >
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mt-6 mb-6 lg:my-10">
                <h2 className="font-serif font-semibold tracking-wide text-2xl sm:text-3xl lg:text-4xl xl:text-5xl my-6 lg:my-8">
                    Contact Me
                    <div className="h-[1px] bg-[#C6A664] mx-auto mt-4 lg:mt-6"></div>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-[#f5f2e7] font-sans px-4">Interested in commissioning a piece, collaborating, or just want to say hello? I’d love to hear from you.</p>
            </div>

            {/* Contact Form and Info Grid */}
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                             grid lg:grid-cols-[2fr_1fr] gap-10 items-stretch relative mb-16">

                {/* Vertical line for tablet/desktop */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-[#C6A664]/40 hidden lg:block"></div>

                {/* Left Contact Form*/}

                <Card className="border-1 border-[#C6A664] bg-[#0F0C08] 
                        shadow-[0_8px_20px_rgba(0,0,0,0.6)] 
                        rounded-xl px-0 xl:p-6 2xl:px-6
                        relative overflow-hidden
                        w-full h-full flex flex-col">

                    <div className="absolute inset-0 pointer-events-none border border-[#C6A664]/40 rounded-xl"></div>

                    <CardContent className="flex-1 flex flex-col mt-4">
                        <form ref={form} onSubmit={sendEmail} className="space-y-5 flex-1">

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-[12px] xl:text-sm 2xl:text-sm font-serif font-medium mb-2">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                    className="w-full px-3 py-2 bg-[#1f1a12]
                                        text-[12px] xl:text-base 2xl:text-base 
                                        text-white placeholder-[#d8c6a0] 
                                        focus:ring-0.5 focus:ring-[#C6A664] focus:border-[#C6A664]"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-[12px] xl:text-sm 2xl:text-sm font-serif font-medium mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your phone number"
                                    className="w-full px-3 py-2 border border-[#C6A664]/40 rounded-xl bg-[#1f1a12]
                                        text-[12px] xl:text-base 2xl:text-base
                                        text-white placeholder-[#d8c6a0]
                                        focus:ring-1 focus:ring-[#C6A664] focus:border-[#C6A664]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-[12px] xl:text-sm 2xl:text-sm font-serif font-medium mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email address"
                                    required
                                    className="w-full px-3 py-2 border border-[#C6A664]/40 rounded-xl bg-[#1f1a12] 
                                        text-[12px] xl:text-base 2xl:text-base
                                        text-white placeholder-[#d8c6a0] 
                                        focus:ring-1 focus:ring-[#C6A664] focus:border-[#C6A664]"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-[12px] xl:text-sm 2xl:text-sm font-serif font-medium mb-2">
                                    Message*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me what you think..."
                                    required
                                    className="w-full px-3 py-2 border border-[#C6A664]/40 rounded-xl 
                                        text-[12px] xl:text-base 2xl:text-base
                                        focus:ring-1 focus:ring-[#C6A664] focus:border-[#C6A664] 
                                        bg-[#1f1a12] text-white placeholder-[#d8c6a0]"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="bg-transparent text-[#C6A664] font-serif 
                                    !text-sm xl:text-base 2xl:text-medium
                                    border border-[#C6A664] tracking-wide 
                                    hover:bg-[#C6A664] hover:text-[#221B10] 
                                    transition-all duration-300 
                                    rounded-full px-6 py-3 w-full"
                            >
                                Send Your Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                {/* Right Contact Info */}
                <Card className="bg-[rgb(34,27,16)] shadow-[0_8px_20px_rgba(0,0,0,0.6)] w-full h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none mb-10"></div>

                    <CardContent className="flex flex-col p-6">

                        {/* Section heading */}
                        <div className="mb-6">
                            <h3 className="text-base xl:text-xl 2xl:text-xl font-serif font-medium text-[#C6A664] tracking-wide">
                                Let’s Connect
                            </h3>
                            <div className="h-[1px] bg-[#C6A664]/40 mt-4" />
                        </div>

                        {/* Contact items */}
                        <div className="flex flex-col gap-4">

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[#C6A664]/80 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-[#C6A664] font-serif">Email</p>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href="mailto:abc@gmail.com"
                                            className="text-white hover:underline font-serif text-[12px] xl:text-base 2xl:text-base"
                                        >
                                            abc@gmail.com
                                        </a>
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText("abc@gmail.com");
                                                toast.success("Email copied to clipboard!");
                                            }}
                                            className="flex items-center gap-1 xl:px-2 xl:py-1 ml-2 2xl:px-2 2xl:py-1 text-[#C6A664] bg-[#C6A664]/10 border border-[#C6A664]/30 rounded-md hover:bg-[#C6A664]/20 hover:scale-105 transition"
                                        >
                                            <Copy size={12} />
                                            <span className="text-[#C6A664] px-1 text-[12px] xl:text-sm 2xl:text-sm font-serif">Copy</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* City */}
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#C6A664]/80 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-[#C6A664] font-serif">City</p>
                                    <p className="text-white/80 text-[12px] xl:text-sm 2xl:text-smfont-serif mt-2">Oslo, Norway</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[#C6A664]/80 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-[#C6A664] font-serif">Phone</p>
                                    <p className="text-white/80 text-[12px] xl:text-sm 2xl:text-sm font-serif">+47 123 45 678</p>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="mt-10">
                            <p className="text-sm xl:text-lg 2xl:text-lg font-serif font-medium mb-3 underline decoration-[#C6A664]/60 underline-offset-4">Follow me</p>
                            <div className="flex gap-5">
                                <a href="https://www.instagram.com/"><Instagram className="w-5 h-5 opacity-80 hover:opacity-100 hover:scale-125 hover:text-[#C6A664] transition-transform" /></a>
                                <a href="https://www.facebook.com/"><Facebook className="w-5 h-5 opacity-80 hover:opacity-100 hover:scale-125 hover:text-[#C6A664] transition-transform" /></a>
                                <a href="https://www.linkedin.com/"><Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 hover:scale-125 hover:text-[#C6A664] transition-transform" /></a>
                            </div>
                        </div>

                    </CardContent>
                </Card>

            </div>

            <Toaster richColors position="bottom-right" />
        </section>
    );
}
