import { Color } from '@/constants/color';
import { AppBar } from '@mui/material'
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

const AppBarBox = styled('div')`
  position: sticky;
  height: 100px;
  top: 0px;
  box-shadow: none;
  backdrop-filter: blur(5px);
  border-style: solid;
  border-width: 0px 0px thin;
  border-color: ${Color.borderColor.grey};
  background-color: rgba(255, 255, 255, 0.8);
`
const Layout = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const TitleBox = styled('div')`
  display: flex;
  width: auto;

  color: black;
`

const AppBarComponent = () => {

  return (
      <AppBarBox>
        <Layout>
          <TitleBox>Toolbox</TitleBox>
        </Layout>
      </AppBarBox>
  )
};

export default AppBarComponent;