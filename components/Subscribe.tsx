interface SubscribeProps {
    priceId: string,
}

export function Subscribe({ priceId }: SubscribeProps) {
    return (
        <div>
            <button className='px-4 py-2 font-bold text-black bg-white rounded-full '>
                Subscribe
            </button>
        </div>
    )
}