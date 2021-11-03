import { UniqueIdService } from './unique-id.service';

describe('UniqueIdService', () => {

  it('#generateIdWithPrefix should generate an id when called with prefix', () => {
    const service = new UniqueIdService();
    const id = service.generateIdWithPrefix('app');
    expect(id).toContain('app-');
  });

});
