/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KaryawanService } from './karyawan.service';

describe('Service: Karyawan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KaryawanService]
    });
  });

  it('should ...', inject([KaryawanService], (service: KaryawanService) => {
    expect(service).toBeTruthy();
  }));
});
