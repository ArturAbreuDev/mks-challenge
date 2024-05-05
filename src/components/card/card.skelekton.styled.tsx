import styled, { keyframes } from 'styled-components'
import {
  CardContainerContent,
  CardContent,
  ProductName,
  ProductPrice,
  ProductDescription,
  BuyButton,
} from './card.styled'

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`

const SkeletonCardContainerContent = styled(CardContainerContent)`
  animation: ${skeletonAnimation} 1.5s infinite ease-in-out;
`

const SkeletonCardImage = styled.div`
  width: 100px;
  height: 140px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-top: 20px;
`

const SkeletonCardContent = styled(CardContent)`
  margin-left: 10px;
  margin-top: 12px;
`

const SkeletonProductName = styled(ProductName)`
  background-color: #f0f0f0;
  width: 150px;
  height: 48px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  border-radius: 4px;
`

const SkeletonProductPrice = styled(ProductPrice)`
  background-color: #f0f0f0;
  width: 80px;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
`

const SkeletonProductDescription = styled(ProductDescription)`
  background-color: #f0f0f0;
  width: 180px;
  margin-top: 20px;
`

const SkeletonBuyButton = styled(BuyButton)`
  background-color: #f0f0f0;
`

export {
  SkeletonCardContainerContent,
  SkeletonCardImage,
  SkeletonCardContent,
  SkeletonProductName,
  SkeletonProductPrice,
  SkeletonProductDescription,
  SkeletonBuyButton,
}
