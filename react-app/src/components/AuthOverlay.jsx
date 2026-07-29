import React, { useState, useEffect } from 'react';

export function AuthOverlay() {
  const [userEmail, setUserEmail] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [step, setStep] = useState('email'); // 'email' or 'otp'
  const [status, setStatus] = useState({ text: '', isError: false, isWarning: false });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('qa_user_email');
    if (saved) {
      setUserEmail(saved);
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  const handleSendCode = () => {
    const email = emailInput.trim();
    if (!email || !email.includes('@')) {
      setStatus({ text: '⚠️ Please enter a valid email address.', isError: true });
      return;
    }
    setStatus({ text: 'Simulating secure email OTP dispatch...', isWarning: true });
    setTimeout(() => {
      setStep('otp');
      setStatus({ text: '', isError: false });
    }, 1000);
  };

  const handleVerifyCode = () => {
    if (otpInput.trim() === '1234') {
      setStatus({ text: '✓ Access Verified. Initializing environment...', isError: false });
      localStorage.setItem('qa_user_email', emailInput.trim());
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    } else {
      setStatus({ text: '❌ Access Denied. Invalid verification code.', isError: true });
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <div style={{ fontSize: '3rem', marginBottom: '12px', animation: 'pulse-glow 2s infinite' }}>🔐</div>
        <h2>Secure Access Portal</h2>
        <p>
          {step === 'email'
            ? "Please authenticate your email to unlock Atiqur's SDET Interview Practice Console."
            : `A secure 4-digit verification code has been simulated for: ${emailInput}`}
        </p>

        {step === 'email' ? (
          <div>
            <input
              type="email"
              className="auth-input"
              placeholder="Enter your email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendCode()}
            />
            <button type="button" className="auth-btn" onClick={handleSendCode}>
              Request Access Code
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              className="auth-input"
              placeholder="Enter 4-digit code"
              maxLength={4}
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleVerifyCode()}
            />
            <button type="button" className="auth-btn" onClick={handleVerifyCode}>
              Verify & Unlock
            </button>
            <div className="sandbox-hint">
              <strong>Access Sandbox OTP:</strong> Enter <strong>1234</strong> to verify and authenticate.
            </div>
          </div>
        )}

        <div
          style={{
            marginTop: '12px',
            fontSize: '0.8rem',
            color: status.isError ? 'var(--red)' : status.isWarning ? 'var(--yellow)' : 'var(--green)',
            minHeight: '20px',
            fontWeight: 500
          }}
        >
          {status.text}
        </div>
      </div>
    </div>
  );
}
