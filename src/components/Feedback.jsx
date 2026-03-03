
function Feedback({data}) {
    let total = data.good + data.neutral + data.bad
    return (
        total === 0 ? <p> No feedback given</p> :
        <div>
            <p>Good: {data.good}</p>
            <p>Neutral: {data.neutral}</p>
            <p>Bad: {data.bad}</p>
            <p>Total: {data.total}</p>
            <p>Positive: %{data.positive}</p>
        </div>

    )
}

export default Feedback