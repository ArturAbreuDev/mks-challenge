'use client'

import MarketIcon from '@/lib/icons/market'
import { Box, Container, LogoWrapper } from './header.styled'
import { useCart } from '@/context/cartContext'
import { AnimatePresence, motion } from 'framer-motion'

export function Header() {
  const { cart, setModalCart } = useCart()

  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  )
  const openModal = () => {
    setModalCart(true)
  }

  return (
    <Container>
      <LogoWrapper>
        <h1>MKS</h1>
        <span>sistemas</span>
      </LogoWrapper>
      <Box onClick={openModal}>
        <MarketIcon />
        <AnimatePresence>
          <motion.span
            key={totalItems}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {totalItems}
          </motion.span>
        </AnimatePresence>
      </Box>
    </Container>
  )
}
