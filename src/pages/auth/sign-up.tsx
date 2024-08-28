import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from 'zod'


const signUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string().min(3),
  manegerName: z.string().min(3),
  phone: z.string().min(10),
})

type SignUpFormType = z.infer<typeof signUpForm>

export function SignUp() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpForm)
  })

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpFormType) {
    try {
      console.log("🚀 ~ handleSignUp ~ data:", data)
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => { navigate('/sign-in') }
        }
      })
    } catch (error) {
      console.log("🚀 ~ handleSignUp ~ error:", error)
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <Button variant='secondary' asChild className="absolute top-8 right-8">
        <Link to={'/sign-in'} className="">Fazer login</Link>
      </Button>

      <div className="w-[350px] flex flex-col gap-10 justify-startjustify-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">Criar conta grátis</h1>
          <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
        </div>

        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div className="space-y-2">
            <Label>Nome do estabelecimento</Label>
            <Input id="restaurantName" type="text" placeholder="Nome do estabelecimento" {...register('restaurantName')} />
          </div>
          <div className="space-y-2">
            <Label>Seu nome</Label>
            <Input id="manegerName" type="text" placeholder="Nome do gestor" {...register('manegerName')} />
          </div>
          <div className="space-y-2">
            <Label>Seu e-mail</Label>
            <Input id="email" type="email" placeholder="E-mail" {...register('email')} />
          </div>
          <div className="space-y-2">
            <Label>Telefone</Label>
            <Input id="phone" type="tel" placeholder="Telefone" {...register('phone')} />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">Finalizar cadastro</Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">Ao continuar você concorda com nossos <Link to={'/terms'} className="text-muted-foreground hover:text-muted-foreground underline underline-offset-4">Termos de uso</Link> e <Link to={'/privacy'} className="text-muted-foreground hover:text-muted-foreground underline underline-offset-4">Política de privacidade</Link></p>
        </form>
      </div>
    </>
  )
}