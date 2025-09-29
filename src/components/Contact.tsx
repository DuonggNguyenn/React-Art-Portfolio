import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card.tsx";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen w-full flex flex-col justify-center bg-[rgb(34,27,16)] text-[#C6A664] py-16">

            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-5xl font-semibold mb-6">Contact Me</h2>
                <p className="text-lg text-[#f5f5f5]">Interested in commissioning a piece, collaborating, or just want to say hello? I’d love to hear from you.</p>
            </div>

            {/* Contact Form and Info Grid */}
            <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 w-full items-stretch">

                {/* Left Contact Form*/}
                <div className="flex flex-col h-full">
                    <Card className="bg-[#C6A664] text-[rgb(34,27,16)] border border-[#221B10] p-4 w-full opacity-90 h-full flex flex-col">
                        <CardContent className="flex-1 flex flex-col">
                            <form className="space-y-4 flex-1">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your full name"
                                        required
                                        className="w-full px-3 py-2 border border-[#221B10] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68B5B] bg-[#DED2B9]" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-left">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Your phone number"
                                        className="w-full px-3 py-2 border border-[#221B10] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68B5B] bg-[#DED2B9]" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email address"    
                                        required
                                        className="w-full px-3 py-2 border border-[#221B10] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68B5B] bg-[#DED2B9]" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-left">Message*</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="Tell me what you think..."
                                        required
                                        className="w-full px-3 py-2 border border-[#221B10] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A68B5B] bg-[#DED2B9]" />
                                </div>
                                <Button type="submit" className="bg-[rgb(34,27,16)] text-[#C6A664] hover:bg-[#A68B5B] border border-[#C6A664] hover:text-[#DED2B9] transition-colors duration-300 rounded-2xl px-6 py-2 mt-4 w-full">
                                    Send Your Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Contact Form */}
                <div className="flex flex-col h-full">
                    <Card className="bg-[rgb(34,27,16)] border border-[#C6A664] rounded-2xl shadow-md h-full flex flex-col">
                        <CardContent className="p-6 space-y-4">
                            <h3 className="text-2xl font-semibold text-[#C6A664] text-left">Let’s Connect</h3>

                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-start gap-3">
                                    <Mail className="text-[#C6A664] mt-1" />
                                    <div className="text-[#C6A664] text-lg">Email</div>
                                </div>
                                <p className="text-white text-left ml-10">abc@gmail.com</p>

                                {/* City */}
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-[#C6A664] mt-1" />
                                    <div className="text-[#C6A664] text-lg">City</div>
                                </div>
                                <p className="text-white text-left ml-10">Oslo, Norway</p>

                                {/* Phone */}
                                <div className="flex items-start gap-3">
                                    <Phone className="text-[#C6A664] mt-1" />
                                    <div className="text-[#C6A664] text-lg">Phone</div>
                                </div>
                                <p className="text-white text-left ml-10">+47 123 45 678</p>

                            </div>

                            {/* Socials */}
                            <h3 className="text-xl font-semibold text-[#C6A664] text-left mt-33">Follow me</h3>
                            <div className="flex items-start gap-3">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="text-[#C6A664] mt-2 hover:text-white transition-colors duration-200" />
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="text-[#C6A664] mt-2 hover:text-white transition-colors duration-200" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="text-[#C6A664] mt-2 hover:text-white transition-colors duration-200" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Back to Gallery  */}
            <div className="text-left pl-102 mt-10 pb-8">
                <a href="#hero" className="text-lg text-[#C6A664] hover:underline">
                    ← Back to Home
                </a>
            </div>
        </section>
    );
}
