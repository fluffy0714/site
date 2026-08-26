/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Малый Бизнес',
  email: 'hello@example.com',
  phoneForTel: '+7-495-123-45-67',
  phoneFormatted: '+7 (495) 123-45-67',
  /** Номер лицензии подрядчика. Отображается в шапке и подвале
   *  как сигнал доверия. Установите пустую строку, чтобы скрыть. */
  license: 'Лиц# 123456',
  address: {
    lineOne: 'ул. Примерная, д. 123',
    lineTwo: 'офис 100',
    city: 'Москва',
    state: 'Московская область',
    zip: '101000',
    country: 'RU',
    mapLink: 'https://yandex.ru/maps/example',
  },
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },
  domain: 'https://www.example.com',
} as const;

export type Client = typeof client;
