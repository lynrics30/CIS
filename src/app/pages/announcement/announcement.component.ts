import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  imageURL: string;
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder, private route: Router) {
    // Reactive Form
    this.uploadForm = this.fb.group({
      avatar: [null],
      title: [''],
      caption: [''],
    });
  }

  ngOnInit(): void {}

  // Image Preview
  showPreview(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.uploadForm.patchValue({
      avatar: file,
    });
    this.uploadForm.get('avatar').updateValueAndValidity();

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // Submit Form
  submit() {
    console.log(this.uploadForm.value);
    Swal.fire({
      icon: 'success',
      titleText: 'Announcement 1',
      text: 'Announcement Submitted Successfully!',
      showConfirmButton: false,
      timer: 2000,
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
    this.route.navigate(['admin/dashboard']);
  }
}
