import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'SabreX Infrastructure Manager',
  description: 'SabreX Infrastructure Manager UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
