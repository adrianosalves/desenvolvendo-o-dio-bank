import { DioAccount } from "./DioAccount";

//[x] Criar um novo tipo de conta a partir da DioAccount
//    Esta conta não deve receber novos atributos
//    Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.getStatus() && value > 0) {
      const bonusValue = value + 10;
      this.setBalance(this.getBalance() + bonusValue);
      console.log(`Depósito de R$${value} + bônus de R$10 = R$${bonusValue}. Saldo: R$${this.getBalance()}`);
    } else {
      console.log('Depósito não permitido: conta inativa.');
    }
  };
}