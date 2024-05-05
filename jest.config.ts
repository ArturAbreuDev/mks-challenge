import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  // Diretório do projeto Next.js
  dir: './',
})

// Configurações personalizadas para o Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // setupFilesAfterEnv para mocks e outras configurações
}

// Exportando a configuração do Jest
export default createJestConfig(config)
