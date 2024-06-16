import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactDialogComponent } from './add-contact-dialog/add-contact-dialog.component';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';
import { NotificationService } from './notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public dialog: MatDialog,private contactService: ContactService,private notificationService: NotificationService) {}

  contacts: Contact[] = [];

  ngOnInit(): void {

  }

  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      width: '400px', 
      maxWidth: '80vw',
      maxHeight: '80vh',
      disableClose: true,
      autoFocus: true,
      data: { isNew: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notificationService.showSuccess('Contact Added Successfully!');
        this.callTargetFunction();
      }
    });
  }
  callTargetFunction() {
    this.contactService.triggerFunctionCall();
  }
}
