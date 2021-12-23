// import React, { createContext, useState } from 'react'

// export default function AuthContext(children) {
//     const AuthContext = createContext();
//     const [login, setLogin] = useState(false);
//     return (
//         <>
//             <AuthContext.Provider value={{ login, setLogin }}>{children}

//             </AuthContext.Provider>

//         </>
//     )
// }
import React, { createContext, useState } from 'react';




const AuthContext = createContext();
export default function AuthProvider(children) {
    const [login, setLogin] = useState(false);
    return (
        <AuthContext.Provider value={{ login, setLogin }}>{children}

        </AuthContext.Provider>
    )
}
