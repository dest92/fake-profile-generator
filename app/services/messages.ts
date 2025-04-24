"use client";

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

interface ApiResponse {
  success: boolean;
  data: {
    "@context": string;
    "@id": string;
    "@type": string;
    "hydra:totalItems": number;
    "hydra:member": Message[];
  };
}

export async function getMessages(token: string, page: number = 1): Promise<ApiResponse> {
  const response = await fetch(`http://localhost:3000/api/messages?token=${token}&page=${page}`);
  if (!response.ok) {
    throw new Error('Error al obtener los mensajes');
  }
  return response.json();
}

export async function getMessage(id: string, token: string): Promise<Message> {
  const response = await fetch(`/api/messages/${id}?token=${token}`);
  if (!response.ok) {
    throw new Error('Error al obtener el mensaje');
  }
  return response.json();
}

export async function deleteMessage(id: string, token: string): Promise<void> {
  const response = await fetch(`/api/messages/${id}?token=${token}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Error al eliminar el mensaje');
  }
}