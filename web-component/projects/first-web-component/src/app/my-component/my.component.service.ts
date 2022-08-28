import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {lastValueFrom} from 'rxjs';

@Injectable()
export class MyComponentService {
  constructor(private http: HttpClient) {}

  async test(): Promise<string> {
    return await lastValueFrom(this.http.get<string>('https://squad-win.azurewebsites.net/api/Health'));
  }
}
