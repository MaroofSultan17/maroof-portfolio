interface ExperienceGetResponseDTO {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type?: string;
  period: string;
  location?: string;
  description: string;
  bullets: string[];
}
