import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactPayloadSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  service: z.string().min(2),
  hiringVolume: z.string().optional(),
  message: z.string().optional(),
});

/**
 * POST /api/contact
 * Validates incoming demo/contact requests.
 *
 * TODO: OWNER — Connect your transactional email or CRM provider below:
 * - Resend / SendGrid / AWS SES to notify `hello@orbitverify.com`
 * - Or webhook to Zoho CRM / HubSpot / Google Sheets
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Invalid form fields',
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    // Structured log ready for server observability or email dispatch
    console.info('[ORBIT VERIFY LEAD CAPTURED]', {
      timestamp: new Date().toISOString(),
      recipient: 'hello@orbitverify.com',
      lead: parsed.data,
    });

    return NextResponse.json({
      ok: true,
      message: 'Demo request received by Orbit Verify verification desk.',
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Failed to process contact submission' },
      { status: 500 }
    );
  }
}
