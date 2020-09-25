pragma solidity ^0.5.0;
contract CargoDapp {
 	//**STRUCTURES**
 	
 	struct Cargo{
        string num;
		string Date;
		string Mode;
		string Product;
		uint256 Weight;
		uint256 Cost;
 	}
 	struct Sender{
		string SName;
		string SAddress;
		string SDistrict;
		uint256 SMobile;
		string SEmail;
		string SExactPlace;
	}
	struct Receiver{
	    string RName;
		string RAddress;
		string RDistrict;
		uint256 RMobile;
		string REmail;
		string RExactPlace;
	}


 	mapping(uint => Cargo) public cargos;
	mapping(uint => Sender) public senders;
	mapping(uint => Receiver) public receivers;
	
	//**function for cargo --**
	function addCargo(uint _id,string memory _num,string memory _Date,string memory _Mode,string memory _Product,uint256 _Weight,uint256 _Cost) public {
	    cargos[_id] = Cargo(_num, _Date, _Mode,_Product, _Weight, _Cost);
	}
	//**function for Sender--**
	function addSender(uint _id,string memory _SName,string memory _SAddress,string memory _SDistrict,uint256 _SMobile,string memory _SEmail,string memory _SExactPlace) public {
		senders[_id]= Sender(_SName, _SAddress, _SDistrict,_SMobile, _SEmail, _SExactPlace);
	}
	//**function for Receiver--**
	function addReceiver(uint _id,string memory _RName,string memory _RAddress,string memory _RDistrict,uint256 _RMobile,string memory _REmail,string memory _RExactPlace) public {
		receivers[_id]= Receiver(_RName, _RAddress, _RDistrict,_RMobile, _REmail, _RExactPlace);
	}
	
}
//------END------

