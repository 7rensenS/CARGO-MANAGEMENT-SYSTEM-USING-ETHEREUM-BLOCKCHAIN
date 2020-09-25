import React, { Component } from 'react';
import Web3 from 'web3'
import CargoDapp from '../abis/CargoDapp.json'
import Navbar from './Navbar'
import Main from './Main'
import './App.css';

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  
  async loadBlockchainData(){
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    //load cargodapp
    const networkId = await web3.eth.net.getId()
    const tokenData = CargoDapp.networks[networkId]
    if (tokenData) {
      const cargo = new web3.eth.Contract(CargoDapp.abi, tokenData.address)
      this.setState({ cargo })
    }
    else
    {
      window.alert('CargoDapp Contract not deployed to detected n/w')
    }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }

  } 
  addCargo = (Order,CargoID,Datee,Mode,Product,Weight,Cost) => {
    this.setState({ loading: true })
    this.state.cargo.methods.addCargo(Order,CargoID,Datee,Mode,Product,Weight,Cost).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  addSender = (Order,SName,SAddress,SDistrict,SMobile,SEmail,SPlace) => {
    this.setState({ loading: true })
    this.state.cargo.methods.addSender(Order,SName,SAddress,SDistrict,SMobile,SEmail,SPlace).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  addReceiver = (Order,RName,RAddress,RDistrict,RMobile,REmail,RPlace) => {
    this.setState({ loading: true })
    this.state.cargo.methods.addReceiver(Order,RName,RAddress,RDistrict,RMobile,REmail,RPlace).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }


  constructor(props) {
    super(props)
    this.state = { 
      account: '',
      cargo: {},
      loading: true
    }
  }

  render() {
    let content
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } 
    else 
    {
      content = <Main
        addCargo={this.addCargo}  
        addSender={this.addSender}
        addReceiver={this.addReceiver}
        />
    }
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{maxWidth: '600px'}}>
              <div className="content mr-auto ml-auto">
                {content}
               </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
