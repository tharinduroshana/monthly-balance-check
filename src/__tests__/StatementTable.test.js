import {cleanup, render, screen} from "@testing-library/react";
import StatementTable from "../components/StatementTable";

afterEach(() => {
    cleanup();
});

const testData = [
    {
        id: 1,
        date: "12/04/2023",
        description: "test data 1",
        amount: 12.23,
        balance: 400.34
    },
    {
        id: 2,
        date: "13/04/2023",
        description: "test data 2",
        amount: 45.23,
        balance: 235.34
    }
]

test('loading screen should be rendered', () => {
    render(<StatementTable transactions={testData} />);
    const renderedElement = screen.getByTestId("statement-table");
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveTextContent("test data 1");
});