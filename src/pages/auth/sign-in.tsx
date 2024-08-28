import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";

export function SignIn() {
  return (
    <>
      <Helmet title="Sign In" />
      <div className="w-[350px] flex flex-col gap-10 justify-startjustify-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tighter">Acessar painel</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label>Seu e-mail</Label>
            <Input id="email" type="email" placeholder="E-mail" />
          </div>

          <Button className="w-full" type="submit">Acessar painel</Button>
        </form>
      </div>
    </>
  )
}