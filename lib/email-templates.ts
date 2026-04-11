/**
 * Professional Email Templates for G-Vector Realtech
 * Theme: Premium Gold (#C5993E) and Deep Charcoal/Black
 */

export const getAdminEmailHTML = (data: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  interest: string;
  message?: string;
}) => {
  const { name, company, email, phone, interest, message } = data;
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; }
        .header { background-color: #1a1a1a; padding: 30px; text-align: center; border-bottom: 4px solid #C5993E; }
        .logo-text { color: #C5993E; font-size: 24px; font-weight: bold; letter-spacing: 2px; margin: 0; }
        .content { padding: 40px; background-color: #ffffff; }
        .eyebrow { color: #C5993E; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px; }
        .title { font-size: 20px; color: #1a1a1a; margin-top: 0; margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
        .field-group { margin-bottom: 20px; }
        .label { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; display: block; }
        .value { font-size: 16px; color: #222; font-weight: 500; }
        .message-box { background-color: #f9f9f9; padding: 20px; border-left: 3px solid #C5993E; margin-top: 10px; font-style: italic; }
        .footer { background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 12px; color: #777; }
        .footer p { margin: 5px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <p class="logo-text">G-VECTOR REALTECH</p>
        </div>
        <div class="content">
          <div class="eyebrow">New Lead Captured</div>
          <h1 class="title">Strategic Enquiry Received</h1>
          
          <div class="field-group">
            <span class="label">Full Name</span>
            <div class="value">${name}</div>
          </div>
          
          <div class="field-group">
            <span class="label">Organization</span>
            <div class="value">${company || 'Not Specified'}</div>
          </div>
          
          <div class="field-group">
            <span class="label">Contact Email</span>
            <div class="value"><a href="mailto:${email}" style="color: #C5993E; text-decoration: none;">${email}</a></div>
          </div>
          
          <div class="field-group">
            <span class="label">Phone Number</span>
            <div class="value">${phone || 'Not Provided'}</div>
          </div>
          
          <div class="field-group">
            <span class="label">Area of Interest</span>
            <div class="value" style="color: #C5993E; font-weight: bold;">${interest}</div>
          </div>
          
          <div class="field-group">
            <span class="label">Detailed Brief</span>
            <div class="message-box">${message || 'No additional message provided.'}</div>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #999;">
            Enquiry captured at: ${timestamp}
          </div>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} G-Vector Realtech Private Limited</p>
          <p>Institutional Real Estate Advisory | Enterprise IT | Corporate Consulting</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const getClientReceiptHTML = (name: string, interest: string) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; }
        .header { background-color: #1a1a1a; padding: 40px; text-align: center; border-bottom: 4px solid #C5993E; }
        .logo-text { color: #C5993E; font-size: 26px; font-weight: bold; letter-spacing: 3px; margin: 0; }
        .content { padding: 40px; background-color: #ffffff; }
        .greeting { font-size: 22px; color: #1a1a1a; margin-top: 0; margin-bottom: 20px; }
        .text { font-size: 16px; color: #444; margin-bottom: 25px; }
        .interest-badge { display: inline-block; padding: 6px 15px; background-color: #f4f4f4; border-left: 3px solid #C5993E; font-weight: bold; color: #1a1a1a; margin-bottom: 25px; }
        .signature { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; }
        .signature-name { font-weight: bold; color: #1a1a1a; font-size: 16px; margin: 0; }
        .signature-title { color: #C5993E; font-size: 14px; margin: 0; text-transform: uppercase; letter-spacing: 1px; }
        .footer { background-color: #f4f4f4; padding: 30px; text-align: center; font-size: 12px; color: #777; }
        .contact-info { margin-top: 15px; border-top: 1px solid #ddd; padding-top: 15px; }
        .cta-button { display: inline-block; padding: 12px 25px; background-color: #C5993E; color: white; text-decoration: none; font-weight: bold; border-radius: 2px; margin-top: 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <p class="logo-text">G-VECTOR REALTECH</p>
        </div>
        <div class="content">
          <h1 class="greeting">Dear ${name},</h1>
          <p class="text">Thank you for reaching out to G-Vector Realtech. We have successfully received your enquiry regarding:</p>
          
          <div class="interest-badge">${interest}</div>
          
          <p class="text">Our advisory team is currently reviewing your requirements. We prioritize every conversation and will be in touch with you shortly to schedule a <strong>Strategy Session</strong>.</p>
          
          <p class="text">At G-Vector, we believe every successful outcome starts with deep listening and institutional-grade analysis. We look forward to exploring how we can engineer the right solution for you.</p>

          <div class="signature">
            <p class="signature-name">The Advisory Team</p>
            <p class="signature-title">G-Vector Realtech</p>
          </div>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} G-Vector Realtech Private Limited</p>
          <div class="contact-info">
            <p><strong>Gurgaon Office:</strong> Clarion Centrum Plaza, Golf Course Road</p>
            <p><strong>Delhi Office:</strong> Salcon Rasvilas, Saket</p>
            <p><a href="mailto:contact@gvector.in" style="color: #C5993E; text-decoration: none;">contact@gvector.in</a> | +91 98100 91101</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
