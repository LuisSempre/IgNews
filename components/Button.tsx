import { LoginIcon, LogoutIcon } from '@heroicons/react/solid'

export function Button() {

    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
            <button className='flex items-center justify-center h-8 px-8 space-x-2 font-bold text-black bg-white rounded-full'>
                <div>
                    <a>Luis Lucas</a>
                </div>
                <div>
                    <LogoutIcon className="w-4 h-4" />
                </div>
            </button>
) : (
            <button className='flex items-center justify-center h-8 px-8 space-x-2 font-bold text-black bg-white rounded-full'>
                <div>
                    <a>Sign</a>
                </div>
                <div>
                    <LoginIcon className="w-4 h-4" />
                </div>
            </button>
    )
}