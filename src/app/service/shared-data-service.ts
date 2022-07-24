import { Injectable } from '@angular/core';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class SharedDataService {
    private subject = new Subject<any>();



    sendMessage(message: boolean) {
        this.subject.next({ message });
    }

    // clearMessage() {
    //     this.subject.next();
    // }

    getMessage(): Observable<any> {
        console.log(this.subject)
        return this.subject.asObservable();
    }
}