import { useState } from "react";
import "./MultiplicationPanel.css";

export default function MultiplicationPanel() {
    const [history, setHistory] = useState([]);
    const [currProd, setCurrProd] = useState(null);

    const handleClick = (row, col) => {
        const product = row * col;
        setCurrProd(product);

        //  Add the product to the history if it's not already there
        if (!history.some((prod) => prod.row === row && prod.col === col)) {
            setHistory([...history, { row, col, product }]);
        }
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