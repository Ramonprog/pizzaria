import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form'
import { toast } from "sonner";
import { z } from 'zod'


const signInForm = z.object({
  email: z.string().email()
})

type SignInFormType = z.infer<typeof signInForm>

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInFormType>({
    resolver: zodResolver(signInForm)
  })

  async function handleSignIn(data: SignInFormType) {
    try {
      console.log("🚀 ~ handleSignIn ~ data:", data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => { handleSignIn(data) }
        }
      })
    } catch (error) {
      console.log("🚀 ~ handleSignIn ~ error:", error)
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <>
      <Helmet title="Sign In" />
      <div className="w-[350px] flex flex-col gap-10 justify-startjustify-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">Acessar painel</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
        </div>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label>Seu e-mail</Label>
            <Input id="email" type="email" placeholder="E-mail" {...register('email')} />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">Acessar painel</Button>
        </form>
      </div>
    </>
  )
}