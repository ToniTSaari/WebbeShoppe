import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MessageService } from './message.service';
import { Time } from './time'

@Injectable(
    {
        providedIn: 'root',
    })
    
export class Service
{ 
    httpOptions =
    {
        headers: new HttpHeaders({'Content-type':'application/json'})
    }
    constructor(private http: HttpClient, private messageService: MessageService){}
    private log(message: string)
    {
        this.messageService.add('Service: ${message}');
    }
    private url = 'http://localhost:3000/time'
    getTime(): Observable<Time[]>
    {
        const url = this.url
        return this.http.get<Time[]>(url)
    }
}

