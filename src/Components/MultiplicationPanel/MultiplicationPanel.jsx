import { useState } from "react";
import "./MultiplicationPanel.css";

export default function MultiplicationPanel() {
    const [currProd, setCurrProd] = useState(null);

    const handleClick = (row, col) => {
        const product = row * col;
        setCurrProd(product);
    }

    return (
        <div className="multiplication-panel">
            <h2>Multiplication</h2>
            <table>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}