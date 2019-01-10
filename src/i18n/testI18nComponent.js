import React from "react";

const mockIntl = {
  changeLanguage: () => {}
};

const mockTranslate = key => key;
const mockTranslateWithValues = (key, values) =>
  `${key}:${JSON.stringify(values)}`;

export const testI18nComponent = Component => {
  const TestI18nComponent = props => {
    const tProps = {
      ...props,
      intl: mockIntl,
      t: mockTranslate
    };
    return <Component {...tProps} />;
  };

  return TestI18nComponent;
};

export const testI18nComponentValues = Component => {
  const TestI18nComponent = props => {
    const tProps = {
      ...props,
      intl: mockIntl,
      t: mockTranslateWithValues
    };
    return <Component {...tProps} />;
  };

  return TestI18nComponent;
};

export default testI18nComponent;
