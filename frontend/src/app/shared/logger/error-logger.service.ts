import { Injectable } from '@angular/core';
import { Errors } from '../models/error.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorLoggerService {
  errorModel: Errors;
  constructor(private http: HttpClient) {
  }

logError(eventType, eventDescription, currentPage) {

      // handle the current user service and pass the current date and events 
      let log: {} = {
         date: new Date().toString()
        , eventType: eventType
        , eventDescription: eventDescription
      }

      let error: Errors = {
        "log": JSON.stringify(log)
        , "currentPage": currentPage
        , uniqueId: currentPage + Math.random() * 100
      }
    }
  }
