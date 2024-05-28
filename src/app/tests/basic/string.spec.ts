import { saludar } from "./string"

describe('Pruebas con strings',()=>{

  afterEach(()=>{
    //Hago cosas después de cada test

  })

  beforeEach(()=>{

  })

  it('Primer prueba', ()=>{

    const resp = saludar('Juan');
    expect(typeof resp).toBe('string');

  })


})
