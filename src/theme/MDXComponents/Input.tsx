import React, {type ComponentProps, type ReactNode} from 'react';

// `remark-gfm` renders task list checkboxes (`- [ ]`, `- [x]`) as
// `<input type="checkbox" disabled />`. Strip the `disabled` attribute so
// readers can tick items off as they work through a checklist, and convert
// the `checked` prop to `defaultChecked` so the input stays uncontrolled
// (avoids React's controlled-without-onChange warning).
export default function MDXInput(props: ComponentProps<'input'>): ReactNode {
  if (props.type === 'checkbox') {
    const {disabled: _disabled, checked, ...rest} = props;
    return <input {...rest} defaultChecked={checked} />;
  }
  return <input {...props} />;
}
