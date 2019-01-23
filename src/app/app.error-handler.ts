import { Response} from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErrorHandler {
    static handlerErros(error: Response | any){
        let errorMessage: String
            if (error instanceof Response){
                errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
            }else{
                errorMessage = error.toString()
            }
        console.log(errorMessage)
        return Observable.throw(errorMessage)

    }
}