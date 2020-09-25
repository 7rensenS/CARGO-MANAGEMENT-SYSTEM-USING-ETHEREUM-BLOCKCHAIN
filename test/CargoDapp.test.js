const CargoDapp = artifacts.require("CargoDapp");
require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('EthSwap',([deployer, investor])=>{
	let cargo

	before(async () =>{
		cargo = await CargoDapp.new()
	})
	describe('CargoDapp deployement', async () =>{
		it('contract has name', async() =>{
			const name = await cargo.name()
			assert.equal(name, 'CARGODAPP')
			const pray= await cargo.pray()
			assert.equal(pray, 'GIFT OF GOD')
		})
	})
	describe('CargoDapp deployement', async () =>{
		it('contract has pray', async() =>{
			const pray= await cargo.pray()
			assert.equal(pray, 'GIFT OF GOD')
		})
	})

})