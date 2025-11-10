import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { BonusAccount } from "./class/BonusAccount";


//[x] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

// Conta pessoa física
const peopleAccount: PeopleAccount = new PeopleAccount(1, "João Silva", 1001)
console.log('Conta pessoa física')
peopleAccount.deposit(1250);
peopleAccount.withdraw(50);
peopleAccount.withdraw(300); // falha: saldo insuficiente

// Conta empresa
const companyAccount: CompanyAccount  = new CompanyAccount("Tech Solutions Ltda", 2001);
console.log('Conta pessoa Empresa')
companyAccount.deposit(1000);
companyAccount.getLoan(500);
companyAccount.withdraw(300);

// Conta com bônus
const bonusAccount: BonusAccount = new BonusAccount("Maria Oliveira", 3001);
console.log('Conta com Bonus')
bonusAccount.deposit(100); // deve virar 110
bonusAccount.withdraw(50);

console.log("✅ Testes concluídos.");