import RefreshButton from "../islands/RefreshButton.tsx";
import ShareButton from "../islands/ShareButton.tsx";
import { Quote } from "../utils/quotes.ts";

const BASE_URL = Deno.env.get("BASE_URL") ?? "";

export default function QuoteDisplay({ quote, isRoot } : { quote: Quote, isRoot : boolean }) {
    
    return <>
        <h2 class="text-4xl">“{quote.quote}”</h2>
        <h1 class="mt-8 text-2xl italic font-light">- {quote.by}</h1>
        <h1 class="mt-2 text-lg italic font-light">@{quote.author.name}</h1>
        <div class="flex flex-row justify-center mt-8 gap-x-4">
            <RefreshButton baseUrl={BASE_URL} isRoot={isRoot} />
            <ShareButton id={quote.id} baseUrl={BASE_URL} />
        </div>
    </>
}