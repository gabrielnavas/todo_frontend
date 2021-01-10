import { css } from "styled-components";

export const scrollDefault = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--blue-dark-hover);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--blue);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--red);
  }
`