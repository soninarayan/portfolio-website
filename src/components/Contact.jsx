import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import Confetti from "react-confetti";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment, faPaperPlane, faSpinner, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Narayan Soni",
          from_email: form.email,
          to_email: "narayansoni.usa@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_ACCESS_TOKEN
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          toast.success("Message sent successfully!");
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Oops, something went wrong. Please try again.");
        }
      );
  };

  const onConfettiComplete = useCallback(() => setShowConfetti(false), []);

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <Toaster position="bottom-right" />
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={100}
          onConfettiComplete={onConfettiComplete}
        />
      )}

      {/* Form Section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 bg-black-100 rounded-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <p className={styles.sectionSubText}>Get in touch</p>
          <div className="flex space-x-4">
            <a
              href="tel:+18328762505"
              className="text-purple-500 hover:text-purple-400 flex items-center"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              (832) 876-2505
            </a>
            <a
              href="mailto:narayansoni.usa@gmail.com"
              className="text-purple-500 hover:text-purple-400 flex items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/soninarayan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 flex items-center"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <label className="flex-1 flex flex-col">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </label>
            <label className="flex-1 flex flex-col">
              <span className="text-white font-medium mb-2">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What’s on your mind?"
              className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center"
          >
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <>
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* 3D Canvas Section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
