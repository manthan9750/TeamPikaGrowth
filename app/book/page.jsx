"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Building2,
  User,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  Globe,
  Briefcase,
  TrendingUp,
  MonitorSmartphone,
  MessageSquare,
  DollarSign,
  CalendarCheck,
  AlertCircle,
  Loader2
} from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import CTAButton from "@/src/components/CTAButton";

// Premium fade animations
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemFade = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const availableSlots = [
  "10:00 AM - 10:30 AM",
  "11:00 AM - 11:30 AM",
  "1:00 PM - 1:30 PM",
  "3:00 PM - 3:30 PM",
  "4:30 PM - 5:00 PM"
];

// Aligned with the core services
const serviceOptions = [
  "Website Development",
  "Landing Pages",
  "Branding",
  "Google Business Profile",
  "Search Engine Optimization (SEO)",
  "Social Media Marketing",
  "Lead Generation",
  "AI Automation",
  "CRM Setup",
  "Not Sure Yet"
];

const budgetOptions = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  // Added state to track validation errors
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const [booking, setBooking] = useState({
    slot: "",
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    details: ""
  });

  const selectSlot = (slot) => {
    setBooking((prev) => ({ ...prev, slot }));
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
    
    // Dynamically clear the validation error for this specific field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setSubmitError("");
  };

  // Client-side strict validation runner
  const validateForm = () => {
    const newErrors = {};
    
    // 1. Name Validation
    if (!booking.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    // 2. Business Validation
    if (!booking.businessName.trim()) {
      newErrors.businessName = "Business Name is required.";
    }

    // 3. Strict Mobile Number Validation (Numbers, plus, spaces, hyphens. 7-15 chars)
    if (!booking.phone.trim()) {
      newErrors.phone = "Mobile Number is required.";
    } else if (!/^\+?[0-9\s\-]{7,15}$/.test(booking.phone.trim())) {
      newErrors.phone = "Please enter a valid mobile number.";
    }

    // 4. Strict Email Validation
    if (!booking.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 5. Service Validation
    if (!booking.service) {
      newErrors.service = "Please select a Primary Need.";
    }

    setErrors(newErrors);
    
    // Return true if there are NO errors
    return Object.keys(newErrors).length === 0;
  };

  const submitRequest = async (e) => {
    e.preventDefault(); // Prevents the browser from refreshing the page
    setSubmitError("");
    
    // Run validation and stop execution if it fails
    if (!validateForm()) {
      return; 
    }

    setLoading(true);
    try {
      const generatedRefId = "PIKA-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      setReferenceId(generatedRefId);

      // Payload configuration to match the backend API
      const payload = {
        name: booking.fullName,
        email: booking.email,
        phone: booking.phone,
        company: booking.businessName,
        date: booking.slot,
        service: booking.service,
        message: `Budget: ${booking.budget || 'Not specified'}. Details: ${booking.details || 'None provided'}. Ref: ${generatedRefId}`
      };

      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      // Move to success screen
      setStep(3);
    } catch (err) {
      setSubmitError(err.message || "An unexpected error occurred. Please check your internet connection.");
      console.error("Submission Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getCalendarLink = () => {
    const title = encodeURIComponent(`Strategy Call with Team Pika Growth`);
    const details = encodeURIComponent(`Business: ${booking.businessName}\nService: ${booking.service}\nRef: ${referenceId}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}`;
  };

  const resetForm = () => {
    setBooking({
      slot: "",
      fullName: "",
      businessName: "",
      phone: "",
      email: "",
      service: "",
      budget: "",
      details: ""
    });
    setErrors({});
    setSubmitError("");
    setStep(1);
  };

  return (
    <PageWrapper>
      <div className="pb-32 bg-bg overflow-hidden relative">
        
        {/* Background Gradients & Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,var(--color-primary-soft),transparent_50%)] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 relative z-10">
          
          {/* SECTION 1: HERO */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border text-xs font-semibold uppercase tracking-wider text-content-muted mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Digital Growth Partner</span>
            </div>
            
            <h1 className="text-h1 text-ink dark:text-white mb-6 leading-[1.05]">
              Let's Discuss Your <br className="hidden sm:block" /> Business Growth Goals
            </h1>
            
            <p className="text-base md:text-lg text-content-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
              Tell us about your business and we'll recommend the best digital solutions to help you build your presence, acquire customers, and scale your operations.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-content-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Free Strategy Call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>30-Minute Meeting</span>
              </div>
            </div>
          </motion.div>

          {/* SECTION 2 & 3: BOOKING EXPERIENCE */}
          <div className="max-w-4xl mx-auto bg-surface border border-border rounded-[2rem] shadow-lg overflow-hidden relative">
            
            {/* Progress Indicator */}
            {step < 3 && (
              <div className="absolute top-0 left-0 w-full h-1 bg-bg-secondary">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: "50%" }}
                  animate={{ width: step === 1 ? "50%" : "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            )}

            <div className="p-8 md:p-12 min-h-[500px] flex flex-col">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: TIME SELECTION */}
                {step === 1 && (
                  <motion.div 
                    key="step-1" 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    variants={fadeUp}
                    className="flex-1 flex flex-col"
                  >
                    <div className="mb-10 text-center md:text-left">
                      <h2 className="text-2xl md:text-3xl font-bold text-ink dark:text-white mb-3">
                        Choose a meeting time
                      </h2>
                      <p className="text-content-secondary">
                        Select a time that works best for you to discuss your project.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                      {availableSlots.map((slot, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.01, y: -2 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => selectSlot(slot)}
                          className={`group relative flex items-center justify-between p-6 rounded-2xl border text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                            booking.slot === slot
                              ? "border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-ink shadow-md"
                              : "border-border bg-surface hover:border-border-strong hover:shadow-sm text-ink dark:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-full transition-colors ${
                              booking.slot === slot 
                                ? "bg-white/20 dark:bg-ink/10 text-white dark:text-ink" 
                                : "bg-bg-secondary text-content-muted group-hover:bg-border"
                            }`}>
                              <Calendar className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-lg">{slot}</span>
                          </div>
                          <ArrowRight className={`w-5 h-5 transition-transform duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${
                            booking.slot === slot ? "text-white dark:text-ink opacity-100 translate-x-0" : "text-content-muted"
                          }`} />
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: BUSINESS DETAILS */}
                {step === 2 && (
                  <motion.div 
                    key="step-2" 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    variants={fadeUp}
                    className="flex-1"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <button 
                        onClick={() => setStep(1)}
                        className="p-2 -ml-2 rounded-full hover:bg-bg-secondary text-content-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label="Go back"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <div>
                        <h2 className="text-2xl font-bold text-ink dark:text-white">
                          Tell us about your business
                        </h2>
                        <p className="text-content-secondary text-sm mt-1">
                          Time selected: <span className="font-medium text-ink dark:text-white">{booking.slot}</span>
                        </p>
                      </div>
                    </div>

                    {/* API Submission Error Banner */}
                    {submitError && (
                      <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <form onSubmit={submitRequest} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="block text-sm font-semibold text-ink dark:text-white">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-muted" />
                            <input
                              id="fullName"
                              name="fullName"
                              type="text"
                              placeholder="John Doe"
                              value={booking.fullName}
                              onChange={handleInputChange}
                              className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-bg border text-content placeholder-content-muted focus:outline-none focus:ring-2 focus:ring-primary transition-shadow ${
                                errors.fullName ? "border-red-500" : "border-border"
                              }`}
                            />
                          </div>
                          {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="businessName" className="block text-sm font-semibold text-ink dark:text-white">
                            Business Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-muted" />
                            <input
                              id="businessName"
                              name="businessName"
                              type="text"
                              placeholder="Acme Corp"
                              value={booking.businessName}
                              onChange={handleInputChange}
                              className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-bg border text-content placeholder-content-muted focus:outline-none focus:ring-2 focus:ring-primary transition-shadow ${
                                errors.businessName ? "border-red-500" : "border-border"
                              }`}
                            />
                          </div>
                          {errors.businessName && <p className="text-xs text-red-500 font-medium">{errors.businessName}</p>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-semibold text-ink dark:text-white">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-muted" />
                            <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={booking.email}
                              onChange={handleInputChange}
                              className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-bg border text-content placeholder-content-muted focus:outline-none focus:ring-2 focus:ring-primary transition-shadow ${
                                errors.email ? "border-red-500" : "border-border"
                              }`}
                            />
                          </div>
                          {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-semibold text-ink dark:text-white">
                            Mobile Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-muted" />
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={booking.phone}
                              onChange={handleInputChange}
                              className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-bg border text-content placeholder-content-muted focus:outline-none focus:ring-2 focus:ring-primary transition-shadow ${
                                errors.phone ? "border-red-500" : "border-border"
                              }`}
                            />
                          </div>
                          {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="service" className="block text-sm font-semibold text-ink dark:text-white">
                            Primary Need <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-muted" />
                            <select
                              id="service"
                              name="service"
                              value={booking.service}
                              onChange={handleInputChange}
                              className={`w-full pl-12 pr-10 py-3.5 rounded-xl bg-bg border text-content appearance-none focus:outline-none focus:ring-2 focus:ring-primary transition-shadow ${
                                errors.service ? "border-red-500" : "border-border"
                              }`}
                            >
                              <option value="" disabled>Select a service</option>
                              {serviceOptions.map((opt, idx) => (
                                <option key={idx} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-content-muted">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                          </div>
                          {errors.service && <p className="text-xs text-red-500 font-medium">{errors.service}</p>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="budget" className="block text-sm font-semibold text-ink dark:text-white">
                            Project Budget <span className="text-content-muted font-normal">(Optional)</span>
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-muted" />
                            <select
                              id="budget"
                              name="budget"
                              value={booking.budget}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-bg border border-border text-content appearance-none focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                            >
                              <option value="">Select a budget range</option>
                              {budgetOptions.map((opt, idx) => (
                                <option key={idx} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-content-muted">
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="details" className="block text-sm font-semibold text-ink dark:text-white">
                          Tell us about your project <span className="text-content-muted font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-content-muted" />
                          <textarea
                            id="details"
                            name="details"
                            rows={3}
                            placeholder="What goals are you trying to achieve?"
                            value={booking.details}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-bg border border-border text-content placeholder-content-muted focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                          />
                        </div>
                      </div>

                      <div className="pt-6">
                        {/* CRITICAL FIX: 
                          Using a native HTML <button type="submit"> here instead of CTAButton 
                          guarantees the browser correctly fires the onSubmit event handler on the <form>.
                        */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-4 px-6 rounded-xl text-sm font-bold bg-primary text-white hover:bg-primary-hover disabled:bg-content-muted/30 disabled:text-content-muted disabled:cursor-not-allowed transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                            </>
                          ) : (
                            <>Complete Booking Request <ArrowRight className="w-4 h-4" /></>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* STEP 3: SUCCESS STATE */}
                {step === 3 && (
                  <motion.div 
                    key="step-3" 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit" 
                    variants={fadeUp}
                    className="flex-1 flex flex-col items-center text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mb-6 shadow-inner">
                      <CheckCircle2 className="w-10 h-10 stroke-[2]" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-ink dark:text-white mb-3 tracking-tight">
                      Booking Request Received
                    </h2>
                    <p className="text-content-secondary max-w-md mx-auto mb-8">
                      Thank you for reaching out. We have reserved your preferred time slot and are ready to discuss your business growth.
                    </p>

                    <div className="bg-bg border border-border rounded-2xl px-6 py-4 mb-10 inline-flex flex-col items-center gap-1 shadow-sm">
                      <span className="text-xs font-bold tracking-widest text-content-muted uppercase">Reference ID</span>
                      <span className="text-xl font-mono font-black text-ink dark:text-white tracking-wider">{referenceId}</span>
                    </div>

                    <div className="w-full max-w-lg text-left bg-bg-secondary border border-border rounded-2xl p-6 md:p-8 mb-12">
                      <h3 className="text-sm font-bold tracking-widest text-content-muted uppercase mb-6">
                        What happens next
                      </h3>
                      <div className="space-y-6">
                        {[
                          { title: "We review your request", desc: "Our team analyzes your business scope and goals." },
                          { title: "We confirm the meeting", desc: "You will receive a brief email containing our meeting access link." },
                          { title: "We build a plan", desc: "During our call, we outline a clear strategy to help you scale." }
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-full bg-ink text-white dark:bg-white dark:text-ink flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-ink dark:text-white text-sm">{item.title}</h4>
                              <p className="text-xs text-content-secondary mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
                      <CTAButton 
                        href={getCalendarLink()} 
                        type="primary" 
                        className="w-full sm:w-auto"
                      >
                        <CalendarCheck className="w-4 h-4 mr-2" /> Add To Calendar
                      </CTAButton>
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-bg-secondary border border-border text-content font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full sm:w-auto shadow-sm"
                      >
                        Start Another Request
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* SECTION 4: TRUST SECTION */}
          <div className="mt-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-h2 text-ink dark:text-white mb-4">
                Why Businesses Choose Team Pika Growth
              </h2>
              <p className="text-content-secondary">
                We replace fragmented marketing and engineering systems with reliable, unified execution tailored specifically for your business.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <MonitorSmartphone className="w-6 h-6 text-content" />,
                  title: "Website Development",
                  desc: "Fast, professional websites built to turn visitors into reliable leads for your business."
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-content" />,
                  title: "Marketing & Ads",
                  desc: "Targeted advertising campaigns on Google and Meta designed to lower costs and drive real sales."
                },
                {
                  icon: <Globe className="w-6 h-6 text-content" />,
                  title: "SEO Growth",
                  desc: "Improve your Google rankings to build a steady, reliable stream of organic traffic over time."
                },
                {
                  icon: <Briefcase className="w-6 h-6 text-content" />,
                  title: "Automation Solutions",
                  desc: "Save time by automating repetitive daily tasks and streamlining your customer communication."
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={itemFade}
                  whileHover={{ y: -6 }}
                  className="group p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                >
                  <div className="p-3 bg-bg-secondary border border-border rounded-2xl w-fit mb-6 transition-colors group-hover:bg-primary-soft group-hover:text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-ink dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}