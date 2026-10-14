import { useEffect, useState } from "react";

export type RemoteData<T> =
  | { status: "loading" }
  | { status: "failed"; message: string }
  | { status: "loaded"; response: T };

export function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
}

export function toErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Something went wrong.";
}

export function useRemoteData<T>(
  load: (signal?: AbortSignal) => Promise<T>,
): RemoteData<T> {
  const [remoteData, setRemoteData] = useState<RemoteData<T>>({
    status: "loading",
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadData(): Promise<void> {
      try {
        const response = await load(controller.signal);
        setRemoteData({ status: "loaded", response });
      } catch (error) {
        if (isAbortError(error)) {
          return;
        }
        setRemoteData({ status: "failed", message: toErrorMessage(error) });
      }
    }

    loadData();

    return () => {
      controller.abort();
    };
  }, [load]);

  return remoteData;
}
