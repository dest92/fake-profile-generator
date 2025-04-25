// Servicio para interactuar con la API
import {
  EmailResponse,
  Message,
  MessageDetail,
  AccountInfo,
} from "@/app/types";

const API_BASE_URL = "https://email-faker-backend.onrender.com/api";

// Crear un email temporal
export async function createTemporaryEmail(): Promise<EmailResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("Respuesta de la API no fue exitosa");
    }

    const data = await response.json();
    console.log("Datos recibidos de la API:", data);

    return data;
  } catch (error) {
    console.error("Error en createTemporaryEmail:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

// Obtener todos los mensajes
export async function getMessages(
  token: string,
  page: number = 1
): Promise<{
  success: boolean;
  data?: Message[];
  error?: string;
}> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/messages?token=${token}&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || "Error al obtener los mensajes",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error al obtener mensajes:", error);
    return {
      success: false,
      error: "Error de conexión al servidor",
    };
  }
}

// Obtener un mensaje específico
export async function getMessage(
  token: string,
  messageId: string
): Promise<{
  success: boolean;
  data?: MessageDetail;
  error?: string;
}> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/messages/${messageId}?token=${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || "Error al obtener el mensaje",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error al obtener mensaje:", error);
    return {
      success: false,
      error: "Error de conexión al servidor",
    };
  }
}

// Eliminar un mensaje
export async function deleteMessage(
  token: string,
  messageId: string
): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/messages/${messageId}?token=${token}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return {
        success: false,
        error: data.message || "Error al eliminar el mensaje",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error al eliminar mensaje:", error);
    return {
      success: false,
      error: "Error de conexión al servidor",
    };
  }
}

// Obtener información de la cuenta
export async function getAccountInfo(token: string): Promise<{
  success: boolean;
  data?: AccountInfo;
  error?: string;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/account/me?token=${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || "Error al obtener información de la cuenta",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error al obtener información de la cuenta:", error);
    return {
      success: false,
      error: "Error de conexión al servidor",
    };
  }
}

// Eliminar una cuenta
export async function deleteAccount(token: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    const response = await fetch(`${API_BASE_URL}/account?token=${token}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return {
        success: false,
        error: data.message || "Error al eliminar la cuenta",
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error al eliminar la cuenta:", error);
    return {
      success: false,
      error: "Error de conexión al servidor",
    };
  }
}
