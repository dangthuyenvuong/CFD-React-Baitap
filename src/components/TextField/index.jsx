import React from 'react'

// export default function TextField({ errorText, label, name, value, ...rest }) {
//     return (
//         <>

//             <label className='form'>
//                 <h1 className="">{label}</h1>
//                 <input
//                     value={value}{...rest}

//                     type="text"
//                 />
//                 <p className="error">{errorText}</p>
//             </label>

//         </>
//     )
// }
export default function TextField(
    { label, value, errorText, ...ref }

) {
    return (
        <>
            <label className="form">
                <h1 className="">{label}</h1>
                <input type="text" value={value} {...ref} className="" />
                <p className="error">{errorText}</p>
            </label>



        </>
    )
}
