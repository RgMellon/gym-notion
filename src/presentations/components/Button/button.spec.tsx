import { fireEvent, render } from "../../../utils/test.utils";

import { Button } from ".";

describe("Button", () => {
    it("should render the button with correct label", () => {
        const { getByTestId } = render(<Button label="Criar" isDisabled={true}/>);
  
        const button = getByTestId("button");

        const label = button.children[0].props.children
        
        expect(label).toBe('Criar')
    });

    it("should render the button disable by default", () => {
        const onPress = jest.fn();

        const { getByTestId } = render(<Button label="Criar" isDisabled={true} onPress={onPress}/>);
  
        const button = getByTestId("button");

        fireEvent.press(button)

        expect(onPress).not.toBeCalled()
        expect(button.props.style.backgroundColor).toBe('#eceff0')
        
    });

    it("should be able to click when is disabled was false", () => {
        const onPress = jest.fn();

        const { getByTestId } = render(<Button label="Criar" isDisabled={false} onPress={onPress}/>);
  
        const button = getByTestId("button");

        fireEvent.press(button)

        expect(onPress).toBeCalled()
        expect(button.props.style.backgroundColor).toBe('#8524dc')
    });
  
});