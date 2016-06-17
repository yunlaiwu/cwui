/**
 * @Author Zak
 * @Date 2016-06-17
 */

 "use strict";

 import React from 'react';
 import {Article} from '../../../src/index';
 import Page from '../../component/page';
 import './article.less';

export default class ArticleDemo extends React.Component{
  render(){
    return (
      <Page className="article" title="Article" spacing>
        <Article>
          <h1>故事主标题</h1>
          <h2 className="sub_title">故事副标题</h2>
          <section>
            <h3>推广标题</h3>
            <p className="main_text">
              惨遭失恋、失业双重打击的夏天去三亚剧组找导演助理、闺蜜杜琳琳求安慰，意外撞伤了当红男团“UX”主唱周司城，作为补偿，夏天成了周司城的生活保姆。为了养伤，周司城带着夏天入住他的海边别墅。修养期间，热情的夏天带周司城走进了普通人世界，两人情愫暗生。     当红男团“UX”全国巡演在即，“环亚经济”公司紧急召回了周司城，夏天以助理的身份也进入了环亚。在日常工作中，“环亚经济”公司总裁陈东安的妹妹陈安琪给夏天制造了不少麻烦，不过夏天都一一化解，因此博得了陈东安的好感。“UX”组合在和夏天的接触中，舞蹈担当韩亚琛也慢慢被夏天吸引。
            </p>
            <span className="tag">悬疑</span>
            <span className="tag"> · </span>
            <span className="tag">爱情</span>
            <span className="tag"> · </span>
            <span className="tag">惊悚</span>
          </section>
        </Article>
      </Page>
    )
  }
}
