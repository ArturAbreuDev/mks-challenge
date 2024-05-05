'use client'

import { useQuery } from '@tanstack/react-query'
import {
  BuyButton,
  CardContainer,
  CardContainerContent,
  CardContent,
  CardImage,
  ProductDescription,
  ProductName,
  ProductPrice,
} from './card.styled'
import ShoppingBagIcon from '@/lib/icons/shopingBag'
import {
  SkeletonBuyButton,
  SkeletonCardContainerContent,
  SkeletonCardContent,
  SkeletonCardImage,
  SkeletonProductDescription,
  SkeletonProductName,
  SkeletonProductPrice,
} from './card.skelekton.styled'
import { useCart } from '@/context/cartContext'

export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
  createdAt: string
  updatedAt: string
}

export interface ProductResponse {
  products: Product[]
  count: number
}

export function Card() {
  const { addProduct } = useCart()

  const { isPending, isError, data, error } = useQuery<ProductResponse>({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products/?page=1&rows=10&sortBy=id&orderBy=DESC`,
      )
      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    },
  })

  if (isPending) {
    return (
      <CardContainer>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCardContainerContent key={index}>
            <SkeletonCardImage />
            <SkeletonCardContent>
              <SkeletonProductName></SkeletonProductName>
              <SkeletonProductPrice></SkeletonProductPrice>
            </SkeletonCardContent>
            <SkeletonProductDescription></SkeletonProductDescription>
            <SkeletonBuyButton></SkeletonBuyButton>
          </SkeletonCardContainerContent>
        ))}
      </CardContainer>
    )
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <CardContainer>
      {data.products?.map((product: Product) => {
        return (
          <CardContainerContent
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            key={product.id}
          >
            <CardImage
              alt="Imagem produto"
              src={product.photo}
              width={100}
              height={140}
              quality={100}
            />
            <CardContent>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>R${product.price}</ProductPrice>
            </CardContent>
            <ProductDescription>{product.description}</ProductDescription>
            <BuyButton
              onClick={() =>
                addProduct({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  photo: product.photo,
                  quantity: 0,
                })
              }
            >
              <ShoppingBagIcon /> Comprar
            </BuyButton>
          </CardContainerContent>
        )
      })}
    </CardContainer>
  )
}
