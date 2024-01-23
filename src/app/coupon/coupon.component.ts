import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent {
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
