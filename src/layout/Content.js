import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const AppContent = styled.main`
display: flex;
flex-direction: column;
  align-items: space-between;
  justify-content: center;
  font-size: 1rem;  
  padding: 0rem;
`;
const Content = (props) => {
  const { children } = props;
  return (
    <AppContent>
      <>
        {children}
      </>
    </AppContent>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired
};
export default Content;