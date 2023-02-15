import { render,screen } from "@testing-library/react";
import {GifGrid} from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs')


describe('Probando <GifGrid/>',()=>{

    const category = 'DragonBall';

    test('debe mostar el loading inicalmente',()=>{

       useFetchGifs.mockReturnValue({
           images:[],
           isLoading:true
          
       }); 
 
       render( <GifGrid  category={category}/> );

       expect(screen.getByText('Cargando...'));
       expect(screen.getByText(category));

    });

    
    test('debe mostrar items cuando se cargan las imagenes useFetchGift',()=>{

        const gifs = [
            {
                id: '123',
                title: 'dragon ball',
                url: 'https://localhost/dragonball.jpg'
            },
            {
                id: '444',
                title: 'dragon ball-z',
                url: 'https://localhost/dragonball-z.jpg'
            },
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false

        }); 

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);


    });


});