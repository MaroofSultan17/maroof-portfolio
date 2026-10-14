interface ProjectCategoryDTO {
  id?: string;
  name: string;
  code?: string;
}

interface ProjectStatusDTO {
  id?: string;
  name: string;
  code?: string;
}

interface ProjectCaseStudyDTO {
  problem: string;
  contribution: string;
  decisions: string;
}

interface ProjectGetResponseDTO {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category?: ProjectCategoryDTO;
  status?: ProjectStatusDTO;
  role?: string;
  github?: string;
  live?: string;
  caseStudy?: ProjectCaseStudyDTO;
}

interface ProjectIndexRequestDTO {
  categoryId?: string;
  tech?: string;
  search?: string;
  page?: number;
  orderBy?: string;
  orderDirection?: string;
}

interface ProjectIndexResponseDTO {
  projects: ProjectGetResponseDTO[];
  total: number;
}
