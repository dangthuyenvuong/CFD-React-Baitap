import React from 'react';


function ArrowDown({width = 12, height = 12, color = "#6A983C" }) {
    return (
        <svg width= {width} height={height} viewBox="0 0 40 40" fill= "none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0332 16.3335L18.8832 23.1835C19.1955 23.4939 19.6179 23.6681 20.0582 23.6681C20.4985 
            23.6681 20.9209 23.4939 21.2332 23.1835L27.8999 16.5168" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="bevel" />
        </svg>

    );
}


function Search({ width = 12, height = 12, color = "#6A983C"  }) {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill= "none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.19352 11.4333C11.7709 11.4333 13.8602 9.34392 13.8602 6.7666C13.8602 4.18927 11.7709 2.09993 9.19352 2.09993C6.61619 2.09993 4.52686 4.18927 4.52686 6.7666C4.52686 9.34392 6.61619 11.4333 9.19352 11.4333Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
        <path d="M5.81368 10.24L2.68701 13.3667" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
        </svg>
        
    );
}
function ArrowLeft({width = 12, height = 12, color = "#6A983C" }) {
    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.46658 4.81339L6.72658 7.55338C6.60241 7.67829 6.53271 7.84726 6.53271 8.02338C6.53271 8.19951 6.60241 8.36848 6.72658 8.49338L9.39324 11.1601" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"/>
         </svg>
   )

}
function ArrowRight({width = 12, height = 12, color = "#6A983C" }) {
    return (
            <svg width= {width} height={height} viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.0332 8.18662L4.7732 5.44662C4.89737 5.32171 4.96706 5.15274 4.96706 4.97662C4.96706 4.80049 4.89737 4.63153 4.7732 4.50662L2.10654 1.83995" stroke= {color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"/>
            </svg>

    );
}

function Basket({width = 12, height = 12, color = "#6A983C" }) {
    return (
        <svg width= {width} height= {height} viewBox="0 0 23 22" fill= "none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.39 19.8499H5.61004C5.29236 19.8502 4.98375 19.7439 4.73358 19.5481C4.4834 19.3523 4.3061 19.0783 4.23004 18.7699L1.58004 8.15987C1.55418 8.05658 1.55222 7.94875 1.57432 7.84459C1.59642 7.74044 1.64199 7.64269 1.70756 7.5588C1.77313 7.47491 1.85698 7.40708 1.95272 7.36048C2.04845 7.31387 2.15356 7.28973 2.26004 7.28987H20.74C20.8465 7.28973 20.9516 7.31387 21.0474 7.36048C21.1431 7.40708 21.2269 7.47491 21.2925 7.5588C21.3581 7.64269 21.4037 7.74044 21.4258 7.84459C21.4479 7.94875 21.4459 8.05658 21.42 8.15987L18.77 18.7699C18.694 19.0783 18.5167 19.3523 18.2665 19.5481C18.0163 19.7439 17.7077 19.8502 17.39 19.8499V19.8499Z" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.2999 2.14993L6.3999 7.28993" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3804 2.14993L16.2904 7.28993" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
    );
}

function Times({width = 12, height = 12, color = "#D1D1D1" }) {
    return (
        <svg width={width} height= {height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.17995 9.18007L2.81995 2.82007" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
            <path d="M9.17995 2.82007L2.81995 9.18007"  stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
        </svg>

    )
}
export { Search , ArrowDown , ArrowLeft, ArrowRight, Basket, Times };