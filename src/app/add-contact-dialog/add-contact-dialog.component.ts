import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.css']
})
export class AddContactDialogComponent {
  contactForm: FormGroup;
  isNew: boolean | undefined;
  editContact: any;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    public dialogRef: MatDialogRef<AddContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.isNew = this.data.isNew;

    if(!this.isNew)
      {
        this.contactForm.patchValue({
          firstName: this.data.editData.firstName,
          lastName: this.data.editData.lastName,
          email: this.data.editData.email
        });
      }
      
  }

  onSubmit(id:any): void {

    if(!this.isNew)
      {
        console.log(this.contactForm)
        const newContact: Contact = {
          id: id,
          firstName: this.contactForm.value.firstName,
          lastName: this.contactForm.value.lastName,
          email: this.contactForm.value.email
        };
  
        this.contactService.updateContact(id,newContact).subscribe(() => {
          
          this.dialogRef.close(true);
        });
      }
    
      else{
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: 0,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        email: this.contactForm.value.email
      };

      this.contactService.addContact(newContact).subscribe(() => {
 
        this.dialogRef.close(true);
      });
    }}
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}