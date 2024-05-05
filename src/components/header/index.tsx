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
      <Box data-testid="open-modal-button" onClick={openModal}>
        <AnimatePresence>
          <motion.div
            key={totalItems}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
            transition={{ duration: 0.4, repeat: 0 }}
          >
            <MarketIcon />
          </motion.div>
        </AnimatePresence>
        <span>{totalItems}</span>
      </Box>
    </Container>
  )
}
