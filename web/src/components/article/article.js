/**
 * @Author Zak
 * @Date 2016-06-17
 */

import React from 'react';
import classNames from 'classnames';

export default class Article extends React.Component {
  render() {
    const {className, children, ...others} = this.props;
    const cls = classNames({
      cwui_article: true,
      [className]: className
    });

    return (
      <article className={cls} {...others}>
        {children}
      </article>
    )
  }
}
