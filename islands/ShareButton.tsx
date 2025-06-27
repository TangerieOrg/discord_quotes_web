import { Quote } from "../utils/quotes.ts";

interface Props {
    quote : Quote;
    baseUrl : string;
}

export default function ShareButton({ quote, baseUrl } : Props) {
    return <button 
        type="button" 
        class="px-6 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        onClick={async () => {
            const url = new URL(baseUrl + "/" + quote.id, location.href).toString();
            try {
                await navigator.share({
                    url,
                    title: `Quote by`
                })
            } catch {
                location.href = url;
            }
        }}
    >Share</button>
}