
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: 'sans-serif', padding: 20 }}>
        {children}
      </body>
    </html>
  );
}
