import { Handlers, PageProps } from "$fresh/server.ts";
import QuoteDisplay from "../components/QuoteDisplay.tsx";
import { getQuote, Quote } from "../utils/quotes.ts";

export const handler : Handlers = {
    GET(req, ctx) {
        const quote = getQuote(ctx.params.quoteIndex);
        if(!quote) {
            return ctx.renderNotFound();
        }
        return ctx.render({ quote })
    }
}

export default function QuoteByIndex({ data: { quote } } : { data: { quote: Quote } }) {
    return <div class="h-screen w-screen bg-gray-900 px-8 flex flex-col justify-center text-center">
        <QuoteDisplay quote={quote} isRoot={false}/>
    </div>
}