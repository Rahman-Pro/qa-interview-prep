import { useState, useEffect, useRef } from 'react';

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [supported, setSupported] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SR = typeof window !== 'undefined' && (window.SpeechRecognition || window.webkitSpeechRecognition);
    if (SR) {
      setSupported(true);
    }
  }, []);

  const startListening = (onTranscriptUpdate) => {
    stopListening();

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      setStatusMessage('⚠️ Voice recognition requires Chrome or Edge.');
      return;
    }

    const recognition = new SR();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onstart = () => {
      setIsListening(true);
      setStatusMessage('🎙️ Listening... Speak your answer!');
    };

    recognition.onresult = (e) => {
      let finalTxt = '';
      let interimTxt = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) {
          finalTxt += e.results[i][0].transcript + ' ';
        } else {
          interimTxt += e.results[i][0].transcript;
        }
      }
      if (finalTxt) {
        setTranscript(prev => {
          const next = prev ? prev + ' ' + finalTxt : finalTxt;
          if (onTranscriptUpdate) onTranscriptUpdate(next);
          return next;
        });
      }
      setStatusMessage(interimTxt ? `🎙️ "${interimTxt}"` : '🎙️ Recording spoken response...');
    };

    recognition.onerror = (e) => {
      setStatusMessage(`⚠️ Speech error: ${e.error}`);
      setIsListening(false);
    };

    recognition.onend = () => {
      // Auto restart if still marked as listening
      if (recognitionRef.current && isListening) {
        try { recognition.start(); } catch(err) {}
      } else {
        setIsListening(false);
      }
    };

    recognitionRef.current = recognition;
    try {
      recognition.start();
    } catch(e) {
      setStatusMessage('⚠️ Microphone start failed.');
      setIsListening(false);
    }
  };

  const stopListening = () => {
    setIsListening(false);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch(e) {}
      recognitionRef.current = null;
    }
  };

  const resetTranscript = () => {
    setTranscript('');
    setStatusMessage('');
  };

  return {
    startListening,
    stopListening,
    resetTranscript,
    isListening,
    transcript,
    setTranscript,
    statusMessage,
    supported
  };
}
