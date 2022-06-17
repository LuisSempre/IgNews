import { Button } from "./Button";

export function Header() {
    return (
        <div className="h-16 text-white bg-black border border-gray-900">
            <div className="flex items-center justify-between h-16 max-w-5xl px-8 mx-auto">
                <div>
                    <h1 className="font-bold">ig news</h1>
                </div>
                <div className="space-x-4">
                    <a href="" className="hover:text-purple-500 selection:text-purple-600">
                        Home
                    </a>
                    <a href="">
                        Posts
                    </a>
                </div>
                <div>
                    <Button />
                </div>
            </div>
        </div>
    )
}