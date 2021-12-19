import React, {useState} from 'react'
import './style.scss'

export default function Tab() {
    const [active, setActive] = useState(1);

    const handleTabClick = (index) => {
        setActive(index)
        console.log(index);
    }

    return (
        <>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a href='#' class={`nav-link ${active == 1 ? "active" : ""}`} onClick={() => handleTabClick(1)}>Home</a>
                </li>
                <li class="nav-item">
                    <a href='#' class={`nav-link ${active == 2 ? "active" : ""}`} onClick={() => handleTabClick(2)}>Profile</a>
                </li>
                <li class="nav-item">
                    <a href='#' class={`nav-link ${active == 3 ? "active" : ""}`} onClick={() => handleTabClick(3)}>Contact</a>
                </li>
            </ul>

            <div class="tab-content">
                <div class={`tab-pane fade ${active == 1 ? "active" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae odio officia reprehenderit totam ea quis ducimus facere accusantium soluta minima, doloremque amet voluptatem perferendis culpa nam sint necessitatibus tempora neque 1.</div>

                <div class={`tab-pane fade ${active == 2 ? "active" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae odio officia reprehenderit totam ea quis ducimus facere accusantium soluta minima, doloremque amet voluptatem perferendis culpa nam sint necessitatibus tempora neque 2.</div>

                <div class={`tab-pane fade ${active == 3 ? "active" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae odio officia reprehenderit totam ea quis ducimus facere accusantium soluta minima, doloremque amet voluptatem perferendis culpa nam sint necessitatibus tempora neque 3.</div>
            </div>
        </>
    )
}
