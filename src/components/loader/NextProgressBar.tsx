"use client"

import { AppProgressBar } from 'next-nprogress-bar';

export default function NextProgressBar() {
    return(
        <AppProgressBar
            height="4px"
            color="#EB0028"
            options={{ showSpinner: false }}
            shallowRouting={false}
        />
    )
}
