import { Card } from '@/components/card'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Container } from './page.styled'
import { ModalCart } from '@/components/modal'

export default function Home() {
  return (
    <Container>
      <Header />
      <Card />
      <Footer />
      <ModalCart />
    </Container>
  )
}
