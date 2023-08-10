import { render, screen, cleanup } from "@testing-library/react";
import AccountSummaryPanel from "../components/AccountSummaryPanel";

afterEach(() => {
    cleanup();
});
test('should render account summary panel', () => {
    render(<AccountSummaryPanel monthlyBalance={235.34} />);
    const renderedElement = screen.getByTestId("account-summary-panel");
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveTextContent("Account Number");
    expect(renderedElement).toHaveTextContent("Monthly Balance");
    expect(renderedElement).toHaveTextContent("Account Type");
    expect(renderedElement).toHaveTextContent("Floating Balance");
});