function Arrow({color = "#000" , rotate = "0deg"}) {
    return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: `rotate(${rotate})`}}>
            <path d="M12.0332 16.3335L18.8832 23.1835C19.1955 23.4939 19.6179 23.6681 20.0582 23.6681C20.4985 23.6681 20.9209 23.4939 21.2332 23.1835L27.8999 16.5168" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
    )
}
function Buy({color = "#000"}) {
    return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 23.6333H23.9333C24.7808 23.634 25.6044 23.3527 26.2743 22.8337C26.9443 22.3146 27.4224 21.5874 27.6333 20.7666L30.7333 8.4666C30.8436 8.05113 31.088 7.68372 31.4285 7.42149C31.7691 7.15927 32.1868 7.01693 32.6167 7.0166H36.4667" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.1003 23.8999L26.317 34.3166" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.00027 7.01674H23.3336C23.5836 7.01168 23.8315 7.06292 24.059 7.16667C24.2864 7.27042 24.4877 7.42402 24.6477 7.61609C24.8078 7.80816 24.9226 8.03378 24.9836 8.27624C25.0446 8.5187 25.0503 8.77178 25.0003 9.01674L23.2169 17.6334C23.139 18.0155 22.9296 18.3582 22.625 18.6019C22.3205 18.8455 21.9402 18.9746 21.5503 18.9667H7.18361C6.78655 18.9725 6.40048 18.8363 6.09493 18.5827C5.78937 18.3291 5.5844 17.9747 5.51694 17.5834L3.85027 8.23341C3.82356 8.07344 3.83428 7.90945 3.88157 7.75431C3.92887 7.59918 4.01146 7.4571 4.12286 7.33924C4.23427 7.22137 4.37147 7.13091 4.5237 7.07496C4.67593 7.01901 4.83905 6.99908 5.00027 7.01674V7.01674Z" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.9998 30.4999C12.9998 28.1987 11.1344 26.3333 8.83317 26.3333C6.53198 26.3333 4.6665 28.1987 4.6665 30.4999C4.6665 32.8011 6.53198 34.6666 8.83317 34.6666C11.1344 34.6666 12.9998 32.8011 12.9998 30.4999Z" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>

    )
}
function Search({color = "#000"}) {
    return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.9833 28.5833C29.4266 28.5833 34.65 23.36 34.65 16.9167C34.65 10.4733 29.4266 5.25 22.9833 5.25C16.54 5.25 11.3167 10.4733 11.3167 16.9167C11.3167 23.36 16.54 28.5833 22.9833 28.5833Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M14.5335 25.5999L6.7168 33.4165" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
    )
}
function User({color = "#000"}) {
    return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 36.6667L6.31667 31.8667C10.6667 16.0334 29.3333 16.0334 33.6833 31.8667L35 36.6667" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.0001 19.9667C24.6025 19.9667 28.3334 16.2358 28.3334 11.6334C28.3334 7.03101 24.6025 3.30005 20.0001 3.30005C15.3977 3.30005 11.6667 7.03101 11.6667 11.6334C11.6667 16.2358 15.3977 19.9667 20.0001 19.9667Z" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>
    )
}
function Compare({color = '#E6704B'}) {
    return (
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 0.999969H2.75C2.19772 0.999969 1.75 1.44768 1.75 1.99997V3.99997C1.75 4.55225 2.19772 4.99997 2.75 4.99997H4.75C5.30228 4.99997 5.75 4.55225 5.75 3.99997V1.99997C5.75 1.44768 5.30228 0.999969 4.75 0.999969Z" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M4.75 6.99997H2.75C2.19772 6.99997 1.75 7.44768 1.75 7.99997V9.99997C1.75 10.5523 2.19772 11 2.75 11H4.75C5.30228 11 5.75 10.5523 5.75 9.99997V7.99997C5.75 7.44768 5.30228 6.99997 4.75 6.99997Z" stroke="#E6704B" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M10.25 7.99994H7.25" stroke={color} stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M9.25 9.99997H7.25" stroke={color} stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M9.25 3.99997H7.25" stroke={color} stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M10.25 1.99994H7.25" stroke={color} stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>

    )
}
function Close({color = '#151515'}) {
    return (
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.18031 9.18L2.82031 2.82" stroke={color} stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M9.18031 2.82L2.82031 9.18" stroke={color} stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>

    )
}
function Heart({color='#E6704B'}) {
    return (
        <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65559 1.44501C7.13297 0.967619 7.78045 0.699425 8.45559 0.699425C9.13072 0.699425 9.7782 0.967619 10.2556 1.44501C10.733 1.9224 11.0012 2.56988 11.0012 3.24501C11.0012 3.92014 10.733 4.56762 10.2556 5.04501L9.60059 5.70001L6.00059 9.30001L2.40058 5.70001L1.74558 5.04501C1.26819 4.56762 1 3.92014 1 3.24501C1 2.56988 1.26819 1.9224 1.74558 1.44501C2.22297 0.967619 2.87045 0.699425 3.54558 0.699425C4.22072 0.699425 4.86819 0.967619 5.34558 1.44501L6.00059 2.10001L6.65559 1.44501Z" stroke={color} stroke-linecap="round" stroke-linejoin="bevel"/>
        </svg>

    )
}
export { Arrow, Buy, Search, User, Compare,Close,Heart};