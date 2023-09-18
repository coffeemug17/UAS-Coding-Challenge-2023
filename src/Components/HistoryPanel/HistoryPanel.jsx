import "./HistoryPanel.css";

export default function HistoryPanel({ history }) {
    // Sort the history based on the provided rules
    const sortedHistory = history.sort((a, b) => {
        if (a.row === b.row) {
            return a.col - b.col;
        }
        return a.row - b.row;
    });

    return (
        <div className="history-panel">
            <h2>History</h2>
            <ul>
                {sortedHistory.map((prod, idx) => (
                    <li key={idx}>{`${prod.row} x ${prod.col} = ${prod.product}`}</li>
                ))}
            </ul>
        </div>
    );
}