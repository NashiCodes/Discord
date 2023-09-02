import './globals.css'
import type {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {cn} from "@/lib/utils";


const font = Open_Sans({subsets: ['latin']})

// noinspection JSUnusedGlobalSymbols
export const metadata: Metadata = {
    title: 'Team Chat Application',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            <body className={cn(
                font.className,
                'bg-white dark:bg-[#313338]'
            ) }>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                storageKey="discord-theme"
            >
                {children}
            </ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    )
}