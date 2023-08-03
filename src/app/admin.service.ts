import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with the actual API URL for your backend

  constructor(private http: HttpClient) { }

  // Fetch the list of pending Aadhar Card applications
  getPendingApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/admin/pendingApplications`);
  }

  // Approve the Aadhar Card application with the given ID
  approveApplication(applicationId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/admin/approve/${applicationId}`, null);
  }

  // Reject the Aadhar Card application with the given ID
  rejectApplication(applicationId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/admin/reject/${applicationId}`, null);
  }

  // Fetch the list of issued Aadhar Cards
  getIssuedAadharCards(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/admin/issuedAadharCards`);
  }

  // Delete Aadhar Card details for the citizen with the given ID
  deleteAadharCard(citizenId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/admin/deleteAadharCard/${citizenId}`);
  }
}
