import { useCallback } from "react";
import { portfolioService } from "@/services/portfolioService";
import { useRemoteData, type RemoteData } from "@/hooks/useRemoteData";

export function usePortfolio(): {
  remoteData: RemoteData<PortfolioGetResponseDTO>;
  portfolio: PortfolioGetResponseDTO | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const fetcher = useCallback(
    (signal?: AbortSignal) => portfolioService.get(signal),
    [],
  );

  const remoteData = useRemoteData<PortfolioGetResponseDTO>(fetcher);

  return {
    remoteData,
    portfolio: remoteData.status === "loaded" ? remoteData.response : null,
    isLoading: remoteData.status === "loading",
    errorMessage: remoteData.status === "failed" ? remoteData.message : null,
  };
}
