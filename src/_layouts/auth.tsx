import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-6 w-6" />
          <span className="font-semibold">Pizza.shop</span>
        </div>
        <footer className="text-sm">Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}</footer>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 p-10">
        <Outlet />
      </div>
    </div>
  )
}