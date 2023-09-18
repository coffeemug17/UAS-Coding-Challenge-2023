import { useState } from "react";
import "./MultiplicationPanel.css";

export default function MultiplicationPanel({ size, history, setHistory }) {
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
                <thead>
                    
                    <tr>
                        <th>X</th>
                        {Array.from({ length: size }).map((_, col) => (
                            <th key={col}>{col + 1}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: size }).map((_, row) => (
                        <tr key={row}>
                            <th>{row + 1}</th>
                            {Array.from({ length: size }).map((_, col) => (
                                <td key={col}
                                    className={row === col ? 'highlight' : ''}
                                    onClick={() => handleClick(row + 1, col + 1)}
                                >
                                    {currProd}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}