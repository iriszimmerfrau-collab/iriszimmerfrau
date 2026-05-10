import { type Currency, type CurrencyCode, getCurrency } from '@/data/locales';

/**
 * Convert a USD price to a target currency using the static rate.
 * Rounds to the currency's marketing-friendly unit (roundTo).
 */
export function convertFromUsd(usdAmount: number, currencyCode: CurrencyCode): number {
  const c = getCurrency(currencyCode);
  const raw = usdAmount * c.rateFromUsd;
  return Math.round(raw / c.roundTo) * c.roundTo;
}

/**
 * Format a number with the currency's locale-specific number formatting.
 * Does NOT include the symbol — that's handled separately so we can position it.
 */
export function formatNumber(amount: number, currency: Currency): string {
  // Always use Latin (Western Arabic) digits even in Arabic locales — Arabic-script
  // financial numerals are common but Western digits are the modern professional default.
  return new Intl.NumberFormat(currency.formatLocale, {
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(amount);
}

/**
 * Format a USD price in the target currency with symbol.
 * Examples:
 *   formatPrice(450, 'USD') → "$450"
 *   formatPrice(450, 'GBP') → "£355"
 *   formatPrice(450, 'EGP') → "E£22,050"
 *   formatPrice(450, 'IQD') → "589,500 د.ع"
 */
export function formatPrice(usdAmount: number, currencyCode: CurrencyCode): string {
  const c = getCurrency(currencyCode);
  const converted = convertFromUsd(usdAmount, currencyCode);
  const formatted = formatNumber(converted, c);
  return c.position === 'before' ? `${c.symbol}${formatted}` : `${formatted} ${c.symbol}`;
}

/**
 * Parse the legacy USD-formatted string from pricing data (e.g. "$450", "$1,500")
 * into a numeric USD amount.
 */
export function parseUsdString(usdString: string): number {
  return Number(usdString.replace(/[^0-9.]/g, ''));
}
