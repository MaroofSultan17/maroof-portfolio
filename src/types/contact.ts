interface ContactPostRequestDTO {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface ContactPostResponseDTO {
  success: boolean;
  message: string;
}
