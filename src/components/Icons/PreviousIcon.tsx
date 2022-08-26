import React from "react";
import { IconProps } from "./types";

export function PreviousIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={props.className}>
      <path
        d="M5.75 3a.75.75 0 0 0-.743.648L5 3.75v16.5a.75.75 0 0 0 1.493.102l.007-.102V3.75A.75.75 0 0 0 5.75 3Zm13.03.22a.75.75 0 0 0-.976-.073l-.084.073-8.25 8.25a.75.75 0 0 0-.073.976l.073.084 8.25 8.25a.75.75 0 0 0 1.133-.976l-.073-.084L11.06 12l7.72-7.72a.75.75 0 0 0 0-1.06Z"
        fill="currentColor"
      />
    </svg>
  );
}
