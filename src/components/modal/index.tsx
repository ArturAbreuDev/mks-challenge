'use client'

import { AnimatePresence } from 'framer-motion'
import {
  CardContainer,
  Container,
  Button,
  ContainerHead,
  TotalContainer,
  Wrapped,
  X,
  TitleProductCard,
  CardPrice,
  QuantityButton,
  QuantityContainer,
  QuantityInput,
  QuantityInputContainer,
  QuantityLabel,
  CardImage,
  Card,
} from './modal.styled'
import { useCart } from '@/context/cartContext'

export function ModalCart() {
  const {
    cart,
    modalCart,
    setModalCart,
    calculateTotal,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  // const [quantity, setQuantity] = useState(1)

  // const incrementQuantity = () => {
  //   setQuantity(quantity + 1)
  // }

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1)
  //   }
  // }

  const closeModal = () => {
    setModalCart(false)
  }

  return (
    <AnimatePresence>
      {modalCart && (
        <Container
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <Wrapped>
            <ContainerHead>
              <h1>
                Carrinho <br /> de compras
              </h1>
              <X onClick={closeModal}>X</X>
            </ContainerHead>
            <CardContainer>
              <AnimatePresence>
                {cart.map((product) => (
                  <Card
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <X
                      position="absolute"
                      top="-10px"
                      right="-10px"
                      width="25px"
                      height="25px"
                      fontSize="12px"
                      onClick={() => removeProduct(product.id)}
                    >
                      X
                    </X>
                    <CardImage
                      width={500}
                      height={500}
                      quality={100}
                      src={product.photo}
                      alt="foto do produto no carrinho"
                    />
                    <TitleProductCard>{product.name}</TitleProductCard>
                    <QuantityContainer>
                      <QuantityLabel>Qtd</QuantityLabel>
                      <QuantityInputContainer>
                        <QuantityButton
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          -
                        </QuantityButton>
                        <QuantityInput
                          type="text"
                          value={product.quantity}
                          disabled
                        />
                        <QuantityButton
                          onClick={() => increaseQuantity(product.id)}
                        >
                          +
                        </QuantityButton>
                      </QuantityInputContainer>
                    </QuantityContainer>
                    <CardPrice>R${product.price}</CardPrice>
                  </Card>
                ))}
              </AnimatePresence>
            </CardContainer>
            <TotalContainer>
              <h2>Total:</h2>
              <p>R${calculateTotal()}</p>
            </TotalContainer>
          </Wrapped>
          <Button>Finalizar Compra</Button>
        </Container>
      )}
    </AnimatePresence>
  )
}
