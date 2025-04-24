"use client";

import Image from "next/image";
import { UserProfile as UserProfileType } from "@/app/types";
import { useState } from "react";

interface UserProfileProps {
  profile: UserProfileType;
}

export function UserProfile({ profile }: UserProfileProps) {
  const [activeTab, setActiveTab] = useState<
    "personal" | "contacto" | "profesional"
  >("personal");

  // Función para formatear la fecha de nacimiento
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-800 transition-all duration-300 hover:shadow-xl">
      {/* Cabecera con gradiente y avatar */}
      <div className="relative">
        <div className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-600 h-32"></div>
        <div className="absolute -bottom-16 left-6 md:left-8">
          <div className="relative w-32 h-32 rounded-xl overflow-hidden border-4 border-gray-900 shadow-lg">
            <Image
              src={profile.avatar.trim()}
              alt={profile.fullName}
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Información principal */}
      <div className="pt-20 px-6 pb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {profile.fullName}
            </h2>
            <p className="text-indigo-400 font-medium">{profile.occupation}</p>
            <p className="text-gray-400 text-sm">{profile.company}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900 text-indigo-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 text-center"></span>
              {profile.gender === "male" ? "Masculino" : "Femenino"} •{" "}
              {profile.age} años
            </span>
          </div>
        </div>

        {/* Pestañas de navegación */}
        <div className="mt-8 border-b border-gray-800">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("personal")}
              className={`pb-4 px-1 font-medium text-sm transition-colors ${
                activeTab === "personal"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Información Personal
            </button>
            <button
              onClick={() => setActiveTab("contacto")}
              className={`pb-4 px-1 font-medium text-sm transition-colors ${
                activeTab === "contacto"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Contacto
            </button>
            <button
              onClick={() => setActiveTab("profesional")}
              className={`pb-4 px-1 font-medium text-sm transition-colors ${
                activeTab === "profesional"
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Profesional
            </button>
          </nav>
        </div>

        {/* Contenido de las pestañas */}
        <div className="mt-6">
          {activeTab === "personal" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Fecha de Nacimiento
                  </p>
                  <p className="text-white font-medium">
                    {formatDate(profile.birthdate)}
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Edad
                  </p>
                  <p className="text-white font-medium">{profile.age} años</p>
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Nombre Completo
                </p>
                <p className="text-white font-medium">
                  {profile.firstName} {profile.lastName}
                </p>
              </div>
            </div>
          )}

          {activeTab === "contacto" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Teléfono
                </p>
                <p className="text-white font-medium flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {profile.phone}
                </p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Dirección
                </p>
                <div className="space-y-2">
                  <p className="text-white font-medium">
                    {profile.address.street}
                  </p>
                  <p className="text-gray-300">
                    {profile.address.city}, {profile.address.state}
                  </p>
                  <p className="text-gray-300">{profile.address.zipCode}</p>
                  <div className="flex items-center mt-1">
                    <svg
                      className="w-4 h-4 mr-2 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-indigo-300">
                      {profile.address.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profesional" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Ocupación
                </p>
                <p className="text-white font-medium">{profile.occupation}</p>
              </div>

              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  Empresa
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">
                      {profile.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{profile.company}</p>
                    <p className="text-gray-400 text-sm">
                      {profile.address.city}, {profile.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
