export const metadata = {
  title: "Funerals Live",
  description: "Connecting hearts, sharing stories, and honouring memories globally.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
