import { Head } from "$fresh/runtime.ts";

export default function Error404() {
    return (
        <>
            <Head>
                <title>404 - Page not found</title>
            </Head>
            <div class="h-screen w-screen bg-gray-900 flex flex-col justify-center text-center">
                <h1 class="text-8xl font-extralight mt-8">Four Oh Four</h1>
                <h2 class="mt-8 text-xl italic">Oh no! This page doesn't exist</h2>
            </div>
        </>
    );
}
