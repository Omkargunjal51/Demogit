import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-image',
  templateUrl: './demo-image.component.html',
  styleUrl: './demo-image.component.css'
})
export class DemoImageComponent {
  selectedFile: File | null = null;

  uploadedImageUrl:any;

  constructor(private http:HttpClient){};

  postdata(data:any){
    this.http.post("http://localhost:3000/Images",data).subscribe
    ((res:any)=>{
      console.log(res);
      this.uploadedImageUrl = res.base64Image //|| base64Image;  // Adjust as needed
      console.warn("url :" , this.uploadedImageUrl);

    }, error => {
        console.error('Upload failed', error);
      
    })
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {

    // upload() {
      if (this.selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64Image = reader.result as string;
          const imageData = {
            image: {
              name: this.selectedFile?.name,
              type: this.selectedFile?.type,
              size: this.selectedFile?.size,
              data: base64Image.split(',')[1] // Remove base64 prefix
            },
            metadata: {
              description: 'Sample image upload',
              tags: ['example', 'upload', 'image']
            }
          };
          this.postdata(imageData);
  
          // this.imageUploadService.uploadImage(imageData).subscribe(response => {
          //   console.log('Image uploaded successfully', response);
          // }, error => {
          //   console.error('Image upload failed', error);
          // });
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }
  }
    
    // if (this.selectedFile) {
    //   const formData = new FormData();
    //   formData.append('file', this.selectedFile);
    //   this.postdata(formData);
     
    // }
  // }
// }
