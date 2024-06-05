import { TestBed } from '@angular/core/testing';

import { NamespaceSettingService } from './namespace-setting.service';

describe('NamespacesettingService', () => {
  let service: NamespaceSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamespaceSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
