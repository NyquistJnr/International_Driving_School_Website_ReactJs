import { render, screen } from "@testing-library/react";
import SliderHeader from "./components/HomeComponent/SliderHeader";

describe("Test only Links", () => {
  test("renders learn react link", () => {
    render(<SliderHeader />);
    const linkElement = screen.getByText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    );
    expect(linkElement).toBeInTheDocument();
  });

  test("renders learn react link", () => {
    render(<SliderHeader />);
    const linkElement = screen.getByText(
      "Nulla vitae elit libero, a pharetra augue mollis interdum."
    );
    expect(linkElement).toBeInTheDocument();
  });
});
