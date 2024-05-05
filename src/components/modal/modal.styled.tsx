'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

interface XProps {
  width?: string
  height?: string
  position?: string
  top?: string
  right?: string
  fontSize?: string
}

export const Container = styled(motion.div)`
  width: 486px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: -5px 0px 6px 0px #00000021;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: auto;

  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 95%;
  }
`

export const Wrapped = styled.div`
  padding: 36px 42px;
  width: 100%;
  height: 90vh;
  justify-content: space-around;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    padding: 20px;
    height: auto;
  }
`

export const ContainerHead = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  font-size: 27px;
  font-weight: 700;
  line-height: 32.91px;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 48px;
  width: 100%;
`

export const X = styled.div<XProps>`
  background-color: ${({ theme }) => theme.colors.dark};
  width: ${({ width }) => width || '40px'};
  height: ${({ height }) => height || '40px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  font-size: ${({ fontSize }) => fontSize || '28px'};
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  cursor: pointer;
  position: ${({ position }) => position || ''};
  top: ${({ top }) => top || ''};
  right: ${({ right }) => right || ''};
  color: ${({ theme }) => theme.colors.secondary};
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  overflow-x: none;
  min-height: 48vh;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    height: 100px;
    min-height: 54vh;
  }
`

export const Card = styled(motion.div)`
  margin-top: 12px;
  position: relative;
  width: 379px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: space-evenly;
  align-items: center;
  box-shadow: -2px 2px 10px 0px #0000000d;

  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 95%;
  }
`

export const CardImage = styled(Image)`
  width: 46px;
  height: 57px;
`

export const CardPrice = styled.span`
  width: 62px;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: left;
`

export const TitleProductCard = styled.span`
  width: 96px;
  height: auto;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  p {
    text-transform: uppercase;
  }
`

export const Button = styled.button`
  width: 100%;
  margin-top: auto;
  height: 97px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  border: none;
  position: absolute;
  bottom: 0;
  cursor: pointer;

  &:hover {
    background-color: #111010;
  }
`
export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const QuantityLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 6.1px;
  text-align: left;

  margin-bottom: 8px;
`

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;

  border-radius: 4px;
`

export const QuantityInput = styled.input`
  width: 40px;
  height: 30px;
  text-align: center;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.dark};

  &::before {
    content: '|';
    margin-right: 5px; /* Espaçamento entre o caractere e o valor */
  }

  /* Adiciona o caractere "|" à direita */
  &::after {
    content: '|';
    margin-left: 5px; /* Espaçamento entre o valor e o caractere */
  }
`

export const QuantityButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
