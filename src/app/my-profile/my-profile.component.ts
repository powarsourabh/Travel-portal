import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    // Logic to save changes
    this.toggleEditMode();
  }

  cancelChanges() {
    // Logic to cancel changes
    this.toggleEditMode();
  }
}
