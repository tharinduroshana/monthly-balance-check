import "./AccountSummaryPanel.css";

const AccountSummaryPanel = ({ monthlyBalance }) => {
  return (
    <div data-testid="account-summary-panel" className="flex-column font-size-small">
      <div className="flex-row">
        <div className="flex-row width-50 space-between">
          <div className="flex-1 font-weight-bolder">Account Number:</div>
          <div className="flex-1">1233 2344 5675</div>
        </div>
        <div className="flex-row width-50 space-between">
          <div className="flex-1 font-weight-bolder">Monthly Balance (€):</div>
          <div className="flex-1">{monthlyBalance && monthlyBalance.toFixed(2)}</div>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-row width-50 space-between">
          <div className="flex-1 font-weight-bolder">Account Type:</div>
          <div className="flex-1">Savings</div>
        </div>
        <div className="flex-row width-50 space-between">
          <div className="flex-1 font-weight-bolder">Floating Balance (€):</div>
          <div className="flex-1">0,00</div>
        </div>
      </div>
    </div>
  );
};

export default AccountSummaryPanel;
