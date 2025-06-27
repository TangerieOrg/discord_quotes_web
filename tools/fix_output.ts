import { join } from "jsr:@std/path";

const INPUT_FILE = join("data", "output.json");
const OUTPUT_FILE = join("data", "quotes.json");

const data = JSON.parse(Deno.readTextFileSync(INPUT_FILE));

const full_quotes : any[] = [];

for(const item of data) {
    if(item.quotes.length == 0) continue;
    else if(item.quotes.length == 1) {
        if(item.quotes[0].by == "") {
            item.quotes[0].by = "Unknown"
        }
    } else {
        let by = "Unknown";
        for(let i = item.quotes.length - 1; i >= 0; i--) {
            if(item.quotes[i].by == "") {
                item.quotes[i].by = by;
            } else {
                by = item.quotes[i].by;
            }
        }
    }
    for(let i = 0; i < item.quotes.length; i++) {
        const quote = item.quotes[i];
        quote.quote = quote.quote.replaceAll(/[“”]/g, '"').replaceAll(/[‘’]/g, "'");
        if(quote.by == "me") {
            quote.by = item.author.name
        }
        quote.by = (quote.by ?? "Unknown").replaceAll(/[“”]/g, '"').replaceAll(/[‘’]/g, "'");
        full_quotes.push({
            ...quote,
            author: item.author,
            id: `${item.startId}-${item.endId}-${i}`
        })
    }
}

Deno.writeTextFileSync(OUTPUT_FILE, JSON.stringify(full_quotes, undefined, 2));