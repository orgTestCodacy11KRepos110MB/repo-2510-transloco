import { DefaultFallbackStrategy } from '../../transloco-fallback-strategy';
import { DefaultHandler } from '../../transloco-missing-handler';
import { DefaultInterceptor } from '../../transloco.interceptor';
import { DefaultLoader } from '../../transloco.loader';
import { TranslocoService } from '../../transloco.service';
import { DefaultTranspiler } from '../../transloco.transpiler';

describe('default loader', () => {
  it('should no throw and use the default loader', () => {
    let service: TranslocoService;

    expect(function () {
      service = new TranslocoService(
        null as any,
        new DefaultTranspiler(),
        new DefaultHandler(),
        new DefaultInterceptor(),
        { defaultLang: 'en', availableLangs: ['en'] },
        new DefaultFallbackStrategy({ defaultLang: 'en', fallbackLang: 'en' })
      );
    }).not.toThrow();
    expect((service! as any).loader instanceof DefaultLoader).toBe(true);
    service!.setTranslation(
      {
        key: 'Netanel',
      },
      'en'
    );
    expect(service!.translate('key')).toEqual('Netanel');
  });
});
