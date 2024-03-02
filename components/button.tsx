"use client"

export default function Button()
{
    return (
        <button type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={signInButtonClicked}>
                            Sign in
                        </button>
    );
}

function signInButtonClicked()
{
    console.log("sign in button clicked");
}