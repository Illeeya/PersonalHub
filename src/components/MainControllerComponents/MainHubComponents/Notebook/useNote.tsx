import { ChangeEvent } from "react";

export default function useNote() {
  function scaleTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;
  }

  return { scaleTextArea };
}
