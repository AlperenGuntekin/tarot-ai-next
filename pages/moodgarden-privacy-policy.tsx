// pages/moodgarden-privacy-policy.tsx
import React from 'react';

const privacyPolicy = `
MoodGarden Privacy Policy

Last updated: 28/06/2025

Thank you for using MoodGarden ("we", "us", or "our"). Your privacy is important to us. MoodGarden is designed to help you reflect on your emotions in a personal and meaningful way — and we take your data privacy seriously.

1. No Data Collection

MoodGarden does not collect, transmit, or store any personal data on remote servers. All data, including your mood logs, plant growth, and preferences, is stored locally on your device only.

2. Offline-First Approach

MoodGarden is fully functional without an internet connection. Your mood entries, statistics, and garden visuals never leave your device. We do not use analytics, ads, or third-party tracking tools.

3. Local Storage and Security

All app data is stored using your device's secure local storage system. To protect your information, we recommend enabling your device’s security features such as screen lock, encryption, or biometric authentication.

4. No Accounts Required

You do not need to sign up or create an account to use MoodGarden. There is no login, cloud sync, or user profiling. This ensures your emotional data remains private and entirely under your control.

5. Your Rights

Because we do not collect or process your data externally, your rights under global data protection laws such as GDPR and CCPA remain unaffected. If you have concerns or questions, we’re happy to help.

6. Policy Updates

We may revise this Privacy Policy occasionally. Any updates will be reflected on this page. We recommend reviewing the policy periodically to stay informed.

7. Contact Us

If you have any questions about this Privacy Policy or your data privacy while using MoodGarden, feel free to reach out:

Email: alperenguntekin@hotmail.com

By using MoodGarden, you agree to the terms outlined in this Privacy Policy.
`;

const MoodGardenPrivacyPolicyPage: React.FC = () => {
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

export default MoodGardenPrivacyPolicyPage;
