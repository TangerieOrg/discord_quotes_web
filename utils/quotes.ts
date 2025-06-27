export interface QuoteAuthor {
    id : string;
    name : string;
}

export interface Quote {
    quote : string;
    by : string;
    author : QuoteAuthor;
    id : string;
}

const quotes : Array<Quote> = JSON.parse(Deno.readTextFileSync("./data/quotes.json"));

export const getQuotes = () => quotes;

export function getQuote(id : string) {
    return quotes.find(x => x.id === id);
}

export function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}