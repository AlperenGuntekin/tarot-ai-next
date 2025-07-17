// pages/breaker-privacy-policy.tsx
import React from 'react';

const privacyPolicy = `
Breaker (Conversation Starter) Privacy Policy

Last updated: 28/02/2025

Thank you for choosing Breaker (Conversation Starter) ("we", "us", or "our"). Your privacy is our top priority. Breaker is designed to operate entirely on your device. We do not collect, transmit, or store any personal data on external servers. All information, including your favorites and settings, is stored locally on your device.

1. Data Collection and Storage

Breaker does not collect or process any personal information. Everything you do within the app—such as saving favorite prompts or changing settings—is stored locally on your device and is never transmitted to any server or third party.

2. Local Storage Only

All user data remains on your device in local storage. We do not sync, back up, or transfer your data over the internet. This ensures your personal information remains private and fully under your control.

3. Security

Since Breaker does not transmit any data externally, we recommend using your device’s built-in security features (such as passcodes, biometrics, and encryption) to safeguard your local data.

4. Children’s Privacy

Breaker is suitable for users of all ages and does not knowingly collect any personal information from children.

5. Your Rights

As Breaker does not collect or process any personal data beyond what is stored locally on your device, your privacy rights under the GDPR and other data protection laws remain fully intact. If you have any questions about your privacy or data protection, please contact us using the details below.

6. Changes to This Privacy Policy

We may update this Privacy Policy occasionally. Any changes will be posted in the app and reflected in this document. We encourage you to review this policy periodically.

7. Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

Email: alperenguntekin@hotmail.com

By using Breaker, you agree to the terms outlined in this Privacy Policy.
`;

const BreakerPrivacyPolicyPage: React.FC = () => {
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

export default BreakerPrivacyPolicyPage;
