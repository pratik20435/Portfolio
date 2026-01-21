import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const ContactForm = () => {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devkotapratik65@gmail.com",
      href: "mailto:devkotapratik65@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977 9824553202",
      href: "tel:+9779824553202",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Patan-Dhoka",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ddcqpvr",
        "template_d9jhldf",
        form.current,
        "Y2Uz67u6QqrQ_2-y_",
      )
      .then((result) => {
        console.log("Message sent successfully", result.text);
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Failed to send message", error.text);
        alert("Failed to send message.");
      });
  };

  return (
    <section className="min-h-screen w-full text-white flex items-center justify-center px-4 sm:px-6 md:px-12 bg-muted/30 border-2 ">
      <div className="">
        <h2 className="text-3xl sm:text-4xl font-anton text-center mb-6">
          GET IN TOUCH
        </h2>
        <p className="text-center text-gray-400 mb-8 px-2 sm:px-6 md:px-12">
          Let's work together — feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            // initial={{ opacity: 0, x: -50 }}
            // animate={isInView ? { opacity: 1, x: 0 } : {}}
            // transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="">
              <h3 className="text-2xl font-semibold mb-6 padding:8px">
                Let's talk about your project
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  // initial={{ opacity: 0, x: -20 }}
                  // animate={isInView ? { opacity: 1, x: 0 } : {}}
                  // transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  // whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:gradient-border transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg gradient-bg text-white">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              // initial={{ opacity: 0, y: 20 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4"
            >
              <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full glass hover:gradient-bg hover:text-white transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-bold tracking-widest">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-green-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-green-400"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold tracking-widest">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                rows={5}
                className="w-full bg-transparent border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-green-400 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-md transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="text-center text-2xl sm:text-20 text-gray-500 mt-6 px-2 sm:px-0">
          Or email me directly at{" "}
          <span className="text-white text-base">
            devkotapratik65@gmail.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;

