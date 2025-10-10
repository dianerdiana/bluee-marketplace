import { cn } from '@/configs/cn';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type Step = {
  label: string;
  number: number | string;
  value: string;
};

interface ProgressStepsProps {
  steps: Step[];
  activeStep: number;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps, activeStep }) => {
  return (
    <div className='w-full max-w-3xl mx-auto overflow-hidden'>
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (__, className) => {
            return `<span class="${className} w-4 h-1 rounded-full inline-block !bg-lime-300 mx-1"></span>`;
          },
        }}
        slidesPerView={3}
        modules={[Pagination]}
        initialSlide={activeStep}
      >
        {steps.map((step, index) => {
          const isActive = index <= activeStep;

          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center relative w-full'>
                {/* Circle */}
                <div
                  className={`relative flex items-center justify-center w-7 h-7 rounded-full font-semibold transition-all duration-300 ${
                    isActive ? 'bg-lime-300 text-black' : 'bg-back text-secondary'
                  }`}
                >
                  {/* Line Start */}
                  <div
                    className={cn(
                      'absolute z-10 top-2 left-6/12 w-[160px] h-3 -translate-x-1/2',
                      isActive ? 'bg-lime-300' : 'bg-back',
                      {
                        'rounded-s-full': index === 0,
                        'rounded-e-full w-[161px]': index === steps.length - 1,
                      },
                    )}
                  />

                  <span className='fixed z-20'>{step.number}</span>
                </div>

                {/* Label */}
                <p className='mt-2 text-sm font-medium text-gray-800 text-center'>{step.label}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
