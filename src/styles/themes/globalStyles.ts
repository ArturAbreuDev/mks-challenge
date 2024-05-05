'use client'
import { css, createGlobalStyle } from 'styled-components'

import { reset } from './reset'

const styles = css`
  body {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  button {
    font-family: var(--montserrat);
  }
`

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${styles}
`

export default GlobalStyles
