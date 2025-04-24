"use client";

import { useState, useEffect } from "react";
import { getMessages } from "@/app/services/messages";
import { useTokenStorage } from "@/app/hooks/useTokenStorage";

interface Message {
  id: string;
  msgid: string;
  from: {
    address: string;
    name: string;
  };
  to: Array<{
    address: string;
    name: string;
  }>;
  subject: string;
  intro: string;
  seen: boolean;
  isDeleted: boolean;
  hasAttachments: boolean;
  size: number;
  downloadUrl: string;
  sourceUrl: string;
  createdAt: string;
  updatedAt: string;
  accountId: string;
}

export function MessagesList() {
  const { getToken } = useTokenStorage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const fetchMessages = async (page: number) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error("Token no encontrado");
      }
      const response = await getMessages(token, page);
      if (response.success) {
        setMessages(response.data["hydra:member"]);
        setTotalItems(response.data["hydra:totalItems"]);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocurrió un error desconocido");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    fetchMessages(currentPage);
  };

  useEffect(() => {
    fetchMessages(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (messages.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Mensajes Recibidos</h2>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            title="Recargar mensajes"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="text-center py-8">
          <p className="text-gray-400">No hay mensajes recibidos aún</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Mensajes Recibidos</h2>
        <button
          onClick={handleRefresh}
          disabled={loading}
          className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          title="Recargar mensajes"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {messages.map((message) => (
        <div
          key={message.id}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {message.from.name[0]?.toUpperCase() || "A"}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100">
                    {message.subject}
                  </h3>
                  <p className="text-sm text-gray-400">
                    De: {message.from.name} &lt;{message.from.address}&gt;
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mt-3 pl-13">{message.intro}</p>
            </div>
            <div className="text-right min-w-[120px]">
              <p className="text-sm text-gray-400">
                {new Date(message.createdAt).toLocaleString()}
              </p>
              {message.hasAttachments && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500 text-white">
                    Adjuntos
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Paginación */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:hover:bg-gray-700"
        >
          ← Anterior
        </button>
        <span className="px-4 py-2 bg-gray-700 rounded-lg">
          Página {currentPage} de {Math.ceil(totalItems / 10)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * 10 >= totalItems}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:hover:bg-gray-700"
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
