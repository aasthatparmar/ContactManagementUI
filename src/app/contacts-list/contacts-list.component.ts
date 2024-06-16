import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  subscription: Subscription = new Subscription();
  
  dataSource: MatTableDataSource<Contact>;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'actions'];

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private contactService: ContactService,
    private notificationService: NotificationService
  ) {
    this.dataSource = new MatTableDataSource<Contact>([]);
  }
  
  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getContacts();

    this.subscription = this.contactService.callFunction$.subscribe(() => {
      this.getContacts();
    });
  }

  applyFilter(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((data: Contact[]) => {
      next: this.contacts=data,this.dataSource.data = data;
      error: (err: string) => this.notificationService.showError(err) ;
      
    });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.notificationService.showSuccess('Contact Deleted Successfully!');
      this.getContacts();
    });
  }

  openAddContactDialog(id: number): void {
    const editData = this.contacts.find(contact => contact.id === id);

    const dialogRef = this.dialog.open(AddContactDialogComponent, {
      width: '400px',
      maxWidth: '80vw',
      maxHeight: '80vh',
      disableClose: true,
      autoFocus: true,
      data: { isNew: false, editData: editData }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.notificationService.showSuccess('Contact Edited Successfully!');
        this.getContacts();
      }
    });
  }
}