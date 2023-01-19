import Barcode from 'react-barcode'; //https://www.npmjs.com/package/react-barcode
import { LoaderFunctionArgs } from 'react-router-dom';
import { API } from './API';

// type Input = {
//   movieID: number,
//   title: string
//   date: string,
//   time: string,
//   seats: string[],
//   totalPrice: number 

// };


// export async function Loader({ params }: LoaderFunctionArgs) {
//   const result = API.buildArray();
//   return result;
// }


export default function TicketScreen() {
    return (
      <div className="w-80 h-[530px]">
        <div className="bg-white-dimmed grid grid-rows-[2fr_4fr_0.1fr_1fr] h-full w-72">

        <div className="">Movietitle</div>

        <div className="w-64 h-full justify-self-center">
            <div className="font-bold text-2xl leading-8 text-white py-5">

            </div>
            <div className="grid grid-rows-[1fr_2fr_1fr_2fr] grid-cols-[1fr_1fr_1fr] gap-2">
              <div className="text-secondary text-black justify-self-start">Date</div>
              <div className="text-secondary text-black justify-self-start">Time</div>
              <div className="text-secondary text-black justify-self-start">Price</div>

              <div className="text-primary text-white justify-self-start">18.01.</div>
              <div className="text-primary text-white justify-self-start">20:00</div>
              <div className="text-primary text-white justify-self-start">12€</div>

              <div className="text-secondary text-black">Seats</div>
              <div className="row-start-4 col-start-1 col-end-3 text-primary text-white">C-3, C-5, A-4</div>

         
            </div>
        </div>

        <div className='grid grid-cols-[1fr_11fr_1fr] grid-rows-1'>   
            <div className="w-5 h-10 rounded-tr-full rounded-br-full bg-dark"></div>
            <div className="w-full h-0.5 border-2 border-white border-dashed flex space-between self-center"></div>
            <div className="w-5 h-10 rounded-tl-full rounded-bl-full bg-dark justify-self-end"></div>
        </div>
     
        
        <div className="w-full flex justify-center">
          <div className="">         
            <Barcode value={(Math.random(6)*100000000000000000)} width={1} height={50} background="#66000000" lineColor="#ffffff" fontSize={15} />
          </div>
        </div>

        </div>

      </div>
    );
  }