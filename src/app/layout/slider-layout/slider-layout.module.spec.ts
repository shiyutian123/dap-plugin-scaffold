import { SliderLayoutModule } from './slider-layout.module';

describe('SliderLayoutModule', () => {
  let sliderLayoutModule: SliderLayoutModule;

  beforeEach(() => {
    sliderLayoutModule = new SliderLayoutModule();
  });

  it('should create an instance', () => {
    expect(sliderLayoutModule).toBeTruthy();
  });
});
