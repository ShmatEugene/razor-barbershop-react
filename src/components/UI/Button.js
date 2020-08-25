import React from 'react';

export default function Button(props) {
  const cls = ['sh-button ', props.classes];
  return (
    <a className={cls.join(' ')} href={props.to} disabled={props.disabled}>
      {props.children}
    </a>
  );
}
