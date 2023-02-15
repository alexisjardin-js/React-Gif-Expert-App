import { render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

describe('Probando <GiftExpertApp/>', () => {


   test('debe hacer match con el snapshot', () => {

       const { container }= render(<GiftExpertApp/>);
       expect(container).toMatchSnapshot();
     
   });
   
   test('', () => {
     
   })
   
  
});
