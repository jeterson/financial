import { FormEvent, FormHTMLAttributes, useRef, useState } from "react";
import { AccountPage, Actions, Form, InputContainer } from "./style";
import {CheckingAccount} from '../../types/account-types'
import { useMockStorage } from "../../hooks/useMockStorage";
import toast,{Toaster, ToastBar} from 'react-hot-toast'

type FormErrors = {
  message: string,
  fieldName: string
}

declare global {
  interface String {
    isEmpty(): boolean
  }
}
declare interface String {
  isEmpty(): boolean
} 

String.prototype.isEmpty = () => {
  let d = String(this)
  return d.trim() === ''
}


export function Account() {

  

  const [holderAccount, setHolderAccount] = useState('');
  const [agency, setAgency] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [openingBalance, setOpeningBalance] = useState('');
  const [errors, setErrors] = useState<FormErrors[]>([])
  const {setAccounts, accounts, insert} = useMockStorage()
  
  function validateFields() {
    const validationsErrors: FormErrors[] = []
    if(holderAccount.isEmpty()) {
      validationsErrors.push({message: 'is required', fieldName: 'holderAccount'})
    }
    if(agency.isEmpty()) {
      validationsErrors.push({message: 'is required', fieldName: 'agency'})
    }
    if(accountNumber.isEmpty()) {
      validationsErrors.push({message: 'is required', fieldName: 'accountNumber'})
    }
    if(openingBalance.isEmpty()) {
      validationsErrors.push({message: 'is required', fieldName: 'openingBalance'})
    }
    setErrors(validationsErrors)    
  }


  function save(event: FormEvent) {
    event.preventDefault();
    validateFields();

    if(errors.length > 0) {
      return;
    }

    const model: CheckingAccount = {
      accountNumber: accountNumber as unknown as number,
      agency: agency as unknown as number,
      holderAccount: holderAccount,
      openingBalance: openingBalance as unknown as number
    }

    insert(model);

    

  }
  return (
    <AccountPage>
      <div><Toaster/></div>
      <div className="title">
        <h1>Contas</h1>
        <span className="help">Cadastrar uma conta corrente</span>
      </div>
       <Form onSubmit={save}>
         
         <InputContainer>
          <label>Titular</label>
          <input 
              onChange={event => setHolderAccount(event.target.value)} 
              value={holderAccount}               
              placeholder="Nome do Titular" />
         </InputContainer>

         <InputContainer>
          <label>Agência</label>
          <input 
              onChange={event => setAgency(event.target.value)} 
              value={agency} 
              placeholder="Numero da Agência" />
         </InputContainer>

         <InputContainer>
          <label>Conta</label>
          <input 
                onChange={event => setAccountNumber(event.target.value)} 
                value={accountNumber} 
                placeholder="Numero da Conta" />
         </InputContainer>


         <InputContainer>
          <label>Saldo Inicial</label>
          <input onChange={event => setOpeningBalance(event.target.value)} 
                 value={openingBalance} 
                 placeholder="Saldo Inicial" />
         </InputContainer>

         
        <Actions>
          <button className="cancel">Cancel</button>
          <button className="save">Save</button>
        </Actions>
       </Form>
             
    </AccountPage>
  )
}