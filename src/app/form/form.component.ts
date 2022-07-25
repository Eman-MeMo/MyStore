import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertserviceService } from '../certservice.service';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  MyForm: any;
  constructor(private router: Router, private services: CertserviceService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.MyForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "Add": new FormControl(null, [Validators.required]),
      "cartNum": new FormControl(null,[Validators.required, Validators.pattern('[0-9]*')])
    })
  }
  onSubmit() {
    this.services.username = this.MyForm.value.name;
    this.services.cartNumber = this.MyForm.value.cartNum;
    this.services.Address=this.MyForm.value.Add;
     this.router.navigate(["/success"])
  }

  get name() { return this.MyForm.get('name'); }
  get Add() { return this.MyForm.get('Add'); }
  get cartNum() { return this.MyForm.get('cartNum'); }
}
