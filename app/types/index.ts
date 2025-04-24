// Tipos para la API de email temporal

export interface EmailData {
  email: string;
  password: string;
  token: string;
  isVerified?: boolean;
}

export interface Domain {
  domain: string;
  isActive: boolean;
}

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  age: number;
  birthdate: string;
  avatar: string;
  address: UserAddress;
  phone: string;
  occupation: string;
  company: string;
}

export interface EmailResponse {
  success: boolean;
  data?: EmailData;
  domains?: Domain[];
  attempts?: number;
  error?: string;
  disposableDetected?: boolean;
  userProfile?: UserProfile;
}

export interface Message {
  id: string;
  subject: string;
  from: {
    address: string;
    name: string;
  };
  to: {
    address: string;
    name: string;
  };
  intro: string;
  createdAt: string;
  isRead: boolean;
}

export interface MessageDetail extends Message {
  html?: string;
  text: string;
  attachments?: Array<{
    filename: string;
    contentType: string;
    size: number;
  }>;
}

export interface AccountInfo {
  email: string;
  createdAt: string;
  expiresAt: string;
  messagesCount: number;
}