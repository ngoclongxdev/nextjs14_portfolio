import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Webchain dev',
	description: 'This is my portfolio',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Navigation />
			</body>
		</html>
	)
}

// https://github.com/search?q=nextjs+poiler&type=repositories
// https://www.youtube.com/results?search_query=nextjs+14+tailwindcss
// https://www.youtube.com/watch?v=qwtWcGeIe40
// https://github.com/Mif2006/WebPortfolio/blob/main/components/Navbar.tsx
// https://github.com/adrianhajdin/travel_ui_ux/blob/main/app/layout.tsx
// https://github.com/vercel/next.js/tree/canary/examples
// https://gitlab.com/ngoclongxno1/cl_momo/-/blob/main/client-side/components/banner/index.js?ref_type=heads