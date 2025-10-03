import Rating from '@/components/Rating';
import { ArrowCircleLeft, ArrowCircleRight, Icon, Sms } from 'iconsax-reactjs';

const SignInPage = () => {
  return (
    <main className='flex flex-wrap justify-between w-full h-screen mx-auto bg-back'>
      <section
        className='relative w-6/12 flex flex-col justify-end'
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
          <div className='flex justify-between items-center'>
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
      <section className='w-6/12 h-full flex items-center justify-center'>
        <div className='bg-white px-6 py-6 flex flex-col justify-center h-11/12 mx-8 w-full rounded-[20px]'>
          <div className='flex items-center justify-center text-3xl mb-10'>
            <img
              src='https://ik.imagekit.io/dianerdiana/bluee-marketplace/logo/logo-brand.svg'
              className='w-11 h-auto'
            />
            <h1 className='font-mons font-black'>BLUEE</h1>
          </div>
          <div className='space-y-3 mb-8'>
            <p className='text-center font-bold text-2xl text-dark'>Hey🙌🏻, Welcome Back!</p>
            <p className='text-center text-secondary'>Login to your account to continue!</p>
          </div>

          <form className='w-full'>
            <div className='w-full'>
              <label htmlFor='email' className='block'>
                Email Address
              </label>
              <div className='flex items-center gap-3 p-[16px_12px] border border-blue-100 rounded-xl focus-within:border-blue-500 transition-all duration-300'>
                <div className='w-6 h-6 flex shrink-0'>
                  <Sms size={24} />
                  <Icon name='Sms' />
                </div>
                <input
                  type='email'
                  className='appearance-none outline-none w-full text-sm placeholder:text-blue-100border-blue-100 tracking-[0.35px]'
                  placeholder='Your email address'
                />
              </div>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input id='password' name='password' type='password' />
            </div>
            <div className='flex'>
              <input id='remember' name='remember' type='checkbox' />
              <a href='/'>Reset Password</a>
            </div>
            <button>Sign In</button>
            <p>
              Don't have an account? <a href='/register'>Create Account</a>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
