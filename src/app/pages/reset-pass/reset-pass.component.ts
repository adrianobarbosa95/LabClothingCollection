import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent {

  form!: FormGroup;
  email!: string;
  enviado = false;

  constructor (private fb: FormBuilder) {
 
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    
  }
  
onSubmit(){
  // if(this.form.valid){}
  
    return this.enviado = this.form.valid;
  
}
}
