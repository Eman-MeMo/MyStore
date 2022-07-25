import { Component, OnInit ,Input} from '@angular/core';
import { CertserviceService } from '../certservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  Name: any;
  cartnumber: any;
  constructor(private service: CertserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cartnumber = this.service.totalprice();
    this.Name = this.service.username;
  }

}
