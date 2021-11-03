import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should generate an id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should not generate duplicated ids when called multiple times`, () => {
    const service = new UniqueIdService();

    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

});
