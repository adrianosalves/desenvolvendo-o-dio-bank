import { DioAccount } from "./DioAccount"

//[x] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
// Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
// Apenas contas com o status true podem fazer empréstimo

export class CompanyAccount extends DioAccount {

	constructor(name: string, accountNumber: number){
		super(name, accountNumber)	
	}
	
	getLoan = (value: number): void => {
        if (this.getStatus() && value > 0) {
          this.setBalance(this.getBalance() + value);
          console.log(`Empréstimo de R$${value} aprovado. Novo saldo: R$${this.getBalance()}`);
        } else {
          console.log('Empréstimo não permitido: conta inativa.');
        }
    };       

}