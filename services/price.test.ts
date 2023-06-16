import { test, expect } from 'vitest'
import { priceFormatter } from './price'
test('priceFormatter', () => {
  const result = priceFormatter(100, 'USD')
  expect(result).toBe('$100.00')
})
