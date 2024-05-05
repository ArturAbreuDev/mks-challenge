'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const CardContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 938px;
  align-items: center;
  justify-content: center;
  margin: 64px 0px;

  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const CardContainerContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: start;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 218px;
  height: 300px;
  border-radius: 4px 4px 8px 8px;
  color: ${({ theme }) => theme.colors.dark};
  box-shadow: 4px 4px 8px 4px #00000022;
  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 251px;
    height: 328px;
  }
`
export const CardImage = styled(Image)`
  width: auto;
  max-height: 138px;
`

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  padding: 0px 14px;
  width: 100%;
  height: 38px;
`

export const ProductName = styled.h2`
  width: 124px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  text-align: left;
`

export const ProductPrice = styled.div`
  width: auto;
  height: 28px;
  border-radius: 5px;
  background-color: #373737;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  color: #fff;
  padding: 8px;
`

export const ProductDescription = styled.span`
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
  text-align: left;
  color: #2c2c2c;
  padding: 0px 14px;
  height: 25px;
  margin-top: auto;
  margin-bottom: 8px;
`

export const BuyButton = styled.button`
  width: 218px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 8px 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  gap: 8px;
  text-transform: uppercase;
  margin-top: auto;
  @media only screen and (max-width: ${({ theme }) => theme.screen.sm}) {
    width: 100%;
  }
`
