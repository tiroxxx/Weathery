import "./form.css"
import { useState } from "react";

export default function Form() {

    const [input, setInput] = useState("")

    function handleSubmit (e) {
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Orlando, FL"/>
                <button>Search</button>
            </form>
        </div>
    )
}
