import { useSignal } from "@preact/signals";
import { getRandomQuote } from "../utils/quotes.ts";
import QuoteDisplay from "../components/QuoteDisplay.tsx";
import ShareButton from "../islands/ShareButton.tsx";
import RefreshButton from "../islands/RefreshButton.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
    const quote = getRandomQuote();
    
    return <>
        <Head>
            <title>Quote by {quote.by}</title>
        </Head>
        <div class="h-screen w-screen bg-gray-900 px-8 flex flex-col justify-center text-center">
            <QuoteDisplay quote={quote} isRoot={true} />
        </div>
    </>
}
