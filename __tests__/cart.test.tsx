import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ModalCart } from '@/components/modal'
import { Header } from '@/components/header'
import Providers from '@/lib/provider'
import '@testing-library/jest-dom'

test('open ModalCart when "Open Modal" button is clicked', async () => {
  render(
    <Providers>
      <Header />
      <ModalCart />
    </Providers>,
  )

  expect(screen.queryByText(/Carrinho de compras/i)).toBeNull()

  userEvent.click(screen.getByTestId('open-modal-button'))

  const modal = await screen.findByText(/Carrinho de compras/i)

  expect(modal).toBeInTheDocument()
})
