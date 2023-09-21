import { useState } from "react";
import "./MultiplicationPanel.css";

export default function MultiplicationPanel({ size, history, setHistory }) {
    const [currProd, setCurrProd] = useState(null);
    const [selected, setSelected] = useState(null);

    const handleClick = (row, col) => {
        const product = (row + 1) * (col + 1);
        setCurrProd(product);
        setSelected({ row, col, product });
        row = row + 1;
        col = col + 1;

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
                                    className={selected?.row === row && selected?.col === col ? 'highlight' : ''}
                                    onClick={() => handleClick(row, col)}
                                >
                                    {selected?.row === row && selected?.col === col ? selected?.product : ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}