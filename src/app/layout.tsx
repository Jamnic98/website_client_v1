import { Navbar, Footer } from 'app/components'
import { navlinkObjArr } from 'utils'

import 'styles/global.css'

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Navbar navlinkObjArr={navlinkObjArr} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
