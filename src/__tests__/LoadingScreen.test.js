import {cleanup, render, screen} from "@testing-library/react";
import LoadingScreen from "../components/LoadingScreen";

afterEach(() => {
    cleanup();
});

test('loading screen should be rendered', () => {
    render(<LoadingScreen openSpinner={true} />);
    const renderedElement = screen.getByTestId("loading-screen");
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveTextContent("Fetching transactions");
});