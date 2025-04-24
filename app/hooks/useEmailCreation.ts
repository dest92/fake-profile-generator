"use client";

import { useState } from "react";
import { createTemporaryEmail } from "@/app/services/api";
import { EmailData, UserProfile } from "@/app/types";

export function useEmailCreation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailData, setEmailData] = useState<EmailData | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [disposableDetected, setDisposableDetected] = useState<boolean | undefined>(undefined);

  const createEmail = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Obtener la respuesta de la API
      const response = await createTemporaryEmail();
      console.log("Respuesta de la API:", response);

      // Actualizar el estado con los datos recibidos
      if (response.data) {
        setEmailData(response.data);
        
        // Guardar el token en localStorage
        if (response.data.token) {
          localStorage.setItem('email_temp_token', response.data.token);
          console.log("Token guardado en localStorage");
        }
      }

      // Actualizar el perfil de usuario si existe
      if (response.userProfile) {
        console.log("Perfil recibido:", response.userProfile);
        setUserProfile(response.userProfile);
      } else {
        console.log("No se recibió perfil de usuario");
        setUserProfile(null);
      }

      // Actualizar el estado de detección de email desechable
      if (response.disposableDetected !== undefined) {
        setDisposableDetected(response.disposableDetected);
      }

      // Devolver la respuesta completa para su uso en el componente
      return response;
    } catch (err) {
      console.error("Error al crear email:", err);
      setError("Error al conectar con el servidor: " + err);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createEmail,
    isLoading,
    error,
    emailData,
    userProfile,
    disposableDetected,
  };
}
