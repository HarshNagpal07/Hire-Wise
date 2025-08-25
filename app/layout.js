import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Hire Wise - AI Career Coach",
  description: "An AI career coach that helps you craft resumes, ace interviews, and grow your career.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Creating a header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* Creating a footer */}
            <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>
                Chlia shuru krte h
              </p>
            </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
            </ClerkProvider>
  );
}
