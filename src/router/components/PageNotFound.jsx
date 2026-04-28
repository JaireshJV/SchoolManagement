import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 34px;
  /* margin: 80px auto; */
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:5px;
  color: #aaa;
`

const PageNotFoundMsg = styled.div`
  font-size: 16px;
  text-align: center;
`
const PageNotFound = () => (
  <Container>
    Page Not Found!
    <br />
    <PageNotFoundMsg>Please check the URL or click on menus.</PageNotFoundMsg>
  </Container>
)

export default PageNotFound
