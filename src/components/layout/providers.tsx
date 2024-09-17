import React from 'react';
import ThemeContextProvider from './ThemeToggle/theme-provider';

export default function Providers({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ThemeContextProvider>
               {children}
            </ThemeContextProvider>
        </>
    );
}