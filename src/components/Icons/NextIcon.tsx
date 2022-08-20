import React from "react";
import { IconProps } from "./types";

export function NextIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={props.className}>
      <g>
        <path
          d="M18.25 3a.75.75 0 0 1 .743.648L19 3.75v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75a.75.75 0 0 1 .75-.75Zm-13.03.22a.75.75 0 0 1 .976-.073l.084.073 8.25 8.25a.75.75 0 0 1 .073.976l-.073.084-8.25 8.25a.75.75 0 0 1-1.133-.976l.073-.084L12.94 12 5.22 4.28a.75.75 0 0 1 0-1.06Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
