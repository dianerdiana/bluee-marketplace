// Routing
import { Link } from 'react-router-dom';

// Custom Components
import { IconWrapper, InputWrapper, BaseInput, InputMessage } from '@/components/Input';
import { Label } from '@/components/Label';
import { DynamicIcon } from '@/components/DynamicIcon';
import { Rating } from '@/components/Rating';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';

// Thirparty
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-reactjs';
import { Controller, useForm } from 'react-hook-form';

// Utils
import { signInSchema, type SignInSchema } from '@/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInSchema) => {
    console.log('Form submitted:', data);
  };

  return (
    <main className='justify-between w-full h-screen mx-auto row bg-back'>
      <section
        className='relative flex-col justify-end hidden flex-col-6 lg:row'
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
              <dt className='font-semibold'>Jasmine Putri</dt>
              <dd>Business Owner</dd>
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
      <section className='flex items-center justify-center h-full lg:flex-col-6 flex-col-12'>
        <div className='bg-white px-6 py-6 flex flex-col justify-center h-11/12 lg:mx-8 mx-4 w-full rounded-[20px]'>
          <div className='flex items-center justify-center mb-14 lg:mb-6'>
            <img
              src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/logo-brand.svg'
              className='h-auto w-11'
            />
            <h1 className='text-2xl font-black font-mons'>BLUEE</h1>
          </div>

          <div className='hidden mb-8 space-y-1 lg:block'>
            <p className='text-xl font-bold text-center text-dark'>Hey🙌🏻, Welcome Back!</p>
            <p className='text-sm text-center text-secondary'>Login to your account to continue!</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-6 row'>
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
                        type='text'
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

              <div className='mb-10 lg:mb-4 flex-col-12'>
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

              <div className='items-center justify-between flex-col-12 row'>
                <div className='flex items-center'>
                  <Checkbox id='remember' name='remember' />
                  <Label htmlFor='remember' className='m-0 cursor-pointer ms-1'>
                    Remember Me
                  </Label>
                </div>
                <Link to='/' className='text-secondary'>
                  Reset Password
                </Link>
              </div>
            </div>
            <div>
              <Button type='submit' variant='primary' className='w-full py-4 mb-3 rounded-full'>
                Sign In
              </Button>
              <p className='text-center text-secondary'>
                Don't have an account?{' '}
                <Link to='/signup' className='underline text-primary hover:text-blue-500'>
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
