interface PortfolioGetResponseDTO {
  personal: PersonalGetResponseDTO;
  skills: SkillGroupGetResponseDTO[];
  experiences: ExperienceGetResponseDTO[];
  projects: ProjectGetResponseDTO[];
  education: EducationGetResponseDTO[];
}
