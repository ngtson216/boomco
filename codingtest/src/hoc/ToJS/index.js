/* eslint-disable react/display-name */
import React from "react";
import { Iterable } from "immutable";

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrappedComponent) => (wrappedComponentProps) => {
  const KEY = 0;
  const VALUE = 1;

  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps, wrappedComponentProp) => {
      newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE];
      return newProps;
    },
    {}
  );

  return <WrappedComponent {...propsJS} />;
};
