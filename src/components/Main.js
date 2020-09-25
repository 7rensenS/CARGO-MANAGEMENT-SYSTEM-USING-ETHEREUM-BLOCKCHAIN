import React, { Component } from 'react';


class Main extends Component {
render() {
    return (
      <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()

          let Order= this.input.value.toString()
          let CargoID= this.input1.value.toString()
          let Datee= this.input2.value.toString()
          let Mode= this.input3.value.toString()
          let SName= this.input4.value.toString()
          let SAddress= this.input5.value.toString()
          let SDistrict= this.input6.value.toString()
          let SMobile= this.input7.value.toString()
          let SEmail= this.input8.value.toString()
          let SPlace= this.input9.value.toString()
          let RName= this.input10.value.toString()
          let RAddress= this.input11.value.toString()
          let RDistrict= this.input12.value.toString()
          let RMobile= this.input13.value.toString()
          let REmail= this.input14.value.toString()
          let RPlace= this.input15.value.toString()
          let Product= this.input16.value.toString()
          let Weight= this.input17.value.toString()
          let Cost= this.input18.value.toString()



          this.props.addCargo(Order,CargoID,Datee,Mode,Product,Weight,Cost)
          this.props.addSender(Order,SName,SAddress,SDistrict,SMobile,SEmail,SPlace)
          this.props.addReceiver(Order,RName,RAddress,RDistrict,RMobile,REmail,RPlace)
        }}>
      
        <div className="input-group mb-4">
          <label class="col-sm-2 col-form-label">Order No:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input) => { this.input = input }}
              className="form-control form-control-lg"
              required />
        </div>
        
        <div className="input-group mb-4">
          <label class="col-sm-2 col-form-label">CargoID:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input1) => { this.input1 = input1 }}
              className="form-control form-control-lg"
              required />
        </div>

        <div className="input-group mb-4">
          <label class="col-sm-2 col-form-label">Date:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input2) => { this.input2 = input2 }}
              className="form-control form-control-lg"
              required />
        </div>
        

        <div className="input-group mb-4">
          <label class="col-sm-2 col-form-label">Mode:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input3) => { this.input3 = input3 }}
              className="form-control form-control-lg"
              required />
        </div>

        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">SENDER DETAILS</label>
          <label for="" class="col-sm-2 col-form-label">Name:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input4) => { this.input4 = input4 }}
              className="form-control form-control-lg"
              required />
        </div>

        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Address:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input5) => { this.input5 = input5 }}
              className="form-control form-control-lg"
              required />
        </div>

        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">District:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input6) => { this.input6 = input6 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Mobile:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input7) => { this.input7 = input7 }}
              className="form-control form-control-lg"
              pattern="[0-9]{10,12}"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Email:</label>
          <input
              type="email"
              onChange={(event) => {
              }}
              ref={(input8) => { this.input8 = input8 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Exact Place:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input9) => { this.input9 = input9 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">RECEIVER DETAILS</label>
          <label for="" class="col-sm-2 col-form-label">Name:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input10) => { this.input10 = input10 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Address:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input11) => { this.input11 = input11 }}
              className="form-control form-control-lg"
              required />
        </div>
        <div className="input-group mb-4">
          <label for="inputEmail3" class="col-sm-2 col-form-label">District:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input12) => { this.input12 = input12 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Mobile:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input13) => { this.input13 = input13 }}
              className="form-control form-control-lg"
              pattern="[0-9]{10,12}"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Email:</label>
          <input
              type="email"
              onChange={(event) => {
              }}
              ref={(input14) => { this.input14 = input14 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Exact Place:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input15) => { this.input15 = input15 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Product:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input16) => { this.input16 = input16 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Weight Kgm:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input17) => { this.input17 = input17 }}
              className="form-control form-control-lg"
              required />
        </div>


        <div className="input-group mb-4">
          <label for="" class="col-sm-2 col-form-label">Total Cost:</label>
          <input
              type="text"
              onChange={(event) => {
              }}
              ref={(input18) => { this.input18 = input18 }}
              className="form-control form-control-lg"
              required />
        </div>
        <div className="input-group mb-4">
          <button type="submit" className="btn btn-primary btn-block btn-lg">ADD TO CARGO DAPP BLOCKCHAIN!</button>
        </div>

      </form>
    );
  }
}

export default Main;
