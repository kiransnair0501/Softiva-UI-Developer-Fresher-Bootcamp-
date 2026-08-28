interface SummaryProps {
  total: number;
  count: number;
}

function Summary({
  total,
  count,
}: SummaryProps) {
  return (
    <section className="summary-grid">

      <div className="summary-card total-card">
        <div className="summary-icon">
          ₹
        </div>

        <div>
          <p>Total Spending</p>

          <h2>
            ₹{total.toLocaleString("en-IN")}
          </h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon secondary">
          #
        </div>

        <div>
          <p>Total Expenses</p>

          <h2>
            {count}
          </h2>
        </div>
      </div>

    </section>
  );
}

export default Summary;