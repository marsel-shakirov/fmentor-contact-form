import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './globals.css';

const inter = Karla({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
	title: 'Create contact form',
	description: 'Contact form',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
