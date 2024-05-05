'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  position: relative;
  bottom: 0px;
  left: 0;
  padding: 20px;
  h1 {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 12px;
    font-weight: 400;
    line-height: 14.63px;
    text-align: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    /* justify-content: center; */
  }
`
