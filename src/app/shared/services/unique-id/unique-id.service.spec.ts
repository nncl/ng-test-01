import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should generate an id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateIdWithPrefix('app');
    expect(id).toContain('app-');
  });

});
