interface Props {
    isRoot : boolean;
    baseUrl : string;
}

export default function RefreshButton({ isRoot, baseUrl } : Props) {
    return <button 
        type="button" 
        class="px-6 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        onClick={() => {
            if(isRoot) location.reload();
            else {
                location.href = new URL(baseUrl + "/", location.href).toString();
            }
        }}
    >Next</button>
}