import { handler } from './index';

describe('Inject in timestream handler', () => {
  it('should run', async () => {
    await handler();
  });

  it('should have env vars', async () => {
    expect(process.env.REGION).toBeTruthy();
  });
});
