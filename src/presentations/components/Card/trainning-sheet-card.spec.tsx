import { render } from "../../../utils/test.utils";

import { Card } from ".";
import { mockAddSheet } from "../../../domain/tests/mock-add-sheet";

const { title, image } = mockAddSheet();

describe("Card", () => {
  it("should render an image", () => {
    const { getByTestId } = render(<Card title={title} image={image} />);

    const finddedImage = getByTestId("image");

    expect(finddedImage).toBeTruthy();
    expect(finddedImage.props.source.uri).toBe(image);
  });

  it("should render a title", () => {
    const { getByTestId } = render(<Card title={title} image={image} />);

    const finddedTitle = getByTestId("title");

    expect(finddedTitle).toBeTruthy();
    expect(finddedTitle.props.children).toBe(title);
    expect(finddedTitle.props.style[0].fontSize).toBe(16);
    expect(finddedTitle.props.style[0].color).toBe("#56595c");
  });
});
