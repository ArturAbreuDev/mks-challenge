'use client'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 32px 64px;

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
  }
  span {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    margin-left: 5px;
    margin-bottom: -10px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    padding: 12px;

    h1 {
      font-size: 32px;
    }
    span {
      font-size: 16px;
    }
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    /* justify-content: center; */
  }
`
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  padding: 12px 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  width: 96px;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 700;
    line-height: 20px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 75px;
  }
`
