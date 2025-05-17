import React from 'react';

const privacyPolicy = `
Invoice Maker: QuickBill Privacy Policy

Last updated: 17/05/2025

Welcome to Invoice Maker: QuickBill ("we", "us", or "our"). This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application. QuickBill is designed to store and manage your invoicing, quoting, and billing data locally on your device. We do not collect or transmit personal information to external servers without your explicit consent.

1. Data Collection and Storage

QuickBill stores all data generated within the app—such as customer details, quotes, invoices, and payment records—locally on your device. We use your device’s local storage (e.g., AsyncStorage or Secure Storage) to persistently save and retrieve this information.

2. Local-Only Storage

Under normal operation, QuickBill does not sync any data to cloud services or third-party servers. All user-created content remains on your device and is not accessible by us or anyone else unless you export or share it via email or PDF.

3. Optional Cloud Backup & Sync (If Enabled)

In future versions, you may choose to enable optional cloud backup via iCloud or Google Drive. This feature is explicitly opt-in, and no backup occurs until you authorize it in Settings. Backup data is encrypted on your device before upload.

4. Analytics and Crash Reporting

We may use anonymous, aggregated analytics (e.g., via Firebase Analytics or similar) to improve app performance and user experience. Analytics data does not include personal details or invoice contents. Crash reports may contain stack traces and device metadata; these are used solely for debugging and are never linked to your personal data.

5. Security

Although QuickBill keeps data locally, we recommend you secure your device with a passcode, biometric lock, or device encryption to prevent unauthorized access. We do not have access to unlock or recover your data if your device security is bypassed or disabled.

6. Your Rights

Since QuickBill does not collect personal data externally, you retain complete control over your information. You may delete any invoice, quote, or client profile at any time. Under data protection regulations (e.g., GDPR), you have rights to access, rectify, or erase any data stored within the app.

7. Changes to This Policy

We may update this Privacy Policy occasionally. When changes occur, the "Last updated" date at the top will be revised, and a summary of key updates may be provided within the app. We encourage you to review this policy periodically.

8. Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

Email: alperenguntekin@hotmail.com

By using Invoice Maker: QuickBill, you agree to the terms of this Privacy Policy.
`;

const QuickBillPrivacyPolicyPage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', whiteSpace: 'pre-wrap' }}>
      {privacyPolicy}
    </div>
  );
};

export default QuickBillPrivacyPolicyPage;
