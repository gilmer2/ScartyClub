const Contact = () => {
    return (
      <div className="container">
        <div className="card" style={{ maxWidth: '500px', margin: 'auto' }}>
          <div className="card-body">
            <form>
              <h2 className="text-center mb-4">Contacto</h2>
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" required />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="apellido">Apellido:</label>
                  <input type="text" className="form-control" id="apellido" name="apellido" required />
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="correo">Correo electrónico:</label>
                <input type="email" className="form-control" id="correo" name="correo" required />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="departamento">Departamento:</label>
                <select className="form-control" id="departamento" name="departamento" required>
                  <option value="">Seleccione un departamento...</option>
                  <option value="soporte">Soporte</option>
                  {/* Agrega más opciones según sea necesario */}
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  placeholder="Describe brevemente el asunto."
                  required
                ></textarea>
              </div>
              <br />
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default Contact;