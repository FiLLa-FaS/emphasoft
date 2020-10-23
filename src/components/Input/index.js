import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint'

const Input = (props) => {
  return <Wrapper {...props} />;
};

const Wrapper = styled.input`
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  ${breakpoint('xs', 'md')`
            margin-bottom: 10px;  
          `}
`;

export default Input;
