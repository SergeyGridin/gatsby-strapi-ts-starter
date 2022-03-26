import * as React from 'react';
import type { GatsbySSR } from 'gatsby';

type ReactProps<T extends Element> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

const BodyAttributes = {
  'data-theme': 'main',
} as ReactProps<HTMLBodyElement>;

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setBodyAttributes }) => {
  setBodyAttributes(BodyAttributes);
};
