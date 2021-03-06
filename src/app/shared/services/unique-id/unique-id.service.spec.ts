import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should generate an id when called with prefix`, () => {
    const id = service.generateIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue(); // Literal: const x = true
    expect(true).toBe(true); // COMPARISON literal types || same references: new Boolean() instance
    expect(true).toBeTruthy(); // JS standard check, ie: 'test' | [object Object], etc.
  });

  it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should not generate duplicated ids when called multiple times`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generateIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} should return the amount of generated IDs when called`, () => {
    service.generateIdWithPrefix('app');
    service.generateIdWithPrefix('app');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should throw an exception when called blank`, () => {
    const emptyValues = [ null, undefined, '', '0', '1' ];

    emptyValues.forEach(value => {
      expect(() => service.generateIdWithPrefix(value))
        .withContext(`Empty value: ${value}`)
        .toThrow();
    });
  });

});
