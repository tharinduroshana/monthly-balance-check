import "./AccountSummaryPanel.css";

const AccountSummaryPanel = () => {
  return (
      <div className="flex-column font-size-small">
          <div className="flex-row">
              <div className="flex-row width-50 space-between">
                  <div className="flex-1">Account Number:</div>
                  <div className="flex-1">1233 2344 5675</div>
              </div>
              <div className="flex-row width-50 space-between">
                  <div className="flex-1">Monthly Balance (EUR):</div>
                  <div className="flex-1">23,465.54</div>
              </div>
          </div>
          <div className="flex-row">
              <div className="flex-row width-50 space-between">
                  <div className="flex-1">Account Type:</div>
                  <div className="flex-1">Savings</div>
              </div>
              <div className="flex-row width-50 space-between">
                  <div className="flex-1">Floating Balance (EUR):</div>
                  <div className="flex-1">0,00</div>
              </div>
          </div>
      </div>
  );
}

export default AccountSummaryPanel;