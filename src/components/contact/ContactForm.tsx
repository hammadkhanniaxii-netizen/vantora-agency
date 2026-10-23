"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [formData, setFormData] = useState({
    contactName: '',
    email: '',
    company: '',
    website: '',
    requestedServices: [] as string[],
    budgetRange: '',
    desiredTimeline: '',
    projectDescription: '',
    privacyConsent: false,
  });

  const SERVICES = ['Brand Strategy', 'Web Design', 'Creative Tech', 'Digital Marketing'];
  const BUDGETS = ['10k-25k', '25k-50k', '50k-100k', '100k+'];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      requestedServices: prev.requestedServices.includes(service)
        ? prev.requestedServices.filter(s => s !== service)
        : [...prev.requestedServices, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20 px-6"
      >
        <div className="w-20 h-20 bg-acid-lime rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} className="text-obsidian" />
        </div>
        <h2 className="text-4xl font-display font-bold text-obsidian mb-4">Project Request Received.</h2>
        <p className="text-muted-grey text-lg mb-12">Thank you for reaching out. Our strategic team will review your details and get back to you shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline text-xs uppercase tracking-widest">Send another enquiry</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="group">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-2">Full Name</label>
          <input
            required
            type="text"
            value={formData.contactName}
            onChange={e => setFormData({...formData, contactName: e.target.value})}
            className={cn(
              "w-full bg-transparent border-b border-obsidian/10 py-3 outline-none transition-colors focus:border-acid-lime",
              errors.contactName && "border-red-500"
            )}
            placeholder="Jane Doe"
          />
          {errors.contactName && <p className="text-red-500 text-[10px] mt-1">{errors.contactName[0]}</p>}
        </div>

        <div className="group">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-2">Work Email</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className={cn(
              "w-full bg-transparent border-b border-obsidian/10 py-3 outline-none transition-colors focus:border-acid-lime",
              errors.email && "border-red-500"
            )}
            placeholder="jane@company.com"
          />
          {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email[0]}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
              className="w-full bg-transparent border-b border-obsidian/10 py-3 outline-none transition-colors focus:border-acid-lime"
              placeholder="Acme Corp"
            />
          </div>
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-2">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={e => setFormData({...formData, website: e.target.value})}
              className="w-full bg-transparent border-b border-obsidian/10 py-3 outline-none transition-colors focus:border-acid-lime"
              placeholder="https://..."
            />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-4">Services Required</label>
          <div className="flex flex-wrap gap-3">
            {SERVICES.map(s => (
              <button
                key={s}
                type="button"
                onClick={() => handleServiceToggle(s)}
                className={cn(
                  "px-4 py-2 text-[10px] uppercase tracking-widest font-medium transition-all border",
                  formData.requestedServices.includes(s)
                    ? "bg-obsidian text-porcelain border-obsidian"
                    : "bg-transparent text-obsidian border-obsidian/10 hover:border-obsidian"
                )}
              >
                {s}
              </button>
            ))}
          </div>
          {errors.requestedServices && <p className="text-red-500 text-[10px] mt-2">{errors.requestedServices[0]}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-2">Budget Range</label>
            <select
              value={formData.budgetRange}
              onChange={e => setFormData({...formData, budgetRange: e.target.value})}
              className="w-full bg-transparent border-b border-obsidian/10 py-3 outline-none transition-colors focus:border-acid-lime appearance-none cursor-pointer"
            >
              <option value="" disabled>Select budget</option>
              {BUDGETS.map(b => <option key={b} value={b}>{b} USD</option>)}
            </select>
            {errors.budgetRange && <p className="text-red-500 text-[10px] mt-1">{errors.budgetRange[0]}</p>}
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-2">Desired Timeline</label>
            <input
              required
              type="text"
              value={formData.desiredTimeline}
              onChange={e => setFormData({...formData, desiredTimeline: e.target.value})}
              className="w-full bg-transparent border-b border-obsidian/10 py-3 outline-none transition-colors focus:border-acid-lime"
              placeholder="e.g. 3 months"
            />
            {errors.desiredTimeline && <p className="text-red-500 text-[10px] mt-1">{errors.desiredTimeline[0]}</p>}
          </div>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold text-obsidian mb-2">Project Description</label>
          <textarea
            required
            value={formData.projectDescription}
            onChange={e => setFormData({...formData, projectDescription: e.target.value})}
            className="w-full bg-transparent border-b border-obsidian/10 py-3 outline-none transition-colors focus:border-acid-lime resize-none"
            rows={4}
            placeholder="Tell us about your vision..."
          />
          {errors.projectDescription && <p className="text-red-500 text-[10px] mt-1">{errors.projectDescription[0]}</p>}
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            checked={formData.privacyConsent}
            onChange={e => setFormData({...formData, privacyConsent: e.target.checked})}
            className="mt-1 accent-acid-lime"
          />
          <label htmlFor="privacy" className="text-[10px] text-muted-grey leading-relaxed cursor-pointer">
            I consent to the processing of my data according to the VANTORA Privacy Policy.
          </label>
        </div>
        {errors.privacyConsent && <p className="text-red-500 text-[10px] mt-1">{errors.privacyConsent[0]}</p>}

        <button
          disabled={status === 'submitting'}
          className="btn-primary w-full py-6 text-sm uppercase tracking-widest flex items-center justify-center gap-2"
        >
          {status === 'submitting' ? <Loader2 className="animate-spin" size={18} /> : 'Submit Request'}
        </button>
      </div>
    </form>
  );
}
