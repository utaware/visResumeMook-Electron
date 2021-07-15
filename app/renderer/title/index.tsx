import React from 'react';

interface IProps {
  // 标题
  text: string;
  // 样式
  styles?: React.CSSProperties;
}

function Title ({ text = '', styles = {} }: IProps) {
  return (
    <div style={styles}>
      {text}
    </div>
  )
}

export default Title
