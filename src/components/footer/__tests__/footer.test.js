import React from "react";
import renderer from "react-test-renderer";
import Footer from "../footer";

test('Footer Test', () => {
    const component = renderer.create(
        <Footer />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});