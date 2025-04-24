"use client";

import { useState, useEffect } from "react";
import { useEmailCreation } from "@/app/hooks/useEmailCreation";
import { UserProfile } from "./UserProfile";
import { CopyableField } from "../ui/CopyableField";
import { LoadingButton } from "../ui/LoadingButton";
import { useTokenStorage } from "@/app/hooks/useTokenStorage";
import { MessagesList } from "@/app/components/messages/MessagesList";

export function EmailCreator() {
  const {
    createEmail,
    isLoading,
    error,
    emailData: currentEmailData,
    userProfile: currentUserProfile,
    disposableDetected,
  } = useEmailCreation();

  const {
    emailData: storedEmail,
    userProfile: storedProfile,
    saveEmailData,
    saveUserProfile,
  } = useTokenStorage();

  const [copied, setCopied] = useState<string | null>(null);

  const handleCreateEmail = async () => {
    const result = await createEmail();
    if (result?.data) {
      saveEmailData(result.data);
      // Forzar recarga de mensajes
      const messagesList = document.querySelector("#messages-list");
      if (messagesList) {
        messagesList.dispatchEvent(new Event("refresh"));
      }
    }
    if (result?.userProfile) {
      saveUserProfile(result.userProfile);
    }
  };

  // Use the current data if available, otherwise fall back to stored data
  const emailData = currentEmailData || storedEmail;
  const userProfile = currentUserProfile || storedProfile;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  // Para depuración
  useEffect(() => {
    console.log("Estado del perfil:", userProfile);
  }, [userProfile]);

  return (
    <div className="max-w-6xl mx-auto">
      {!emailData ? (
        <div className="bg-gray-900 rounded-lg shadow-lg p-8 text-center border border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Crea tu email temporal
          </h2>
          <p className="text-gray-400 mb-8">
            Genera un email temporal con un perfil de usuario aleatorio para
            proteger tu privacidad en línea
          </p>
          <LoadingButton
            onClick={handleCreateEmail}
            isLoading={isLoading}
            loadingText="Generando..."
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white"
          >
            Crear Email Temporal
          </LoadingButton>
          {error && <p className="mt-4 text-red-400">{error}</p>}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8">
          <div className="space-y-8">
            {/* Email Information Card */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Tu Email Temporal
                    </h2>
                    <p className="text-indigo-200">
                      Usa esta dirección para recibir mensajes de forma segura y
                      privada
                    </p>
                  </div>
                  {disposableDetected !== undefined && (
                    <div
                      className={`px-4 py-2 rounded-full ${
                        disposableDetected
                          ? "bg-amber-500 text-amber-900"
                          : "bg-emerald-500 text-emerald-900"
                      } font-medium text-sm w-full justify-center`}
                    >
                      {disposableDetected ? (
                        <p className="text-center">Email temporal detectado</p>
                      ) : (
                        <p className="text-center">Email válido</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <CopyableField
                  label="Dirección de Email"
                  value={emailData.email}
                  darkMode={true}
                  onCopy={(text) => copyToClipboard(text, "email")}
                  isCopied={copied === "email"}
                />
                <CopyableField
                  label="Contraseña"
                  value={emailData.password}
                  darkMode={true}
                  onCopy={(text) => copyToClipboard(text, "password")}
                  isCopied={copied === "password"}
                />
                <CopyableField
                  label="Token de Autenticación"
                  value="Token guardado de forma segura en tu navegador"
                  isSmallText={true}
                  darkMode={true}
                  onCopy={() => {
                    const token = localStorage.getItem("email_temp_token");
                    if (token) {
                      navigator.clipboard.writeText(token);
                      setCopied("token");
                      setTimeout(() => setCopied(null), 2000);
                    }
                  }}
                  isCopied={copied === "token"}
                />
                <div className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm font-medium text-gray-300">
                        Email activo
                      </span>
                    </div>
                    <button
                      onClick={handleCreateEmail}
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Generar nuevo email
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* User Profile Card */}
            {userProfile && (
              <div>
                <UserProfile profile={userProfile} />
              </div>
            )}
          </div>

          {/* Messages Section */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Mensajes Recibidos
              </h2>
              <p className="text-indigo-200">
                Revisa los mensajes recibidos en tu email temporal
              </p>
            </div>
            <div className="p-6">
              <MessagesList />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
