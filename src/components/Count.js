import React from 'react'

function Count() {
    return (
        <div><div class="max-w-sm mx-auto my-10">
            <div class="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-2xl font-light text-black sm:text-4xl sm:leading-tight">0
            </h2>
        </div>
                <button  class="text-white text-xl w-20 bg-red-500 hover:bg-red-600 p-4 m-4 focus:ring-4 focus:outline-none  font-medium rounded-lg   py-2 ">
                   -</button>
                   <button  class="text-white text-xl w-20 bg-blue-500 hover:bg-blue-600 p-4 m-4 focus:ring-4 focus:outline-none  font-medium rounded-lg   py-2 ">
                   +</button>
            </div>
        </div>
        </div>
    )
}

export default Count