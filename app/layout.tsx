import './globals.css'
import type {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import {ThemeProvider} from "@/components/providers/theme-provider";


const font = Open_Sans({subsets: ['latin']})

// noinspection JSUnusedGlobalSymbols
export const metadata: Metadata = {
    title: 'Team Chat Application',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={false}
                storageKey="discord-theme"
            >
                {children}
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    )
}