import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import '../styles/globals-additions.css'
import '../styles/globals.css'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-dm-sans',
})

const dmSerif = DM_Serif_Display({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal', 'italic'],
    variable: '--font-dm-serif',
})

export const metadata: Metadata = {
    title: 'Veriva — Waitlist',
    description:
        'Join the waitlist for early access to Veriva, the income verification solution that connects directly to applicants bank accounts to generate tamper-proof reports — no paystubs, no spreadsheets, no guessing.',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico', sizes: 'any' },           // fallback for older browsers
        ],
        apple: '/apple-touch-icon.png',                     // iOS home screen icon
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
            <body>{children}</body>
        </html>
    )
}
