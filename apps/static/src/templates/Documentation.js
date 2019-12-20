import React from 'react';
import styled from 'react-emotion';
import {MDXProvider} from '@mdx-js/react';
import mdxComponents from '@components/common/mdxComponents';
import Sidebar from '@components/common/sidebar';
import RightSidebar from '@components/regions/RightSidebar';
import Header from '@components/common/Header';
import '@components/styles.css';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 88px;
  margin-top: 3rem;

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    margin-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;
const LeftSideBarWidth = styled('div')`
  width: 298px;
`;
const RightSideBarWidth = styled('div')`
  width: 224px;
`;

const Layout = ({children, location}) => (
  <MDXProvider components={mdxComponents}>
    <Wrapper>
      <LeftSideBarWidth className={'hidden-xs'}>
        <Sidebar location={location} />
      </LeftSideBarWidth>
      <Content>
        <MaxWidth>{children}</MaxWidth>
      </Content>
      <RightSideBarWidth className={'hidden-xs'}>
        <RightSidebar location={location} />
      </RightSideBarWidth>
    </Wrapper>
  </MDXProvider>
);

export default Layout;
