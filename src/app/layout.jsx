
import React from 'react'
import Providers from './providers'
export default function layout({children}) {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
