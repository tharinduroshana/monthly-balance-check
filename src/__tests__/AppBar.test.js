import {cleanup, render, screen} from "@testing-library/react";
import SiteAppBar from "../components/SiteAppBar";

afterEach(() => {
    cleanup();
});

test('The app bar should be rendered', () => {
    render(<SiteAppBar />);
    const renderedElement = screen.getByTestId("app-bar");
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveTextContent("Private Bank");
});