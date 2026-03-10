
function Feedback({data, total, positive}) {
    return (
        <div>
            <p>Good: {data.good}</p>
            <p>Neutral: {data.neutral}</p>
            <p>Bad: {data.bad}</p>
            <p>Total: {total}</p>
            <p>Positive: %{positive}</p>
        </div>

    )
}

export default Feedback