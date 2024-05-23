import { FlightInfo } from "../../flight/interfaces/flight-info.interface";
import { PriceDetail } from "../../flight/interfaces/price-detail.interfaces";


export const priceDetail:PriceDetail = {
  plainType: 'Airbus A320',
      priceOptions: [
        {
          name: 'Basic',
          features: [
            'Bolso o mochila pequeña',
            'Cambio con cargo',
            'No aplican beneficios por categorías de socios'
          ],
          price: 'COP 90.806,00',
          moreDetails: '#',
          action: 'BASIC_ACTION'
        },
        {
          name: 'Light',
          features: [
            'Bolso o mochila pequeña',
            'Equipaje de mano de 10 kg',
            'Cambio con cargo',
            'Postulación a UPG con tramos'
          ],
          price: 'COP 110.735,00',
          moreDetails: '#',
          action: 'LIGHT_ACTION'
        },
        {
          name: 'Full',
          features: [
            'Bolso o mochila pequeña',
            'Equipaje de mano de 10 kg',
            '1 equipaje de bodega 23 kg',
            'Cambio sin cargo',
            'Selección de asiento estándar',
            'Devolución total',
            'Postulación a UPG con tramos'
          ],
          price: 'COP 130.706,00',
          moreDetails: '#',
          action: 'FULL_ACTION'
        }

      ]
};

export const searchFlightResults: FlightInfo[] = [
  {
    id:1,
    isLowerPrice:true,
    duration: '0 h 55 min',
    basePrice: 90806.00,
    from: {
      time: '2:50 pm',
      location: 'medellin'
    },
    to:{
      time:'3:45 pm',
      location: 'bogota'
    },
    route:{
      name:'Directo',
      detail:'#'
    },
    priceDetail
  }
];


