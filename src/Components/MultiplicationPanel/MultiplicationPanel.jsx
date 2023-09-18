import { useState } from "react";
import "./MultiplicationPanel.css";

export default function MultiplicationPanel({ size }) {
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
                    {Array.from({ length: size }).map((_, row) => (
                        <tr key={row}>
                            {Array.from({ length: size }).map((_, col) => (
                                <td key={col}
                                    className={row === col ? 'highlight' : ''}
                                    onClick={() => handleClick(row + 1, col + 1)}
                                >
                                    {row === col ? '' : currProd}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}