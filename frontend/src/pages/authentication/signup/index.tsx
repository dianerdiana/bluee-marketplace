// Routing
import { Link, useNavigate } from 'react-router-dom';

// Custom Components
import { IconWrapper, InputWrapper, BaseInput, InputMessage } from '@/components/Input';
import { Label } from '@/components/Label';
import { DynamicIcon } from '@/components/DynamicIcon';
import { Rating } from '@/components/Rating';
import { Button } from '@/components/Button';

// Thirparty
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-reactjs';
import { Controller, useForm } from 'react-hook-form';

// Config
import { appConfig } from '@/configs/appConfig';

// Utils
import { signUpSchema, type SignUpSchema } from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: SignUpSchema) => {
    console.log('Form submitted:', data);
    navigate('/login');
  };

  return (
    <main className='justify-between w-full h-full min-h-screen mx-auto row bg-back'>
      <section
        className='relative flex-col justify-end hidden h-screen flex-col-6 lg:row'
        style={{
          backgroundImage: "url('https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/auth-image-1.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Image Overlay  */}
        <div className='absolute bottom-0 z-0 w-full h-5/12 bg-image-overlay' />
        <div className='z-10 px-10 py-8'>
          <Rating rating={5} />
          <p className='text-white text-[26px] leading-[160%] mb-[30px]'>
            “Moving my business online truly made 🎯 growth and daily management much simpler, more efficient, and
            hassle-free.”
          </p>
          <div className='flex items-center justify-between'>
            <dl className='text-white'>
              <dd className='font-semibold'>Jasmine Putri</dd>
              <dt>Business Owner</dt>
            </dl>
            <div className='flex items-center gap-x-1.5'>
              <button className='text-white cursor-pointer'>
                <ArrowCircleLeft size={36} />
              </button>
              <button className='text-white cursor-pointer'>
                <ArrowCircleRight size={36} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='flex items-center self-center justify-center flex-1 h-full py-4 lg:flex-col-6 flex-col-12'>
        <div className='bg-white px-6 py-6 flex flex-col justify-center h-11/12 lg:mx-8 mx-4 w-full rounded-[20px]'>
          <div className='flex items-center justify-center mb-14 lg:mb-6'>
            <img src={appConfig.logoUrl} className='h-auto w-11' />
            <h1 className='text-2xl font-black font-mons'>{appConfig.brandName}</h1>
          </div>

          <div className='hidden mb-8 space-y-1 lg:block'>
            <p className='text-xl font-bold text-center text-dark'>Hey🙌🏻, Welcome Aboard!</p>
            <p className='text-sm text-center text-secondary'>Create account to continue!</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6 row'>
              <div className='mb-4 flex-col-12'>
                <Label htmlFor='fullName'>Full Name</Label>
                <InputWrapper isInvalid={errors.fullName && true}>
                  <IconWrapper>
                    <DynamicIcon name='ProfileCircle' size={24} className='text-secondary' />
                  </IconWrapper>
                  <span className='w-px h-5 bg-secondary' />
                  <Controller
                    name='fullName'
                    control={control}
                    render={({ field }) => (
                      <BaseInput
                        autoComplete='name'
                        id='fullName'
                        type='text'
                        placeholder='Enter Your Full Name'
                        {...field}
                      />
                    )}
                  />
                </InputWrapper>

                <InputMessage className={errors.fullName ? 'inline-block' : 'hidden'}>
                  {errors.fullName?.message}
                </InputMessage>
              </div>

              <div className='mb-4 flex-col-12'>
                <Label htmlFor='email'>Email Address</Label>
                <InputWrapper isInvalid={errors.email && true}>
                  <IconWrapper>
                    <DynamicIcon name='Sms' size={24} className='text-secondary' />
                  </IconWrapper>
                  <span className='w-px h-5 bg-secondary' />
                  <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                      <BaseInput
                        autoComplete='email'
                        id='email'
                        type='email'
                        placeholder='Enter Your Email'
                        {...field}
                      />
                    )}
                  />
                </InputWrapper>

                <InputMessage className={errors.email ? 'inline-block' : 'hidden'}>
                  {errors.email?.message}
                </InputMessage>
              </div>

              <div className='mb-4 flex-col-12'>
                <Label htmlFor='phoneNumber'>Phone Number</Label>
                <InputWrapper isInvalid={errors.phoneNumber && true}>
                  <IconWrapper>
                    <DynamicIcon name='Call' size={24} className='text-secondary' />
                  </IconWrapper>
                  <span className='w-px h-5 bg-secondary' />
                  <Controller
                    name='phoneNumber'
                    control={control}
                    render={({ field }) => (
                      <BaseInput
                        autoComplete='name'
                        id='phoneNumber'
                        type='text'
                        placeholder='Enter Your Phone Number'
                        {...field}
                      />
                    )}
                  />
                </InputWrapper>

                <InputMessage className={errors.phoneNumber ? 'inline-block' : 'hidden'}>
                  {errors.phoneNumber?.message}
                </InputMessage>
              </div>

              <div className='mb-4 flex-col-12'>
                <Label htmlFor='password'>Password</Label>
                <InputWrapper isInvalid={errors.password && true}>
                  <IconWrapper>
                    <DynamicIcon name='Key' size={24} className='text-secondary' />
                  </IconWrapper>
                  <span className='w-px h-5 bg-secondary' />
                  <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                      <BaseInput id='password' type='password' placeholder='Enter Your Password' {...field} />
                    )}
                  />
                </InputWrapper>

                <InputMessage className={errors.password ? 'inline-block' : 'hidden'}>
                  {errors.password?.message}
                </InputMessage>
              </div>

              <div className='mb-4 flex-col-12'>
                <Label htmlFor='password'>Confirm Password</Label>
                <InputWrapper isInvalid={errors.confirmPassword && true}>
                  <IconWrapper>
                    <DynamicIcon name='Key' size={24} className='text-secondary' />
                  </IconWrapper>
                  <span className='w-px h-5 bg-secondary' />
                  <Controller
                    name='confirmPassword'
                    control={control}
                    render={({ field }) => (
                      <BaseInput
                        id='confirmPassword'
                        type='password'
                        placeholder='Enter Your Confirm Password'
                        {...field}
                      />
                    )}
                  />
                </InputWrapper>

                <InputMessage className={errors.confirmPassword ? 'inline-block' : 'hidden'}>
                  {errors.confirmPassword?.message}
                </InputMessage>
              </div>
            </div>
            <div>
              <Button type='submit' variant='primary' className='w-full py-4 mb-3 rounded-full'>
                Create Account
              </Button>
              <p className='text-center text-secondary'>
                Already have an account?{' '}
                <Link to='/signin' className='underline text-primary hover:text-blue-500'>
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
