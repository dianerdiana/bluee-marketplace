// Routing
import { Link, useNavigate } from "react-router-dom"

// Custom Components

// Thirparty
import { Controller, useForm } from "react-hook-form"

// Config
import { appConfig } from "@/configs/app.config"

// Utils
import { zodResolver } from "@hookform/resolvers/zod"
import type { SignInInput } from "../types/sign-in-input.type"
import { SignInSchema } from "../schemas/sign-in.schema"
import { Rating } from "@/components/rating"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { ChevronLeftCircle, ChevronRightCircle, KeyRound, Mail } from "lucide-react"

export default function SignInPage() {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data: SignInInput) => {
    console.log("Form submitted:", data, errors)
    navigate("/home")
  }

  return (
    <main className="justify-between w-full h-screen mx-auto flex">
      <section
        className="relative lg:flex flex-col justify-end hidden lg:w-1/2"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/dianerdiana/bluee-marketplace/images/auth-image-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Image Overlay  */}
        <div className="absolute bottom-0 z-0 w-full h-5/12 bg-image-overlay" />
        <div className="z-10 px-10 py-8">
          <Rating rating={5} />
          <p className="text-white text-[26px] leading-[160%] mb-[30px]">
            “Moving my business online truly made 🎯 growth and daily management much simpler, more
            efficient, and hassle-free.”
          </p>
          <div className="flex items-center justify-between">
            <dl className="text-white">
              <dt className="font-semibold">Jasmine Putri</dt>
              <dd>Business Owner</dd>
            </dl>
            <div className="flex items-center gap-x-1.5">
              <button className="text-white cursor-pointer">
                <ChevronLeftCircle size={36} />
              </button>
              <button className="text-white cursor-pointer">
                <ChevronRightCircle size={36} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center h-full w-full lg:w-1/2">
        <div className="bg-white px-6 py-6 flex flex-col justify-center h-11/12 lg:mx-8 mx-4 w-full rounded-2xl">
          <div className="flex items-center justify-center mb-14 lg:mb-6">
            <img src={appConfig.logoUrl} className="h-auto w-11" />
            <h1 className="text-2xl font-black font-mons text-dark">{appConfig.brandName}</h1>
          </div>

          <div className="mb-8 space-y-1 block">
            <p className="text-xl font-bold text-center text-dark">Hey🙌🏻, Welcome Back!</p>
            <p className="text-sm text-center text-muted-foreground">
              Login to your account to continue!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup className="gap-4">
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-2">
                    <FieldLabel htmlFor="email">Email Address</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon>
                        <Mail />
                        <span className="w-px h-5 bg-gray-300" />
                      </InputGroupAddon>
                      <InputGroupInput
                        aria-invalid={fieldState.invalid}
                        id="email"
                        placeholder="Enter Your Email"
                        {...field}
                      />
                    </InputGroup>

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="gap-2">
                    <FieldLabel htmlFor="Password">Password</FieldLabel>
                    <InputGroup>
                      <InputGroupAddon>
                        <KeyRound />
                        <span className="w-px h-5 bg-gray-300" />
                      </InputGroupAddon>
                      <InputGroupInput
                        aria-invalid={fieldState.invalid}
                        id="Password"
                        placeholder="Enter Your Password"
                        {...field}
                      />
                    </InputGroup>

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Field orientation="vertical">
                <Button type="submit" className="w-full rounded-full py-5">
                  Sign In
                </Button>
                <p className="text-muted-foreground text-center">
                  Don't have account?{" "}
                  <Link to={"/signup"} className="text-primary font-semibold underline">
                    Create Account
                  </Link>
                </p>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </section>
    </main>
  )
}
