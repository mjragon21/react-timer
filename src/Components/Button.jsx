import React from 'react'

function Button(props) {
    return (
        <div className='flex justify-center p-4 ml-12'>
            {(props.status === 0) ?
                <button className="
                text-white hover:text-white border border-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 
                py-2.5 text-center me-2 mb-2
                 
                "
                    onClick={props.start}>Start
                </button> : ""
            }
            {(props.status === 1) ?
                <div>

                    <button className="text-white hover:text-white border border-red-700 hover:bg-red-800 
                focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-3xl px-5 
                py-2.5 text-center me-2 mb-2" onClick={props.stop}>Stop </button>
                    <button className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 
                py-2.5 text-center me-2 mb-2"
                        onClick={props.reset}>Reset </button>

                </div> : ""
            }
            {(props.status === 2) ?
                <div>
                    <button className="text-white hover:text-white border border-green-700 hover:bg-green-800 
                focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-3xl px-5 
                py-2.5 text-center me-2 mb-2"
                        onClick={props.resume}>Resume</button>
                    <button className="text-white hover:text-white border border-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 
                py-2.5 text-center me-2 mb-2"
                        onClick={props.reset}>Reset</button>
                </div> : ""
            }
        </div>
    )
}

export default Button
