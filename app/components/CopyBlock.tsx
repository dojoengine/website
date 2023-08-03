"use client"

import { useEffect, useState } from "react";

export const CopyBlock = () => {
    const command = 'curl -L https://install.dojoengine.org | bash';

    const [copyToClipboard, copyResult] = useCopyToClipboard();

    return (
        <code className='bg-dojo-blue-light rounded px-3 py-2 text-dojo-blue text-lg'>
            {command}
            <button className="self-center p-1 hover:bg-white/10 rounded ml-2" onClick={() => copyToClipboard(command)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-copy w-4  "><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </button>
        </code>
    )
}

function useCopyToClipboard() {
    const [result, setResult] = useState<
        null | { state: 'success' } | { state: 'error'; }
    >(null);

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setResult({ state: 'success' });
        } catch (e) {
            setResult({ state: 'error' });
            throw e;
        } finally {
            // 👇 Show the result feedback for 2 seconds
            setTimeout(() => {
                setResult(null);
            }, 2000);
        }
    };

    // 👇 We want the result as a tuple
    return [copy, result] as const;
}