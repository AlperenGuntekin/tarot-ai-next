// pages/packit-privacy-policy.tsx
import React from 'react';

const privacyPolicy = `
Packing List Checklist: PackIt Privacy Policy

Last updated: 28/02/2025

Thank you for choosing PackIt ("we", "us", or "our"). This Privacy Policy explains our commitment to your privacy. PackIt is designed to operate entirely on your device. We do not collect, transmit, or store any personal data on external servers. All information, including your packing lists and preferences, is stored locally on your device.

1. Data Collection and Storage

PackIt does not collect or process any personal information. Every piece of data you create within the app—such as packing lists and settings—is stored locally on your device and is not transmitted to any server or third party.

2. Local Storage Only

All user data remains on your device in local storage. We do not sync, back up, or otherwise transfer your data over the internet. This approach ensures that your personal information remains private and completely under your control.

3. Security

While PackIt does not transmit any data externally, we recommend using your device’s built-in security features (such as passcodes, biometrics, and encryption) to safeguard your local data.

4. Your Rights

Since PackIt does not collect or process any personal data beyond what is stored locally on your device, your privacy rights under the GDPR and other data protection laws remain fully intact. If you have any questions about your privacy or data protection, please contact us using the details provided below.

5. Changes to This Privacy Policy

We may update this Privacy Policy occasionally. Any changes will be posted on our website and reflected in this document. We encourage you to review this policy periodically.

6. Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

Email: alperenguntekin@hotmail.com

By using PackIt, you agree to the terms outlined in this Privacy Policy.
`;

const PackItPrivacyPolicyPage: React.FC = () => {
  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        whiteSpace: 'pre-wrap',
      }}
    >
      {privacyPolicy}
    </div>
  );
};

export default PackItPrivacyPolicyPage;
