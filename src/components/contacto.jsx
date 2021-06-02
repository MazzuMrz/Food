import React from 'react'

const Contacto = () => {
    return (
        <div className="text-center p-5">
            <h1 className="mb-5">Alguna duda? Contactanos!</h1>
            <div class="input-group mb-3 ">
  
  <input type="text" class="form-control" placeholder="Tu nombre" aria-label="Username" aria-describedby="basic-addon1" />
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Tu mail" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  
</div>



<div class="input-group">
  <span class="input-group-text">Que consulta tenés?</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
  <br/>
  <button type="button" class="btn-lg btn-danger ml-4">Enviar</button>
  
</div>
        </div>
    )
}

export default Contacto;
