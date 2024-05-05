import { render, screen, waitFor } from '@testing-library/react'
import { Card } from '@/components/card'
import Providers from '@/lib/provider'

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

test('renders products after API call', async () => {
  render(
    <Providers>
      <Card />
    </Providers>,
  )

  await waitFor(() => {
    expect(screen.queryAllByTestId('skeleton-product')).toHaveLength(0)
    expect(screen.queryAllByTestId('product')).not.toBeNull()
  })
})
