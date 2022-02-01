import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Home'
import Footer from './layout/Footer';
import Content from './layout/Content';
import About from './components/About';
import TopNavBar from './layout/TopNavBar';


const GlobalStyle = createGlobalStyle`
body {
 margin: 0;
 padding:0;
 background-color: #fef9f6;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
   sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale; 
}
html{
 font-size: 16px;
}
@media screen and (max-width: 640px) {
 html {
   font-size: calc(10px + 6 * ((100vw - 320px) / 680));
 }
}
`;
const AppWrapper = styled.div`
   text-align: left;
   background-color: #fef9f6;
   
`;
function App() {
  return (    
    <div>     
      <GlobalStyle />
      <AppWrapper>
      
      <Header title="Your awesome traffic permit consultant"/>  
      <TopNavBar/>             
      <Content>
        <>       
        <About/>
        {/*  <Howto/>         
         <Faq/>
         <Contact/> */} 
        </>
      </Content>
      <Footer />
    </AppWrapper>
    </div>
  );
}

export default App;
