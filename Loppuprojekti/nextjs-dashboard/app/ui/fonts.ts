import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });



export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Vie Lusitana niin voit käyttää sitä muualla
export { lusitana };
