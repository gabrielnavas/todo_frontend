import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow-y: scroll;

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