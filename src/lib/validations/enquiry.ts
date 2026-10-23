import { z } from 'zod';

export const EnquirySchema = z.object({
  contactName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  requestedServices: z.array(z.string()).min(1, 'Please select at least one service'),
  budgetRange: z.enum(['10k-25k', '25k-50k', '50k-100k', '100k+'], {
    error: 'Please select a budget range',
  }),
  desiredTimeline: z.string().min(1, 'Please specify a timeline'),
  projectDescription: z.string().min(20, 'Please provide a more detailed description (min 20 chars)'),
  privacyConsent: z.literal(true, {
    error: 'You must consent to the privacy policy',
  }),
});

export type EnquiryInput = z.infer<typeof EnquirySchema>;
