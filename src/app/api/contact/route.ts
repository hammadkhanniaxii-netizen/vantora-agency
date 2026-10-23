import { NextResponse } from 'next/server';
import { submitEnquiry } from '@/app/api/contact/route'; // This is a helper, not the actual route handler

// The actual route handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitEnquiry(body);

    if (result.success) {
      return NextResponse.json({ message: 'Enquiry submitted successfully' }, { status: 200 });
    }

    if ('errors' in result) {
      return NextResponse.json({ errors: result.errors }, { status: 400 });
    }

    return NextResponse.json({ message: result.message }, { status: 500 });
  } catch (e) {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }
}
