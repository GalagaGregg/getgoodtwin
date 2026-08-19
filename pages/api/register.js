import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const GHL_API_KEY = 'pit-8eac45f8-b29c-4b4f-a46a-9da98b442784';
const GHL_API_URL = 'https://rest.gohighlevel.com/v1/contacts';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Push lead to GHL CRM
    try {
      const ghlResponse = await fetch(GHL_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: name.split(' ')[0],
          lastName: name.split(' ').slice(1).join(' '),
          email: email,
          phone: phone,
          tags: ['webinar-registrant', 'getgoodtwin'],
          source: 'webinar-funnel'
        })
      });

      if (!ghlResponse.ok) {
        console.warn('GHL API response:', ghlResponse.status);
      } else {
        console.log('✅ Lead pushed to GHL');
      }
    } catch (ghlError) {
      console.error('GHL error (non-fatal):', ghlError.message);
      // Don't fail registration if GHL fails
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return res.status(500).json({ error: 'Email service configuration error' });
    }

    const emailContent = {
      from: 'GetGoodTwin <noreply@getgoodtwin.com>',
      to: email,
      subject: '🎯 Your Webinar Registration is Confirmed - How to Recover Lost Leads',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 0; }
            .header { background: linear-gradient(135deg, #1e3a8a 0%, #000 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: white; padding: 40px 30px; }
            .footer { background: #1e3a8a; color: white; padding: 30px; text-align: center; font-size: 12px; }
            .cta { background: linear-gradient(90deg, #fbbf24 0%, #ef4444 100%); color: black; padding: 15px 30px; text-align: center; font-weight: bold; border-radius: 5px; display: inline-block; margin: 20px 0; }
            .highlight { color: #fbbf24; font-weight: bold; }
            .benefit { margin: 15px 0; padding: 15px; background: #f0f9ff; border-left: 4px solid #fbbf24; border-radius: 4px; }
            h2 { color: #1e3a8a; margin-top: 0; }
            h3 { color: #1e3a8a; text-align: center; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>You're Registered! 🎉</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px;">Your spot is reserved</p>
            </div>

            <div class="content">
              <h2>Hi ${name},</h2>

              <p>Thank you for registering for our FREE webinar:</p>

              <h3>How to Recover Lost Leads & Close 15% More Deals</h3>

              <p style="text-align: center; font-size: 18px; margin: 20px 0; line-height: 1.8;">
                <span class="highlight">📅 Friday, August 30, 2026 @ 6:00 PM EST</span><br/>
                <span class="highlight">🔴 LIVE Demo + Framework Training</span>
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://us06web.zoom.us/j/88244823179?pwd=UVdk4ZoBSLdoM43a0lefcTZ1WJl6y1" style="background: linear-gradient(90deg, #fbbf24 0%, #ef4444 100%); color: black; padding: 15px 40px; text-align: center; font-weight: bold; border-radius: 5px; display: inline-block; text-decoration: none; font-size: 16px;">
                  🎯 JOIN ZOOM WEBINAR
                </a>
              </div>

              <h2>What You'll Learn:</h2>

              <div class="benefit">
                <strong>Framework #1: The Three Types of Lost Deals</strong><br/>
                Why $3M in deals are hemorrhaging from your pipeline right now
              </div>

              <div class="benefit">
                <strong>Framework #2: The Lead Stewardship Model</strong><br/>
                How $1M brokers think differently about leads than everyone else
              </div>

              <div class="benefit">
                <strong>Framework #3: The Friction Matrix</strong><br/>
                Where deals actually die (it's not where you think)
              </div>

              <div class="benefit">
                <strong>Real Case Study: Marcus's Transformation</strong><br/>
                $500K broker → $1M broker (same leads, different system)
              </div>

              <p style="text-align: center; margin: 30px 0; font-size: 16px;">
                <strong>💡 This isn't about more leads.</strong><br/>
                <strong>It's about less leakage.</strong>
              </p>

              <h2 style="margin-top: 30px;">Your Registration Details:</h2>
              <p style="background: #f0f9ff; padding: 15px; border-radius: 4px; border-left: 4px solid #fbbf24;">
                <strong>Email:</strong> ${email}<br/>
                <strong>Phone:</strong> ${phone}<br/>
                <strong>Registered:</strong> ${new Date().toLocaleDateString()}
              </p>

              <p style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 4px; border-left: 4px solid #fbbf24;">
                ⏰ <strong>Limited spots available</strong> - Sessions fill up fast. You're in. See you at the webinar!
              </p>

              <p style="margin-top: 30px; color: #666; font-size: 14px;">
                If you have any questions before the webinar, just reply to this email. We're here to help.
              </p>
            </div>

            <div class="footer">
              <p style="margin: 0;">GetGoodTwin - Real Estate Lead Management System</p>
              <p style="margin: 10px 0 0 0;">Helping brokers stop bleeding leads and start building wealth</p>
              <p style="margin: 10px 0 0 0;">© 2026 GetGoodTwin. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `You're registered for our webinar! Email: ${email}, Phone: ${phone}. See you in 2 weeks.`
    };

    // Send email to registrant
    const response = await resend.emails.send(emailContent);

    if (response.error) {
      throw new Error(response.error.message);
    }

    // Optional: Send notification to owner
    if (process.env.RESEND_OWNER_EMAIL) {
      await resend.emails.send({
        from: 'GetGoodTwin <noreply@getgoodtwin.com>',
        to: process.env.RESEND_OWNER_EMAIL,
        subject: `📊 New Webinar Registration: ${name}`,
        html: `<h2>New Registration</h2><p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Phone:</strong> ${phone}<br/><strong>Time:</strong> ${new Date().toISOString()}</p>`
      });
    }

    console.log('✅ Email sent to:', email);

    return res.status(200).json({
      success: true,
      message: 'Registration confirmed! Check your email.',
      data: { name, email, phone }
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    return res.status(500).json({ error: 'Failed to process registration' });
  }
}
