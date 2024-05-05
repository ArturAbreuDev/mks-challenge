'use client'

import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './registry'
import { defaultTheme } from '@/styles/themes/default'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { CartProvider } from '@/context/cartContext'

const Providers = (props: React.PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>
        </StyledComponentsRegistry>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default Providers
