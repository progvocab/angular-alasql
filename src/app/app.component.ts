import { Component } from '@angular/core';
//import * as alaSQLSpace from 'alasql';
import alasql from 'alasql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-alasql';

  ngOnInit(){
    this.testAlaSQLExcelExport();
  }
  public testAlaSQLExcelExport(): void {
    var data1 = [{ a: 1, b: 10 }, { a: 2, b: 20 }];
    var data2 = [{ a: 100, b: 10 }, { a: 200, b: 20 }];
    var opts = [{ sheetid: 'Good', header: true }, { sheetid: 'Two', header: false }];
    //console.log(alaSQLSpace)
    var res = alasql('SELECT INTO XLSX("MyAwesomeData.xlsx",?) FROM ?', [opts, [data1, data2]]);
 }
}
