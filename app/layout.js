import "./globals.css";

export const metadata = {
  title: "Next JS",
  description: "First NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
