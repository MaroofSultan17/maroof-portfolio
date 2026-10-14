enum FlashReducerActions {
  RESET = "RESET",
  ADD = "ADD",
  ERROR = "ERROR",
  WARNING = "WARNING",
  SUCCESS = "SUCCESS",
  INFO = "INFO",
  REMOVE = "REMOVE",
}

interface FlashMessageInterface {
  type: "success" | "info" | "warning" | "error";
  message: string;
  timestamp: number;
}

interface FlashReducerActionInterface {
  type: FlashReducerActions;
  message?: FlashMessageInterface;
  text?: string;
}
