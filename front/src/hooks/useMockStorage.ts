import { useState } from "react";
import { CheckingAccount } from "../types/account-types";
import {IApiService} from '../services/IApiService'
import {MockServiceApi} from '../services/MockServiceApi'
import toast from "react-hot-toast";


export function useMockStorage() {
  const [accounts, setAccounts] = useState<CheckingAccount[]>([])
  const service: IApiService = new MockServiceApi()

  function insert(data: CheckingAccount) {
   toast.promise(service.post(data), {
     loading: 'Saving account',
     success: (data) => {
       setAccounts([...accounts, data]);
       return 'Account saved'
     },
     error: (err) => err
   })    
  }  


  return {
    setAccounts,
    accounts, 
    insert
  }
}