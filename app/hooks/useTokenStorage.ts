'use client';

import { useState, useEffect } from 'react';
import { EmailData, UserProfile } from '../types';

export function useTokenStorage() {
  const [token, setToken] = useState<string | null>(null);
  const [emailData, setEmailData] = useState<EmailData | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('email_temp_token');
      const storedEmail = localStorage.getItem('email_temp_data');
      const storedProfile = localStorage.getItem('email_temp_profile');

      if (storedToken) setToken(storedToken);
      if (storedEmail) setEmailData(JSON.parse(storedEmail));
      if (storedProfile) setUserProfile(JSON.parse(storedProfile));
    }
  }, []);

  // Guardar token
  const saveToken = (newToken: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('email_temp_token', newToken);
      setToken(newToken);
    }
  };

  // Guardar email data
  const saveEmailData = (data: EmailData) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('email_temp_data', JSON.stringify(data));
      setEmailData(data);
    }
  };

  // Guardar user profile
  const saveUserProfile = (profile: UserProfile) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('email_temp_profile', JSON.stringify(profile));
      setUserProfile(profile);
    }
  };

  // Eliminar todos los datos
  const removeAllData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('email_temp_token');
      localStorage.removeItem('email_temp_data');
      localStorage.removeItem('email_temp_profile');
      setToken(null);
      setEmailData(null);
      setUserProfile(null);
    }
  };

  return {
    token,
    emailData,
    userProfile,
    saveToken,
    saveEmailData,
    saveUserProfile,
    removeAllData,
    getToken: () => token || (typeof window !== 'undefined' ? localStorage.getItem('email_temp_token') : null)
  };
}