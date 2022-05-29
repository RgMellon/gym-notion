import { render } from "../../../utils/test.utils";

import { AddButton } from ".";

jest.mock("@expo/vector-icons", () => ({
  Entypo: "Icon",
}));

jest.mock("@expo/vector-icons/Entypo", () => "Icon");

describe("AddButton", () => {
  it("should render an icon", () => {
    const { getByTestId } = render(<AddButton />);

    const icon = getByTestId("icon");
    expect(icon).toBeTruthy();
    expect(icon.props.name).toBe("plus");
    expect(icon.props.color).toBe("#ffffff");
  });

  it("should render an rounded button", () => {
    const { getByTestId } = render(<AddButton />);
    const button = getByTestId("button");
    expect(button.props.style.borderRadius).toBe(30);
  });
});
