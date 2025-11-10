export abstract class DioAccount {
    //[x] Todos os atributos de qualquer conta devem ser privados
    //[x] Os atributos name e accountNumber não podem ser alterados internamente ou externamente
	private name: string
	private readonly accountNumber: number
	private balance: number = 0    
    private status: boolean = true
	
	constructor(name: string, accountNumber: number) {
		this.name = name
		this.accountNumber = accountNumber		
	}
    
	setName = (name: string): void => {
		this.name = name
		console.log('Nome alterado com sucesso')
	}

    getName = (): string => {
        return this.name
    }

    // [ ] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
    // - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
    // - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
    
	deposit = (value: number): void => {
        if (this.status && value > 0){
            this.balance += value;
            console.log(`Deposito de R${value} realizado. Saldo: R${this.balance}`);
        }else { 
            console.log(`Deposito não permitido: conta inativa ou valor inválido`)

        }        
        
    }          
	
	withdraw = (value: number): void => {
        if (this.status && this.balance >= value && value > 0) {
          this.balance -= value;
          console.log(`Saque de R$${value} realizado. Saldo: R$${this.balance}`);
        } else {
          console.log('Saque não permitido: conta inativa, saldo insuficiente ou valor inválido.');
        }
      };
    
    setBalance(balance: number): void {
        this.balance = balance;
    }   
	
	// Importamos o Metodo
	getBalance = (): number => {
        return this.balance;
    }

    // validação interna da conta

    getStatus(): boolean {
        return this.status;
      }

    private validateStatus = (): boolean => {
        if (this.status){
            return this.status
        }

        throw new Error('Conta inválida!')
    }
}
