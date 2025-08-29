import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperAdminService {
  getDashboard() {
    return { message: 'Super Admin Dashboard' };
  }
}
