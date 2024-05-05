import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ModalCart } from '@/components/modal'
import { Header } from '@/components/header'
import { Card } from '@/components/card'
import Providers from '@/lib/provider'
import '@testing-library/jest-dom'

const mockProducts = {
  products: [
    {
      id: 1,
      name: 'Produto Teste',
      brand: 'Marca Teste',
      description: 'Descrição Teste',
      photo: 'url-to-photo',
      price: 10,
      createdAt: '2023-01-01T00:00:00Z',
      updatedAt: '2023-01-01T00:00:00Z',
    },
  ],
  count: 1,
}

beforeEach(() => {
  fetchMock.resetMocks()
  fetchMock.mockResponseOnce(JSON.stringify(mockProducts))
})

test('open ModalCart when "Open Modal" button is clicked', async () => {
  render(
    <Providers>
      <Header />
      <ModalCart />
      <Card />
    </Providers>,
  )

  // Aguarda até que o esqueleto não esteja mais presente
  await waitFor(() => {
    expect(screen.queryAllByTestId('skeleton-product')).toHaveLength(0)
  })

  // Simula o clique no card para adicionar um produto ao carrinho
  userEvent.click(screen.getByTestId('product-teste'))

  // Simula o clique no botão do cabeçalho para abrir o modal
  userEvent.click(screen.getByTestId('open-modal-button'))

  // Espera pelo modal aparecer
  const modal = await screen.findByText(/Carrinho de compras/i)

  // Verifica se o modal é exibido
  expect(modal).toBeInTheDocument()

  // Verifica se o produto está na tela
  expect(screen.getByText('Produto Teste')).toBeInTheDocument()

  // Verifica se a quantidade do produto está correta
  expect(screen.getByText('1')).toBeInTheDocument()

  // Verifica se o preço total está correto
  expect(screen.getByText('R$10.00')).toBeInTheDocument()

  // Verifica se os botões de aumento e redução da quantidade estão presentes
  expect(screen.getByTestId('decrease-quantity-button')).toBeInTheDocument()
  expect(screen.getByTestId('increase-quantity-button')).toBeInTheDocument()
})
