interface Props {
    id : string;
    baseUrl : string;
}

export default function ShareButton({ id, baseUrl } : Props) {
    return <button 
        type="button" 
        class="px-6 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        onClick={async () => {
            const url = new URL(baseUrl + "/" + id, location.href).toString();
            try {
                await navigator.share({
                    url
                })
            } catch {
                location.href = url;
            }
        }}
    >Share</button>
}